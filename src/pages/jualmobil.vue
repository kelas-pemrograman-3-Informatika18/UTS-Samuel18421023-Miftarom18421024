<template>
  <q-page padding>
    <q-card flat>
      <q-card-section class="q-gutter-md">
        <div class="text-h6">Input Data Mobil yang akan dijual</div>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-pb-md q-mt-lg"
          >
            <div class="q-gutter-sm">
              <q-file v-model="filesImages" filled label="Pilih Gambar Mobil yang dijual" multiple accept=".jpg, image/*" style="max-width: 300px"/>
              <q-input label="Merk" v-model="merk" :dense="dense" :rules="[ val => val && val.length > 0 || 'tolong isi Merk']"/>
              <q-input label="Harga" v-model="harga" mask="###############" :dense="dense" :rules="[ val => val && val.length > 0 || 'tolong isi Harga Mobil Anda dengan angka']"/>
              <q-input label="Deskripsi" autogrow v-model="deskripsi" :dense="dense"/>
              <q-btn type="submit" label="Input" color="primary" icon="edit" unelevated/>
              <q-btn type="reset" label="reset" color="negative" icon="clear" flat unelevated/>
            </div>
          </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      dense: true,
      merk: null,
      harga: null,
      deskripsi: null,
      filesImages: null
    }
  },
  methods: {
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'Penjualan Mobil Berhasil di Input'
      })
      this.$router.push({ name: 'profile' })
    },
    onReset () {
      this.merk = null
      this.harga = null
      this.deskripsi = null
    }
  }
}
</script>
