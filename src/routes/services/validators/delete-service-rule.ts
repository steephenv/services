import * as Joi from 'joi';
import { RequestHandler } from 'express';
import {
  RequestError,
  RequestErrorType,
} from '../../../error-handler/RequestError';
// tslint:disable:variable-name
const deleteServiceSchema = Joi.object().keys({
  serviceId: Joi.string().required(),
});

export const deleteServiceRules: RequestHandler = (req, res, next) => {
  Joi.validate(req.body, deleteServiceSchema, (err: any) => {
    if (err) {
      return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
    }
    next();
  });
};
