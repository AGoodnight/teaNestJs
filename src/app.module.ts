import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlackTeaModule } from  './black/black.module';

@Module({
  imports: [TypeOrmModule.forRoot(),BlackTeaModule]
})
export class AppModule {
  constructor(
    private readonly connection: Connection
  ){}
}
