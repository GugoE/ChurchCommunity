<template>
    <div class="dropdown-wrapper" :style="'width:'+props.width">
        <div class="selected-optiom" @click="isSelectBoxOpen = !isSelectBoxOpen">
            {{mappedoption}}
        </div>
        <div class="options-wrapper" v-if="isSelectBoxOpen">
            <div class="option" v-for="(option,index) in options" :key="index" @click="toggleselected(option),isSelectBoxOpen = false">
                {{option[trackBy]}}
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, defineProps,ref,defineEmits, onMounted}from'vue'

const selected = ref(null)

const mappedoption = computed(()=>{
    return selected.value?.[props.trackBy] || selected.value || 'select'
})

const emit = defineEmits(['update:modelValue'])

let isSelectBoxOpen = ref(false)


const toggleselected = (option)=>{
    console.log(selected.value)
    selected.value = option
    console.log(selected.value)
    emit('update:modelValue',option)
}

const props = defineProps({
    options:{
        type:Array,
        required:true
    },
    modelValue:{
        default:null
    },
    width:{
        type:String,
        required:true
    },
    trackBy:{
        type:String,
        default:'name',
    }
})
onMounted(()=>{
    console.log(props.trackBy)
    console.log(props.options)
})
</script>

<style>
.dropdown-wrapper{
/* padding: 16px; */
cursor: pointer;
/* margin: 0 auto;   */
/* margin-bottom: 20px; */
/* width: 420px; */
}
.selected-optiom{
padding: 16px;
border: solid 1px #313131;
border-radius: 8px;
box-sizing: border-box;
margin-bottom: 4px;
width: auto;

}
.option:hover {
background: #c5c5c5;
}
.option {
padding: 16px;
border: solid 1px #313131;
box-sizing: border-box;
width: auto;

}
.option:last-of-type {
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
}
</style>