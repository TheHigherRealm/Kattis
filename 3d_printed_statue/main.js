const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.on('line', (line) => {
  console.log(printStatues(line));
});


function printStatues(count) {
  days = 0;
  statuesLeft = count;
  printers = 1;
  while (statuesLeft > 0) {
    if (printers >= statuesLeft/2) {
      statuesLeft -= printers
    } else {
      printers = printers*2;
    }
    days += 1;
  }
  return days
}
