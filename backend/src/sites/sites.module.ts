import { Module } from '@nestjs/common';
import { ApiSiteController } from './sites.controller';
import { ApiSiteService } from './sites.service';
@Module({
  imports: [],
  controllers: [ApiSiteController],
  providers: [ApiSiteService],
})
export class ApiSiteModule {}
