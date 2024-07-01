<template>
<div class="single-sermon">
    <div class="single-sermon__information">
        <img src="./img/singlesermon.png" alt="">
        <div>
            <p>UPCOMING EVENT</p>
        <h3 v-if="Sermon">{{Sermon.title}}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.
        </p>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.
        </p>
        </div>
    </div>
    <div class="single-sermon__register">
        <h4>REGISTER NOW</h4>
        <div class="single-sermon__register--date">
            <span>
            <img src="../Home/icons/location icon.png" alt="">

                No 233 Main St. New York, United States
            </span>
            <span>
            <img src="../Home/icons/Clock icon.png" alt="">

                    13 May, 2018
            </span>
        </div>
        <form action="">
            <div>
                <label for="">Full Name</label>
                <input type="text" value="Leonard John">
            </div>
            <div>
                <label for="">Email</label>
                <input type="text" value="admin@abc.com">
            </div>
        </form>
        <Button :label="'REGISTER NOW'"></Button>
    </div>
</div> 
</template>

<script setup>
import Button from '../../ui/buttonui.vue'

import {defineProps, onMounted, ref} from 'vue'
import {AllSermons} from '../../../stores/sermons.js'
const Sermons = AllSermons()

const Sermon = ref(null)

onMounted(()=>{
    console.log(props)
    Sermon.value = Sermons.getAllSermons[props.id]
    console.log(Sermon.value,'value')
    console.log(Sermons.getAllSermons[props.id])
    console.log(props.id)
})

const props = defineProps({
    id:{
        required:true
    },  
})
</script>

<style lang="scss" scoped>
.single-sermon{
    & h3{
        margin: 0 0 5px 0;
    }
    height: 850px;
    padding-top: 200px;
    background: rgba(245, 242, 240, 1);
    display: flex;
    justify-content: space-around;
    & p:nth-child(1){
        color: rgba(165, 78, 43, 1);
        font-weight: bold;
    }
    &__information{
        & h5{
            border-left: 2.5px solid var(--color-skin);
            padding-left: 10px;
        }
    }
    &__register{
        padding: 0 50px 0 50px;
        box-sizing: border-box;
        background: rgba(247, 248, 250, 1);
        width:522px;
        height:484px;
        & .single-sermon__register--date{
            max-width: 500px;
    display: flex;
    justify-content: space-between;
    column-gap: 97px;
    margin-bottom: 20px;
        }
        & form{
            display: flex;
            flex-direction: column;
            row-gap: 24px;
        margin-bottom: 20px;

            & div{
                display: flex;
                flex-direction: column;
                & input{
                    width: 412px;
                    height: 50px;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid gray;
                }
            }
        }
    }
    &__information{
        width: 630px;
    }
}
</style>