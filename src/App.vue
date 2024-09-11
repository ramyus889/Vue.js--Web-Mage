<script setup>
import UseHeader from './components/UseHeader.vue';
import UseMain from './components/UseMain.vue';
import MinCard from './components/MinCard.vue';
import BigCard from './components/BigCard.vue';
import GridCard from './components/GridCard.vue';
import MainFooter from './components/MainFooter.vue';
import UseFooter from './components/UseFooter.vue';
</script>

<template>
  <div class="">
    <UseHeader />
    <div class="flex place-content-center">
      <div class="flex flex-col gap-[200px] max-w-[1400px]">
        <UseMain />
        <MinCard />
        <BigCard />
        <GridCard />
        <MainFooter />
      </div>
    </div>
    <div class="mt-[200px]">
      <UseFooter />
    </div>
  </div>
</template>
