<template>
  <div class="login">
    <bs-header />
    <div class="container py-5">
      <div class="card">
        <div class="card-header">
          Perfil de usuario
        </div>
        <div v-if="loading" class="card-body py-5">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Cargando...</span>
          </div>
        </div>
        <div v-else class="card-body text-left">
          <div class="form-group">
            <label>Nombre</label>
            <span class="form-control">{{ user.name }}</span>
          </div>
          <div class="form-group">
            <label>Email</label>
            <span class="form-control">{{ user.email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { check, me } from '@/api/auth.js'

export default {
  name: 'Login',
  data: () => ({
    loading: true,
    user: null,
  }),
  computed: {
    auth: () => check(),
  },
  methods: {
    loadUser () {
      me().then(user => {
        this.user = user
      }).finally(() => {
        this.loading = false
      })
    },
  },
  created () {
    if (!this.auth) this.$router.push({ name: 'Home' })
    else this.loadUser()
  },
}
</script>

<style scoped>
.card {
  max-width: 450px;
  margin: 0 auto;
}
</style>
