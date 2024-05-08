import { APIResponse, expect } from '@playwright/test';
import Ajv from 'ajv';
import { log } from 'utils/logger';

export async function responseJsonSchema(
  response: APIResponse,
  jsonSchema: object
) {
  const ajv = new Ajv();
  const validate = ajv.compile(jsonSchema);
  const isValid = validate(JSON.parse(await response.text()));
  if (isValid) {
    log.info('Response json schema is valid!');
  } else {
    log.info(
      `Response json schema is wrong: ${ajv.errorsText(validate.errors)}`
    );
    throw new Error(ajv.errorsText(validate.errors));
  }
}

export async function message(response: APIResponse, message: string) {
  expect((await response.json()).message).toEqual(message);
}

export async function statusCode(response: APIResponse, statusCode: number) {
  expect(response.status()).toEqual(statusCode);
}
