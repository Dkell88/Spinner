let numOfRotations = 1;
if (process.argv[2]) {
  numOfRotations = process.argv[2];
}
let spinnerChars = ['\r|   ','\r/   ','\r-   ', '\r\\   ', '\r|   ', '\r/   ','\r-   ','\r\\  ' ];

const spinner = function(i) {
  setTimeout(() => {
    process.stdout.write(spinnerChars[i % 7]);
  }, (i * 200 + 100));
};

for (let i = 0; i < 8 * numOfRotations; i ++) {
  spinner(i);
}