function fib_r(n) {
    if (n < 2) {
      return n;
    }
   
    return fib_r(n - 1) + fib_r(n - 2);
  }
console.log("Fibonacci with recursion:" + fib_r(4));


  function fib_i(n) {
    if (n < 2) {
      return n;
    }
   
    var n0 = 0;
    var n1 = 1;
    var ans = 0;
   
    for (var i = 2; i <= n; i++) {
      ans = n0 + n1;
      n0 = n1;
      n1 = ans;
      console.log(ans);
    }
   
    return ans;
  }
  console.log("Fibonacci with iteration:" +  fib_i(4));