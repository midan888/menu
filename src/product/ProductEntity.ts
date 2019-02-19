import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'products'})
class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  restaurantId: number;

  @Column({
    default: 0
  })
  price: number;

  @Column({
    default: ''
  })
  description: string;

  @Column({
    default: ''
  })
  weight: string;

  @Column({
    default: ''
  })
  calories: string;

  @Column({
    default: ''
  })
  image: string;
}

export default ProductEntity;
