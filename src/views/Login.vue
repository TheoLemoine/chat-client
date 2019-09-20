<template>
    <div class="login">
        <div class="login-circle">
            <user-spinner :avatar="''" :size="150" :spinnerWidth="12"></user-spinner>
            <h1>user name</h1>
        </div>
        <form @submit.prevent="handleUserConnect" class="form-login">
            Name
            <input type="text" v-model="userName">
            Picture
            <input type="url" v-model="avatarLink">
            <button type="submit">Connect</button>
            <img src="../assets/star.png" alt="" style="display: none" ref="starImage">
        </form>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>

import User from '../classes/User'
import UserSpinner from '../components/UserSpinner'
import * as THREE from 'three'

export default {
    name: 'ThreeTest',
    data() {
        return {
            userName: '',
            avatarLink: '',
            camera: null,
            scene: null,
            renderer: null,
            mesh: null,
            stars: null,
        }
    },
    created() {
        const lastUser = JSON.parse(localStorage.getItem('user'))
        this.userName = lastUser.name
        this.avatarLink = lastUser.avatarLink
    },
    methods: {
        handleUserConnect() {
            this.$store.dispatch('connectUser', new User(this.userName, this.avatarLink))
                .then(() => this.$router.push({name: 'chat'}))
                .catch(console.error)
        },
        init() {
            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color( 0x091a2c );
            this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight,1, 1000);
            this.camera.position.z = 1;
            this.camera.position.x = Math.PI/2;

            this.renderer= new THREE.WebGLRenderer({ canvas : this.$refs.canvas});
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(this.renderer.domElement);

            this.starGeo = new THREE.Geometry();
            for(let i=0;i<6000;i++) {
                let star = new THREE.Vector3(
                    Math.random() * 600 - 300,
                    Math.random() * 600 - 300,
                    Math.random() * 600 - 300
                );
                star.velocity = 0;
                star.acceleration = 0;
                this.starGeo.vertices.push(star);
            }
            let sprite = new THREE.TextureLoader().load(this.$refs.starImage.getAttribute('src'));
            let starMaterial = new THREE.PointsMaterial({
                color: 0xaaaaaa,
                size: 0.7,
                map: sprite
            });

            this.stars = new THREE.Points(this.starGeo,starMaterial);
            this.scene.add(this.stars);
            this.animate();
        },
        animate() {
            this.starGeo.vertices.forEach(p => {
                p.velocity += p.acceleration;
                p.y -= p.velocity;
                if(p.y < -200){
                    p.y = 200;
                    p.velocity = 0;
                }
            });
            this.starGeo.verticesNeedUpdate = true;
            this.stars.rotation.y += 0.0001;
            this.renderer.render(this.scene,this.camera);
            requestAnimationFrame(this.animate)
        }
    },
    mounted() {

        this.init();
        this.animate();
    },
    components: {
        UserSpinner
    }
}
</script>

<style>
.login {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.form-login{
    margin-top: 60px;
}

form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-circle{
    width: 100%;
    height: 300px;
    margin-top: 80px;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.login-circle h1{
    text-align: center;
    text-transform: uppercase;
    font-size: 1.25rem;
    color: white;
    letter-spacing: .395rem;
    font-family: korolev, sans-serif;
    font-style: normal;
    font-weight: 500;
    margin-top: 10px;
}

    canvas{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
    }

</style>
