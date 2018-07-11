var test = require("tape");
var logic = require("./logic");

test("Example test", function(t) {
  t.pass();
  t.end();
});

//==================================================
//==============delete function tdd=================
//==================================================
test("refacrtor delete function", function(t) {
  t.equal(Array.isArray(logic.deleteTodo([], 1)), true, "returns an array");
  t.deepEqual(logic.deleteTodo([1, 3, 2, 3], 1),[1, 3, 2, 3],
  "check if it clones correctly");
  t.deepEqual(
    logic.deleteTodo([1, 3, 2, 3], 1),
    [1, 3, 2, 3],
    "check if it deletes without affecting the original array"
  );

  t.deepEqual(
    logic.deleteTodo(
      [
        { id: 0, descreption: "number 0 :)", done: false },
        { id: 1, descreption: "number 1 :)", done: false }
      ],
      1
    ),
    [{ id: 0, descreption: "number 0 :)", done: false }],
    "check if array deletes to-do list object"
  );
  t.end();
});

//====================================================
//==============markTodo function tdd=================
//====================================================
test("refacrtor markTodo function", function(t) {
  t.equal(Array.isArray(logic.deleteTodo([], 1)), true, "returns an array");
  var obj1={id:0,desc:'rrr',done:false};
  var obj2={id:1,desc:'rrasd2',done:false};
  var obj2={id:2,desc:'63mslwwys',done:true};
  t.deepEqual(logic.markTodo([obj1],0),obj1,"return the same array");
  t.deepEqual(logic.markTodo([obj1],2),obj1,"return the same array if given invalid id");







  t.end();
});
