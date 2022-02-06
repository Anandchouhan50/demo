

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

const gui = new dat.GUI()




// const cube = new THREE.Mesh(
//     new THREE.BoxBufferGeometry(),
//     new THREE.MeshBasicMaterial()
// )
// scene.add(cube);

const parameters = {};
parameters.count = 1000
parameters.size = 0.02
//logo line
// const genrateLogoLine = () =>
// {
    const tradeLineGeometry = new THREE.BufferGeometry();

    const linePositions = new Float32Array(parameters.count * 3);

    for(let i = 0 ; i < parameters.count; i++)
    {

        const i3 = i * 3

        linePositions[i3 + 0] = Math.random()
        linePositions[i3 + 1] = Math.random()
        linePositions[i3 + 2] = Math.random()
    }

    tradeLineGeometry.setAttribute(
        'linePosition',
        new THREE.BufferAttribute(linePositions,3)
    )

    //Material for line
    const lineMaterial = new THREE.PointsMaterial({
        size:parameters.size,
        sizeAttenuation:true,
        depthWrite:false,
        blending: THREE.AdditiveBlending
    });

    //points for line
    const linePoints = new THREE.Points(tradeLineGeometry,lineMaterial)
    scene.add(linePoints);
   

console.log(scene)
// console.log(coinParticals)
// }

// genrateLogoLine();










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




