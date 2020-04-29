<template>
 <q-page>
  <div class="row">
    <q-card class="fixed-center col-md-3 col-xs-12 bg-white">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-pa-md q-gutter-md item-center"
      >
      <div class="text-h6">Registrasi Akun</div>
        <q-input
          filled
          v-model="Nama"
          label="Full Name *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type your name']"
          :dense="dense"
          />

          <q-input
          filled
          v-model="email"
          label="Alamat Email *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type your email Address']"
          :dense="dense"
          />

          <q-input
            filled
            v-model="username"
            label="Your username *"
            :rules="[ val => val !== null && val.length <= 12 || 'Please type username Max 12 char']"
            :dense="dense"
          />

          <q-input
            filled
            type="password"
            v-model="password"
            label="Your password *"
            :rules="[val => val !== null && val.length >= 0 || 'Please type your password Max 12 char',
            ]"
            :dense="dense"
          />
        <div>
          <q-btn label="Submit" type="submit" color="primary" flat class="q-ml-sm" />
          <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
          <q-btn to="/" label="back" type="back" color="primary" flat class="q-ml-sm" />
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
      email: null,
      password: null,
      password1: null,
      Nama: null,
      Address: null,
      submitting: false,
      dense: true
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/login')
    },
    onReset () {
      this.username = null
      this.email = null
      this.password = null
      this.password1 = null
      this.Nama = null
      this.Address = null
    }
  }
}
</script>
