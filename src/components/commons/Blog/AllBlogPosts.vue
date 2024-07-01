<template>
  <div class="blog-posts">
    <div class="blog-posts__title">
        <h2>ALL BLOG POSTS</h2>
    </div>
    <div class="blog-posts__posts">
        <Card :slotName="'blogpost'" :type="'default'" :Width="'302'" :Height="'367'" v-for="blog,i in Blogs" :key="i">
                <template #blogpost>
                    <div class="blogs__posts--post">
                        <p>Upcoming Event</p>
                        <RouterLink :to="{name:'SingleBlog',params: {id:i,} } ">
                        <h5>{{blog.title}}</h5>
                        </RouterLink>
                        <p>{{blog.description}}</p>
                        <label>{{blog.author}}</label> <br>
                        <label>{{blog.date}}</label>
                    </div>
                </template>
        </Card>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {AllBlogs} from '../../../stores/blogs.js'
import Card from '../../ui/card.vue'


const allblogs = AllBlogs()

const Blogs = computed(()=>{
    console.log(allblogs.getAllPosts)
    return allblogs.getAllPosts
})

</script>

<style lang="scss" scoped>
a>h5{
    margin: 0;
    color: black;
}
a{
    text-decoration: none;

}
.blog-posts{
    background: rgba(245, 242, 240, 1);
    height: 1070px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title{
        text-align: center;
            margin-bottom: 80px;

        &>h2{
            margin-top: 0;
        }
    }
    &__posts{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding-left: 109px;
        row-gap: 31px;
        column-gap: 29px;
        &>div:first-child{
            box-sizing: border-box;
            border-bottom: 16px solid var(--color-darkorange);
        }
        & .blogs__posts--post{
            padding: 30px 0 30px 30px;
            &>p:first-child{
                color: rgba(165, 78, 43, 1);
                font-weight: bold;
            }
            &>h5{
                width: 255px;
                margin: 0;
                margin-top: 27px;
            }
            &>:nth-child(3){
                width: 238px;
                margin-bottom: 44px;
            }
        }
    }
}
</style>