<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Movies</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/customers">Customers</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
/* Add Google Font */
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

/* This is where we inport our custom CSS files */
@import './assets/styles/custom.css';

#app {
  font-family: 'Open Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>