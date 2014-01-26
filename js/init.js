//Modifying AnimFrame for smart animations for different browsers
window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();







var Canvas = function() {
	var renderer, scene, camera, controls, heart, rotWorldMatrix, revolutionAngle=0.0;

};	
Canvas.prototype.rose = [];

Canvas.prototype.init = function(){
    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(780,780);
    $("#canvas").append(renderer.domElement);
    //document.body.appendChild(renderer.domElement);
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0xff0000, 250, 1400 );

    camera = new THREE.PerspectiveCamera(15,
        window.innerWidth / window.innerHeight,
        0.1, 10000);
    camera.position.set(25, 8, 25);
    scene.add(camera);
    var light = new THREE.PointLight(0xffffff);
    light.position.set(0, 0, 15);
    
    scene.add(light);
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    renderer.setClearColor( 0xFF69B4, 1 );
    renderer.render( scene, camera );
    $("#reset").click(Canvas.prototype.reset);
    $("#animate").click(Canvas.prototype.animate);
};


Canvas.prototype.revolutionAngle=0.0;

Canvas.prototype.animate = function(){
	controls.update();
  /*
  scene.children[6].rotation.y+=0.1
  scene.children[7].rotation.y+=0.1
  */
  // rotate heart about rose..
  scene.children[6].position.x=5*Math.cos(Canvas.prototype.revolutionAngle);
  scene.children[6].position.z=5*Math.sin(Canvas.prototype.revolutionAngle);
  scene.children[7].rotation.y+=0.1;
  Canvas.prototype.revolutionAngle+=0.01;
  renderer.render( scene, camera );
	requestAnimationFrame(Canvas.prototype.animate);
};

Canvas.prototype.reset = function(){ controls.reset(); }

Canvas.prototype.rotateAroundWorldAxis = function(object, axis, radians) {
    rotWorldMatrix = new THREE.Matrix4();
    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
    rotWorldMatrix.multiply(object.matrix);                // pre-multiply
    object.matrix = rotWorldMatrix;
    object.rotation.setEulerFromRotationMatrix(object.matrix);
}