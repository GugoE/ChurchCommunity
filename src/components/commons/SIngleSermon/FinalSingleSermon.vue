<template>
<NavBar/>
<SingleSermon :id="props.id"></SingleSermon>
<AllSermons/>
<Footer/>
</template>

<script setup>
import NavBar from '../../ui/NavBar.vue'
import SingleSermon from './SingleSermon.vue'
import AllSermons from './Content.vue'
import Footer from '../../ui/Footer.vue'
import {defineProps, watch} from 'vue'

const props = defineProps({
    id:{
        required:true
    }
})
watch(() => props.id, () => {
    location.reload();
});
window.scroll(0,0)
</script>

<style lang="scss" scoped>

</style>