import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'administrators'})
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;
}
