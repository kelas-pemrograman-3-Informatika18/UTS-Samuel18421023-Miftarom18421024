<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-img src="https://www.otomart.id/berita/wp-content/uploads/2019/10/harga-mobil-avanza-terbaru.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <q-btn class="col text-h7 ellipsis">
            Toyota Avanza 1.5 G TM
          </q-btn>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            Jakarta
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Rp 150 000 000・Baru
        </div>
        <div class="text-caption text-grey">
          Surat-surat Lengkap, Pajak Hidup Bodi Mulus.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat icon="thumb_up" />
        <q-btn flat icon="storefront">
          Kunjungi Dealer
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://www.otomart.id/berita/wp-content/uploads/2019/10/harga-mobil-avanza-terbaru.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <q-btn class="col text-h7 ellipsis">
            Toyota Avanza 1.5 G TM
          </q-btn>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            Jakarta
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Rp 150 000 000・Baru
        </div>
        <div class="text-caption text-grey">
          Surat-surat Lengkap, Pajak Hidup Bodi Mulus.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat icon="thumb_up" />
        <q-btn flat icon="storefront">
          Kunjungi Dealer
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://www.otomart.id/berita/wp-content/uploads/2019/10/harga-mobil-avanza-terbaru.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <q-btn class="col text-h7 ellipsis">
            Toyota Avanza 1.5 G TM
          </q-btn>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            Jakarta
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Rp 150 000 000・Baru
        </div>
        <div class="text-caption text-grey">
          Surat-surat Lengkap, Pajak Hidup Bodi Mulus.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat icon="thumb_up" />
        <q-btn flat icon="storefront">
          Kunjungi Dealer
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stars: 4
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
