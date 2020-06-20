import { RequestHandler } from 'express';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { Service } from '../../models/Service';

export const updateServices: RequestHandler = async (req, res, next) => {
  try {
    req.body.updatedAt = new Date();
    if (req.body.serviceName) {
      const exists: any = await Service.countDocuments({
        serviceName: req.body.serviceName,
      }).exec();
      if (exists) {
        return res.status(400).send({
          success: false,
          message: 'service with given serviceName already exists',
        });
      }
    }
    await Service.findOneAndUpdate(
      { _id: req.body.serviceId },
      req.body,
    ).exec();
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
