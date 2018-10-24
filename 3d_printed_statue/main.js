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

console.log(printStatues(5)); //OUTPUT: 4
