<template>
  <div id="undangan">
    <div class="container">
      <h2>Tema Undangan</h2>
      <div class="row mt-5">
        <div
          class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-evenly"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div class="card-undangan text-center">
            <img src="../assets/tema-undangan/tema-1.JPG" alt="" />
            <h5 class="mt-3">Tema 1</h5>
            <button @click="tema1_foto">Dengan foto</button>
            <button @click="tema1_not">Tanpa foto</button>
          </div>
        </div>

        <div
          class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-evenly"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div class="card-undangan text-center">
            <img src="../assets/tema-undangan/tema-2.JPG" alt="" />
            <h5 class="mt-3">Tema 2</h5>
            <button>Dengan foto</button>
            <button>Tanpa foto</button>
          </div>
        </div>

        <div
          class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-evenly"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div class="card-undangan text-center">
            <img src="../assets/tema-undangan/tema-3.JPG" alt="" />
            <h5 class="mt-3">Tema 3</h5>
            <button>Dengan foto</button>
            <button>Tanpa foto</button>
          </div>
        </div>

        <div
          class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-evenly"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div class="card-undangan text-center">
            <img src="../assets/tema-undangan/tema-4.JPG" alt="" />
            <h5 class="mt-3">Tema 4</h5>
            <button>Dengan foto</button>
            <button>Tanpa foto</button>
          </div>
        </div>

        <div
          class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-evenly"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div class="card-undangan text-center">
            <img src="../assets/tema-undangan/tema-5.JPG" alt="" />
            <h5 class="mt-3">Tema 5</h5>
            <button>Dengan foto</button>
            <button>Tanpa foto</button>
          </div>
        </div>

        <div
          class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-evenly"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div class="card-undangan text-center">
            <img src="../assets/tema-undangan/tema-6.JPG" alt="" />
            <h5 class="mt-3">Tema 6</h5>
            <button>Dengan foto</button>
            <button>Tanpa foto</button>
          </div>
        </div>

        <div
          class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-evenly"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div class="card-undangan text-center">
            <img src="../assets/tema-undangan/tema-7.JPG" alt="" />
            <h5 class="mt-3">Tema 7</h5>
            <button>Dengan foto</button>
            <button>Tanpa foto</button>
          </div>
        </div>

        <div
          class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-evenly"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div class="card-undangan text-center">
            <img src="../assets/tema-undangan/tema-8.JPG" alt="" />
            <h5 class="mt-3">Tema 8</h5>
            <button>Dengan foto</button>
            <button>Tanpa foto</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tema1_foto() {
      const url = `https://hi.mengundang.co.id/preview?theme=357d4bf1-5724-4925-81b0-cf34dffe9a51&id=demo&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema1_not() {
      const url = `https://hi.mengundang.co.id/preview?theme=357d4bf1-5724-4925-81b0-cf34dffe9a51&id=demo2&to=nama-tamu`
      window.open(url, '_blank')
    }
  }
}
</script>

<style></style>
