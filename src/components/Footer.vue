<template>
  <div class="df footer">
    <div class="footer-nav flex-column flex1 tc">
      <router-link to="/" @click.native="onClickNav('1')">
        <span class="iconfont">&#xe652;</span>
        <div>X 信</div>
      </router-link>
    </div>
    <div class="footer-nav flex-column flex1 tc">
      <router-link to="/address">
        <span class="iconfont">&#xe624;</span>
        <div>通讯录</div>
      </router-link>
    </div>
    <div class="footer-nav flex-column flex1 tc">
      <router-link to="/find">
        <span class="iconfont">&#xe628;</span>
        <div>发现</div>
      </router-link>
    </div>
    <div class="footer-nav flex-column flex1 tc">
      <router-link to="/mine">
        <span class="iconfont">&#xe61d;</span>
        <div>我</div>
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Footer',
  data() {
    return {
      active:'1'
    }
  },
  methods: {
    onClickNav(mark) {
      console.info(mark);
    }
  }
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

.footer-nav .router-link-exact-active {
  color: rgba(68,199,98,1);
}

.footer-nav .iconfont {
  display: inline-block;
  margin-bottom: 3px;
  font-size: 20px;
}
</style>
