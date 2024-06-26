<template>
<NavBar/>
<SingleBlog :id="props.id"></SingleBlog>
<Footer/>
</template>

<script setup>
import NavBar from '../../ui/NavBar.vue'
import SingleBlog from './SingleBlog.vue'
import Footer from '../../ui/Footer.vue'
import {defineProps, watch} from 'vue'

const props = defineProps({
    id:{
        required:true
    }
})

window.scroll(0,0)
</script>

<style lang="scss" scoped>

</style>