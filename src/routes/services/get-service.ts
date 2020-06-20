import { RequestHandler } from 'express';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { Service } from '../../models/Service';

export const getService: RequestHandler = async (req, res, next) => {
  try {
    const result: any = await Service.findOne({
      _id: req.body.serviceId,
    }).exec();
    return res.status(200).send({
      success: true,
      result,
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
  }
};
