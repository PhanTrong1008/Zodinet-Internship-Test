// function s(a, b) {
//   var x = 0;
//   for (var i = a; i <= b; i++) {
//     x = x + i;
//   }
//   return x;
// }

// function calc(a, b, c) {
//   const res = s(a, b);
//   if (c == true) {
//     res = res * 2;
//   }
//   return res;
// }

// Optimize code following the clean code principles
function sum(start, end) {
  let result = 0;

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
}

function calc(start, end, isDouble) {
  let result = sum(start, end);

  if (isDouble === true) {
    result *= 2;
  }

  return result;
}
