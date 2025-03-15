class ThreatAnimation {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        this.init();
    }

    init() {
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.container.appendChild(this.renderer.domElement);
        this.camera.position.z = 5;
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }
}

class PhishingAnimation extends ThreatAnimation {
    constructor(containerId) {
        super(containerId);
        this.createPhishingScene();
    }

    createPhishingScene() {
        // Create email-like geometry
        const emailGeometry = new THREE.BoxGeometry(2, 1.5, 0.1);
        const emailMaterial = new THREE.MeshPhongMaterial({ color: 0x2980b9 });
        this.email = new THREE.Mesh(emailGeometry, emailMaterial);
        
        // Add lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 0, 2);
        
        this.scene.add(this.email);
        this.scene.add(light);
        
        // Animation
        gsap.to(this.email.rotation, {
            y: Math.PI * 2,
            duration: 4,
            repeat: -1,
            ease: "none"
        });
    }
}

class RansomwareAnimation extends ThreatAnimation {
    constructor(containerId) {
        super(containerId);
        this.createRansomwareScene();
    }

    createRansomwareScene() {
        // Create lock geometry
        const lockGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
        const lockMaterial = new THREE.MeshPhongMaterial({ color: 0xe74c3c });
        this.lock = new THREE.Mesh(lockGeometry, lockMaterial);
        
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 0, 2);
        
        this.scene.add(this.lock);
        this.scene.add(light);
        
        // Animation
        gsap.to(this.lock.scale, {
            x: 1.2,
            y: 1.2,
            duration: 1,
            repeat: -1,
            yoyo: true
        });
    }
}

class TrojanAnimation extends ThreatAnimation {
    constructor(containerId) {
        super(containerId);
        this.createTrojanScene();
    }

    createTrojanScene() {
        // Create horse geometry
        const horseGeometry = new THREE.ConeGeometry(1, 2, 4);
        const horseMaterial = new THREE.MeshPhongMaterial({ color: 0x8e44ad });
        this.horse = new THREE.Mesh(horseGeometry, horseMaterial);
        
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 0, 2);
        
        this.scene.add(this.horse);
        this.scene.add(light);
        
        // Animation
        gsap.to(this.horse.position, {
            y: 0.5,
            duration: 2,
            repeat: -1,
            yoyo: true
        });
    }
}