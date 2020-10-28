<template>
  <form @submit.prevent.stop="$emit('submit', $event)">
    <slot/>
  </form>
</template>
