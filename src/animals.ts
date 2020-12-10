let animals = [
  {
    id: 0,
    animal: 'dog',
    emoji: '🐶'
  },
  {
    id: 1,
    animal: 'cat',
    emoji: '🐱'
  },
  {
    id: 2,
    animal: 'pig',
    emoji: '🐷'
  },
  {
    id: 3,
    animal: 'cow',
    emoji: '🐮'
  },
  { 
    id: 4,
    animal: 'chicken',
    emoji: '🐔'
  }]; 
  
  export const typeDefs = `
    type Animal {
      id: ID
      animal: String
      emoji: String
    }
    type Query {
      whatsAnimal: Animal
      allAnimals: [Animal]
    }
    type Mutation {
      createAnimal(animal: String, emoji: String): Animal
      deleteAnimal(id: ID): Animal
    }
  `;
  
  export const resolvers = {
    Query: {
      whatsAnimal: () => {
        const idx = Math.floor(Math.random() * animals.length);
        return animals[idx];
      },

      allAnimals: () => {
        return animals;
      },
    },
    Mutation: {
      createAnimal: (_: any, { animal, emoji }: any) => {
        let count = animals.length;
        const newAnimal = {
          id: count++,
          animal,
          emoji
        }
        animals = [...animals, newAnimal];
        return newAnimal;
      },

      deleteAnimal: (_: any, { id }: any) => {
        const animalToDelete = animals.find(x => x.id.toString() === id);
  
        if (animalToDelete !== undefined) {
          animals = animals.filter(animal => {
            return animal.id !== animalToDelete.id;
          });
        }
  
        return animalToDelete;
      }
    },
  };