import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Black } from '../entities/black.entity';

@Injectable()
export class BlackService {
  constructor(
    @InjectRepository(Black)
    private readonly repo:Repository<Black>
  ){}

  findAll(): Promise<Black[]>{
    return this.repo.find();
  }
}
