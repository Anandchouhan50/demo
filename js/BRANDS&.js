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



    const tradeCoinGeometry = new THREE.BufferGeometry();
    const tradeCount = 50000;
    
    const tradePositions = new Float32Array(tradeCount*3);
    const tradeColors = new Float32Array(tradeCount*3);
    
    for(let i = 0 ; i < tradeCount*3 ; i++ ){
        tradePositions[i] = (Math.random()-0.5) *200
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
    const tradeParticalTexture = tradeTextureLoader.load('img/logo.jpeg')
    
    //Material
    const tradeCoinMaterial = new THREE.PointsMaterial();
    tradeCoinMaterial.size = 0.2;
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
    // scene.add(tradeCoinParticals);    





    class CustomSinCurve extends THREE.Curve {

        constructor( scale = 1 ) {
    
            super();
    
            this.scale = scale;
    
        }
    
        getPoint( t, optionalTarget = new THREE.Vector3() ) {
    
            const tx = t * 3 - 1.5;
            const ty = Math.sin( 2 * Math.PI * t );
            const tz = 0;
    
            return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
    
        }
    
    }



    const path = new CustomSinCurve( 3 );
// const bitcoinGeometry = new THREE.TubeGeometry(path,200, 1, 80, false );
const bitcoinGeometry = new THREE.BufferGeometry();


const loader = new THREE.FontLoader();

loader.load( 'js/gentilis_regular.typeface.json', function ( font ) {

	const Geometry = new THREE.TextGeometry( '&', {
		font: font,
		size: 4.3,
		height: 0.2,
		curveSegments: 50,
		bevelEnabled: true,
		bevelThickness: 0.4,
		bevelSize: 0.1,
		bevelOffset: 0.2,
		bevelSegments: 50
	} );

    const Material = new THREE.MeshPhongMaterial();
    // Material.wireframe = true
    const npercent = new THREE.Mesh(Geometry,Material);

    npercent.position.x = 11.5
    npercent.position.y = -2
    npercent.position.z = 0.5
    scene.add(npercent);

    } );

const count = 200000;

const positions = new Float32Array(count*3);
const colors = new Float32Array(count*3);

for(let i = 0 ; i < count*3 ; i++ ){

    const i3 = i*3
    const branch = i

//b shape
    if(i<4000){
        positions[i3+0] = (Math.random())
        positions[i3+1] = (Math.random()*5)-2.5
        positions[i3+2] = (Math.random())
    }else if(i<6000){
            positions[i3+0] = (Math.random()*2.5)+1
            positions[i3+1] = (Math.random())-2.5
            positions[i3+2] = (Math.random())
        }else if(i<8000){
            positions[i3+0] = (Math.random())+2.5
            positions[i3+1] = (Math.random()*2.5)-1.5
            positions[i3+2] = (Math.random())
        }else if(i<8500){
            positions[i3+0] = (Math.random())+1.5
            positions[i3+1] = (Math.random())
            positions[i3+2] = (Math.random())
        }

    //r shape    
    else if(i<10500){
        positions[i3+0] = (Math.random())+4.5
        positions[i3+1] = (Math.random()*3.5)-2.5
        positions[i3+2] = (Math.random())
    }else if(i<11000){
        positions[i3+0] = (Math.random())+5.5
        positions[i3+1] = (Math.random())
        positions[i3+2] = (Math.random())
    }

    //a shape
    else if(i<13000){
        positions[i3+0] = (Math.random())+7.5
        positions[i3+1] = (Math.random()*3.5)-2.5
        positions[i3+2] = (Math.random())
    }else if(i<15000){
        positions[i3+0] = (Math.random()*2.5)+8.5
        positions[i3+1] = (Math.random())
        positions[i3+2] = (Math.random())
    }else if(i<17000){
        positions[i3+0] = (Math.random())+10
        positions[i3+1] = (Math.random()*2.5)-2.5
        positions[i3+2] = (Math.random())
    }else if(i<17500){
        positions[i3+0] = (Math.random())+8.5
        positions[i3+1] = (Math.random())-2.5
        positions[i3+2] = (Math.random())
    }

    //n shape
    else if(i<19500){
        positions[i3+0] = (Math.random())+12
        positions[i3+1] = (Math.random()*3.5)-2.5
        positions[i3+2] = (Math.random())
    }else if(i<21500){
        positions[i3+0] = (Math.random()*2.5)+13
        positions[i3+1] = (Math.random())
        positions[i3+2] = (Math.random())
    }else if(i<23500){
        positions[i3+0] = (Math.random())+14.5
        positions[i3+1] = (Math.random()*2.5)-2.5
        positions[i3+2] = (Math.random())
    }

    //d shape
    else if(i<27500){
        positions[i3+0] = (Math.random())+19
        positions[i3+1] = (Math.random()*5)-2.5
        positions[i3+2] = (Math.random())
    }else if(i<29500){
            positions[i3+0] = (Math.random()*2.5)+16.5
            positions[i3+1] = (Math.random())-2.5
            positions[i3+2] = (Math.random())
        }else if(i<31500){
            positions[i3+0] = (Math.random())+16.5
            positions[i3+1] = (Math.random()*2.5)-1.5
            positions[i3+2] = (Math.random())
        }else if(i<32000){
            positions[i3+0] = (Math.random())+17.5
            positions[i3+1] = (Math.random())
            positions[i3+2] = (Math.random())
        }

    //s shape
    else if(i<34500){
        positions[i3+0] = (Math.random()*3.5)+21
        positions[i3+1] = (Math.random())
        positions[i3+2] = (Math.random())
    }else if(i<35500){
        positions[i3+0] = (Math.random())+21
        positions[i3+1] = (Math.random()*1.25)-1.25
        positions[i3+2] = (Math.random())
    }else if(i<37500){
        positions[i3+0] = (Math.random()*2.5)+22
        positions[i3+1] = (Math.random())-1.25
        positions[i3+2] = (Math.random())
    }else if(i<38500){
        positions[i3+0] = (Math.random())+23.5
        positions[i3+1] = (Math.random()*1.25)-2.45
        positions[i3+2] = (Math.random())
    }else if(i<39500){
        positions[i3+0] = (Math.random()*2.5)+21
        positions[i3+1] = (Math.random())-2.5
        positions[i3+2] = (Math.random())
    }

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
const particalTexture = textureLoader.load('img/&logo.png')

//Material
const bitcoinMaterial = new THREE.PointsMaterial();
bitcoinMaterial.size = 0.05;
// bitcoinMaterial.sizeAttenuation = true;
bitcoinMaterial.color = new THREE.Color(0x5073f1)
// bitcoinMaterial.map = particalTexture
bitcoinMaterial.transparent = true
bitcoinMaterial.alphaMap = particalTexture
// bitcoinMaterial.depthWrite = false
// bitcoinMaterial.depthTest = false
bitcoinMaterial.alphaTest = 0.001

// bitcoinMaterial.blending = THREE.AdditiveBlending
// bitcoinMaterial.vertexColors = true

//Partical
const coinParticals = new THREE.Points(bitcoinGeometry,bitcoinMaterial);
coinParticals.position.x = -14
group.add(coinParticals);


scene.add(group)

// coinParticals.rotation.x =  -Math.PI/6
// // tradeCoinParticals.rotation.x =  -Math.PI/6
// coinParticals.rotation.y =  -Math.PI/4
// tradeCoinParticals.rotation.y =  -Math.PI/4

// group.rotation.x =  -Math.PI/6
// group.rotation.y =  -Math.PI/4


const clock = new THREE.Clock()
const animate = function(){
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime()
  
    // coinParticals.rotation.x =  elapsedTime*0.4
    // tradeCoinParticals.rotation.x =  elapsedTime*0.02
  
    // group.rotation.x =  elapsedTime*0.2
    // group.rotation.x =  elapsedTime*0.2
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        // camera.position.z =20 -elapsedTime*0.5

        // coinParticals.scale.z = 0.5+(elapsedTime*3)
        // coinParticals.scale.x = 0.5+(elapsedTime*2)
        // coinParticals.scale.y = 0.5+(elapsedTime*0.8)
        // coinParticals.position.x = -(elapsedTime*20)
        // coinParticals.position.z = -(elapsedTime*10)

    renderer.render(scene, camera);
}
animate();

}

genrateLogoLine();

// const cube = new THREE.Mesh(
//     new THREE.BoxBufferGeometry(),
//     new THREE.MeshBasicMaterial()
// )
// scene.add(cube);

const light = new THREE.PointLight( "brown", 5, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );

camera.position.z = 20;
camera.position.y = 0;







const controls = new THREE.OrbitControls(camera, renderer.domElement);

