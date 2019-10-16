var Cons = function(head, tail) {
    this.head = head;
    this.tail = tail;
  };
   
  Cons.prototype.isEmpty = false;

  var Nil = {
    isEmpty: true,
   
    get head() {
      throw new Error('Accessing head on empty list.');
    },
   
    get tail() {
      throw new Error('Accessing tail on empty list.');
    }
  };

  var list = new Cons(1, new Cons(3, new Cons(42, new Cons(28, Nil))));

  var cons = function(head, tail) {
    return new Cons(head, tail);
  };
   
  var list = cons(1, cons(3, cons(42, cons(28, Nil))));
console.log(list);
  
