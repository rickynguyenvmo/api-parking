import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { urlencoded } from 'express';
import * as fs from 'fs';
import helmet from 'helmet';
import { EnvMapping } from './common/constant/constant';
import { AppModule } from './modules/app/app.module';
import { CarparkService } from './modules/carparks/carparks.service';

function writeSwaggerJson(path: string, document: OpenAPIObject) {
  const swaggerJson = `${path}/swagger.json`;
  fs.writeFileSync(swaggerJson, JSON.stringify(document, null, 2), {
    encoding: 'utf8',
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(urlencoded({ extended: true }));
  app.use(helmet());
  app.enableCors({ origin: '*', allowedHeaders: '*' });
  app.setGlobalPrefix('/api/carpark');

  // Setup OpenAPI
  const options = new DocumentBuilder()
    .setTitle('Carpark API')
    .setDescription('API specification for Carpark Service | [swagger.json](swagger.json)')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  writeSwaggerJson(`${process.cwd()}`, document);
  app.getHttpAdapter().get('/docs/swagger.json', (_req, res) => {
    res.json(document);
  });
  SwaggerModule.setup('/docs/carpark', app, document, {
    swaggerOptions: {
      displayRequestDuration: true,
    },
  });

  // Run init database
  const carparkService = app.get(CarparkService);
  await carparkService.initDatabase();

  const configService = app.get(ConfigService);
  await app.listen(configService.get(EnvMapping.PORT));
}
bootstrap();
