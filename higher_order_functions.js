const f = (m) => console.log(m);
f('Test');

const obj = {
    f(m) {
      console.log(m)
    }
  }
  obj.f('Test from object')

const ff = (m) => () => console.log(m);
const f2 = (f3) => f3();
f2(ff('Test as argument'));

function create_multiplier(x) {
    function multiplier(y) {
        return x * y;
    }
    return multiplier;
}
let multiplier_number_by_seven = create_multiplier(7); //return function multiplier(y){ return 7 * y};

console.log(multiplier_number_by_seven(7));

console.log(create_multiplier(4)(7));