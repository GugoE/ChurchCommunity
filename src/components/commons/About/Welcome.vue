<template>
    <div class="lovecompassion">
        <div class="lovecompassion__main">
            <h6>WELCOME TO OUR CHURCH</h6>
             <LoveCompassion/>
        </div>
        <div class="lovecompassion__infos">
            <div class="lovecompassion__infos--info">
                <h6>OUR MISSION & VISION</h6>
                <h4>STRIVING FOR A BETTER TOMORROW</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
            </div>
            <div class="lovecompassion__infos--info">
                <h6>WHAT WE DO</h6>
                <h4>BRINGING PEACE AND JOY TO THE WORLD</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import LoveCompassion from '../Home/LoveAndCompassion.vue'

</script>

<style lang="scss" scoped>
.lovecompassion{
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__main{
        height: 1000px;
        &>h6{
            text-align: center;
            margin-bottom: 10px;
        }
    }
    &__infos{
        display: flex;
        justify-content: center;
        column-gap: 60px;
        &>div{
            width: 436px;
    height: auto;
        }
    }
}
</style>