import * as Joi from 'joi';
import { RequestHandler } from 'express';
import {
  RequestError,
  RequestErrorType,
} from '../../../error-handler/RequestError';
// tslint:disable:variable-name
const createServiceSchema = Joi.object().keys({
  serviceName: Joi.string().required(),
  serviceType: Joi.string().required(),
  description: Joi.string().required(),
  amount: Joi.number().required(),
});

export const createServiceRules: RequestHandler = (req, res, next) => {
  Joi.validate(req.body, createServiceSchema, (err: any) => {
    if (err) {
      return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
    }
    next();
  });
};
