<template>
  <section class="container">
    <div>
      <h1 class="title center">Hey, I'm helloca.</h1>
      <div class="subtitle links">
        I 
        <a 
          target="blank" 
          href="https://github.com/jiangxiaoxin" 
          class="code-link"
        >
          code
        </a>
        web applications.
      </div>
      <div class="links">
        <p class="subsubtitle">
          <span>E-mail:</span>
          <a 
            class="email-link"
            href="mailto:jiangyanxin1989@gmail.com" 
          >
            jiangyanxin1989@gmail.com
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.subsubtitle {
  font-size: 26px;
  line-height: 26px;
}

.code-link,
.email-link {
  display: inline-block;
  cursor: pointer;
  text-decoration: underline;
  color: #04a487;
}

.links {
  padding-top: 15px;
}
</style>
