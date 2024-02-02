"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const fs = require("fs");
const helmet_1 = require("helmet");
const constant_1 = require("./common/constant/constant");
const app_module_1 = require("./modules/app/app.module");
const carparks_service_1 = require("./modules/carparks/carparks.service");
function writeSwaggerJson(path, document) {
    const swaggerJson = `${path}/swagger.json`;
    fs.writeFileSync(swaggerJson, JSON.stringify(document, null, 2), {
        encoding: 'utf8',
    });
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.use((0, express_1.urlencoded)({ extended: true }));
    app.use((0, helmet_1.default)());
    app.enableCors({ origin: '*', allowedHeaders: '*' });
    app.setGlobalPrefix('/api/carpark');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Carpark API')
        .setDescription('API specification for Carpark Service | [swagger.json](swagger.json)')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    writeSwaggerJson(`${process.cwd()}`, document);
    app.getHttpAdapter().get('/docs/swagger.json', (_req, res) => {
        res.json(document);
    });
    swagger_1.SwaggerModule.setup('/docs/carpark', app, document, {
        swaggerOptions: {
            displayRequestDuration: true,
        },
    });
    const carparkService = app.get(carparks_service_1.CarparkService);
    await carparkService.initDatabase();
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.get(constant_1.EnvMapping.PORT));
}
bootstrap();
//# sourceMappingURL=main.js.map