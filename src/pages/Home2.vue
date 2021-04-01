<template>
  <div class="q-pa-md column items-center bg-imageku  q-gutter-lg">

    <q-card class="my-card shadow-15 ">
      <!-- <q-card-section>
        <div class="text-h3">Feedback</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section> -->
      <q-card-section>

          <div class="text-h5 text-bold text-center text-primary"> Self Assessment Covid 19</div>

      </q-card-section>

      <q-card-section>
        <div class="">
          <div class="col-6  text-left text-body1 ">
             1. Umur
          </div><br>
         <div class="col-6  text-center text-body1">
            <q-btn-toggle v-model="umur" toggle-color="primary" :options="[
                    {label: '<10', value: '<10'},
                    {label: '11-20', value: '11-20'},
                    {label: '21-30', value: '21-30'},
                    {label: '31-40', value: '31-40'},
                    {label: '41-50', value: '41-50'},
                    {label: '50<', value: '<50'},
                ]" />
          </div><br>

          <div class="col-6  text-left text-body1 ">
            2. Dalam 14 hari terakhir, apakah anda pernah keluar rumah/ke tempat umum (pasar, fasyankes, kerumunan orang, dan lain - lain) ?
          </div><br>
          <div class="col-6  text-center text-body1">
            <q-btn-toggle v-model="keluarRumah" toggle-color="primary" :options="[
                    {label: 'Iya', value: 1},
                    {label: 'tidak', value: 0},
                ]" />
          </div><br>

          <div class="col-6  text-left text-body1">
            3. Dalam 14 hari terakhir, apakah anda pernah menggunakan transportasi umum ?
          </div><br>
          <div class="col-6  text-center text-body1">
            <q-btn-toggle v-model="transportasiUmum" toggle-color="primary" :options="[
                    {label: 'Iya', value: 1},
                    {label: 'tidak', value: 0},
                ]" />
          </div><br>

          <div class="col-6  text-left text-body1">
            4. Dalam 14 hari terakhir, apakah anda pernah melakukan perjalanan ke luar kota/internasional? (Wilayah yang terjangkit/zona merah)
          </div><br>
          <div class="col-6  text-center text-body1">
            <q-btn-toggle v-model="perjalanan" toggle-color="primary" :options="[
                    {label: 'Iya', value: 1},
                    {label: 'tidak', value: 0},
                ]" />
          </div><br>

          <div class="col-6  text-left text-body1">
            5. Dalam 14 hari terakhir, apakah anda mengikuti kegiatan yang melibatkan banyak orang?
          </div><br>
          <div class="col-6  text-center text-body1">
            <q-btn-toggle v-model="kegiatan" toggle-color="primary" :options="[
                    {label: 'Iya', value: 1},
                    {label: 'tidak', value: 0},
                ]" />
          </div><br>

          <div class="col-6  text-left text-body1">
            6. Dalam 14 hari terakhir, apakah anda memiliki riwayat kontak erat dengan  orang yang dinyatakan ODP, PDP, atau terkonfirmasi COVID-19 (berjabat tangan, berbicara, berada dalam satu ruangan/satu rumah) ?
          </div><br>
          <div class="col-6  text-center text-body1">
            <q-btn-toggle v-model="riwayatKontak" toggle-color="primary" :options="[
                    {label: 'Iya', value: 5},
                    {label: 'tidak', value: 0},
                ]" />
          </div><br>

          <div class="col-6  text-left text-body1">
            7. Dalam 14 hari terakhir, apakah anda pernah mengalami demam/batuk/pilek/sakit tenggorokan/sesak ?
          </div><br>
          <div class="col-6  text-center text-body1">
            <q-btn-toggle v-model="demam" toggle-color="primary" :options="[
                    {label: 'Iya', value: 5},
                    {label: 'tidak', value: 0},
                ]" />
          </div>
        </div>
        <br>
        <q-btn color="primary" text-color="white" label="Kirim" class="full-width" icon="send" @click="simpan()" />

      </q-card-section>
    </q-card>

    <q-dialog v-model="dialog" medium>
      <q-card>
        <q-card-section>
          <div class="text-h6">Kesimpulan</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
         <div v-html="pesan"></div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>

</template>

<script>

  export default {
    data () {
      return {
        umur: null,
        keluarRumah: null,
        transportasiUmum: null,
        perjalanan: null,
        kegiatan: null,
        riwayatKontak: null,
        demam: null,

        pesan: null,
        dialog: false

      }
    },
     firestore () {
      // var user = this.$firebase.auth().currentUser
      return {

        // pesans: this.$firebase.firestore().collection('pesans').where('status', '==', true),
        assessments: this.$firebase.firestore().collection('assessments')

        // user_arsip: this.$firebase.firestore().collection('data_arsip').where('user_id', '==', user.uid)
      }
    },
    methods: {
      async simpan () {
          console.log('umur', this.umur)
        console.log('keluarRumah', this.keluarRumah)
        console.log('transportasi umum', this.transportasiUmum)
        console.log('perjalanan', this.perjalanan)
        console.log('kegiatan', this.kegiatan)
        console.log('riwayat', this.riwayatKontak)
        console.log('demam', this.demam)
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const currentTime = new Date().toLocaleString('en-US', {
        timeZone: timezone
      })
      if (this.umur == null || this.keluarRumah == null || this.transportasiUmum == null || this.perjalanan == null || this.kegiatan == null || this.riwayatKontak == null || this.demam == null) {
          this.pesan = 'Maaf, ada error'
          this.dialog = true
      } else {
          const total = this.keluarRumah + this.transportasiUmum + this.perjalanan + this.kegiatan + this.riwayatKontak + this.demam
          console.log('total', total)
          if (total < 5) {
              this.pesan = 'Terima kasih, anda dipersilakan masuk '
              await this.$firestore.assessments.add({

            umur: this.umur,
        keluarRumah: this.keluarRumah,
        transportasiUmum: this.transportasiUmum,
        perjalanan: this.perjalanan,
        kegiatan: this.kegiatan,
        riwayatKontak: this.riwayatKontak,
        demam: this.demam,
        time: currentTime

          })
          this.dialog = true
          } else {
              console.log('total', total)
              this.pesan = 'Mohon maaf, anda <b> belum diizinkan </b> masuk. Silakan melakukan pemeriksaan kesehatan lebih lanjut'
              await this.$firestore.assessments.add({

            umur: this.umur,
        keluarRumah: this.keluarRumah,
        transportasiUmum: this.transportasiUmum,
        perjalanan: this.perjalanan,
        kegiatan: this.kegiatan,
        riwayatKontak: this.riwayatKontak,
        demam: this.demam,
        time: currentTime
          })
          this.dialog = true
          }
          this.umur = null
        this.keluarRumah = null
        this.transportasiUmum = null
        this.perjalanan = null
        this.kegiatan = null
        this.riwayatKontak = null
        this.demam = null
      }
      }
    }
  }

</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
  border-radius: 20px

</style>
