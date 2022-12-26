import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { Product } from '../product-schema';
import { MongooseRepository } from './mongoose-repository';

@Injectable()
export class ProductRepository extends MongooseRepository<Product> {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {
    super(productModel);
  }
}
