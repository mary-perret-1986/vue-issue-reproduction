<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <v-btn @click="add">+</v-btn>
      <v-btn @click="subtract">-</v-btn>
    </div>
    <div>State: {{ counter }}</div>
    <div>Getter: {{ getCounter }}</div>
  </div>
</template>

<script lang="ts" src="./Counter.ts" />
