<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">
      <img src="/brand.png" height="30" alt="Rootstack" loading="lazy">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li v-if="auth" class="nav-item">
          <router-link class="nav-link" to="/">
            Inicio
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li v-if="home" class="nav-item">
          <router-link class="nav-link" to="/">
            Inicio
          </router-link>
        </li>
        <li v-else-if="auth" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <bs-icon name="person" />
            {{ username }}
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" to="profile">
              Perfil
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" to="logout">
              Salir
            </router-link>
          </div>
        </li>
        <li v-else class="nav-item">
          <router-link class="nav-link" to="login">
            Ingresar
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-light bg-light">

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>

    <ul v-if="auth" class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <bs-icon name="person" />
          {{ username }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="logout">
            Ingresar
          </router-link>
        </div>
      </li>
    </ul>
    <ul v-else class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="login">
          Ingresar
        </router-link>
      </li>
    </ul>
  </nav> -->
</template>

<script>
import bsIcon from './Icon.vue'
import { check, user } from '@/api/auth'

export default {
  components: {
    bsIcon,
  },
  props: {
    home: Boolean,
  },
  computed: {
    auth: () => check(),
    usr: () => (user() || {}),
    username () {
      return this.usr.name || 'Anónimo'
    },
  },
}
</script>
