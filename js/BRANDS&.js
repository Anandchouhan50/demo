// import { OBJLoader } from './jsm/loaders/OBJLoader.js';

const scene = new THREE.Scene();
// scene.background = new THREE.TextureLoader().load( "img/background.png " );


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 10000);
console.log(camera.position.z)
camera.position.z = 20
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const group = new THREE.Group();



const genrateLogoLine = () =>
{



    const geometry = new THREE.SphereGeometry( 10000000, 500, 500 );
    const texture = new THREE.TextureLoader().load( 'img/Background-color image 1080p.png' );
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff, map : texture ,side : THREE.DoubleSide} );
    const sphere = new THREE.Mesh( geometry, material );
    sphere.rotation.y = 2
    sphere.rotation.x = 1
    
    // scene.add( sphere ); 




    const tradeCoinGeometry = new THREE.BufferGeometry();
    const tradeCount = 50000;
    
    const tradePositions = new Float32Array(tradeCount*3);
    const tradeColors = new Float32Array(tradeCount*3);
    
    for(let i = 0 ; i < tradeCount*3 ; i++ ){
        tradePositions[i] = (Math.random()-0.5) *2000
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
    const tradeParticalTexture = tradeTextureLoader.load('img/ampersand.jpeg')
    
    //Material
    const tradeCoinMaterial = new THREE.PointsMaterial();
    tradeCoinMaterial.size = 6;
    // tradeCoinMaterial.sizeAttenuation = true;
    // tradeCoinMaterial.color = new THREE.Color(0x00B0DE)
    tradeCoinMaterial.color = new THREE.Color("white")
    // tradeCoinMaterial.map = tradeParticalTexture
    tradeCoinMaterial.transparent = true
    tradeCoinMaterial.alphaMap = tradeParticalTexture
    tradeCoinMaterial.depthWrite = false
    // tradeCoinMaterial.depthTest = false
    tradeCoinMaterial.alphaTest = 0.001
    
    tradeCoinMaterial.blending = THREE.AdditiveBlending
    // tradeCoinMaterial.vertexColors = true
    
    //Partical
    const tradeCoinParticals = new THREE.Points(tradeCoinGeometry,tradeCoinMaterial);
    scene.add(tradeCoinParticals);    
    console.log(tradeCoinParticals)





    // class CustomSinCurve extends THREE.Curve {

    //     constructor( scale = 1 ) {
    
    //         super();
    
    //         this.scale = scale;
    
    //     }
    
    //     getPoint( t, optionalTarget = new THREE.Vector3() ) {
    
    //         const tx = t * 3 - 1.5;
    //         const ty = Math.sin( 2 * Math.PI * t );
    //         const tz = 0;
    
    //         return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
    
    //     }
    
    // }



    // const path = new CustomSinCurve( 3 );
// const bitcoinGeometry = new THREE.TubeGeometry(path,200, 1, 80, false );
const bitcoinGeometry = new THREE.BufferGeometry();


const loader = new THREE.FontLoader();

loader.load( 'js/perfect_ampersand.json', function ( font ) {

	const Geometry = new THREE.TextGeometry( '&', {
		font: font,
		size: 4,
		height: 0.3,
		curveSegments: 500,
		bevelEnabled: true,
		bevelThickness: 0.4,
		bevelSize: 0.05,
		bevelOffset: 0.1,
		bevelSegments: 5
	} );

    const Material = new THREE.MeshPhongMaterial();
    // Material.wireframe = true
    const npercent = new THREE.Mesh(Geometry,Material);

    npercent.position.x = 11.5
    npercent.position.y = -2
    npercent.position.z = 0.3
    npercent.material.color.set("white")
    scene.add(npercent);

    // } );

const count = 200000;

const positions = new Float32Array(count*3);
const colors = new Float32Array(count*3);
const rotation = new Float32Array(count*3);

for(let i = 0 ; i < count*3 ; i++ ){

    const i3 = i*3
    const branch = i

//b shape
    if(i<4000){
        positions[i3+0] = (Math.random())
        positions[i3+1] = (Math.random()*5)-2.5
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 255
        // colors[i3+2] = 255 
    }else if(i<6000){
            positions[i3+0] = (Math.random()*2.5)+1
            positions[i3+1] = (Math.random())-2.5
            positions[i3+2] = (Math.random())

            // colors[i3+0] = 255
            // colors[i3+1] = 255
            // colors[i3+2] = 255 
        }else if(i<8000){
            positions[i3+0] = (Math.random())+2.5
            positions[i3+1] = (Math.random()*2.5)-1.5
            positions[i3+2] = (Math.random())

            // colors[i3+0] = 255
            // colors[i3+1] = 255
            // colors[i3+2] = 255 
        }else if(i<8500){
            positions[i3+0] = (Math.random())+1.5
            positions[i3+1] = (Math.random())
            positions[i3+2] = (Math.random())

            // colors[i3+0] = 255
            // colors[i3+1] = 255
            // colors[i3+2] = 255 
        }

    //r shape    
    else if(i<10500){
        positions[i3+0] = (Math.random())+4.5
        positions[i3+1] = (Math.random()*3.5)-2.5
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 255
        // colors[i3+2] = 255 
    }else if(i<11000){
        positions[i3+0] = (Math.random())+5.5
        positions[i3+1] = (Math.random())
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 255
        // colors[i3+2] = 255 
    }

    //a shape
    else if(i<13000){
        positions[i3+0] = (Math.random())+7.5
        positions[i3+1] = (Math.random()*3.5)-2.5
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 0
        // colors[i3+2] = 0   
    }else if(i<15000){
        positions[i3+0] = (Math.random()*2.5)+8.5
        positions[i3+1] = (Math.random())
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 0
        // colors[i3+2] = 0 
    }else if(i<17000){
        positions[i3+0] = (Math.random())+10
        positions[i3+1] = (Math.random()*2.5)-2.5
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 0
        // colors[i3+2] = 0 
    }else if(i<17500){
        positions[i3+0] = (Math.random())+8.5
        positions[i3+1] = (Math.random())-2.5
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 0
        // colors[i3+2] = 0 
    }

    //n shape
    else if(i<19500){
        positions[i3+0] = (Math.random())+12
        positions[i3+1] = (Math.random()*3.5)-2.5
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 0
        // colors[i3+2] = 0 
    }else if(i<21500){
        positions[i3+0] = (Math.random()*2.5)+13
        positions[i3+1] = (Math.random())
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 0
        // colors[i3+2] = 0 
    }else if(i<23500){
        positions[i3+0] = (Math.random())+14.5
        positions[i3+1] = (Math.random()*2.5)-2.5
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 0
        // colors[i3+2] = 0 
    }

    //d shape
    else if(i<27500){
        positions[i3+0] = (Math.random())+19
        positions[i3+1] = (Math.random()*5)-2.5
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 0
        // colors[i3+2] = 0 
    }else if(i<29500){
            positions[i3+0] = (Math.random()*2.5)+16.5
            positions[i3+1] = (Math.random())-2.5
            positions[i3+2] = (Math.random())

            // colors[i3+0] = 255
            // colors[i3+1] = 0
            // colors[i3+2] = 0 
        }else if(i<31500){
            positions[i3+0] = (Math.random())+16.5
            positions[i3+1] = (Math.random()*2.5)-1.5
            positions[i3+2] = (Math.random())

            // colors[i3+0] = 255
            // colors[i3+1] = 0
            // colors[i3+2] = 0 
        }else if(i<32000){
            positions[i3+0] = (Math.random())+17.5
            positions[i3+1] = (Math.random())
            positions[i3+2] = (Math.random())

            // colors[i3+0] = 255
            // colors[i3+1] = 0
            // colors[i3+2] = 0 
        }

    //s shape
    else if(i<34500){
        positions[i3+0] = (Math.random()*3.5)+21
        positions[i3+1] = (Math.random())
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 255
        // colors[i3+2] = 255 
    }else if(i<35500){
        positions[i3+0] = (Math.random())+21
        positions[i3+1] = (Math.random()*1.25)-1.25
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 255
        // colors[i3+2] = 255 
    }else if(i<37500){
        positions[i3+0] = (Math.random()*2.5)+22
        positions[i3+1] = (Math.random())-1.25
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 255
        // colors[i3+2] = 255 
    }else if(i<38500){
        positions[i3+0] = (Math.random())+23.5
        positions[i3+1] = (Math.random()*1.25)-2.45
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 255
        // colors[i3+2] = 255 
    }else if(i<39500){
        positions[i3+0] = (Math.random()*2.5)+21
        positions[i3+1] = (Math.random())-2.5
        positions[i3+2] = (Math.random())

        // colors[i3+0] = 255
        // colors[i3+1] = 255
        // colors[i3+2] = 255 
    }

    // colors[i3+0] = 1
    // colors[i3+1] = 1
    // colors[i3+2] = 1
    

    
}

bitcoinGeometry.setAttribute(
    'position',
     new THREE.BufferAttribute(positions,3)    
    
)

bitcoinGeometry.setAttribute(
    'color',
     new THREE.BufferAttribute(colors,3)    
    
)

bitcoinGeometry.setAttribute(
    'rotation',
     new THREE.BufferAttribute(rotation,3)    
    
)





//texture
const textureLoader = new THREE.TextureLoader()
const particalTexture = textureLoader.load('img/ampersand.jpeg')

//Material
const bitcoinMaterial = new THREE.PointsMaterial();
bitcoinMaterial.size = 0.18;
// bitcoinMaterial.sizeAttenuation = true;
bitcoinMaterial.color = new THREE.Color(0x5073f1)
// bitcoinMaterial.color = new THREE.Color("red")
// bitcoinMaterial.map = particalTexture
bitcoinMaterial.transparent = true
bitcoinMaterial.alphaMap = particalTexture
bitcoinMaterial.depthWrite = false
// bitcoinMaterial.depthTest = true
bitcoinMaterial.alphaTest = 0.001

bitcoinMaterial.blending = THREE.AdditiveBlending
// bitcoinMaterial.vertexColors = true

console.log(bitcoinGeometry,"bitcoinGeometry")
//Partical
const coinParticals = new THREE.Points(bitcoinGeometry,bitcoinMaterial);
coinParticals.position.x = -14
group.add(coinParticals);


scene.add(group)






// // instantiate a loader
// const loader = new THREE.ObjectLoader();

// // load a resource
// loader.load(
// 	// resource URL
// 	'img/3d/3d.obj',
// 	// called when resource is loaded
// 	function ( object ) {

// 		scene.add( object );

// 	},
// 	// called when loading is in progresses
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );







let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let mouseX = 0, mouseY = 0;

document.body.addEventListener( 'pointermove', onPointerMove );

//

window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function onPointerMove( event ) {

    if ( event.isPrimary === false ) return;

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;

}




function render() {

    const time = Date.now() * 0.00005;

    camera.position.x = ( mouseX - camera.position.x ) * 0.0008;
    camera.position.y = ( - mouseY - camera.position.y ) * 0.001;

    camera.lookAt( scene.position );

    // for ( let i = 0; i < scene.children.length; i ++ ) {

    //     const object = scene.children[ i ];

    //     if ( object instanceof THREE.Points ) {

    //         object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );

    //     }

    // }

}

// coinParticals.rotation.x =  -Math.PI/6
// // tradeCoinParticals.rotation.x =  -Math.PI/6
// coinParticals.rotation.y =  -Math.PI/4
// tradeCoinParticals.rotation.y =  -Math.PI/4

// group.rotation.x =  -Math.PI/6
// group.rotation.y =  -Math.PI/4

tradeCoinParticals.position.y = -700
const clock = new THREE.Clock()
const animate = function(){
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime()
  
    render();
    // coinParticals.rotation.x =  elapsedTime*0.4
    // tradeCoinParticals.rotation.x =  elapsedTime*0.02
//     tradeCoinParticals.position.z = -200
//     if(tradeCoinParticals.position.z == -200){
    tradeCoinParticals.rotation.x = (elapsedTime*0.03)
//     }
//   if(tradeCoinParticals.position.z > -180){
//     tradeCoinParticals.position.z = -200
//   }
//   console.log(tradeCoinParticals.position.z)
    // group.rotation.x =  elapsedTime*0.2
    // group.rotation.x =  elapsedTime*0.2
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        // camera.position.z =20 -elapsedTime*0.5

        // coinParticals.scale.z = 0.5+(elapsedTime*6)
        // // coinParticals.scale.x = 0.5+(elapsedTime*2)
        // coinParticals.scale.y = 0.5+(elapsedTime*1.5)
        // // coinParticals.position.x = -(elapsedTime*30)
        // // coinParticals.position.z = -(elapsedTime*10)

        // npercent.position.x = 11.5+(elapsedTime*12)
        // npercent.scale.x = -4+(elapsedTime*12)
        // npercent.scale.y = -4+(elapsedTime*12)

    renderer.render(scene, camera);
}
animate();

} );

}

genrateLogoLine();

// const cube = new THREE.Mesh(
//     new THREE.BoxBufferGeometry(),
//     new THREE.MeshBasicMaterial()
// )
// scene.add(cube);

const light = new THREE.PointLight( "white", 5, 107 );
light.position.set( 50, 60, 50 );
scene.add( light );

camera.position.z = 13;
camera.position.y = 2;







const controls = new THREE.OrbitControls(camera, renderer.domElement);

