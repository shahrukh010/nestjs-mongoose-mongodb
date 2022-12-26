import { Document, Model } from 'mongoose';

export abstract class MongooseRepository<T extends Document> {
  constructor(protected readonly schemaModel: Model<T>) {}

  async save(entity: T) {
    return entity.save();
  }

  async findAll() {
    return this.schemaModel.find();
  }

  async findById(entity: T) {
    return this.schemaModel.findById(entity);
  }

  async deleteById(id: any) {
    return this.schemaModel.findByIdAndDelete(id);
  }
}
