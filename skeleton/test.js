var test = require("tape");
var logic = require("./logic");


//==================================================
//==============add function tdd=================
//==================================================
test('addTodo Function logic work',function(t){

  t.deepEqual(logic.addTodo([],{des:"wenak",done:false}),[{ id:1 ,des:"wenak",done:false}],"Should add newTodo Object to the todos array test1");
  t.deepEqual(logic.addTodo([{ id:1 ,des:"wenak",done:false}],{des:"suha",done:false}),[{ id:1 ,des:"wenak",done:false},{des:"suha",done:false ,id:2}],"Should add newTodo Object to the todos array test2");
  t.deepEqual(logic.addTodo([{id:-2, des:"GO"},{ id:1 ,des:"wenak",done:false}],{des:"suha",done:false}),[{id:-2, des:"GO"},{ id:1 ,des:"wenak",done:false},{des:"suha",done:false ,id:3}],"Should add newTodo Object to the todos array test3");

  //t.deepEqual(logic.addTodo([{id:2, des:"error", done:"false"}],{des:"hi", done:"yes"}),[{id:2, des:"error", done:"false"},{id:2, des: "hi", done:"yes"}],"Should add newTodo Object to the todos array test3");
  t.equal(Array.isArray(logic.addTodo([],"hi")),true,"Should return an array");

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
  t.deepEqual(logic.markTodo([obj1],0),[{id:0,desc:'rrr',done:true}],"return the same array with markTodo changed for the given id");
  t.deepEqual(logic.markTodo([obj1],2),[obj1],"return the same array if given invalid id");
  t.end();
});
