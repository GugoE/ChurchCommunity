<template>
<div class="subheadline">
    <div class="subheadline__relevantChurch">
        <h6>SUB-HEADLINE</h6>
        <h2>A CHURCH THAT'S RELEVANT</h2>
        <div class="subheadline__churches">
            <Card :slotName="'relevantChurch'" :type="'secondary--bordered'" :Width="'411'" :Height="'365'">
                <template #relevantChurch>
                    <div class="subheadline__relevanChurch">
                        <img src="./img/icon.png" alt="">
                        <h3>ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </template>
            </Card>
             <Card :slotName="'relevantChurch'" :type="'secondary--bordered'" :Width="'411'" :Height="'365'">
                <template #relevantChurch>
                    <div class="subheadline__relevanChurch">
                        <img src="./img/icon.png" alt="">
                        <h3>GET INVOLVED</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </template>
            </Card>
             <Card :slotName="'relevantChurch'" :type="'secondary--bordered'" :Width="'411'" :Height="'365'">
                <template #relevantChurch>
                    <div class="subheadline__relevanChurch">
                        <img src="./img/icon.png" alt="">
                        <h3>GIVING BACK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </template>
            </Card>
        </div>
    </div>

    <div class="subheadline__secondSubHeadline">
        <h6>SUB-HEADLINE</h6>
        <LoveCompassion/>
    </div>
    <div class="subheadline__footer">
        <p>OUR MISSION AND VISION</p>
        <h4>CELEBRATE WITH US</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Read More <img src="./icons/Shape.png" alt=""></p>
    </div>
</div>
</template>

<script setup>
import Card from 'c:/Users/User/Desktop/church comunity project/src/components/ui/card.vue'
import Button from 'c:/Users/User/Desktop/church comunity project/src/components/ui/buttonui.vue'
import LoveCompassion from 'c:/Users/User/Desktop/church comunity project/src/components/commons/Home/LoveAndCompassion.vue'


</script>

<style lang="scss" scoped>
.subheadline{
    padding-top: 129px;
    // padding-left: 400px;
    text-align: center;
    height: 2150px;
    &__relevanChurch{
        width:315px;
        height:148px;
        text-align: left;
        padding: 100px 0 0 50px;
        &>h3{
            margin: 0;
            margin-top: 10px;
        }
    }
    &__churches {
        display: flex;
        justify-content: space-around;
    }
    &__secondSubHeadline{
        margin-top: 200px;
    }
    &__footer{
        margin-top: 180px;
        &>p{
            width: 512px;
            margin-left: 500px;
        }
    }
}
</style>