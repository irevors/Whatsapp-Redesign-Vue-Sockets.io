<template class=''>
  <div class="login text-center d-flex flex-column justify-content-center">
    <h1 v-text='title' />
    <div class='container p-4 rounded'>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model='loginForm.user' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autofocus>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model='loginForm.pass' type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <button @click='login' type="button" class="btn btn-primary">Ingresar</button>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      title: 'Login',
      loginForm: {
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    login() {
      this.$router.push('home')
    }
  },
  mounted() {
    return {
      saludar() {
        console.log('estoy cargado login')
      }

    }
  }
}

</script>

<style scoped>
.login {
  min-height: 100vh;
}

.container {
  max-width: 25rem;
  background-color: #ccc;
}
</style>
