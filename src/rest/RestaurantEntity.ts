import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'restaurants'})
class RestaurantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;
}

export default RestaurantEntity;
