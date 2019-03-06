<template>
  <div id="app">


<div>
  <b-navbar toggleable="md" type="dark" variant="primary" >
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">Cozy Sleep Lab.</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-collapse>
  </b-navbar>

  <div id="app">
    <router-view/>
  </div>
</div>

<div>
  <b-nav>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</div>
<b-container class="bv-example-row">
  <b-row>
    <b-col>1 of 3</b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>
<b-container class="bv-example-row">
  <b-row>
    <b-col>1 of 2</b-col>
    <b-col>2 of 2</b-col>
  </b-row>

  <b-row>
    <b-col>1 of 3</b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>
<b-container class="bv-example-row">
  <b-row>
    <b-col>Column</b-col>
    <b-col>Column</b-col>
    <div class="w-100" />
    <b-col>Column</b-col>
    <b-col>Column</b-col>
  </b-row>
</b-container>
<b-container class="bv-example-row">
  <b-row class="justify-content-md-center">
    <b-col col lg="2">1 of 3</b-col>
    <b-col cols="12" md="auto">Variable width content</b-col>
    <b-col col lg="2">3 of 3</b-col>
  </b-row>

  <b-row>
    <b-col>1 of 3</b-col>
    <b-col cols="12" md="auto">Variable width content</b-col>
    <b-col col lg="2">3 of 3</b-col>
  </b-row>
</b-container>
<b-container fluid class="bv-example-row">
  <b-row>
    <b-col sm="9">
      Level 1: sm="9"
      <b-row>
        <b-col cols="8" sm="6">Level 2: cols="8" sm="6"</b-col>
        <b-col cols="4" sm="6">Level 2: cols="4" sm="6"</b-col>
      </b-row>
    </b-col>
  </b-row>
</b-container>

<div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-align: left;
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
