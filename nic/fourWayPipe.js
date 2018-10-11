class FourWayPipe {
    constructor() {
        this.childMesh = [];

        const cubeMaterials = [ 
            new THREE.MeshBasicMaterial({color:0xff0000, transparent:true, opacity:0.1, side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({color:0x00ff00, transparent:true, opacity:0.1, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({color:0xffffff, transparent:true, opacity:0.2, side: THREE.BackSide}), // top
            new THREE.MeshBasicMaterial({color:0xffff00, transparent:true, opacity:0.1, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({color:0xff00ff, transparent:true, opacity:0.1, side: THREE.DoubleSide}), 
            new THREE.MeshBasicMaterial({color:0x00ffff, transparent:true, opacity:0.1, side: THREE.DoubleSide}), 
          ]; 
          const cubeMesh = new THREE.MeshFaceMaterial(cubeMaterials); 
          // Translate the cube up 0.25m so that the origin of the cube
          // is on its bottom face
      
          const cubeWidth = 0.5;
          const cubeHeight = 0.5;
          const cubeDepth = 0.5;
          const cubeGeometry = new THREE.BoxBufferGeometry(cubeWidth, cubeHeight, cubeDepth);
          cubeGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -(cubeHeight/2), 0));
      
          this.cube = new THREE.Mesh(cubeGeometry, cubeMesh);
      
          const cylinderMaterial = new THREE.MeshBasicMaterial({color:0xffffff, transparent:true, opacity:0.5, side: THREE.DoubleSide});
          // Translate the cube up 0.25m so that the origin of the cube
          // is on its bottom face
          const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, cubeWidth, 40, 10, true);
          cylinderGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, (cubeHeight/2) - 0.05));
      
          this.cylinder1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
          this.cylinder1.rotation.x = Math.PI / 2;

          this.cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
          this.cylinder2.rotation.x = Math.PI / 2;
          this.cylinder2.rotation.z = Math.PI / 2;

          this.childMesh = [this.cube, this.cylinder1, this.cylinder2];
      }
}