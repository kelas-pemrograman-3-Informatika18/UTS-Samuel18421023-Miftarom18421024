<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" active-class="active" exact v-ripple :to="{ name: 'dashboard'}">
          <q-icon name="store" color="blue" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold">
            Quasar Jualan Mobil
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="My__toolbar-input-container row no-wrap">
          <q-input dense outlined square v-model="search" placeholder="Search" class="bg-white col" />
          <q-btn class="My__toolbar-input-btn" color="grey-3" text-color="grey-8" icon="search" unelevated />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="add_circle" to="jualmobil">
            <q-tooltip>Jual Mobil</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="message" v-if="$q.screen.gt.sm">
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              :Y
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat to="profile">
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account & toko saya</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'dashboard'}">
          <q-item-section avatar>
            <q-icon color="blue-4" name="dashboard" />
          </q-item-section>

          <q-item-section>
            Dashboard
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" to="profile">
          <q-item-section avatar>
            <q-icon color="blue-4" name="person" />
          </q-item-section>

          <q-item-section>
            Akun dan Toko saya
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'jualMobil'}">
          <q-item-section avatar>
            <q-icon color="blue-4" name="playlist_add" />
          </q-item-section>

          <q-item-section>
            Jual Mobil
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" to="login">
          <q-item-section avatar>
            <q-icon color="blue-4" name="power_settings_new" />
          </q-item-section>

          <q-item-section>
            Log out
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: ''
    }
  }
}
</script>
<style lang="sass">
.My
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
    &:hover
      color: #000
</style>
