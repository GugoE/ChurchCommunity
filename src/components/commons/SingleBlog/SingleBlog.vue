<template>
<div class="single-blog">
    <div class="single-blog__main">
        <p>Relationship</p>
        <h2>{{Blog.title}}</h2>
        <p>13 May, 2018 By Mathew Johnson</p>
        <img src="./img/main.png" alt="">
    </div>
    <div class="single-blog__secondary">
        <h2>LOREM IPSUM DOLOR SIT AMET</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
        <p>Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.</p>
        <img src="./img/secondary.jpg" alt="">
        <h4>LOREM IPSUM DOLOR SIT AMET</h4>
        <p>Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
    </div>
</div> 
</template>

<script setup>
import Button from 'c:/Users/User/Desktop/church comunity project/src/components/ui/buttonui.vue'

import {computed, defineProps, onMounted, onUpdated, ref} from 'vue'
import {AllBlogs} from 'c:/Users/User/Desktop/church comunity project/src/stores/blogs.js'
const Blogs = AllBlogs()

const Blog = computed(()=>{
    return Blogs.getAllPosts[props.id]
})

// onMounted(()=>{
//     console.log(props)
//     Sermon.value = Sermons.getAllSermons[props.id]
//     console.log(Sermon.value,'value')
//     console.log(Sermons.getAllSermons[props.id])
//     console.log(props.id)
// })


const props = defineProps({
    id:{
        required:true
    },  
})
</script>

<style lang="scss" scoped>
.single-blog{
    margin-top: 80px;
    padding: 100px 0px;
    text-align: center;
    height: auto;
    &__secondary{
        text-align: left;
        width: 800px;
        padding-left:300px;
        &>h4{
            margin: 0;
            display: none;
        }
        &>:nth-child(7){
            border-left: 3px solid var(--color-skin);
            font-size: 24px;
            padding-left: 20px;
        }
    }
}
</style>