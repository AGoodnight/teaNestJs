import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Black } from '../entities/black.entity';
import { BlackController } from './black.controller';
import { BlackService } from './black.service';

@Module({
  imports:[TypeOrmModule.forFeature([Black])],
  controllers:[BlackController],
  providers:[BlackService]
})
export class BlackTeaModule{};
