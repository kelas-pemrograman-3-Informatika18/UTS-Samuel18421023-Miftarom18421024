<template>
 <q-page>
  <div class="row">
    <q-card class="fixed-center col-md-3 col-xs-12 bg-white">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-pa-md q-gutter-md item-center"
      >
      <div class="text-h6">Login</div>
        <q-input
          filled
          v-model="username"
          label="Your username *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Your password *"
          lazy-rules
          :rules="[
            val => val !== null && val.length > 0 || 'Please type your password',
          ]"
        />

        <div>
          <q-btn label="Login" type="submit" color="primary" flat class="q-ml-sm" />
          <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
          <q-btn to="register" label="Register" type="register" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </q-card>
  </div>
 </q-page>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      if (this.username === 'user' && this.password === 'user') {
        this.$q.notify({
          type: 'positive',
          message: 'Login Succes'
        })
        this.$router.push('/home')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Wrong password or Username invalid'
        })
      }
    },
    onReset () {
      this.username = null
      this.password = null
    }
  }
}
</script>
