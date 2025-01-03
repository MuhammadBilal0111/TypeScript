// when you want to restrict the user to select some choices
enum SeatChoice {
  AISLE=5, // by default the value of the enum  starts from 0
  MIDDLE,
  WINDOW,
  FOURTH
}
// enum SeatChoice {
//   AISLE=10, // by default the value of the enum  starts from 0
//   MIDDLE=11,
//   WINDOW=12,
//   FOURTH=14
// }
// enum SeatChoice {
//   AISLE="aisle", // by default the value of the enum  starts from 0
//   MIDDLE="middle",
//   WINDOW="window",
//   FOURTH="forth"
// }
// const enum SeatChoice {
//   AISLE="aisle", // by default the value of the enum  starts from 0
//   MIDDLE=4,
//   WINDOW,
//   FOURTH
// }
// const hcSeat=SeatChoice.AISLE;
// console.log(hcSeat);
const hcSeat=SeatChoice.AISLE;