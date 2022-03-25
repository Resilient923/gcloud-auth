import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

const {
  combine,
  errors,
  json: jsonFormat,
  timestamp,
  ms,
  prettyPrint,
  colorize,
} = winston.format;


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    // winston logging 프로그램
    logger: WinstonModule.createLogger({
      level:'debug',
      format: combine(
        errors({stack:true}),
        jsonFormat(),
        timestamp({format:'isoDateTime'}),
        ms(),
        prettyPrint(),
        colorize(),
      ),
      transports: [new winston.transports.Console()],
    })
  });

  const config = new DocumentBuilder()
  .setTitle('mathpresso-auth-steady')
  .setDescription('mathpresso-auth-steady API description')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  // app.use(jsonFormat());
  // app.enableCors();

  await app.listen(3000);
}
bootstrap();
