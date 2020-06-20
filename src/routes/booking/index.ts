import * as express from 'express';
import { isLoggedIn } from '../utils/isLoggedIn';

import { createBookingRules } from './validators/create-booking-rule';
import { getBookingRules } from './validators/get-booking-rule';
import { updateBookingRules } from './validators/update-booking-rule';
import { deleteBookingRules } from './validators/delete-booking-rule';
import { listBookingRules } from './validators/list-all-booking-rule';
import { listBookingByStatusRules } from './validators/get-by-status-rule';

import { createBooking } from './create-booking';
import { getBooking } from './get-booking';
import { updateBooking } from './update-booking';
import { deleteBooking } from './delete-booking';
import { listBooking } from './list-all-booking';
import { listBookingByStatus } from './get-by-status';

export const booking = express.Router();

booking.post('/create-booking', createBookingRules, createBooking);
booking.post('/get-booking', getBookingRules, getBooking);
booking.post('/list-booking', listBookingRules, listBooking);
booking.post(
  '/list-booking-status',
  listBookingByStatusRules,
  listBookingByStatus,
);
booking.post('/update-booking', updateBookingRules, updateBooking);
booking.post('/delete-booking', deleteBookingRules, deleteBooking);
