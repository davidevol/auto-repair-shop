import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class PartResponseEntity {
  @PrimaryColumn()
  partId!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  qtd!: number;

  @Column()
  unitPrice!: number;
}
