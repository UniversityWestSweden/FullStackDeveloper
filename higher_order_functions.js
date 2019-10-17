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
const multiplier_number_by_four = create_multiplier(4);
multiplier_number_by_four(7);
console.log(multiplier_number_by_four(7));