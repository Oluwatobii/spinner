const array = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

let delay = 0;
for (let line of array) {
  setTimeout(() => {
    process.stdout.write(`\r${line}`);
  }, delay);
  delay += 200;
}
setTimeout(() => {
  process.stdout.write("\n");
}, delay);
