<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const handleClickLogin = () => {
  router.replace('home')
}
</script>

<template>
  <div class="login-wrapper">
    <div id="logo">
      <h1><i>企业环保智慧管控平台</i></h1>
    </div>
    <section class="stark-login">
      <div class="form">
        <div id="fade-box">
          <input
            id="username"
            type="text"
            name="username"
            placeholder="用户名"
          >
          <input type="password" placeholder="密码">

          <button @click="handleClickLogin">登 录</button>
        </div>
      </div>
      <div class="hexagons">
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <br>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <br>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>

        <br>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <br>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
        <span>&#x2B22;</span>
      </div>
    </section>

    <div id="circle1">
      <div id="inner-cirlce1">
        <h2 />
      </div>
    </div>

    <ul>
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
  </div>
</template>

<style scoped lang="scss">
$stark-light-blue: #00FFFF;
$stark-med-blue: #00a4a2;

.login-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background: url('./images/bg.png') #000 no-repeat;
  background-size: 100% 100%;
}

#logo {
  animation: logo-entry 4s ease-in;
  width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 40;
}

h1 {
  animation: text-glow 2s ease-out infinite alternate;
  color: $stark-med-blue;
  font-size: 48px;
  font-weight: bold;
  position: absolute;
  text-shadow: 0 0 10px #000, 0 0 20px #000, 0 0 30px #000, 0 0 40px #000, 0 0 50px #000, 0 0 60px #000, 0 0 70px #000;
  top: 50px;

  &:before {
    animation: before-glow 2s ease-out infinite alternate;
    border-left: 535px solid transparent;
    border-bottom: 10px solid $stark-med-blue;
    content: ' ';
    height: 0;
    position: absolute;
    right: -74px;
    top: -10px;
    width: 0;
  }

  &:after {
    animation: after-glow 2s ease-out infinite alternate;
    border-left: 100px solid transparent;
    border-top: 16px solid $stark-med-blue;
    content: ' ';
    height: 0;
    position: absolute;
    right: -85px;
    top: 24px;
    transform: rotate(-47deg);
    width: 0;
  }
}

#fade-box {
  animation: input-entry 3s ease-in;
  z-index: 1;
}

