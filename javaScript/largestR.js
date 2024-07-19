function x() {
    const a = 1;
    for (let i = 1; i <= 5; i++) {
    //   console.log(i*1000);
    setTimeout(() => {
      console.log(i);
    }, i*1000);
  }
  
}
x();








