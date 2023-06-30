const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString();
const year = parseInt(input);

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else {
    console.log(1);
  }
} else {
  console.log(0);
}
