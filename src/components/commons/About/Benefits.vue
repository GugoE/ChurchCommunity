<template>
<div class="benefits">
  <div class="benefits__title">
    <h6>BENEFITS</h6>
    <h2>THE BENEFITS OF JOINING OUR CHURCH</h2>
  </div>
  <div class="benefits__cards">
    <div class="benefits__cards--card">
        <div class="card__content">
            <h4>FIND FULFILLMENT AND JOY</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        </div>
        <div class="card__image">
            <img src="./img/benefit1.jpg" alt="">
        </div>
    </div>
    <div class="benefits__cards--card">
        <div class="card__image">
            <img src="./img/benefit2.jpg" alt="">
        </div>
        <div class="card__content">
            <h4>SHARED VALUES</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        </div>
    </div>
    <div class="benefits__cards--card">
        <div class="card__content">
            <h4>CHARITY EVENTS</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        </div>
        <div class="card__image">
            <img src="./img/benefit3.jpg" alt="">
        </div>
    </div>
    <div class="benefits__cards--card">
        <div class="card__image">
            <img src="./img/benefit4.jpg" alt="">
        </div>
        <div class="card__content">
            <h4>ALL ARE WELCOME</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        </div>
        
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.benefits{
    width: 100%;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title{
        width: 562px;
        text-align: center;
    }
    &__cards{
        padding-top: 70px;
        display: flex;
        flex-direction: column;
        row-gap: 100px;
        &--card{
            display: flex;
            column-gap: 30px;
            &>div{
                width: 500px;
                height: 320px;
                &>img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>