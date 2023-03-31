import { Entity, Column } from 'typeorm';

@Entity()
export class PartResponseEntity {
  @Column()
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
