import { faker } from '@faker-js/faker';
// import { createGenerator } from 'ts-json-schema-generator';
// import * as path from 'path';

export async function createRandomGist(
  description: any = faker.commerce.productDescription()
) {
  return {
    description: description,
    public: true,
    files: {
      'README.md': {
        content: faker.lorem.paragraph(),
      },
    },
  };
}

// export function jsonSchema(projectFileName: string, typeName: string) {
//   const generator = createGenerator({
//     path: path.join(__dirname, `api/models/${projectFileName}`),
//     type: typeName,
//   });
//
//   return generator.createSchema(typeName);
// }
