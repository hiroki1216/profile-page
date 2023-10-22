<script setup>
</script>
<template>
    <header>
        <img src="@/assets/logo.jpeg" height="75"  alt="H.Sプロフィールページ">
        <nav>
          <router-link class="nav-link" to="/admin" exact active-class="link--active" >Top</router-link>
          <router-link class="nav-link" to="/admin/about" active-class="link--active" >About編集</router-link>
          <router-link class="nav-link" to="/admin/works" active-class="link--active" >Works編集</router-link>
          <router-link class="nav-link" to="/admin/logout" active-class="link--active" >ログアウト</router-link>
        </nav>
  </header>
  <router-view></router-view>
</template>
<style scoped>
header{
  display: flex;
  border-bottom: 1px solid #dcd9d9;
  }
nav{
  width: 100%;
  height :75px;
  display: flex;
  justify-content: space-around;
}
.nav-link{
  color: black;
  opacity: .5;
  list-style: none;
  margin: auto 0;
}
.router-link-exact-active{
  font-size: 20px;
  opacity: 1;
  border-bottom: 1px solid;
}
a:hover {
  color: aqua;
}
a {
color:inherit;
 text-decoration: none;
}
img{
  border-radius: 10px;
}
</style>