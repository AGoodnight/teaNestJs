//https://github.com/typeorm/typeorm/blob/master/docs/many-to-one-one-to-many-relations.md
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Black } from './black.entity';

@Entity()
export class Origin{

  @Column('varchar')
  country:string;

  @PrimaryColumn('integer')
  id:number;

}
