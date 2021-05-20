<template>
  <div class="mt-button" @click="$emit('click', $event)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MtButton'
}
</script>

<style>
.mt-button {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 5px;

  font-size: 16px;
  color: white;
  background: #00a3a3;
  cursor: pointer;
}
</style>
