import type { APIRequestContext } from '@playwright/test';
import * as process from 'process';
import * as BaseApi from '../base.api';
import * as Endpoint from 'helpers/endpoints';

export function gists(request: APIRequestContext) {
  const getById = async (gistId: string) => {
    return BaseApi.getData(request, `${Endpoint.GitHub.Gists.Base}/${gistId}`, {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    });
  };

  const postCreate = async (payload: object) => {
    return BaseApi.postData(
      request,
      Endpoint.GitHub.Gists.Base,
      payload,
      {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
      true
    );
  };

  return {
    getById,
    postCreate,
  };
}
