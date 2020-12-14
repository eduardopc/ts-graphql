import { Field, ObjectType, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: "The Animal Model" })
export class Animal {
  @Field(() => ID)
  readonly id: string;

  @Field()
  @Property({ required: true })
  animal: string;

  @Field()
  @Property({ required: true })
  emoji: string
}

export const AnimalModel = getModelForClass(Animal);
