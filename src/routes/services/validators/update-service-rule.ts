import * as Joi from 'joi';
import { RequestHandler } from 'express';
import {
  RequestError,
  RequestErrorType,
} from '../../../error-handler/RequestError';
// tslint:disable:variable-name
const updateServiceSchema = Joi.object().keys({
  serviceId: Joi.string().required(),
  userId: Joi.string().optional(),
  serviceName: Joi.string().optional(),
  serviceType: Joi.string().optional(),
  description: Joi.string().optional(),
  amount: Joi.number().optional(),
});

export const updateServiceRules: RequestHandler = (req, res, next) => {
  Joi.validate(req.body, updateServiceSchema, (err: any) => {
    if (err) {
      return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
    }
    next();
  });
};
