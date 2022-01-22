
// horizontal legs
var geometry6 = new THREE.BoxGeometry(0.4,4,0.4);
var material6 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.set(5.79,2,10.29);

var geometry6 = new THREE.BoxGeometry(0.4,4,0.4);
var material6 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.set(-5.79,2,10.29)

var geometry6 = new THREE.BoxGeometry(0.4,4,0.4);
var material6 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.set(-5.79,2,-10.29);

var geometry6 = new THREE.BoxGeometry(0.4,4,0.4);
var material6 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.set(5.79,2,-10.29)


//vertical legs
var geometry6 = new THREE.BoxGeometry(0.4,0.4,20.99);
var material6 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.set(-5.79,3.8,0);

var geometry6 = new THREE.BoxGeometry(0.4,0.4,20.99);
var material6 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.set(5.79,3.8,0);

var geometry6 = new THREE.BoxGeometry(0.4,0.4,20.99);
var material6 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.set(0,6.2,0);

var geometry6 = new THREE.BoxGeometry(11.99,0.4,0.4);
var material6 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.set(0,3.8,0);

var geometry6 = new THREE.BoxGeometry(11.99,0.4,0.4);
var material6 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.set(0,3.8,10.29);

var geometry6 = new THREE.BoxGeometry(11.99,0.4,0.4);
var material6 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube6 = new THREE.Mesh( geometry6, material6 );
scene.add( cube6 );
cube6.position.set(0,3.8,-10.29);


// Truss
var geometry7 = new THREE.BoxGeometry(6.49,0.4,0.4);
var material7 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube7 = new THREE.Mesh( geometry7, material7 );
scene.add( cube7 );
cube7.rotation.z = 0.408;
cube7.position.set(-2.9,5,10.25);

var geometry8 = new THREE.BoxGeometry(6.49,0.4,0.4);
var material8 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube8 = new THREE.Mesh( geometry8, material8 );
scene.add( cube8 );
cube8.rotation.z = -0.408;
cube8.position.set(2.9,5,10.25);


var geometry7 = new THREE.BoxGeometry(6.49,0.4,0.4);
var material7 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube7 = new THREE.Mesh( geometry7, material7 );
scene.add( cube7 );
cube7.rotation.z = 0.408;
cube7.position.set(-2.9,5,-10.25);

var geometry8 = new THREE.BoxGeometry(6.49,0.4,0.4);
var material8 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube8 = new THREE.Mesh( geometry8, material8 );
scene.add( cube8 );
cube8.rotation.z = -0.408;
cube8.position.set(2.9,5,-10.25);

var geometry8 = new THREE.BoxGeometry(6.49,0.4,0.4);
var material8 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube8 = new THREE.Mesh( geometry8, material8 );
scene.add( cube8 );
cube8.rotation.z = -0.408;
cube8.position.set(2.9,5,0);

var geometry7 = new THREE.BoxGeometry(6.49,0.4,0.4);
var material7 = new THREE.MeshPhongMaterial( { color: "grey" } );
var cube7 = new THREE.Mesh( geometry7, material7 );
scene.add( cube7 );
cube7.rotation.z = 0.408;
cube7.position.set(-2.9,5,0);


// const geometry = new THREE.BoxGeometry(1000,1000,1000);
// // const geometry = new THREE.BoxGeometry(2,2,2);
// // const geometry = new THREE.SphereGeometry();


// material=[
// new THREE.MeshBasicMaterial({map :  new THREE.TextureLoader().load( "img/skybox/serenity_ft.jpg " ) , side: THREE.DoubleSide}),
// new THREE.MeshBasicMaterial({map :  new THREE.TextureLoader().load( "img/skybox/serenity_bk.jpg " ) , side : THREE.DoubleSide}),
// new THREE.MeshBasicMaterial({map :  new THREE.TextureLoader().load( "img/skybox/serenity_up.jpg " ) , side : THREE.DoubleSide}),
// new THREE.MeshBasicMaterial({map :  new THREE.TextureLoader().load( "img/skybox/serenity_dn.jpg " ) , side : THREE.DoubleSide}),
// new THREE.MeshBasicMaterial({map :  new THREE.TextureLoader().load( "img/skybox/serenity_rt.jpg " ) , side : THREE.DoubleSide}),
// new THREE.MeshBasicMaterial({map :  new THREE.TextureLoader().load( "img/skybox/serenity_lf.jpg " ) , side : THREE.DoubleSide})
// ];
// // const material = new THREE.MeshPhongMaterial({color: "white" ,wireframe : false});
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);



// //horizontal legs
// var rightFrontGeometry = new THREE.BoxGeometry(20,0.01,20);
// rightFrontMaterial = new THREE.MeshBasicMaterial({color: "green" , side: THREE.DoubleSide});
// var rightFrontLeg = new THREE.Mesh(rightFrontGeometry, rightFrontMaterial);
// scene.add(rightFrontLeg);
// // rightFrontLeg.rotation.y = Math.PI/2;
// rightFrontLeg.position.set(0,0,0);

// var rightFrontGeometry = new THREE.BoxGeometry(0.2,4,0.2);
// rightFrontMaterial = new THREE.MeshPhongMaterial({color: "red" , side: THREE.DoubleSide});
// var rightFrontLeg = new THREE.Mesh(rightFrontGeometry, rightFrontMaterial);
// scene.add(rightFrontLeg);
// rightFrontLeg.position.set(3,2,6);

// var rightFrontGeometry = new THREE.BoxGeometry(0.2,4,0.2);
// rightFrontMaterial = new THREE.MeshPhongMaterial({color: "red" , side: THREE.DoubleSide});
// var rightFrontLeg = new THREE.Mesh(rightFrontGeometry, rightFrontMaterial);
// scene.add(rightFrontLeg);
// rightFrontLeg.position.set(-3,2,6);

// var rightFrontGeometry = new THREE.BoxGeometry(6,0.2,0.2);
// rightFrontMaterial = new THREE.MeshPhongMaterial({color: "red" , side: THREE.DoubleSide});
// var rightFrontLeg = new THREE.Mesh(rightFrontGeometry, rightFrontMaterial);
// scene.add(rightFrontLeg);
// rightFrontLeg.position.set(0,3.9,6);

// var rightFrontGeometry = new THREE.BoxGeometry(3.14,0.2,0.2);
// rightFrontMaterial = new THREE.MeshPhongMaterial({color: "red" , side: THREE.DoubleSide});
// var rightFrontLeg = new THREE.Mesh(rightFrontGeometry, rightFrontMaterial);
// scene.add(rightFrontLeg);
// rightFrontLeg.position.set(-1.5,4.29,6);
// rightFrontLeg.rotation.z = -56.31;

// var rightFrontGeometry = new THREE.BoxGeometry(3.14,0.2,0.2);
// rightFrontMaterial = new THREE.MeshPhongMaterial({color: "red" , side: THREE.DoubleSide});
// var rightFrontLeg = new THREE.Mesh(rightFrontGeometry, rightFrontMaterial);
// scene.add(rightFrontLeg);
// rightFrontLeg.position.set(1.5,4.29,6);
// rightFrontLeg.rotation.z = 56.31;