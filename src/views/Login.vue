<template>
  <div class="login">
    <bs-header home />
    <div class="container py-5">
      <div class="card">
        <div class="card-header">
          Ingresar
        </div>
        <div class="card-body text-left">
          <bs-form @submit="submit">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input v-model="input.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input v-model="input.password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </bs-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { check, login } from '@/api/auth.js'

export default {
  name: 'Login',
  data: () => ({
    input: {
      email: '',
      password: '',
    },
  }),
  computed: {
    auth: () => check(),
  },
  methods: {
    submit () {
      // console.log(this.input)
      login(this.input).then(() => {
        if (this.auth) this.$router.push({ name: 'Home' })
      })
    },
  },
}
</script>

<style scoped>
.card {
  max-width: 450px;
  margin: 0 auto;
}
</style>
