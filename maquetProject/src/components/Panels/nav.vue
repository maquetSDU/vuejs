<template>
  <div class="mp_navbar">
    <div class="container">
      <div class="row">
        <div class="col-xs-2" v-for="link in links">
          <div class="mp_link" @click="goToLink(link)">
            {{ link.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        links: [
          { name: 'index', text: 'Главная' },
          { name: 'new', text: 'Добавить' },
        ]
      }
    },
    methods: {
      goToLink(link) {
        this.$router.push({ name: link.name })
      }
    }
  }
</script>
