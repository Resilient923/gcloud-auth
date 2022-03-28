import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirestoreModule } from './firestore/firestore.module';
import { HealthCheckModule } from './healthcheck/healthcheck.module';
import { ApiSiteModule } from './api-sites/api-sites.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FirestoreModule.forRoot({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        //keyFilename: configService.get<string>('SA_KEY') -> .json 파일 들어와야한다.
        keyFilename: configService.get<string>('KEY_FILE_NAME'),
        projectId: configService.get<string>('PROJECT_ID'),
      }),
      inject: [ConfigService],
    }),
    HealthCheckModule, 
    ApiSiteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
