import { RequestHandler } from 'express';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { Service } from '../../models/Service';

export const createService: RequestHandler = async (req, res, next) => {
  try {
    req.body.createdAt = new Date();
    const exists: any = await Service.countDocuments({
      serviceName: req.body.serviceName,
    }).exec();
    if (exists) {
      return res.status(400).send({
        success: false,
        message: 'service with given serviceName already exists',
      });
    }
    const newService = new Service(req.body);
    const result: any = await newService.save();
    return res.status(200).send({
      success: true,
      result,
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
  }
};
