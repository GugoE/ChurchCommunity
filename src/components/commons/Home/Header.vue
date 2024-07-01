<template>
  <div class="headerBanner">
    <div class="headerBanner__context">
        <p>WELCOME TO OUR CHURCH</p>
        <h1>BECOME A PART OF OUR COMUNITY</h1>
        <div class="headerBanner__context--actions">
            <Button :label="'LEARN MORE'"></Button>
        </div>
        <div class="headerBanner__context--shortText">
            <canvas></canvas>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        </div>
    </div>
  </div>
</template>

<script setup>
import Button from '../../ui/buttonui.vue'


</script>

<style lang="scss" scoped>
.headerBanner{
    background-image: url('./img/HeaderImg.jpg');
    height: 663px;
    background-position: center;
    position: relative;
    margin-top: 80px;
    &__context{
        position: absolute;
        display: block;
        color: white;
        top: 128px;
        left: 110px;
        width: 700px;
        height: auto;
        &--shortText{
            &>canvas{
                width: 18px;
                height: 0;
                border-bottom: 2px solid var(--color-skin);
                margin-right: 10px;
            }
            width: 338px;
            display: flex;
            align-items: center;
            &>p{
                // margin-top: 55px;
                padding-top: 12px;
            }
        }
    }
}
</style>