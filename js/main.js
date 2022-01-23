const scene = new THREE.Scene();
// scene.background = new THREE.TextureLoader().load( "img/background.png " );


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



//Geometry
// const bitcoinGeometry = new THREE .SphereBufferGeometry(1,32,32);
const bitcoinGeometry = new THREE.BufferGeometry();
const count = 10000;

const positions = new Float32Array(count*3);
const colors = new Float32Array(count*3);

for(let i = 0 ; i < count*3 ; i++ ){
    positions[i] = (Math.random()-0.5) *10
    colors[i] = Math.random()
}

bitcoinGeometry.setAttribute(
    'position',
     new THREE.BufferAttribute(positions,3)    
    
)

bitcoinGeometry.setAttribute(
    'color',
     new THREE.BufferAttribute(colors,3)    
    
)




//texture
const textureLoader = new THREE.TextureLoader()
const particalTexture = textureLoader.load('img/logo.jpeg')

//Material
const bitcoinMaterial = new THREE.PointsMaterial();
bitcoinMaterial.size = 0.07;
// bitcoinMaterial.sizeAttenuation = true;
// bitcoinMaterial.color = new THREE.Color("pink")
// bitcoinMaterial.map = particalTexture
bitcoinMaterial.transparent = true
bitcoinMaterial.alphaMap = particalTexture
// bitcoinMaterial.depthWrite = false
// bitcoinMaterial.depthTest = false
bitcoinMaterial.alphaTest = 0.001

// bitcoinMaterial.blending = THREE.AdditiveBlending
bitcoinMaterial.vertexColors = true

//Partical
const coinParticals = new THREE.Points(bitcoinGeometry,bitcoinMaterial);
scene.add(coinParticals);


// const cube = new THREE.Mesh(
//     new THREE.BoxBufferGeometry(),
//     new THREE.MeshBasicMaterial()
// )
// scene.add(cube);

const light = new THREE.PointLight( "brown", 5, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );

camera.position.z = 5;
camera.position.y = 0;

const clock = new THREE.Clock()

const animate = function(){
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime()
    coinParticals.rotation.x =  elapsedTime*0.02
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();



const controls = new THREE.OrbitControls(camera, renderer.domElement);

