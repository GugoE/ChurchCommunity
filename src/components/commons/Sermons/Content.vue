<template>
  <div class="Events">
    <div class="Events__title">
        <h2>VIEW ALL EVENTS</h2>
    </div>
    <div class="Events__cards">
            <Card :slotName="'SermonEvent'" :type="'secondary'" :Width="'302'" :Height="'454'" v-for="Sermon,i in GetSermons" :key="i">
                    <template #SermonEvent>
                        <div class="card__information">
                            <div class="card__information--date">
                                <h5>{{Sermon.dateDay}}</h5>
                                <label>{{Sermon.dateMonth}}</label>
                            </div>
                            <div class="card__information--time-description">
                                <p>Upcoming Event</p>
                        <RouterLink :to="{name:'SingleSermon',params: {id:i,} } ">
                                <h5>{{Sermon.title}}</h5>
                        </RouterLink>

                                <p>{{Sermon.description}}</p>
                            </div>
                            <div class="card__information--date-time">
                                <div>
                                    <span><img src="../Home/icons/Clock icon.png" alt=""></span>
                                    <span>Friday 23:39 IST</span>
                                    <p>Saturday 11:20 ISD</p>
                                </div>
                                <div>
                                    <span><img src="../Home/icons/location icon.png" alt=""></span>
                                    <span>Friday 23:39 IST</span>
                                    <p>Saturday 11:20 ISD</p>
                                </div>
                            </div>
                        </div>
                    </template>
            </Card>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import JoinTeam from '../Home/JoinTeam.vue'
import Card from '../../ui/card.vue'
import {AllSermons} from '../../../stores/sermons'
const Sermons = AllSermons()

const GetSermons = computed(()=>{
     const allSermons = Sermons.getAllSermons
     console.log(allSermons)
     return allSermons
})

</script>

<style lang="scss" scoped>
.Events{
    padding-top: 80px;
        height: 750px;
            display: flex;
    flex-direction: column;
    align-items: center;
    
    &__cards{
        display: flex;
        justify-content: center;
        column-gap: 30px;
        &>div:first-child{
            border-bottom: 16px solid var(--color-darkorange);
            box-sizing: border-box;
        }
        &>div{
            position: relative;

            &>.card__information{
                &>.card__information--date{
                    position: absolute;
                    width: auto;
                    height: 47px;
                    right: 20px;
                    &>h5{
                        margin-bottom: 0;
                        margin-top: 20px;
                    }
                }
                &>.card__information--time-description{
                    padding: 0 28px;
                    padding-top: 82px;
                    & h5{
                        margin-bottom: 5px;
                        margin-top: 21px;
                    }
                    & a{
                        color: black;
                        text-decoration: none;
                    }
                    &>p:first-child{
                        color: rgba(165, 78, 43, 1);
                        font-weight: bold;
                    }
                }
                &>.card__information--date-time{
                    padding: 0 28px;
                    & img{
                        margin-right: 10px;
                    }
                    & p{
                        padding-left: 30px;
                    }
                }
            }
        }
    }
}
</style>