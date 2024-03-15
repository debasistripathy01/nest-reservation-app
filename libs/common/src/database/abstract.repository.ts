import { FilterQuery, Model, Types, UpdateQuery } from 'mongoose';
import { AbstractDocument } from './abstract.schema';
import { Logger, NotFoundException } from '@nestjs/common';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected readonly logger: Logger;

  constructor(protected readonly model: Model<TDocument>) {
    this.logger = new Logger(AbstractRepository.name);
  }

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    return await createdDocument.save();
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.findOne(filterQuery).lean(true);
    if (!document) {
      throw new NotFoundException('Document was not found');
    } else {
      this.logger.warn('Document was found');
    }
    // return document;
    return;
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ): Promise<TDocument> {
    const document = await this.model
      .findOneAndUpdate(filterQuery, update, {
        new: true,
      })
      .lean<TDocument>(true);
    if (document) {
      this.logger.log('Document was updated');
    } else {
      throw new NotFoundException('Document was not found');
    }
    return document;
  }

  // async find(filterQuery: FilterQuery<TDocument>):Promise(<TDocument[]>){
  //   return this.model.find(filterQuery).lean<Document[]>(true);
  // }
  // async findOneAndDelete(filterQuery: FilterQuery<TDocument>): Promise(<TDocument>){
  //     return this.model.findOneAndDelete(filterQuery).lean<TDocument>(true)
  // }
}
