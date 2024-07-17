<template>
  <div id="hero">
    <div class="container h-100 d-none d-lg-block">
      <div class="row h-100">
        <div class="col-lg-6 my-auto hero-tagline" data-aos="fade-up" data-aos-duration="2000">
          <h1>Desain Web dan Undangan yang Memikat</h1>
          <p class="mt-2">
            NGINPO hadir dengan layanan-layanan solusi digital yang unggul dan kreatif sesuai dengan
            kebutuhan anda.
          </p>
          <div class="row hero-cheklist">
            <div class="col-12 mt-3">
              <img src="../assets/icon/checklist.png" alt="" /> <span> Desain kustom</span>
              <img src="../assets/icon/checklist.png" class="ms-5" alt="" />
              <span> Pemeliharaan Berkelanjutan</span>
            </div>
            <div class="col-12 mt-2">
              <img src="../assets/icon/checklist.png" alt="" /> <span> Keamanan Terjamin</span>
              <img src="../assets/icon/checklist.png" class="ms-5" alt="" />
              <span> Integrasi Mudah</span>
            </div>
          </div>
          <button @click="NavWhatshapp" class="mt-5">
            <img src="../assets/icon/telp.png" class="me-3" alt="" /> Konsultasi gratis sekarang
          </button>
        </div>
        <div class="col-lg-6 my-auto" data-aos="fade-up" data-aos-duration="2000">
          <img src="../assets/icon/img-hero.png" class="img-hero" alt="" />
        </div>
      </div>
    </div>

    <!-- handphone -->
    <div class="container h-100 d-lg-none">
      <div class="row h-100">
        <div class="col-lg-6 my-auto" data-aos="fade-up" data-aos-duration="2000">
          <img src="../assets/icon/img-hero.png" class="img-hero" alt="" />
        </div>
        <div class="col-lg-6 my-auto hero-tagline" data-aos="fade-up" data-aos-duration="2000">
          <h1>Desain Web dan Undangan yang Memikat</h1>
          <p class="mt-2">
            NGINPO hadir dengan layanan-layanan solusi digital yang unggul dan kreatif sesuai dengan
            kebutuhan anda.
          </p>
          <div class="row hero-cheklist">
            <div class="col-12 mt-3">
              <img src="../assets/icon/checklist.png" alt="" /> <span> Desain kustom</span>
              <img src="../assets/icon/checklist.png" class="ms-5" alt="" />
              <span> Pemeliharaan Berkelanjutan</span>
            </div>
            <div class="col-12 mt-2">
              <img src="../assets/icon/checklist.png" alt="" /> <span> Keamanan Terjamin</span>
              <img src="../assets/icon/checklist.png" class="ms-5" alt="" />
              <span> Integrasi Mudah</span>
            </div>
          </div>
          <button @click="NavWhatshapp" class="mt-5">
            <img src="../assets/icon/telp.png" class="me-3" alt="" /> Konsultasi gratis sekarang
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    NavWhatshapp() {
      const phoneNumber = '6281282782626'
      const message = encodeURIComponent('Halo, saya ingin konsultasi gratis sekarang.')
      const url = `https://wa.me/${phoneNumber}?text=${message}`
      window.open(url, '_blank')
    }
  }
}
</script>

<style></style>
