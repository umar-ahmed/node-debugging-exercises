// Implementation A
let i;
for (i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}

// Implementation B
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}
