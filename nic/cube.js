class Cube {
    constructor(cubeWidth, cubeHeight, cubeDepth) {
        const cubeMaterials = [ 
            new THREE.MeshBasicMaterial({color:0xff0000, transparent:true, opacity:0.1, side: THREE.BackSide}),
            new THREE.MeshBasicMaterial({color:0x00ff00, transparent:true, opacity:0.1, side: THREE.BackSide}), 
            new THREE.MeshBasicMaterial({color:0xffffff, transparent:true, opacity:0.2, side: THREE.BackSide}), // top
            new THREE.MeshBasicMaterial({color:0xffff00, transparent:true, opacity:0.1, side: THREE.BackSide}), 
            new THREE.MeshBasicMaterial({color:0xff00ff, transparent:true, opacity:0.1, side: THREE.BackSide}), 
            new THREE.MeshBasicMaterial({color:0x00ffff, transparent:true, opacity:0.1, side: THREE.BackSide}), 
          ]; 

          // Translate the cube up 0.25m so that the origin of the cube
          // is on its bottom face
          const cubeGeometry = new THREE.BoxBufferGeometry(cubeWidth, cubeHeight, cubeDepth);
          cubeGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -(cubeHeight/2), 0));
      
          this.self = new THREE.Mesh(cubeGeometry, cubeMaterials);
    }
}