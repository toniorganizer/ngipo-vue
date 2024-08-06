<template>
  <div>
    <nav class="navbar navbar-expand-lg position-fixed navbar-color bg-transparent w-100">
      <div class="container">
        <a class="navbar-brand" href="#">NGINPO</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/price-invitation" class="nav-link">Invitation</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/price-webland">Webland</RouterLink>
            </li>
            <!-- <li class="nav-item">
              <RouterLink class="nav-link" to="/price-webland">Landing Page</RouterLink>
            </li> -->
          </ul>
          <div>
            <RouterLink to="daftar" class="nav-link">Elegant Web & Invites</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script scope>
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementsByTagName('nav')[0]
  const navbarBrand = document.querySelector('.navbar-brand')
  const navbarLinks = document.querySelectorAll('.nav-link') // Mengambil semua elemen dengan kelas 'nav-link'

  window.addEventListener('scroll', function () {
    console.log(window.scrollY)
    if (window.scrollY > 1) {
      navbar.classList.replace('bg-transparent', 'navbar-color')
      navbarBrand.classList.add('scrolled')

      // Menambahkan kelas 'scrolled' ke semua elemen dengan kelas 'nav-link'
      navbarLinks.forEach((link) => {
        link.classList.add('scrolled')
      })
    } else if (window.scrollY == 0) {
      navbar.classList.replace('navbar-color', 'bg-transparent')
      navbarBrand.classList.remove('scrolled')

      // Menghapus kelas 'scrolled' dari semua elemen dengan kelas 'nav-link'
      navbarLinks.forEach((link) => {
        link.classList.remove('scrolled')
      })
    }
  })
})
</script>
<style></style>
