<template>
  <section class="container">
    <div>
      <p class="not-found">error</p>
    </div>
  </section>
</template>

<script>
export default {
  // layout: 'blogs'
}
</script>

<style lang='less'>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.not-found {
  font-size: 300px;
  font-weight: bold;
  user-select: none;
}

</style>
