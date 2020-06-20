import * as Joi from 'joi';
import { RequestHandler } from 'express';
import {
  RequestError,
  RequestErrorType,
} from '../../../error-handler/RequestError';
// tslint:disable:variable-name
const statusBookingSchema = Joi.object().keys({
  limit: Joi.number().required(),
  skip: Joi.number().required(),
  serviceId: Joi.string().required(),
  userId: Joi.string().required(),
  status: Joi.string().required(),
});

export const listBookingByStatusRules: RequestHandler = (req, res, next) => {
  Joi.validate(req.body, statusBookingSchema, (err: any) => {
    if (err) {
      return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
    }
    next();
  });
};
