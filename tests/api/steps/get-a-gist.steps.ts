import { createBdd } from 'playwright-bdd';
import { gists } from 'api/call-github-gists/gists.api';

const { Given, When } = createBdd();

Given(
  'I perform get request for gists endpoint with invalid gist id value',
  async ({ request }) => {
    globalThis.response = await gists(request).getById('qw3rt7');
  }
);

When('I perform get request for gists endpoint', async ({ request }) => {
  globalThis.response = await gists(request).getById(globalThis.id);
});
