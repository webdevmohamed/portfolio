<template>
<div class="contact">
  <div class="contact-text-container">
    <div class="contact-me-text">
      <h2 class="title">Contacto.</h2>
      <p class="first-text">Leere todos los emails. Enviame el mensaje que quieras y me pondré en contacto con usted.</p>
      <p class="second-text">Necesito tu <b>Nombre</b> y <b>Direccion de Correo electrónico</b>, pero no recibirás nada que no sea una respuesta.</p>
    </div>
    <div class="contact-alternative">
      <img class="arrow" :src="require('@/assets/flecha.png')" alt=""/>
      <div class="linkedin-github">
        <p class="text">Escribeme en <b>LinkedIn</b> o échale un vistazo a mi repositorio <b>GitHub</b></p>
        <div class="sites">
          <div class="site-container">
            <b-icon class="icon" icon="linkedin"></b-icon>
          </div>
          <div class="site-container">
            <b-icon class="icon" icon="github"></b-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="contact-form-container">

  </div>
</div>
</template>

<script>
export default {
  name: "ContactComponent"
}
</script>

<style scoped>

.contact {
  display: flex;
  align-items: center;
}

.contact .contact-text-container {
  width: 50%;
}

.contact .contact-form-container {
  width: 50%;
}

.contact .contact-text-container .contact-me-text {
  position: relative;
  background-color: #d7d7d7;
  padding: 30px 50px 50px 50px;
  border-bottom: 7px solid #68a506;
  width: 70%;
}


.contact .contact-text-container .contact-me-text::before {
  content: "";
  position: absolute;
  right: 70px;
  width: 30px;
  height: 30px;
  border: 3px solid black;
  transform: rotate(60deg);
  z-index: 1;
}

.contact .contact-text-container .contact-me-text::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  transform: rotate(60deg);
  background-color: #68a506;
  top: 32px;
  right: 62px;
}

.contact .contact-text-container .contact-me-text .title {
  position: relative;
  font-weight: bold;
  font-size: 50px;
  margin: 50px 0 30px -95px;
  width: 100%;
  z-index: 1;
}

.contact .contact-text-container .contact-me-text .title::before {
  content: "";
  position: absolute;
  width: 70px;
  height: 50px;
  background-color: #68a506;
  opacity: 0.3;
  right: 80px;
  top: 15px;
  z-index: -1;

}


.contact .contact-text-container .contact-me-text .first-text {
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 18px;
}

.contact .contact-text-container .contact-alternative {
  width: 70%;
  text-align: center;
  margin-top: 20px;
}

.contact .contact-text-container .contact-alternative img.arrow {
  width: 100px;
  transform: rotate(-74deg);
}

.contact .contact-text-container .contact-alternative .linkedin-github {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

.contact .contact-text-container .contact-alternative .linkedin-github p.text {
  width: 65%;
  text-align: left;
  margin: 0;
}

.contact .contact-text-container .contact-alternative .linkedin-github .sites {
  display: flex;
  width: 35%;
  gap: 15px;
  margin-left: 25px;
}

.contact .contact-text-container .contact-alternative .linkedin-github .sites .site-container {
  width: 60px;
  height: 60px;
  background-color: #888888;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.contact .contact-text-container .contact-alternative .linkedin-github .sites .site-container:hover {
  background-color: #68a506;

}

.contact .contact-text-container .contact-alternative .linkedin-github .sites .site-container .icon {
  color: white;
  font-size: 150%;
}


</style>