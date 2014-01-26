Particle3D=function(material){THREE.Particle.call(this,material);this.velocity=new THREE.Vector3(0,-8,0);this.velocity.rotateX(randomRange(-45,45));this.velocity.rotateY(randomRange(0,360));this.gravity=new THREE.Vector3(0,0,0);this.drag=1;};Particle3D.prototype=new THREE.Particle();Particle3D.prototype.constructor=Particle3D;Particle3D.prototype.updatePhysics=function(){this.velocity.multiplyScalar(this.drag);this.velocity.addSelf(this.gravity);this.position.addSelf(this.velocity);}
var TO_RADIANS=Math.PI/180;THREE.Vector3.prototype.rotateY=function(angle){cosRY=Math.cos(angle*TO_RADIANS);sinRY=Math.sin(angle*TO_RADIANS);var tempz=this.z;;var tempx=this.x;this.x=(tempx*cosRY)+(tempz*sinRY);this.z=(tempx*-sinRY)+(tempz*cosRY);}
THREE.Vector3.prototype.rotateX=function(angle){cosRY=Math.cos(angle*TO_RADIANS);sinRY=Math.sin(angle*TO_RADIANS);var tempz=this.z;;var tempy=this.y;this.y=(tempy*cosRY)+(tempz*sinRY);this.z=(tempy*-sinRY)+(tempz*cosRY);}
THREE.Vector3.prototype.rotateZ=function(angle){cosRY=Math.cos(angle*TO_RADIANS);sinRY=Math.sin(angle*TO_RADIANS);var tempx=this.x;;var tempy=this.y;this.y=(tempy*cosRY)+(tempx*sinRY);this.x=(tempy*-sinRY)+(tempx*cosRY);}
function randomRange(min,max)
{return((Math.random()*(max-min))+ min);}


			var SCREEN_WIDTH = 800;
			var SCREEN_HEIGHT = 800;

			var container;

			var particle;
			var mouseX = 0;
			var mouseY = 0;

			var windowHalfX = 400;
			var windowHalfY = 400;;
			
			var particles = []; 
			var particleImage = new Image();//THREE.ImageUtils.loadTexture( "img/ParticleSmoke.png" );
			particleImage.src = 'img/ParticleSmoke.png'; 

			function init() {
 				var material = new THREE.ParticleBasicMaterial( { map: new THREE.Texture(particleImage) } );
				for (var i = 0; i < 500; i++) {

					particle = new Particle3D( material);
					particle.position.x = Math.random() * 2000 - 1000;
					particle.position.y = Math.random() * 2000 - 1000;
					particle.position.z = Math.random() * 2000 - 1000;
					particle.scale.x = particle.scale.y =  1;
					scene.add( particle );
					
					particles.push(particle); 
				}

				setInterval( loop, 1000 / 60 );
				
			}
			
			//
			function loop() {

			for(var i = 0; i<particles.length; i++)
				{

					var particle = particles[i]; 
					particle.updatePhysics(); 
	
					with(particle.position)
					{
						if(y<-1000) y+=2000; 
						if(x>1000) x-=2000; 
						else if(x<-1000) x+=2000; 
						if(z>1000) z-=2000; 
						else if(z<-1000) z+=2000; 
					}				
				}
			
				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
				camera.lookAt(scene.position); 

				renderer.render( scene, camera );

				
			}

		