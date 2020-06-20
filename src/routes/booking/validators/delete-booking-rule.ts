import * as Joi from 'joi';
import { RequestHandler } from 'express';
import {
  RequestError,
  RequestErrorType,
} from '../../../error-handler/RequestError';
// tslint:disable:variable-name
const deleteBookingSchema = Joi.object().keys({
  bookingId: Joi.string().required(),
});

export const deleteBookingRules: RequestHandler = (req, res, next) => {
  Joi.validate(req.body, deleteBookingSchema, (err: any) => {
    if (err) {
      return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
    }
    next();
  });
};
