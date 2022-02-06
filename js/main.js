const scene = new THREE.Scene();
// scene.background = new THREE.TextureLoader().load( "img/background.png " );


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const group = new THREE.Group();

const boxGeometry = new THREE .BoxGeometry(4.1,4.1,4.1);
const boxMaterial = new THREE.MeshBasicMaterial({color: "black" ,wireframe : false});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
// box.position.set(-2.25,0,2.51)
group.add(box);

//Geometry
const plateGeometry = new THREE .PlaneGeometry(0.5,5);
const material = new THREE.MeshBasicMaterial({color: "black" ,wireframe : false});
const plate = new THREE.Mesh(plateGeometry, material);
plate.position.set(-2.25,0,2.51)
group.add(plate);

const plateGeometry2 = new THREE .PlaneGeometry(0.5,1.25);
const material2 = new THREE.MeshBasicMaterial({color: "black" ,wireframe : false});
const plate2 = new THREE.Mesh(plateGeometry2, material2);
plate2.position.set(-2.25,0.4,2.05)
group.add(plate2);

const plateGeometry3 = new THREE .PlaneGeometry(0.5,3.25);
const material3 = new THREE.MeshBasicMaterial({color: "black" ,wireframe : false});
const plate3 = new THREE.Mesh(plateGeometry3, material3);
plate3.position.set(2.01,-0.85,-2.25)
plate3.rotation.y = Math.PI/2
group.add(plate3);
       

const plateGeometry4 = new THREE .PlaneGeometry(0.5,5);
const material4 = new THREE.MeshBasicMaterial({color: "black" ,wireframe : false});
const plate4 = new THREE.Mesh(plateGeometry4, material4);
plate4.position.set(-2.51,0,2.25)
plate4.rotation.y = -Math.PI/2
group.add(plate4);

const plateGeometry5 = new THREE .PlaneGeometry(0.5,1.25);
const material5 = new THREE.MeshBasicMaterial({color: "black" ,wireframe : false});
const plate5 = new THREE.Mesh(plateGeometry5, material5);
plate5.position.set(-2.1,-0.6,2.05)
plate5.rotation.y = -Math.PI/2
group.add(plate5);

const plateGeometry6 = new THREE .PlaneGeometry(0.5,3.5);
const material6 = new THREE.MeshBasicMaterial({color: "black" ,wireframe : false});
const plate6 = new THREE.Mesh(plateGeometry6, material6);
plate6.position.set(2.25,0.75,-2.05)
plate6.rotation.y = -Math.PI
group.add(plate6);

