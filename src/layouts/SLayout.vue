
<template>
  <q-layout view="hHh LpR fFf" class="bg-imageku">

    <!-- <q-header reveal elevated class="bg-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-bolder text-h5 text-black">
          Cek Covid-19
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
           [ ] dengan  <span class="animate__animated animate__fadeIn animate__infinite text-red" > ❤ </span>
                di Palu
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
  border-radius: 20px

.bg-imageku
  background-image:     url("../statics/icons/image2vector.svg")
  background-repeat: no-repeat
  background-size: cover

</style>
