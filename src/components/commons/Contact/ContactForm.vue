<template>
<div class="contact">
    <div class="contact__form">
        <h5>Contact form:</h5>
        <form action="">
            <input type="text" placeholder="Your full Name">
            <input type="text" placeholder="Your Email">
            <input type="text" placeholder="Your address">
            <textarea placeholder="Message"></textarea>
            <Button :label="'Send message'"></Button>
        </form>
    </div>
    <div class="contact__addresses">
        <p>Address</p>
        <h5>NH 234   Public Square
        San Francisco  65368</h5>
        <p>Contact Details</p>
        <h5>(480) 555-0103
            finsweet@example.com
        </h5>
        <p>Find us here</p>
        <div class="contact__addresses--links">
            <img src="./icons/Facebook.png" alt="">
            <img src="./icons/Twitter.png" alt="">
            <img src="./icons/Twitter.png" alt="">
        </div>
    </div>
</div>
</template>

<script setup>
import Button from 'c:/Users/User/Desktop/church comunity project/src/components/ui/buttonui.vue'

</script>

<style lang="scss" scoped>
.contact{
    display: flex;
    background: rgba(245, 242, 240, 1);
    padding-left: 110px;
    padding-top: 150px;
    column-gap: 139px;
    height: 700px;
    &__form{
        &>h5{
            margin: 0;
            margin-bottom: 23px;
        }
        & form{
            display: flex;
            flex-direction: column;
            row-gap: 20px;
            & input{
                width: 624px;
                height: 64px;
                border: none;
                padding-left: 20px;
            }
            & textarea{
                width: 624px;
                height: 120px;
                border: none;
                padding-left: 20px;

            }
        }
    }
    &__addresses{
        &>h5{
            margin: 0;
            margin-bottom: 30px;
            max-width: 300px;
        }
        &>p:not(:first-child){
            font-size: 16px;
        }
        &>p:first-child{
            font-size: 18px;
            padding-top: 100px;
        }
        &--links{
            display: flex;
            column-gap: 30px;
        }
    }
}
button.btn-default {
    width: 645px !important;
}
</style>