const genrateLogoLine = () =>
{



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
    const tradeParticalTexture = tradeTextureLoader.load('img/logo.jpeg')
    
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










const bitcoinGeometry = new THREE.BufferGeometry();
const count = 200000;

const positions = new Float32Array(count*3);
const colors = new Float32Array(count*3);

for(let i = 0 ; i < count*3 ; i++ ){

    const i3 = i*3
    const branch = i
    if(i<4000){
        positions[i3+0] = (Math.cos(i)*2.5)
        positions[i3+1] = (Math.random())+1
        positions[i3+2] = (Math.random()/2)+2
    }else if(i<6000){
        positions[i3+0] = (Math.random()/2)+2
        positions[i3+1] = (Math.random())+1
        positions[i3+2] = (Math.cos(i)*2)
    }else if(i<7000){
        positions[i3+0] = (Math.random()/2)+2
        positions[i3+1] = (Math.random())
        positions[i3+2] = (Math.cos(i)/2)-1.5
    }else if(i<9000){
        positions[i3+0] = (Math.random()/2)+2
        positions[i3+1] = (Math.random())-1
        positions[i3+2] = (Math.cos(i)*2)
    }else if(i<11000){
        positions[i3+0] = (Math.cos(i)*2.25)+0.25
        positions[i3+1] = (Math.random())-1
        positions[i3+2] = (Math.random()/2)+2
    }else if(i<12000){
        positions[i3+0] = ((Math.cos(i))/2)-1.5
        positions[i3+1] = (Math.random())-2
        positions[i3+2] = (Math.random()/2)+2
    }else if(i<14000){


        positions[i3+0] = (Math.random())
        positions[i3+1] = (Math.random()/2)-2.5
        positions[i3+2] = (Math.random())
    }else if(i<16000){
        positions[i3+0] = (Math.cos(i)*1.95)-0.05
        positions[i3+1] = (Math.random()/2)-2.5
        positions[i3+2] = (Math.random())-2
    }else if(i<18000){
        positions[i3+0] = (Math.random())-2
        positions[i3+1] = (Math.random()/2)-2.5
        positions[i3+2] = (Math.cos(i)*1.75)+0.75
    }



    else if(i<20000){
        positions[i3+0] = (Math.random()/2)-2.5
        positions[i3+1] = (Math.random()*1.25)-2.5
        positions[i3+2] = (Math.cos(i)*2.25)+0.25
    }
    else if(i<22000){
        positions[i3+0] = (Math.cos(i)*2.25)-0.25
        positions[i3+1] = (Math.random()*1.25)-2.5
        positions[i3+2] = (Math.random()/2)-2.5
    }else if(i<23000){
        positions[i3+0] = ((Math.cos(i))/2)+1.5
        positions[i3+1] = (Math.random())-1.25
        positions[i3+2] = (Math.random()/2)-2.5
    }else if(i<25000){
        positions[i3+0] = (Math.cos(i)*2.25)-0.25
        positions[i3+1] = (Math.random())-0.25
        positions[i3+2] = (Math.random()/2)-2.5
    }else if(i<27000){
        positions[i3+0] = (Math.random()/2)-2.5
        positions[i3+1] = (Math.random())-0.25
        positions[i3+2] = (Math.cos(i)*2)
    }else if(i<28000){
        positions[i3+0] = (Math.random()/2)-2.5
        positions[i3+1] = (Math.random()*1.25)+0.75
        positions[i3+2] = (Math.cos(i)*0.5)+1.5
    }else if(i<29000){
        positions[i3+0] = (Math.random())-0.75
        positions[i3+1] = (Math.random()/2)+2
        positions[i3+2] = (Math.random())-0.75
    }else if(i<31000){
        positions[i3+0] = (Math.cos(i)*2.5)
        positions[i3+1] = (Math.random()/2)+2
        positions[i3+2] = (Math.random()*1.25)+1.25
    }else if(i<33000){
        positions[i3+0] = (Math.random()*1.25)+1.25
        positions[i3+1] = (Math.random()/2)+2
        positions[i3+2] = (Math.cos(i)*1.625)-0.375
    }
    // positions[i3+0] = (Math.cos(i3)*2)+2
    // positions[i3+0] = Math.sin(branch) 
    // positions[i3+1] = Math.sin(branch)
    // positions[i3+1] = Math.random()
    // positions[i3+2] = Math.random()
    // positions[i3+2] = Math.sin(branch) 
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
group.add(coinParticals);

scene.add(group)

// coinParticals.rotation.x =  -Math.PI/6
// // tradeCoinParticals.rotation.x =  -Math.PI/6
// coinParticals.rotation.y =  -Math.PI/4
// tradeCoinParticals.rotation.y =  -Math.PI/4

group.rotation.x =  -Math.PI/6
group.rotation.y =  -Math.PI/4


const clock = new THREE.Clock()
const animate = function(){
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime()
  
    // coinParticals.rotation.x =  elapsedTime*0.4
    tradeCoinParticals.rotation.x =  elapsedTime*0.02
  
    group.rotation.x =  elapsedTime*0.2
    group.rotation.x =  elapsedTime*0.2
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
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

camera.position.z = 10;
camera.position.y = 0;







const controls = new THREE.OrbitControls(camera, renderer.domElement);

