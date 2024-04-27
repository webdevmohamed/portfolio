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
    <h3 class="form-title"><b>Envíame Un Mensaje</b></h3>
    <b-form class="row g-3 form">
      <b-form-group
          id="input-group-name"
          class="col-md-6">
        <b-form-input
            id="input-name"
            type="text"
            placeholder="Nombre"
            required>
        </b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-email"
          class="col-md-6">
        <b-form-input
            id="input-email"
            type="email"
            placeholder="Correo electrónico"
            required>

        </b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-subject"
          class="col-md-12">
        <b-form-input
            id="input-subject"
            type="text"
            placeholder="Asunto">
        </b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-message"
          class="col-md-12">
      <b-form-textarea
          id="textarea"
          rows="5"
          placeholder="Mensaje">
      </b-form-textarea>
      </b-form-group>

      <b-button type="submit" squared class="send-message-button border-0 ms-2">
        <b-icon icon="cursor"></b-icon>
        <p>Enviar Mensaje</p>
      </b-button>
    </b-form>
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
  width: 35%;
  margin-top: 160px;
  margin-right: -70px;
}

.contact .contact-form-container {
  width: 65%;
}

.contact .contact-text-container .contact-me-text {
  position: relative;
  background-color: #d7d7d7;
  padding: 30px 50px 50px 50px;
  border-bottom: 7px solid #68a506;
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
  width: 75%;
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
  width: 45px;
  height: 45px;
  background-color: #888888;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.contact .contact-text-container .contact-alternative .linkedin-github .sites .site-container:hover {
  background-color: #68a506;
  transition: all 0.5s ease-out;
}

.contact .contact-text-container .contact-alternative .linkedin-github .sites .site-container .icon {
  color: white;
  font-size: 130%;
}

.contact .contact-form-container {
  background-color: black;
  padding: 150px 100px 200px 140px;
}

.contact .contact-form-container h3.form-title {
  margin-bottom: 30px;
  color: white;
}

.contact .contact-form-container .form .form-control {
  padding: 1rem;
  border-radius: 0;
  border: 2px solid #d7d7d7;
  background-color: black;
}

.contact .contact-form-container .form .form-control::placeholder {
  color: #d7d7d7;
}

.contact .contact-form-container .form .send-message-button {
  display: flex;
  align-items: center;
  padding: 15px 25px;
  background-color: #68a506;
  width: fit-content;
}

.contact .contact-form-container .form .send-message-button p {
  margin-bottom: 0;
  margin-left: 5px;
}

.contact .contact-form-container .form .send-message-button:hover {
  transition: all 0.5s ease-out;
  color: black;
  background-color: white;
}


</style>