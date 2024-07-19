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
            <button @click="tema2_foto">Dengan foto</button>
            <button @click="tema2_not">Tanpa foto</button>
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
            <button @click="tema3_foto">Dengan foto</button>
            <button @click="tema3_not">Tanpa foto</button>
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
            <button @click="tema4_foto">Dengan foto</button>
            <button @click="tema4_not">Tanpa foto</button>
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
            <button @click="tema5_foto">Dengan foto</button>
            <button @click="tema5_not">Tanpa foto</button>
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
            <button @click="tema6_foto">Dengan foto</button>
            <button @click="tema6_not">Tanpa foto</button>
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
            <button @click="tema7_foto">Dengan foto</button>
            <button @click="tema7_not">Tanpa foto</button>
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
            <button @click="tema8_foto">Dengan foto</button>
            <button @click="tema8_not">Tanpa foto</button>
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
    },
    tema2_foto() {
      const url = `https://hi.mengundang.co.id/preview?theme=ecd07e5e-ced8-4da4-85aa-4cf792e740b3&id=demo&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema2_not() {
      const url = `https://hi.mengundang.co.id/preview?theme=ecd07e5e-ced8-4da4-85aa-4cf792e740b3&id=demo2&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema3_foto() {
      const url = `https://hi.mengundang.co.id/preview?theme=7b247f3d-85d8-4f79-ada8-77ccab89d8b5&id=demo&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema3_not() {
      const url = `https://hi.mengundang.co.id/preview?theme=7b247f3d-85d8-4f79-ada8-77ccab89d8b5&id=demo2&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema4_foto() {
      const url = `https://hi.mengundang.co.id/preview?theme=d070512b-7314-4d0d-9fe8-87b8e15bc639&id=demo&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema4_not() {
      const url = `https://hi.mengundang.co.id/preview?theme=d070512b-7314-4d0d-9fe8-87b8e15bc639&id=demo2&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema5_foto() {
      const url = `https://hi.mengundang.co.id/preview?theme=aa69e44b-7b66-4897-9acf-16b1869a3bfd&id=demo&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema5_not() {
      const url = `https://hi.mengundang.co.id/preview?theme=aa69e44b-7b66-4897-9acf-16b1869a3bfd&id=demo2&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema6_foto() {
      const url = `https://hi.mengundang.co.id/preview?theme=66929d9f-5a5a-4382-957f-89d49fe8170b&id=demo&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema6_not() {
      const url = `https://hi.mengundang.co.id/preview?theme=66929d9f-5a5a-4382-957f-89d49fe8170b&id=demo2&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema7_foto() {
      const url = `https://hi.mengundang.co.id/preview?theme=8f44944a-ab66-4b93-bce7-0c2e276e1024&id=demo&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema7_not() {
      const url = `https://hi.mengundang.co.id/preview?theme=8f44944a-ab66-4b93-bce7-0c2e276e1024&id=demo2&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema8_foto() {
      const url = `https://hi.mengundang.co.id/preview?theme=771d478c-6230-4215-a467-381bfa05caa0&id=demo&to=nama-tamu`
      window.open(url, '_blank')
    },
    tema8_not() {
      const url = `https://hi.mengundang.co.id/preview?theme=771d478c-6230-4215-a467-381bfa05caa0&id=demo2&to=nama-tamu`
      window.open(url, '_blank')
    }
  }
}
</script>

<style></style>
