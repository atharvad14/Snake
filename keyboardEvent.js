var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
window.addEventListener("keydown", moveSomething, false);
// alert("key")
function moveSomething(e) {
    key(e.keyCode);
    e.preventDefault();
}
//# sourceMappingURL=keyboardEvent.js.map