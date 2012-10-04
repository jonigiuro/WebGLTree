$(document).ready(function(){
var gui = new DAT.GUI({
    height : 7 * 32 - 1
});
gui.add(params, 'maxcubes').min(1).max(3000).step(10).name("Max Cubes");
gui.add(params, 'shrink').min(10).max(100).step(1).name("Trail length");
gui.add(params, 'bendiness').min(-0.1).max(.1).step(0.01).name("Bendiness");
gui.add(params, 'newTree').name("newTree");
gui.add(params, 'dist').min(0).max(150).step(.1).name("Distance from center")
gui.add(params, 'angle').min(0).max(359).step(1).name("Angle")
gui.add(params, 'gravity').min(-2).max(2).step(.1).name("Gravity");
})
