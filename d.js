function foo() {
    return "I'm the outer function";
  };
  
  function test() {
    console.log(bar);
    return foo();
    var bar = "I'm a variable";
    function foo() {
      return "I'm the inner function";
    }
  }
  console.log(test());