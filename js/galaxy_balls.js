        // import {GUI} from "../js/package-lock.json"
        const canvas = document.querySelector('canvas.webgl')
        const scene = new THREE.Scene();
// scene.background = new THREE.TextureLoader().load( "img/background.png " );


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight( "brown", 5, 100 );
light.position.set( 50, 50, 50 );

// gui.add(light.position,'y',50,100,10)
scene.add( light );

camera.position.z = 5;
camera.position.y = 0;

const controls = new THREE.OrbitControls(camera, renderer.domElement);

// const gui = new dat.GUI()




// const cube = new THREE.Mesh(
//     new THREE.BoxBufferGeometry(),
//     new THREE.MeshBasicMaterial()
// )
// scene.add(cube);

const tradeCoinGeometry = new THREE.BufferGeometry();
const tradeCount = 50000;

const tradePositions = new Float32Array(tradeCount*3);
const tradeColors = new Float32Array(tradeCount*3);

for(let i = 0 ; i < tradeCount*3 ; i++ ){
    tradePositions[i] = (Math.random()-0.5) *20
    tradeColors[i] = Math.random()
}

tradeCoinGeometry.setAttribute(
    'position',
     new THREE.BufferAttribute(tradePositions,3)    
    
)

tradeCoinGeometry.setAttribute(
    'color',
     new THREE.BufferAttribute(tradeColors,3)    
    
)




//texture
const tradeTextureLoader = new THREE.TextureLoader()
const tradeParticalTexture = tradeTextureLoader.load('img/anand.jpg')

//Material
const tradeCoinMaterial = new THREE.PointsMaterial();
tradeCoinMaterial.size = 0.02;
// tradeCoinMaterial.sizeAttenuation = true;
tradeCoinMaterial.color = new THREE.Color("pink")
// tradeCoinMaterial.map = tradeParticalTexture
tradeCoinMaterial.transparent = true
tradeCoinMaterial.alphaMap = tradeParticalTexture
// tradeCoinMaterial.depthWrite = false
// tradeCoinMaterial.depthTest = false
tradeCoinMaterial.alphaTest = 0.001

// tradeCoinMaterial.blending = THREE.AdditiveBlending
// tradeCoinMaterial.vertexColors = true

//Partical
const tradeCoinParticals = new THREE.Points(tradeCoinGeometry,tradeCoinMaterial);
scene.add(tradeCoinParticals);    












const clock = new THREE.Clock()

const animate = function(){
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime()
    // coinParticals.rotation.x =  elapsedTime*0.02
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();




