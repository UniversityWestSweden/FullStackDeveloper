//Map examples
var numbers = [1, 4, 9];
var PowerOf2 = numbers.map((num) => {
  return Math.pow(num,2);
});
console.log(PowerOf2);

var test = Array.prototype.map.call([4, 9, 16, 25, 58],(n) => { return Math.pow(n,2);});
console.log(test);

var test2 = Array.prototype.map.call("Hello World!",(c) => { return c.charCodeAt(0); });
console.log(test2);

//Filter example
var ages=[12,40,15,37,17];  
var canDrink = ages.filter((n)=>{return n>=20;});
console.log(canDrink);

//reduce example
var moreNumbers = [ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33 ];

var results = moreNumbers.reduce((sum,x)=>{return sum + x;});
console.log(results);



