//https://github.com/typeorm/typeorm/blob/master/docs/many-to-one-one-to-many-relations.md
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { Origin } from './origin.entity';

@Entity()
export class Black{

  @PrimaryGeneratedColumn()
  id:number;

  @Column('varchar',{nullable:false})
  tea_name:string;

  @Column('timestamp without time zone',{nullable:false})
  created:string;

  @OneToOne(type => Origin)
  @JoinColumn()
  origin_id:number;

  @Column('varchar')
  flavors:string;
  
}
