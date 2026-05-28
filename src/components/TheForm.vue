<template>
  <input
    :type="vrsta"
    class="form-control form-control-md"
    @input="$emit('input', $event.target.value)"
   
  >
</template>

<script>
export default {
  props: ['vrsta'],
};
</script>

<style scoped>

</style>