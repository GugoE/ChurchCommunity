<template>
<button :class="'btn-'+type">
  {{label}}
</button>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  type:{
    type: String, 
    default: 'default',
  },
  label: {
      type: String,
      required: true
  },
});
// return props
</script>

<style scss>
/* .btn-default{
  width: 182px;
  height: 64px;
  background: var(--color-skin);
  border-radius:12px;
  border: none;
}
.btn-secondary{
  width:  206px;
height: 64px;
border-radius: 12px;
  color: var(--color-skin);
background: var(--color-black);
}
.btn-nav{
  width:  182px;
height:  56px;

border-radius: 12px;
opacity: 0px;
  background: var(--color-skin);
border: none;
}
.btn-secondary:hover{
  color: white;
}
.btn-nav:hover,.btn-btn:hover{
  color: black;
  background: var(--color-darkskin);
} */
</style>
<style lang="scss" scoped>
.btn-{
  &default{
    width: 182px;
    height: 64px;
    background: var(--color-skin);
    border-radius:12px;
    border: none;
    cursor: pointer;

  }
  &secondary{
    width:  206px;
    height: 64px;
    border-radius: 12px;
    color: var(--color-skin);
    background: var(--color-black);
    cursor: pointer;

  }
  &nav{
    width:  182px;
    height:  56px;
    border-radius: 12px;
    opacity: 0px;
    background: var(--color-skin);
    border: none;
    cursor: pointer;
  }
  &secondary:hover{
    color: white;
  }
  &nav:hover,&default:hover{
    color: black;
    background: var(--color-darkskin);
  }

}
</style>