<template>
<div :class="'card-'+type" :style="'width:'+Width+'px;'+'height:'+Height+'px'">
    <slot :name="slotName">

    </slot>
</div>
</template>

<script setup>
import {defineProps, onMounted} from 'vue'
const props = defineProps({
    slotName:{
        type:String,
        required:true
    },
    type:{
        default:'default'
    },
    Width:{
        type:String,
    },
    Height:{
        type:String
    }
})
onMounted(()=>{
    console.log( props.Width)
})

</script>

<style lang="scss" scoped>
.card-{
    &default{
        background: white;
         &--bordered{
            background: white;
            border-bottom: 16px solid var(--color-darkorange);
        }
    }
    &secondary{
        background: var(--color-lightorange);
        &--bordered{
            background: var(--color-lightorange);
            border-bottom: 16px solid var(--color-darkorange);
        }
    }
}

</style>