.stark-login {
  .form {
    animation: form-entry 3s ease-in-out;
    background: #111;
    background: linear-gradient(#004746, #111);
    border: 6px solid $stark-med-blue;
    box-shadow: 0 0 15px #00fffd;
    border-radius: 5px;
    display: inline-block;
    height: 220px;
    margin: 200px auto 0;
    position: relative;
    z-index: 1;
    width: 500px;
    transition: 1s all;

    &:hover {
      border: 6px solid #00fffd;
      box-shadow: 0 0 25px #00fffd;
      transition: 1s all;
    }
  }


  input {
    background: #222;
    background: linear-gradient(#333, #222);
    border: 1px solid #444;
    border-radius: 5px;
    box-shadow: 0 2px 0 #000;
    color: #888;
    display: block;
    font-size: 13px;
    font-size: 1.3rem;
    height: 40px;
    margin: 20px auto 10px;
    padding: 0 10px;
    text-shadow: 0 -1px 0 #000;
    width: 400px;
  }

  input:focus {
    animation: box-glow 1s ease-out infinite alternate;
    background: #0B4252;
    background: linear-gradient(#333933, #222922);
    border-color: #00fffc;
    box-shadow: 0 0 5px rgba(0, 255, 253, .2), inset 0 0 5px rgba(0, 255, 253, .1), 0 2px 0 #000;
    color: #efe;
    outline: none;
  }

  input:invalid {
    border: 2px solid red;
    box-shadow: 0 0 5px rgba(255, 0, 0, .2), inset 0 0 5px rgba(255, 0, 0, .1), 0 2px 0 #000;
  }


  button {
    animation: input-entry 3s ease-in;
    background: #222;
    background: linear-gradient(#333, #222);
    box-sizing: content-box;
    border: 1px solid #444;
    border-left-color: #000;
    border-radius: 5px;
    box-shadow: 0 2px 0 #000;
    color: #fff;
    display: block;
    font-size: 13px;
    font-weight: 400;
    height: 40px;
    line-height: 40px;
    margin: 20px auto;
    padding: 0;
    position: relative;
    text-shadow: 0 -1px 0 #000;
    width: 400px;
    transition: 1s all;
  }

  button:hover,
  button:focus {
    background: #0C6125;
    background: linear-gradient(#393939, #292929);
    color: $stark-light-blue;
    outline: none;
    transition: 1s all;
  }

  button:active {
    background: #292929;
    background: linear-gradient(#393939, #292929);
    box-shadow: 0 1px 0 #000, inset 1px 0 1px #222;
    top: 1px;
  }
}

#circle1 {
  animation: circle1 4s linear infinite, circle-entry 6s ease-in-out;
  background: #000;
  border-radius: 50%;
  border: 10px solid $stark-med-blue;
  box-shadow: 0 0 0 2px black, 0 0 0 6px $stark-light-blue;
  height: 500px;
  width: 500px;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -250px;
  overflow: hidden;
  opacity: 0.4;
}

#inner-cirlce1 {
  background: #000;
  border-radius: 50%;
  border: 36px solid $stark-light-blue;
  height: 460px;
  width: 460px;
  margin: 10px;


  &:before {
    content: ' ';
    width: 240px;
    height: 480px;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:after {
    content: ' ';
    width: 480px;
    height: 240px;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
  }

}

.hexagons {
  animation: logo-entry 4s ease-in;
  color: #000;
  font-size: 52px;
  font-size: 5.1rem;
  letter-spacing: -0.2em;
  line-height: 0.7;
  position: absolute;
  text-shadow: 0 0 6px $stark-light-blue;
  top: 310px;
  width: 100%;
  transform: perspective(600px) rotateX(60deg) scale(1.4);
}

@keyframes logo-entry {
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


@keyframes circle-entry {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }
  100% {
    opacity: 0.4;
  }
}

@keyframes input-entry {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes form-entry {
  0% {
    height: 0;
    width: 0;
    opacity: 0;
    padding: 0;
  }
  20% {
    height: 0;
    border: 1px solid $stark-med-blue;
    width: 0;
    opacity: 0;
    padding: 0;
  }


  40% {
    width: 0;
    height: 220px;
    border: 6px solid $stark-med-blue;
    opacity: 1;
    padding: 0;
  }

  100% {
    height: 220px;
    width: 500px;

  }
}


@keyframes box-glow {
  0% {
    border-color: #00b8b6;
    box-shadow: 0 0 5px rgba(0, 255, 253, .2), inset 0 0 5px rgba(0, 255, 253, .1), 0 2px 0 #000;
  }
  100% {
    border-color: $stark-light-blue;
    box-shadow: 0 0 20px rgba(0, 255, 253, .6), inset 0 0 10px rgba(0, 255, 253, .4), 0 2px 0 #000;
  }
}

@keyframes text-glow {
  0% {
    color: $stark-med-blue;
    text-shadow: 0 0 10px #000, 0 0 20px #000, 0 0 30px #000, 0 0 40px #000, 0 0 50px #000, 0 0 60px #000, 0 0 70px #000;
  }
  100% {
    color: $stark-light-blue;
    text-shadow: 0 0 20px rgba(0, 255, 253, .6), 0 0 10px rgba(0, 255, 253, .4), 0 2px 0 #000;
  }
}

@keyframes before-glow {
  0% {
    border-bottom: 10px solid $stark-med-blue;
  }
  100% {
    border-bottom: 10px solid $stark-light-blue;
  }
}

@keyframes after-glow {
  0% {
    border-top: 16px solid $stark-med-blue;
  }
  100% {
    border-top: 16px solid $stark-light-blue;
  }
}

@keyframes circle1 {
  0% {
    transform: none;
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
