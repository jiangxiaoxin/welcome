<template>
  <section>
    main page
  </section>
</template>

<script>
export default {
  asyncData({error}) {
    error({statusCode: 404, message: 'page not found'})
  }
}
</script>

<style>

</style>
