<template>
  <div class="df footer">
    <div class="footer-nav flex-column flex1 tc">message</div>
    <div class="footer-nav flex-column flex1 tc">address</div>
    <div class="footer-nav flex-column flex1 tc">find</div>
    <div class="footer-nav flex-column flex1 tc">mine</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer {
  height: 50px;
  justify-content: space-between;
  background-color: rgba(247,247,247,1);
}

.footer-nav {
  justify-content: center;
}

</style>
