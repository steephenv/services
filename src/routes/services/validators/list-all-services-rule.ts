import * as Joi from 'joi';
import { RequestHandler } from 'express';
import {
  RequestError,
  RequestErrorType,
} from '../../../error-handler/RequestError';
// tslint:disable:variable-name
const listServiceSchema = Joi.object().keys({
  limit: Joi.number().required(),
  skip: Joi.number().required(),
});

export const listServiceRules: RequestHandler = (req, res, next) => {
  Joi.validate(req.body, listServiceSchema, (err: any) => {
    if (err) {
      return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
    }
    next();
  });
};
