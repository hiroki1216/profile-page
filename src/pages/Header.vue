<script setup>
</script>
<template>
    <header>
        <a href="index.html"><img src="../assets/logo.jpeg" height="75"  alt="H.Sプロフィールページ"></a>
        <nav>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">WORKS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>
  </header>
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
ul{
  width: 50%;
 display: flex;
 justify-content: space-around;
 font-weight: bold;
}
li{
  color: black;
  list-style: none;
  margin: auto 0;
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