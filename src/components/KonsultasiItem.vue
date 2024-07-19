<template>
  <div id="konsultasi">
    <div class="container mt-5">
      <h2>Konsultasi Sekarang</h2>
      <div class="row" data-aos="fade-right" data-aos-duration="2000">
        <div class="col-lg-6">
          <p>
            Silakan isi form dibawah ini untuk melakukan Konsultasi dengan tim professional kami
            tanpa dipungut biaya.
          </p>

          <div class="form-floating mb-3 mt-4">
            <input
              type="text"
              v-model="name"
              class="form-control"
              id="floatingInput"
              placeholder="Nama anda"
            />
            <label for="floatingInput">Nama</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              v-model="phone"
              class="form-control"
              id="floatingInput"
              placeholder="No. Whatshapp"
            />
            <label for="floatingInput">No. Whatshapp</label>
          </div>
          <div class="form-floating mb-3">
            <select
              class="form-select"
              id="floatingSelect"
              v-model="service"
              aria-label="Floating label select example"
            >
              <option disabled value="">Pilih salah satu layanan</option>
              <option value="website">Pengembangan Website</option>
              <option value="landingpage">Membuat Landing Page</option>
              <option value="undangan">Undangan</option>
            </select>
            <label for="floatingSelect">Pilih layanan</label>
          </div>

          <button @click="NavWhatshapp" class="konfirmasi">
            <img src="../assets/icon/wa.png" alt="" class="me-3" /> Terhubung ke whatshapp
          </button>
        </div>
        <div
          class="col-lg-6 my-auto logo d-flex justify-content-center"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <img src="../assets/icon/logo.png" alt="" />
        </div>
      </div>
      <div class="row mb-4 mt-5">
        <div class="col-lg-12 text-center akhir">
          <span>Copyright @Nginpo 2024</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      service: ''
    }
  },
  methods: {
    NavWhatshapp() {
      const phoneNumber = '6281282782626'
      const message = encodeURIComponent(
        `Halo, saya ${this.name}. No. WhatsApp saya ${this.phone}. Saya ingin konsultasi mengenai ${this.service}.`
      )
      const url = `https://wa.me/${phoneNumber}?text=${message}`
      window.open(url, '_blank')
    }
  }
}
</script>

<style></style>
