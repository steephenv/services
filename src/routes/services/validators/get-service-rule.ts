import * as Joi from 'joi';
import { RequestHandler } from 'express';
import {
  RequestError,
  RequestErrorType,
} from '../../../error-handler/RequestError';
// tslint:disable:variable-name
const getServiceSchema = Joi.object().keys({
  serviceId: Joi.string().required(),
});

export const getServiceRules: RequestHandler = (req, res, next) => {
  Joi.validate(req.body, getServiceSchema, (err: any) => {
    if (err) {
      return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
    }
    next();
  });
};
