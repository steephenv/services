import * as Joi from 'joi';
import { RequestHandler } from 'express';
import {
  RequestError,
  RequestErrorType,
} from '../../../error-handler/RequestError';
// tslint:disable:variable-name
const updateBookingSchema = Joi.object().keys({
  bookingId: Joi.string().required(),
  serviceId: Joi.string().optional(),
  userId: Joi.string().optional(),
  bookingDate: Joi.date().optional(),
  status: Joi.string().optional(),
});

export const updateBookingRules: RequestHandler = (req, res, next) => {
  Joi.validate(req.body, updateBookingSchema, (err: any) => {
    if (err) {
      return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
    }
    next();
  });
};
