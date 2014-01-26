Canvas.prototype.add_axes = function(){

	var axesMaterial = new THREE.MeshLambertMaterial(
	{
	    color: 0xFF69B4
	    
	});
	var x_axis = new THREE.Mesh(
	   new THREE.CubeGeometry(100, 0.05, 0.05),
	   axesMaterial);
	   
	scene.add(x_axis);
	
	var y_axis = new THREE.Mesh(
	   new THREE.CubeGeometry(0.05, 100, 0.05),
	   axesMaterial);
	   
	scene.add(y_axis);
	
	var z_axis = new THREE.Mesh(
	   new THREE.CubeGeometry(0.05, 0.05, 10),
	   axesMaterial);
	   
	scene.add(z_axis);
	renderer.render(scene, camera);
}	


Canvas.prototype.add_rose = function(){
	/**
	*We use JSON Loader for this purpose. ..
	**/
	// First add a stem..
    cy = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1,0.1,0.8,10,1,true),
          new THREE.MeshLambertMaterial({color: 0x005500})
        );
    cy.position.y=-0.4;
    cy.position.x=0;
    scene.add(cy);
    // Now JSONLOader
    var loader = new THREE.JSONLoader();
    loader.load("js/rose.js", function(geo) {
        var m = new THREE.MeshLambertMaterial({color: 0xff0000});
        Canvas.prototype.rose = new THREE.Mesh(geo, m);
        Canvas.prototype.rose.position.x = 0;
        Canvas.prototype.rose.scale.x = 2;
        Canvas.prototype.rose.scale.y = 2;
        Canvas.prototype.rose.scale.z = 2;

        scene.add(Canvas.prototype.rose);
        });
};

Canvas.prototype.add_heart = function(){
	/**
	*We use JSON Loader for this purpose. ..
	**/
    // Now JSONLOader
    var loader = new THREE.JSONLoader();
    loader.load("js/heart.js", function(geo) {
        var m = new THREE.MeshLambertMaterial({color: 0xff0000});
        Canvas.prototype.heart = new THREE.Mesh(geo, m);
        Canvas.prototype.heart.position.x = 5;
        Canvas.prototype.heart.position.y = 1.5;
        Canvas.prototype.heart.scale.x = 0.5;
        Canvas.prototype.heart.scale.y = 0.5;
        Canvas.prototype.heart.scale.z = 0.5;
        scene.add(Canvas.prototype.heart);
        });
};

Canvas.prototype.add_text = function(){
	/**
	* Text Rendering...
	
    var shape = new THREE.TextGeometry("Game Over");
    var wrapper = new THREE.MeshNormalMaterial({color: 0x00ff00});
    var words = new THREE.Mesh(shape, wrapper);
    scene.add(words);
    **/
};

