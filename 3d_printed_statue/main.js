const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question('Number of statues > ', (answer) => {
  console.log(printStatues(answer);
  r.close();
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
