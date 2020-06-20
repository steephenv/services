import { RequestHandler } from 'express';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { Service } from '../../models/Service';

export const deleteService: RequestHandler = async (req, res, next) => {
  try {
    await Service.findOneAndDelete({ _id: req.body.serviceId }).exec();
    return res.status(200).send({
      success: true,
      message: 'service successfully deleted',
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
  }
};
