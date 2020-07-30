import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  title: string;

  @Column("varchar")
  type: string;

  @Column("varchar")
  description: string;

  @Column("varchar")
  filename: string;

  @Column("integer")
  height: number;

  @Column("integer")
  width: number;

  @Column("double")
  price: number;

  @Column("integer")
  rating: number;
}
