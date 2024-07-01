<template>
    <div class="navbar">
        <div class="navbar__logo">
            <a href="http://localhost:5173/"><img src="../commons/Home/img/Logo.png" alt=""></a>
        </div>
        <div class="navbar__links">
            <ul>
                <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/about">ABOUT US</router-link></li>
                <li><router-link to="/sermons">SERMON</router-link></li>
                <li><router-link to="/blogs">BLOG</router-link></li>
            </ul>
        </div>
        <div class="navbar__actions">
            <router-link to="/contact"><Button :type="'nav'" :label="'CONTACT US'"/></router-link>
        </div>
    </div>
</template>

<script setup>
import Button from './buttonui.vue'

</script>

<style lang="scss" scoped>
a{
    color: white;
    text-decoration: none;
    margin: 0;
}
.router-link-exact-active{
    display: block;
    min-height: 29px;
    height: auto;
    padding-left: 0px;
    padding-top: 5px;
    background: var(--color-skin);
    border-radius: 10px;
    width: auto;
    color: black;
    min-width: 80px;
    text-align: center;
}

.navbar{
    background: var(--color-black);
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    &__links{
        width: 406px;
        height: 80px;
        border-left:  2px solid rgba(255, 255, 255, 0.1);;
        &>ul{
            margin-top: 27px;
            display: flex;
            color: white;
            list-style: none;
            column-gap: 30px;
            align-items: center;
        }
    }
    &__actions {
        position: absolute;
        right: 66px;
    }
    &__logo {
        padding-left: 89px;
        margin-right: 66px;
    }
}
</style>