<template>
  <div id="app">
    <Navbar></Navbar>

    <div class="container">
      <div class="row">
        <router-view/>
      </div>
    </div>



  </div>
</template>
<style type="text/css"></style>

<script>
  import Navbar from '@/components/Panels/Nav'
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>
