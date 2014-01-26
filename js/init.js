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
	var renderer, scene, camera, controls, heart;

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
    camera.position.set(0, 0, 50);
    scene.add(camera);

    var light = new THREE.PointLight(0xffffff);
    light.position.set(0, 0, 15);
    scene.add(light);
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    renderer.setClearColor( 0xFF69B4, 1 );
    renderer.render( scene, camera );
    $("#reset").click(Canvas.prototype.reset);
};



Canvas.prototype.animate = function(){
	controls.update();
	renderer.render( scene, camera );
	requestAnimationFrame(Canvas.prototype.animate);
};

Canvas.prototype.reset = function(){ controls.reset(); }
