<template>
  <input :placeholder="textforplaceholder" :type="Type" :style="'width:'+Width+';'+'height:'+Height+';'+'background:'+Background+';'+'border:'+Border+';'+'border-radius:'+Radius+';'">
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
    textforplaceholder:{
        type:String,
        requred:true
    },
    Type:{
        type:String,
        requred:true
    },
    Width:{
        type:String,
        requred:true
    },
    Height:{
        type:String,
        requred:true
    },
    Background:{
        type:String
    },
    Border:{
        type:String
    },
    Radius:{
        type:String
    }
})
</script>

<style>

</style>