<template>
  <div class="card flex justify-center">
    <Drawer v-model:visible="visibleRight" header="Mage" position="right">
      <div class="flex flex-col gap-3">
        <a
          href="#"
          @click="visibleRight = false"
          class="border-b-2 border-white pb-2 ps-1 hover:underline"
          >Docs</a
        >
        <a
          href="#"
          @click="visibleRight = false"
          class="border-b-2 border-white pb-2 ps-1 hover:underline"
          >Community</a
        >
        <a
          href="#"
          @click="visibleRight = false"
          class="border-b-2 border-white pb-2 ps-1 hover:underline"
          >Blog</a
        >
        <a
          href="#"
          @click="visibleRight = false"
          class="border-b-2 border-white pb-2 ps-1 hover:underline"
          >Get started</a
        >
      </div>
    </Drawer>
    <div class="flex gap-3 items-center">
      <button
        class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
      >
        Start
      </button>
      <Button severity="contrast" icon="pi pi-arrow-left" @click="visibleRight = true" />
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';

const visibleRight = ref(false);
</script>
