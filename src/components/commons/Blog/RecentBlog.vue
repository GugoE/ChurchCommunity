<template>
    <div class="recent__blog">
        <div class="recent__blog--content">
            <p>OUR BLOG</p>
            <h2>MOST RECENT POST</h2>
        </div>
        <div class="recent__blog--card">
            <div class="card__image">
                <img src="./img/blogs.jpg" alt="">
            </div>
            <div class="card__info">
                <div class="card__info--date">
                    <p>Tuesday 13 May, 2022</p>
                    <p>By John Hunau Deo</p>
                </div>
                <div class="card__info--title">
                    <h4>CHURCH WAS DOING WHAT HE OFTEN DID WHEN DROPPED AN ORACLE</h4>
                </div>
                <div class="card__info--description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                    </p>
                </div>
                <div class="card__info--actions">
                    <Button :label="'READ MORE'"></Button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import Button from '../../ui/buttonui.vue'

</script>

<style lang="scss" scoped>
.recent__blog{
    background: rgba(245, 242, 240, 1);
    margin-top: 80px;
    height: 800px;
    padding-top: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &--content{
        text-align: center;
    }
    &--card{
        margin-left: 100px;
        padding: 0 62px;
        width: 1280px;
        padding-top: 55px;
        background: white;
        height: 496px;
        box-sizing: border-box;
        display: flex;
        column-gap: 47px;
    }
     & .card__info{
        &--date{
            display: flex;
            justify-content: space-between;
        }
        &--title{
            & h4{
                margin: 15px 0;
            }
        }
        &--actions{
            margin-top: 40px;
        }
    }
}
</style>