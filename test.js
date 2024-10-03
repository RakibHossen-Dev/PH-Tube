// const isVarified = "";
// // if (isVarified === true) {
// //   console.log("User is varified");
// // } else {
// //   console.log("User is not varified");
// // }

// console.log(
//   `${isVarified === true ? "User is varified" : "User is not varified"}`
// );

function getTimeString(time) {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  let minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hours ${minute} minute ${remainingSecond} second ago `;
}
console.log(getTimeString(7545885));
