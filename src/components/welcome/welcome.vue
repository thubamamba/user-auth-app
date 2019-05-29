<template>
  <div id="welcome">
    <h1>A high level service provider that <br />can service companies of any size.</h1>
    <p>As computer professionals we understand a wide range of problems and can propose cost-effective and durable solutions. <br />We can integrate into your existing systems no matter the size or purpose to deliver a completely automated system.</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
  </div>
</template>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #ED4B41;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #337ab7;
  }

  .cta a:hover,
  .cta a:active {
    background-color: #ED4B41;
    color: white;
  }
</style>