<template>
  <div class="logout">
    <bs-header home />
    <div class="container py-5">
      <div v-if="waiting" class="card">
        <div class="card-header">
          Deslogeando...
        </div>
        <div class="card-body p-5">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Cargando...</span>
          </div>
        </div>
      </div>
      <div v-else class="card">
        <div class="card-header">
          Error...
        </div>
        <div class="card-body p-5">
          <p>Ocurrió un error mientras se intentaba deslogear.</p>
          <p>
            <button type="button" class="btn btn-primary" @click="logout">Reintentar</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { check, logout } from '@/api/auth.js'

export default {
  name: 'Logout',
  data: () => ({
    waiting: true,
  }),
  computed: {
    auth: () => check(),
  },
  methods: {
    logout () {
      this.waiting = true
      setTimeout(() => {
        logout().then(() => {
          if (!this.auth) this.$router.push({ name: 'Home' })
        }).finally(() => {
          this.waiting = false
        })
      }, 1000)
    },
  },
  created () {
    this.logout()
  },
}
</script>

<style scoped>
.card {
  max-width: 450px;
  margin: 0 auto;
}
</style>
