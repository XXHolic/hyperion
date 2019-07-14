<template>
  <div class="df header">
    {{title || "标题"}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
  min-height: 40px;
  justify-content: center;
  align-items: center;
}
</style>
