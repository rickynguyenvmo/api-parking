import { Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/common/config/configuration.module';
import { DatabaseModule } from 'src/common/database/database.module';
import { PipeModule } from 'src/common/pipe/pipe.module';
import { AuthModule } from '../auth/auth.module';
import { CarparkModule } from '../carparks/carparks.module';
import { FavoriteListModule } from '../favorite-list/favorite-list.module';
import { ScheduleTaskModule } from '../schedule-task/schedule-task.module';
import { UserModule } from '../user/user.module';
import { InterceptorModule } from 'src/common/interceptor/interceptor.module';
import { GuardModule } from 'src/common/guard/guard.module';
@Module({
  imports: [
    ConfigurationModule,
    GuardModule,
    InterceptorModule,
    PipeModule,
    DatabaseModule,
    AuthModule,
    CarparkModule,
    UserModule,
    FavoriteListModule,
    ScheduleTaskModule,
  ],
})
export class AppModule {}
