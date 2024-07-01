<template>
<div class="joinus">
    <div class="joinus__content">
        <h6>UPCOMING SERMONS</h6>
        <h1>JOIN US AND BECAME PART OF SOMETHING GRATE</h1>
    </div>
    <div class="joinus__card">
        <Card :slotName="'JoinTeam'" :type="'secondary'" :Width="'435'" :Height="'512'">
                <template #JoinTeam>
                    <div class="JoinTeam">
                        <p>Upcoming Event</p>
                        <h4>WATCH AND LISTEN TO OUR SERMONS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div class="JoinTeam__dates">
                            <div>
                                <span><img src="./icons/Clock icon.png" alt=""></span>
                                <span>Friday 23:39 IST</span>
                                <p>Saturday 11:20 ISD</p>
                            </div>
                            <div>
                                <span><img src="./icons/location icon.png" alt=""></span>
                                <span>Friday 23:39 IST</span>
                                <p>Saturday 11:20 ISD</p>
                            </div>
                            <div>
                                <Button :label="'RESGISTER'" :type="'secondary'"></Button>
                            </div>
                        </div>
                    </div>
                </template>
        </Card>
        <div class="joinus__card--img">
            <img src="./img/joinImg.jpg" alt="">
        </div>
    </div>
    <div class="joinus__viewmore">
        <a href="http://localhost:5173/sermons"><span>View all Sermons <img src="./icons/Shape.png" alt=""></span></a>
    </div>
</div>
</template>

<script setup>
import Card from '../../ui/card.vue'
import Button from '../../ui/buttonui.vue'



</script>

<style lang="scss" scoped>
a{
    color: black;
    text-decoration: none;
}
.joinus{
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    &__content{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &>*{
            text-align: center;
        }
        &>h1{
                width: 1000px;
        }
    }
    &__card{
        width: 1280px;
        height: 512px;
        top: 400px;
        display: flex;
        padding-left: 100px;
        &--img{
            width: 845px;
            height: 512px;
            &>img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    &__viewmore{
        width: 90%;
        display: flex;
        justify-content: flex-end;
    }
    
}
.JoinTeam{
    padding: 40px 40px;
    // padding-top: 39px;
    &>p:first-child{
        color: rgba(165, 78, 43, 1)
    }
    &>h4{
        margin: 0;
    }
    &>p{
        max-width: 294px;;
    }
    &>div>div>span:first-child,p{
        margin-right: 10px;
    }
    &>div>div>p{
        margin-left: 30px;
    }
}
</style>