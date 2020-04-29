<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/boy-avatar.png" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="edit"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />
        <q-tooltip>Ubah Foto Profil</q-tooltip>
      </q-card-section>
    </q-card>
    <div>
      <q-card class="q-pa-md">
          <q-item>
            <q-item-section>
              <q-item-label caption>Usernam</q-item-label>
              <q-item-label>Dealer RamSAM</q-item-label>
            </q-item-section>
            <q-item-section side >
              <q-btn icon="edit" color="blue-4" />
                <q-tooltip>Ubah username</q-tooltip>
            </q-item-section>
          </q-item>

          <q-separator spaced inset/>

      <q-item>
        <q-item-section>
          <q-item-label caption>Alamat</q-item-label>
          <q-item-label>JL. Zainal Abidin Pagar Alam, Kedaton Bandar Lampung</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-btn icon="edit" color="blue-4" />
                <q-tooltip>Ubah Alamat</q-tooltip>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />
      </q-card>
    </div>
    <div>
      <q-item active-class="active">
          <q-item-section avatar>
            <q-icon name="dashboard" color="blue-4" />
          </q-item-section>

          <q-item-section>
            Mobil yang dijual
          </q-item-section>
        </q-item>
      <q-page class="row">
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
              <q-btn flat icon="edit">
                Edit
              </q-btn>
              <q-btn flat color="negative" icon="delete">
                Delete
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
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
              <q-btn flat icon="edit">
                Edit
              </q-btn>
              <q-btn flat color="negative" icon="delete">
                Delete
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
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
              <q-btn flat icon="edit">
                Edit
              </q-btn>
              <q-btn flat color="negative" icon="delete">
                Delete
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </div>
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
