import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('keys')
export class KeyEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Expose()
  @Column({ type: 'varchar' })
  code: string;

  @Expose({ name: 'created_at' })
  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(0)',
  })
  createdAt: Date;
}
