<template>
  <div id="penilaian">
    <div class="container">
      <h2>Penilaian Mereka</h2>
      <div class="row">
        <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="6"
          autoplay
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :breakpoints="swiperOptions.breakpoints"
        >
          <swiper-slide>
            <div
              class="col-lg-12 col-md-12 col-sm-12 mt-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div class="card-penilaian">
                <p>Desain sangan minimalis dan dapat memikat pelanggan.</p>
                <div class="d-flex justify-content-between">
                  <span><p class="nama">M. Sandy</p></span>
                  <span
                    ><img src="../assets/icon/ph_star-fill.png" alt="" /><img
                      src="../assets/icon/ph_star-fill.png"
                      alt="" /><img src="../assets/icon/ph_star-fill.png" alt="" /><img
                      src="../assets/icon/ph_star-fill.png"
                      alt="" /><img src="../assets/icon/ph_star-fill.png" alt=""
                  /></span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div
              class="col-lg-12 col-md-12 col-sm-12 mt-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div class="card-penilaian">
                <p>Sangat memuaskan, revisi dapat dilakukan berkali-kali.</p>
                <div class="d-flex justify-content-between">
                  <span><p class="nama">Beril Setiawan</p></span>
                  <span
                    ><img src="../assets/icon/ph_star-fill.png" alt="" /><img
                      src="../assets/icon/ph_star-fill.png"
                      alt="" /><img src="../assets/icon/ph_star-fill.png" alt="" /><img
                      src="../assets/icon/ph_star-fill.png"
                      alt="" /><img src="../assets/icon/ph_star-fill.png" alt=""
                  /></span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            ><div
              class="col-lg-12 col-md-12 col-sm-12 mt-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div class="card-penilaian">
                <p>Pelayanan sangat baik, Sangat suka dengan hasilnya.</p>
                <div class="d-flex justify-content-between">
                  <span><p class="nama">Kamil Fauzan</p></span>
                  <span
                    ><img src="../assets/icon/ph_star-fill.png" alt="" /><img
                      src="../assets/icon/ph_star-fill.png"
                      alt="" /><img src="../assets/icon/ph_star-fill.png" alt="" /><img
                      src="../assets/icon/ph_star-fill.png"
                      alt="" /><img src="../assets/icon/ph_star-fill.png" alt=""
                  /></span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            ><div
              class="col-lg-12 col-md-12 col-sm-12 mt-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div class="card-penilaian">
                <p>Design sederhana tetapi sangat bagus dilihat</p>
                <div class="d-flex justify-content-between">
                  <span><p class="nama">Boby satrio</p></span>
                  <span
                    ><img src="../assets/icon/ph_star-fill.png" alt="" /><img
                      src="../assets/icon/ph_star-fill.png"
                      alt="" /><img src="../assets/icon/ph_star-fill.png" alt="" /><img
                      src="../assets/icon/ph_star-fill.png"
                      alt="" /><img src="../assets/icon/ph_star-fill.png" alt=""
                  /></span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            ><div
              class="col-lg-12 col-md-12 col-sm-12 mt-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div class="card-penilaian">
                <p>Bagus dan mengesankan, terbaiklah pokoknya</p>
                <div class="d-flex justify-content-between">
                  <span><p class="nama">Indri jihan</p></span>
                  <span
                    ><img src="../assets/icon/ph_star-fill.png" alt="" /><img
                      src="../assets/icon/ph_star-fill.png"
                      alt="" /><img src="../assets/icon/ph_star-fill.png" alt="" /><img
                      src="../assets/icon/ph_star-fill.png"
                      alt="" /><img src="../assets/icon/ph_star-fill.png" alt=""
                  /></span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

// Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y, Autoplay],
      swiperOptions: {
        breakpoints: {
          250: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }
      }
    }
  }
}
</script>

<style></style>
