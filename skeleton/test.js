var test = require('tape');
var logic = require('./logic');

test('addTodo Function logic work',function(t){

  t.deepEqual(logic.addTodo([],{des:"wenak",done:false}),[{ id:1 ,des:"wenak",done:false}],"NOOO");
  t.deepEqual(logic.addTodo([{ id:1 ,des:"wenak",done:false}],{des:"suha",done:false}),[{ id:1 ,des:"wenak",done:false},{des:"suha",done:false ,id:2}],"NOOO");
  t.deepEqual(logic.addTodo([{id:2, des:"error", done:"false"}],{des:"hi", done:"yes"}),[{id:2, des:"error", done:"false"},{id:3, des: "hi", done:"yes"}],"yesssss");

  t.end();
})
