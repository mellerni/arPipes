class FourWayPipe {
    constructor(rotationZ) {
        if (rotationZ === undefined)
            rotationZ = 0;

        this.childMesh = [];

        const cubeWidth = 0.5;
        const cubeHeight = 0.5;
        const cubeDepth = 0.5;

        this.cube = (new Cube(cubeWidth, cubeHeight, cubeDepth)).self;

        const cylinderMaterial = new THREE.MeshBasicMaterial({
            color: 0xFFA500,
            transparent: true,
            opacity: 0.5,
            side: THREE.DoubleSide
        });
        // Translate the cube up 0.25m so that the origin of the cube
        // is on its bottom face
        const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, cubeWidth, 40, 10, true);
        cylinderGeometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, (cubeHeight / 2) - 0.05));

        this.cylinder1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        this.cylinder1.rotation.x = Math.PI / 2;

        this.cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        this.cylinder2.rotation.x = Math.PI / 2;
        this.cylinder2.rotation.z = Math.PI / 2;

        const degreeZ = (rotationZ * Math.PI) / 180;
        this.cube.rotation.y = degreeZ;
        this.cylinder1.rotation.z -= degreeZ;
        this.cylinder2.rotation.z -= degreeZ;

        this.childMesh = [this.cube, this.cylinder1, this.cylinder2];
        this.save = this.save.bind(this);
    }

    async save(){
        this.cylinder1.material.color = {r: 255, g: 255, b: 255};
        this.cylinder2.material.color = {r: 255, g: 255, b: 255};
    }
}