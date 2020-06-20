import { RequestHandler } from 'express';

import {
  RequestError,
  RequestErrorType,
} from '../../error-handler/RequestError';

import { Booking } from '../../models/Booking';

export const deleteBooking: RequestHandler = async (req, res, next) => {
  try {
    await Booking.findOneAndDelete({ _id: req.body.bookingId }).exec();
    return res.status(200).send({
      success: true,
      message: 'Booking successfully deleted',
    });
  } catch (err) {
    return next(new RequestError(RequestErrorType.BAD_REQUEST, err));
  }
};
