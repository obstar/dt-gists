import { createBdd } from 'playwright-bdd';
import { returnHttpStatus } from 'utils/parse';
import * as Assert from 'helpers/assert';

const { Then } = createBdd();

Then(`the response message is {string}`, async ({}, message: string) => {
  await Assert.message(globalThis.response, message);
});

Then(`the response status code is {string}`, async ({}, httpStatus: string) => {
  await Assert.statusCode(globalThis.response, returnHttpStatus(httpStatus));
});
