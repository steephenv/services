import * as Joi from 'joi';
import { RequestHandler } from 'express';
import {
  RequestError,
  RequestErrorType,
} from '../../../error-handler/RequestError';
// tslint:disable:variable-name
const createBookingSchema = Joi.object().keys({
  bookingDate: Joi.date().required(),
  userId: Joi.string().required(),
  serviceId: Joi.string().required(),
  // status: Joi.string().optional(),
});

export const createBookingRules: RequestHandler = (req, res, next) => {
  Joi.validate(req.body, createBookingSchema, (err: any) => {
    if (err) {
      return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
    }
    next();
  });
};
