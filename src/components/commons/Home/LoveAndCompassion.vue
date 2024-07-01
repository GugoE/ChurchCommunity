<template>
  <div class="welcomeblog">
    <div class="welcomeblog__content">
      <h1>LOVE AND COMPASSION</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>

    <div class="welcomeblog__cards">
      <div>
        <img src="./img/lovecompassion1.jpg" alt="">
      </div>
      <div>
      <Button  :label="'READ MORE'"></Button>

        <img src="./img/lovecompassion2.jpg" alt="">
      </div>
      <div>
        <img src="./img/lovecompassion3.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '../../ui/buttonui.vue'


</script>

<style lang="scss" >
.welcomeblog{
  width: 100%;
  height: auto;
  min-height: 500px;
  text-align: center;
  min-height: 770px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  &__content{
    display: flex;
    flex-direction: column;
    align-items: center;
    &>p{
      width: 880px;
    }
    &>h1{
      margin: 0;
    }
}
&__cards{
      &>div:not(:nth-child(2)){
        width:293px;
        height:384px;
        &>img{
          width: 100%;
          height: 100%;
          border-radius: 50px;
        }
      }
      &>div:nth-child(2){
        position: relative;
        width:390px;
        height:512px;
        &>img{
          position: absolute;
          left: 0;
          top: 80px;
          width: 100%;
          height: 100%;
          border-radius: 50px;
        }
        &>button{
          position: absolute;
          top: 0px;
          left: 100px;
        }
      }
      display: flex;
      justify-content: center;
      column-gap: 46px;
    }
}
</style>