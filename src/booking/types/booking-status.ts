export enum BookingStatus {
  'unrevised' = 'unrevised',
  'review' = 'review',
  'approved' = 'approved',
  'rejected' = 'rejected',
}

export const statusOrder = [
  BookingStatus.unrevised,
  BookingStatus.review,
  BookingStatus.approved,
  BookingStatus.rejected,
];
