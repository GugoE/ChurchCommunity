<template>
<div class="cta">
    <div class="cta__card">
        <Card :type="'default--bordered'" :Width="'768'" :Height="'480'" :slotName="'ctaCard'">
            <template #ctaCard >
                <div class="ctaInfo">
                    <div>
                    <h3>WE WANT TO SERVE THE WORLD AROUND US</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                    <Button :type="'nav'" :label="'VISIT'"></Button>
                    </div>

                    <div>
                        <img src="./icons/Quote icon.png" alt="">
                    </div>
                </div>
            </template>
        </Card>
    </div>
</div>
</template>

<script setup>
import Card from '../../ui/card.vue'
import Button from '../../ui/buttonui.vue'

</script>

<style lang="scss" scoped>
.cta{
    height: 736px;
    background-image: url('./img/cta.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &__card{
       &>div{
            width: 768px;
            height: 480px;
       }
    }
    .ctaInfo{
        &>h3{
            width: 430px;
        }
        &>p{
            width: 302px;
        }
        &>:first-child{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        &>:nth-child(2){
            padding-top: 177px;
        }
        display: flex;
    align-items: center;
    padding: 51px;
    box-sizing: border-box;
    justify-content: space-between;
    }
}
</style>