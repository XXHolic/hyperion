<template>
  <div class="df footer">
    <div class="footer-nav flex-column flex1 tc">
      <router-link to="/">message</router-link>
    </div>
    <div class="footer-nav flex-column flex1 tc">
      <router-link to="/address">address</router-link>
    </div>
    <div class="footer-nav flex-column flex1 tc">
      <router-link to="/find">find</router-link>
    </div>
    <div class="footer-nav flex-column flex1 tc">
      <router-link to="/mine">mine</router-link>
    </div>
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
  background-color: rgba(247, 247, 247, 1);
}

.footer-nav {
  justify-content: center;
}
</style>
