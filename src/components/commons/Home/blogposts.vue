<template>
  <div class="blogs">
    <div class="blogs__context">
        <p>READ OUR BLOG</p>
        <h2>SHARE,INSPIRE,INOVATE</h2>
    </div>
    <div class="blogs__posts">
        <Card :slotName="'blogpost'" :type="'secondary--bordered'" :Width="'302'" :Height="'367'">
                <template #blogpost>
                    <div class="blogs__posts--post">
                        <p>Upcoming Event</p>
                        <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <label>By Mathew Johnson</label> <br>
                        <label>Tuesday 13 May, 2021</label>
                    </div>
                </template>
        </Card>
        <Card :slotName="'blogpost'" :type="'secondary--bordered'" :Width="'302'" :Height="'367'">
                <template #blogpost>
                    <div class="blogs__posts--post">
                        <p>Upcoming Event</p>
                        <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <label>By Mathew Johnson</label> <br>
                        <label>Tuesday 13 May, 2021</label>
                    </div>
                </template>
        </Card>
        <Card :slotName="'blogpost'" :type="'secondary--bordered'" :Width="'302'" :Height="'367'">
                <template #blogpost>
                    <div class="blogs__posts--post">
                        <p>Upcoming Event</p>
                        <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <label>By Mathew Johnson</label> <br>
                        <label>Tuesday 13 May, 2021</label>
                    </div>
                </template>
        </Card>
        <Card :slotName="'blogpost'" :type="'secondary--bordered'" :Width="'302'" :Height="'367'">
                <template #blogpost>
                    <div class="blogs__posts--post">
                        <p>Upcoming Event</p>
                        <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <label>By Mathew Johnson</label> <br>
                        <label>Tuesday 13 May, 2021</label>
                    </div>
                </template>
        </Card>
    </div>
  </div>
</template>

<script setup>
import Card from '../../ui/card.vue'


</script>

<style lang="scss" scoped>
.blogs{
    height: 850px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 180px;

    &__context{
        text-align: center;
    }
    &__posts{
        display: flex;
        column-gap: 30px;
        &--post{
            padding: 60px 0 30px 30px;
            &>p:first-child{
                color: rgba(165, 78, 43, 1)
            }
            &>h5{
                width: 247px;
                margin: 0;
                margin-top: 27px;
            }
            &>:nth-child(3){
                width: 238px;
            }
        }
    }
}
</style>