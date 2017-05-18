var Event = require("events");
var eventEmitter = Event.EventEmitter;
console.log(Event);
console.log(eventEmitter);
var life = new eventEmitter();
console.log(life);

life.setMaxListeners(11);


life.on("test", function(who) {
    console.log(who + "做个测试！");
});
// life.on("test", function(who) {
//     console.log(who + "做个测试！");
// });

// life.on("test", function(who) {
//     console.log(who + "做个测试！");
// });

// life.on("test", function(who) {
//     console.log(who + "做个测试！");
// });
// life.on("test", function(who) {
//     console.log(who + "做个测试！");
// });

// life.on("test", function(who) {
//     console.log(who + "做个测试！");
// });

// life.on("test", function(who) {
//     console.log(who + "做个测试！");
// });

// life.on("test", function(who) {
//     console.log(who + "做个测试！");
// });

// life.on("test", function(who) {
//     console.log(who + "做个测试！");
// });

// life.on("test", function(who) {
//     console.log(who + "做个测试！");
// });

// life.on("test", function(who) {
//     console.log(who + "做个测试！");
// });
function fn(who) {
    console.log("aaa", who);
}
life.on("dev", fn);
life.removeListener("dev", fn);

// life.removeAllListeners();

var l = life.emit("test", "chayangge");
var d = life.emit("dev", "chayangge");
var f = life.emit("fev", "chayangge");

console.log(l, d, f);