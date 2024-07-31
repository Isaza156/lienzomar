<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="navbar navbar-expand navbar-light bg-light mb-0">
        <div class="container-fluid">
          <div class="title-nav">
            <h2>LIENZOMAR</h2>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink to="/" class="router-link-style">Inicio</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/gallery" class="router-link-style">Galería</RouterLink>
              </li>
            </ul>
          </div>
          <div class="social-icon-style">
            <a href="https://wa.me/34647327484" target="_blank">
              <img src="./assets//img/whatsapp.png" alt="Whatsapp" />
            </a>
            <a href="https://www.instagram.com/lienzomar/" target="_blank">
              <img src="./assets//img/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </nav>
      <div class="footer-style">
        <span>Todos los derechos reservados</span>
      </div>
    </div>
  </header>
  <RouterView />
</template>
