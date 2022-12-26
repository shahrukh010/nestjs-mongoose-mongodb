import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { Product } from 'src/common/product-schema';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private product: ProductService) {}

  async saveProduct(@Body() product: Product) {
    this.product.saveProduct(product);
  }
  @Get()
  async findAllProduct(@Query() query) {
    (await this.product.findAll()).forEach((data) => console.log(data));
  }

  @Get(':id')
  async findById(@Param('id') id: any) {
    return this.product.findById(id);
  }
}
