import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'products'})
class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  restaurantId: number;
}

export default ProductEntity;
