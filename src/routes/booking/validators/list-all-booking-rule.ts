import * as Joi from 'joi';
import { RequestHandler } from 'express';
import {
  RequestError,
  RequestErrorType,
} from '../../../error-handler/RequestError';
// tslint:disable:variable-name
const listBookingSchema = Joi.object().keys({
  limit: Joi.number().required(),
  skip: Joi.number().required(),
  serviceId: Joi.string().required(),
  userId: Joi.string().required(),
});

export const listBookingRules: RequestHandler = (req, res, next) => {
  Joi.validate(req.body, listBookingSchema, (err: any) => {
    if (err) {
      return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
    }
    next();
  });
};
