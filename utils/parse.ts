import { HttpStatusCode } from 'helpers/http-status-codes';

export const returnBooleanForHeadless = (value: string) => {
  switch (value) {
    case 'false': {
      return false;
    }
    case 'true':
    default: {
      return true;
    }
  }
};

export const returnHttpStatus = (value: string) => {
  switch (value) {
    case 'Created': {
      return HttpStatusCode.Created;
    }
    case 'Not Found': {
      return HttpStatusCode.NotFound;
    }
    case 'Unprocessable Entity': {
      return HttpStatusCode.UnprocessableEntity;
    }
    case 'OK':
    default: {
      return HttpStatusCode.Ok;
    }
  }
};
