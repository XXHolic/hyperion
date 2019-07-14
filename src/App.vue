<template>
  <div class="df flex-column" id="app">
    <div class="flex1">
      <router-view />
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #000;
}
input {
  border: 0;
}

input:focus {
  outline: none;
}

ul {
  list-style: none;
}

html,
body {
  height: 100%;
  overflow: hidden;
  font-size: 12px;
  color: #0d0d0d;
  background-color: #eee;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
}

.dn {
  display: none;
}
.di {
  display: inline;
}
.dib {
  display: inline-block;
}
.db {
  display: block;
}
.df {
  display: flex;
}
.flex-column {
  display: flex;
  flex-direction: column;
}

.flex1 {
  flex: 1;
}

.tc {
  text-align: center;
}

#app {
  height: 100%;
}
.module-container {
  height: 100%;
}
</style>
