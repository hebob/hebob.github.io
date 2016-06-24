

			// Our Javascript will go here.

		var width = 400;
		var height = 255;

		var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0x000000, 0.2 );
		var camera = new THREE.PerspectiveCamera( 60, width / height, 0.1, 1000 );

		var renderer = new THREE.WebGLRenderer( {antialias: false} );
			renderer.setSize( width, height, false );
			renderer.setClearColor( 0xd7c7c7, 1 );
			document.getElementById('myid').appendChild( renderer.domElement );

		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var geometry2 = new THREE.BoxGeometry( 2, 2, 2 );
		var material = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: false, wireframeLinewidth: 4, side: THREE.DoubleSide } );
		var material2 = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true, wireframeLinewidth: 4, side: THREE.DoubleSide } );

		var box = new THREE.Mesh( geometry, material );
		var box2 = new THREE.Mesh( geometry2, material2 );



		scene.background = 0xffffff
		scene.add( box );
		scene.add( box2 );

		camera.position.z = 3;


function render() {
	requestAnimationFrame( render );

  box.rotation.x += 0.01;
	box.rotation.z += 0.02;
  box.rotation.y += 0.03;

	box2.rotation.x += 0.02;
	box2.rotation.z += 0.03;
	box2.rotation.y += 0.01;

	renderer.render( scene, camera );

	}

render();
