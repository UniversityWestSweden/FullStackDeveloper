function fib_r(n) {
    if (n < 2) {
      return n;
    }
   
    return fibr(n - 1) + fibr(n - 2);
  }
Console.log("Fibonacci with recursion:" + fib_r(4));
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
    }
   
    return ans;
  }
  Console.log("Fibonacci with iteration:" +  fib_i(4));