import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheckService } from './healthcheck.service';

@Controller('healthcheck')
@ApiTags('healthcheck')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  getHello(): string {
    return this.healthCheckService.getHealth();
  }
}
