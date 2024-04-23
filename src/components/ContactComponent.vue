<template>
<div class="contact">
  <div class="contact-text-container">
    <div class="contact-me">
      <h2 class="title">Contacto.</h2>
      <p class="first-text">Leere todos los emails. Enviame el mensaje que quieras y me pondré en contacto con usted.</p>
      <p class="second-text">Necesito tu <b>Nombre</b> y <b>Direccion de Correo electrónico</b>, pero no recibirás nada que no sea una respuesta.</p>
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

.contact .contact-text-container .contact-me {
  position: relative;
  background-color: #d7d7d7;
  padding: 30px 50px 50px 50px;
  border-bottom: 7px solid #68a506;
  width: 70%;
}


.contact .contact-text-container .contact-me::before {
  content: "";
  position: absolute;
  right: 70px;
  width: 30px;
  height: 30px;
  border: 3px solid black;
  transform: rotate(60deg);
  z-index: 1;
}

.contact .contact-text-container .contact-me::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  transform: rotate(60deg);
  background-color: #68a506;
  top: 32px;
  right: 62px;
}

.contact .contact-text-container .contact-me .title {
  font-weight: bold;
  font-size: 50px;
  margin: 50px 0 30px -95px;
  width: 100%;
}

.contact .contact-text-container .contact-me .first-text {
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 18px;
}

</style>