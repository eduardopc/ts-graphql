import { Field, InputType } from 'type-graphql';

@InputType()
export class AnimalInput {
  @Field()
  animal: string; 

  @Field()
  emoji: string; 
} 