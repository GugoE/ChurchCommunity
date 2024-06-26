<template>
    <div class="header">
        <div class="header__context">
            <h6>SERMON</h6>  
            <h2>TAKE PART IN OUR SERMON</h2>  
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header{
    height: 419px;
    width: 100%;
    background-image: url(./img/HeaderImg.jpg);
    margin-top: 80px;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    &__context{
        padding: 160px 0 0 110px;
        &>h6{
            margin-bottom: 0;
        }
        &>h2{
            margin-top: 20px;
        }
    }    
}
</style>