import { Controller, Get } from '@nestjs/common';
import { BlackService } from './black.service';

@Controller('black')
export class BlackController {
  constructor(
    private readonly service:BlackService
  ){}

  @Get()
  findAll(): Promise<any[]> {
    return this.service.findAll()
  }
}
