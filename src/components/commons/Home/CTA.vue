<template>
<div class="cta">
    <div class="cta__card">
        <Card :type="'default--bordered'" :Width="'768'" :Height="'480'" :slotName="'ctaCard'">
            <template #ctaCard >
                <div class="ctaInfo">
                    <h3>WE WANT TO SERVE THE WORLD AROUND US</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                    <Button :type="'nav'" :label="'VISIT'"></Button>
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
import Card from 'c:/Users/User/Desktop/church comunity project/src/components/ui/card.vue'
import Button from 'c:/Users/User/Desktop/church comunity project/src/components/ui/buttonui.vue'

</script>

<style lang="scss" scoped>
.cta{
    height: 736px;
    background-image: url('./img/cta.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    &__card{
        position: absolute;
        bottom: 80px;
        right: 364px;
    }
    .ctaInfo{
        &>h3{
            width: 430px;
        }
        &>p{
            width: 302px;
        }
        &>div{
            position: absolute;
            left: 400px;
            bottom: 30px;
        }
        position: absolute;
        left: 48px;
        top: 40px;
    }
}
</style>