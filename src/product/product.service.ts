import { Body, Get, Injectable, Post } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductRepository } from 'src/common/mongoose-repo/product-repo';
import { Product } from 'src/common/product-schema';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  //   constructor(@InjectModel(Product.name) private products: Model<Product>) {}

  constructor(private readonly product: ProductRepository) {}

  async saveProduct(post: Product) {
    this.product.save(post);
  }

  async findAll(): Promise<Product[]> {
    return await this.product.findAll();
  }

  async findById(id: any) {
    return this.product.findById(id);
  }

  async deleteById(id: any) {
    this.product.deleteById(id);
  }
}
