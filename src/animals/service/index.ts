import { BaseService } from "../../base";
import { Animal, AnimalModel } from "../entities/animals";

export class AnimalService extends BaseService<Animal> {
  constructor() {
    super();
    this.model = AnimalModel;
  }

  async findAllAnimalsAndPickOne() {
    const animals = await this.model.find({});
    const idx = Math.floor(Math.random() * animals.length);

    return animals[idx];
  }
}