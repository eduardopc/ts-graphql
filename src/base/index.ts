import { DocumentType, ReturnModelType } from "@typegoose/typegoose";
import { DocumentQuery, CreateQuery, Types } from 'mongoose';
import { AnyParamConstructor } from '@typegoose/typegoose/lib/types';

type QueryList<T> = DocumentQuery<
  Array<DocumentType<T>>,
  DocumentType<T>
>;

type QueryItem<T> = DocumentQuery<
  DocumentType<T>,
  DocumentType<T>
>;

export class BaseService<T> {
  protected model: ReturnModelType<AnyParamConstructor<T>>;

  protected toObjectId(id: string): Types.ObjectId {
    try {
      return Types.ObjectId(id);
    } catch (err) {
      console.log(err);
    } 
  }

  async find(filter = {}): Promise<QueryList<T>> {
    return this.model.find(filter);
  }

  async findOneById(filter = {}): Promise<QueryItem<T>> {
    return this.model.findOne(filter);
  }

  async create(item: CreateQuery<T>): Promise<DocumentType<T>> {
    return this.model.create(item);
  }

  async removeById(id: string): Promise<QueryItem<T>> {
    return this.model.findByIdAndDelete(this.toObjectId(id));   
  } 
}