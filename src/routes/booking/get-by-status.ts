import { RequestHandler } from 'express';
import { Promise as BluePromise } from 'bluebird';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { Booking } from '../../models/Booking';

export const listBookingByStatus: RequestHandler = async (req, res, next) => {
  try {
    const resultP: any = Booking.find({
      userId: req.body.userId,
      serviceId: req.body.serviceId,
      status: req.body.status,
    })
      .populate('userId')
      .populate('serviceId')
      .limit(req.body.limit)
      .skip(req.body.skip)
      .exec();
    const totalCountP: any = Booking.count({
      userId: req.body.userId,
      serviceId: req.body.serviceId,
    }).exec();
    const [result, totalCount]: any = await BluePromise.all([
      resultP,
      totalCountP,
    ]);
    return res.status(200).send({
      success: true,
      count: totalCount,
      result,
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
  }
};
