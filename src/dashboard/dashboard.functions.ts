import { BookingStatus, statusOrder } from 'src/booking/types/booking-status';

export function validateStatusChange(
  currentStatus: BookingStatus,
  newStatus: BookingStatus,
): boolean {
  const currentIndex = statusOrder.indexOf(currentStatus);
  const newIndex = statusOrder.indexOf(newStatus);

  if (newIndex <= currentIndex) return false;

  return true;
}
