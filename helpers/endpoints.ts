import * as process from 'process';

export class GitHub {
  static readonly BASE_URL = process.env.API_URL;

  static Gists = class {
    public static get Base() {
      return `${GitHub.BASE_URL}/gists`;
    }
  };
}
