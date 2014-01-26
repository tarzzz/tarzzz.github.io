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
          new THREE.CylinderGeometry(0.02,0.02,0.8,10,1,true),
          new THREE.MeshLambertMaterial({color: 0x005500})
        );
    cy.position.y=-0.4;
    cy.position.x=-5;
    scene.add(cy);
    // Now JSONLOader
    var loader = new THREE.JSONLoader();
    loader.load("js/rose.js", function(geo) {
        var m = new THREE.MeshLambertMaterial({color: 0xff0000});
        Canvas.prototype.rose = new THREE.Mesh(geo, m);
        Canvas.prototype.rose.position.x = -5;
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
        scene.add(Canvas.prototype.heart);
        });
};

Canvas.prototype.add_text = function(){
	/**
	*We use JSON Loader for this purpose. ..
	**/
    // Now JSONLOader
     material = new THREE.MeshFaceMaterial( [
                        new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
                        new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
                                ] );
    /*textGeo = new THREE.TextGeometry( text, {

            size: 5,
            height: 2,
            curveSegments: 100,

            font: fon,
            weight: "bold",
            style: style,

            bevelThickness: 10,
            bevelSize: bevelSize,
            bevelEnabled: True,

            material: 0,
            extrudeMaterial: 1

    });
*/
};

