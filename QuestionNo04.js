/*
Q4. Consider the two functions below. Will they both return the same thing? Why or why
not?
  
  
  function foo1()
  {
  return {
  bar: "hello"
  };
  }
  function foo2()
  {return
  {
  bar: "hello"
  };
  }
*/

function foo1()
{
 return {
    bar: "hello"
  };
}
function foo2()
{
  return
  {
    bar: "hello"
  };
}
console.log(foo1());
console.log(foo2());

/*
OUTPUT:
// [object Object] 
{
  "bar": "hello"
}
undefined
ANSWER: No. 
EXPLANATION:Undefined due to exta spaces in the resturn statement so it sghows undefined in the second statement.
in java Script Extra spaces not required.
*/