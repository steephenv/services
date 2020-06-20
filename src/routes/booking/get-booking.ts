import { RequestHandler } from 'express';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { Booking } from '../../models/Booking';

export const getBooking: RequestHandler = async (req, res, next) => {
  try {
    const result: any = await Booking.findOne({
      _id: req.body.bookingId,
    })
      .populate('userId')
      .populate('serviceId')
      .exec();
    return res.status(200).send({
      success: true,
      result,
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
  }
};
