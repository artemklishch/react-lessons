<template>
  <div class="Search">
    <input type="text" class="Search__input" v-model="query">
    <button class="Search__button" @click="search()">Найти</button>
  </div>
</template>