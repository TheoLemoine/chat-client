<template>
    <div class="login">
        <div class="login-circle">
            <div class="circle-img-around">
                <img src="../assets/Contour_Poto.svg" alt="">
            </div>
            <div class="circle-global-container">
                <div class="circle-container">
                    <div class="circle-ext">
                        <div class="circle-middle">
                            <div class="circle-int">
                                <div class="circle-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>user name</h1>
        </div>
        <form @submit.prevent="handleUserConnect" class="form-login">
            Name
            <input type="text" v-model="userName">
            Picture
            <input type="url" v-model="avatarLink">
            <button type="submit">Connect</button>
        </form>
    </div>
</template>

<script>

    import  *  as  THREE  from  "three";

    let scene, camera, renderer, starGeo, stars;

    function init() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x091a2c );
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight,1, 1000);
        camera.position.z = 1;
        camera.position.x = Math.PI/2;
        renderer= new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        starGeo = new THREE.Geometry();
        for(let i=0;i<6000;i++) {
            let star = new THREE.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            );
            star.velocity = 0;
            star.acceleration = 0;
            starGeo.vertices.push(star);
        }
        let sprite = new THREE.TextureLoader().load('img/star.png');
        let starMaterial = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.7,
            map: sprite
        });

        stars = new THREE.Points(starGeo,starMaterial);
        scene.add(stars);
        animate();
    }

    function animate() {
        starGeo.vertices.forEach(p=> {
            p.velocity += p.acceleration;
            p.y -= p.velocity;
            if(p.y < -200){
                p.y = 200;
                p.velocity = 0;
            }
        });
        starGeo.verticesNeedUpdate = true;
        stars.rotation.y += 0.0001;
        renderer.render(scene,camera);
        requestAnimationFrame(animate)
    }

    init();


import User from '../classes/User'

export default {
    data() {
        return {
            userName: '',
            avatarLink: '',
        }
    },
    created() {
        const lastUser = JSON.parse(localStorage.getItem('user'))
        this.userName = lastUser.name
        this.avatarLink = lastUser.avatarLink
    },
    methods: {
        handleUserConnect(event) {
            this.$store.dispatch('connectUser', new User(this.userName, this.avatarLink))
                .then(() => this.$router.push({name: 'chat'}))
                .catch(console.error)
        },
    },
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
    background-color: #091a2c;
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

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.circle-container{
    border-radius: 100%;
    height: 150px;
    width: 150px;
    display: flex;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
}

.circle-global-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle-ext{
    width: 90%;
    height: 90%;
    border-radius: 200px;
    border: 4px solid transparent;
    border-right: 4px solid white;
    border-bottom: 4px solid white;
    -webkit-transform:rotate(-45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: 6s linear infinite rotate;
}

.circle-middle{
    width: 90%;
    height: 90%;
    border-radius: 200px;
    border: 1px solid transparent;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    -webkit-transform:rotate(-45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: 8s alternate infinite rotate;

}

.circle-int{
    width: 90%;
    height: 90%;
    border-radius: 200px;
    border: 2.5px solid transparent;
    border-right: 2.5px solid white;
    -webkit-transform:rotate(-45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: 4s alternate infinite rotate;
}

.circle-img{
    background-color: #00abe9;
    width: 80px;
    height: 80px;
    border-radius: 200px;
    opacity: 0.2;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    position: absolute;
}

.circle-img-around{
    width: 210px;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 43.95%;
    top: 8%;

}

.circle-img-around img{
    width: 100%;
}

.circle-background{
    background-color: white;
    width: 90%;
    height: 90%;
    border-radius: 200px;
    opacity: 0.4;
}


.circle-img img{
    width: auto;
    height: 100%;
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

</style>
