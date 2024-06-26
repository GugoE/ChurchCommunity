<template>
<div class="footer">
    <div class="footer__content--left">
        <div class="content__left--logo">
            <img src="../commons/Home/img/footerlogo.png" alt="">
            <p>© Copyright Finsweet 2022</p>
        </div>
         <div class="content__left--address">
            <p>(480) 555-0103</p>
            <p>4517 Washington Ave. </p>
            <p>finsweet@example.com</p>
        </div>
    </div>
    <div class="footer__links">
        <h6>Quicklinks</h6>
        <ul>
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/about">ABOUT US</router-link></li>
            <li><router-link to="/sermons">SERMON</router-link></li>
            <li><router-link to="/blogs">BLOG</router-link></li>
        </ul>
    </div>
    <div class="footer__connect">
        <h6>Connect</h6>
        <div class="footer__connect--icons">
            <img src="../commons/Home/icons/Facebook.png" alt="">
            <img src="../commons/Home/icons/Twitter.png" alt="">
            <img src="../commons/Home/icons/Linkdin.png" alt="">
        </div>
    </div>
    <div class="footer__subscription">
        <h4>SUBSCRIBE TO GET LATEST UPDATES AND NEWS</h4>
        <form>
            <input type="email" placeholder="Yourmail@gmail.com">
            <Button :label="'SUBSCRIBE'"></Button>
        </form>
    </div>
</div>
</template>

<script setup>
import Button from 'c:/Users/User/Desktop/church comunity project/src/components/ui/buttonui.vue'

</script>

<style lang="scss" scoped>
a{
    color: white;
    text-decoration: none;
}
.router-link-exact-active{
    color: var(--color-skin);
}
.footer{
    & h6{
        margin: 10px;
    }
    color: white;
    height: 312px;
    background-color: rgba(22, 23, 34, 1);
    position: relative;
    display: flex;
    padding-top: 57px;
    padding-left: 65px;
    justify-content: space-between;

    &__content--left{        
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        justify-content: flex-start;
        &>.content__left--logo{
            width: 167px;
            &>p{
                font-size: 12px;
                color: rgba(255, 255, 255, 1);
            }
        }
        &>.content__left--address{
            &>p{
                font-size: 12px;
                color: rgba(255, 255, 255, 1);
            }
        }
    }

    &__links{
        &>ul{
            list-style: none;
            padding-left: 11px;
            line-height: 40px;
        }
    }

    &__connect{
        width: 88px;
        display: flex;
        flex-direction: column;
        row-gap: 26px;
        &>h6{
            margin-left: 0;
            margin-right: 0;
        }
        &--icons{
            display: flex;
            column-gap: 15px;
        }
    }

    &__subscription{
        width: auto;
        max-width: 513px;
        &>h4{
            margin: 0;
            margin-top: 10px;
        }
        &>form{
            margin-top: 30px;
            &>input{
                width:290px;
                height:64px;
                background: none;
                border: 1px solid rgba(255, 255, 255, 0.15);
                padding-left: 20px;
                border-radius: 12px;
                color: white;
            }
        }
    }
}
</style>