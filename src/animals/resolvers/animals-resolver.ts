import { Resolver, Arg, Query, Mutation } from "type-graphql";

import { Animal } from "../entities/animals";
import { AnimalInput } from "../types/animals";
import { AnimalService } from "../service";

@Resolver()
export class AnimalResolver {
  private readonly service: AnimalService;

  constructor() {
    this.service = new AnimalService();
  }

  @Query(() => [Animal], { nullable: false })
  async allAnimals() {
    const animals = await this.service.find();

    return animals;
  };

  @Query(() => Animal, { nullable: false })
  async whatsAnimal() {
    const animal = await this.service.findAllAnimalsAndPickOne();

    return animal;
  };

  @Mutation(() => Animal)
  async createAnimal(@Arg("data")
  { 
    animal, 
    emoji 
  }: AnimalInput): Promise<Animal> { 
    const newAnimal = await this.service.create({ animal, emoji });

    return newAnimal;
  };

  @Mutation(() => Boolean)
  async deleteAnimal(@Arg("id") id: string) {
    await this.service.removeById(id)
    return true;
  }
}