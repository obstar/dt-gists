import { createBdd } from 'playwright-bdd';
import { gists } from 'api/call-github-gists/gists.api';
import { createRandomGist } from 'utils/generate';
import * as Assert from 'helpers/assert';
import { HttpStatusCode } from 'helpers/http-status-codes';

const { Given, When, Then } = createBdd();
let payload: object;

Given('I create a gist', async ({ request }) => {
  payload = await createRandomGist();
  globalThis.response = await gists(request).postCreate(payload);
  await Assert.statusCode(globalThis.response, HttpStatusCode.Created);
  globalThis.id = (await globalThis.response.json()).id;
});

Given('payload is prepared for post gists request', async () => {
  payload = await createRandomGist();
});

Given(
  'payload is with invalid description value for post gists request',
  async () => {
    payload = await createRandomGist(1);
  }
);

When('I perform post request for gists endpoint', async ({ request }) => {
  globalThis.response = await gists(request).postCreate(payload);
});

// Then('the gists post response body is correct', async () => {
//   await Assert.responseJsonSchema(
//     response,
//     Generate.jsonSchema('gists.responses.ts', 'PostGistResponse')
//   );
// });
