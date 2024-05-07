<template>
  <div class="contact">
    <div class="contact-text-container">
      <transition name="slide-fade">
        <div class="contact-me-text" v-show="showContactText">
          <h2 class="title">Contacto.</h2>
          <p class="first-text">Leere todos los emails. Enviame el mensaje que quieras y me pondré en contacto con
            usted.</p>
          <p class="second-text">Necesito tu <b>Nombre</b> y <b>Direccion de Correo electrónico</b>, pero no recibirás
            nada que no sea una respuesta.</p>
        </div>
      </transition>
      <transition name="slide-fade">
        <div class="contact-alternative" v-show="showContactAlternative">
          <img class="arrow" :src="require('@/assets/flecha.png')" alt="" />
          <div class="linkedin-github">
            <p class="text">Escribeme en <b>LinkedIn</b> o échale un vistazo a mi repositorio <b>GitHub</b></p>
            <div class="sites">
              <div class="site-container">
                <a href="https://www.linkedin.com/in/mohamedmortahil/" class="site-link" target="_blank">
                  <b-icon class="icon" icon="linkedin"></b-icon>
                </a>
              </div>
              <div class="site-container">
                <a href="https://github.com/webdevmohamed" class="site-link" target="_blank">
                  <b-icon class="icon" icon="github"></b-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <transition name="slide-fade">
      <div class="contact-form-container" v-show="showForm">
        <h3 class="form-title"><b>Envíame Un Mensaje</b></h3>
        <form @submit.prevent="submitForm()" class="row g-3 form">
          <div class="col-md-6 form-floating">
            <input id="input-name" type="text" class="form-control"
              :class="{ 'is-invalid': !$v.form.name.required && $v.form.name.$dirty, 'is-valid': $v.form.name.$required && $v.form.name.$dirty }"
              v-model="$v.form.name.$model" placeholder="Nombre" required>
            <label for="input-name">Nombre</label>
            <div class="invalid-feedback">
              Este campo es obligatorio.
            </div>
          </div>

          <div class="col-md-6 form-floating">
            <input id="input-email" type="email" class="form-control"
              :class="{ 'is-invalid': $v.form.email.$invalid && $v.form.email.$dirty, 'is-valid': !$v.form.email.$invalid && $v.form.email.$dirty }"
              v-model="$v.form.email.$model" placeholder="Correo electrónico" required>
            <label for="input-email">Correo electrónico</label>
            <div class="invalid-feedback">
              {{ $v.form.email.$invalid && $v.form.email.$model === "" ?
                'Este campo es obligatorio.' : '' }}
              {{ $v.form.email.$invalid && $v.form.email.$model !== "" ?
                'Por favor, introduce una dirección de correo electrónico válida.' : '' }}
            </div>
          </div>

          <div class="col-md-12 form-floating">
            <input id="input-subject" type="text" class="form-control" placeholder="Asunto">
            <label for="input-subject">Asunto</label>
          </div>

          <div class="col-md-12 form-floating">
            <textarea id="textarea" class="form-control" placeholder="Mensaje" style="height: 207px"></textarea>
            <label for="textarea">Mensaje</label>
          </div>

          <button type="submit" squared class="send-message-button border-0 ms-2 mt-5">
            <b-icon icon="cursor"></b-icon>
            <p>Enviar Mensaje</p>
          </button>
        </form>
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="contact-alternative-responsive" v-show="showContactAlternative">
        <img class="arrow" :src="require('@/assets/flecha.png')" alt="" />
        <div class="linkedin-github">
          <p class="text">Escribeme en <b>LinkedIn</b> o échale un vistazo a mi repositorio <b>GitHub</b></p>
          <div class="sites">
            <div class="site-container">
              <a href="https://www.linkedin.com/in/mohamedmortahil/" class="site-link" target="_blank">
                <b-icon class="icon" icon="linkedin"></b-icon>
              </a>
            </div>
            <div class="site-container">
              <a href="https://github.com/webdevmohamed" class="site-link" target="_blank">
                <b-icon class="icon" icon="github"></b-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
export default {
  name: "ContactComponent",
  data() {
    return {
      showContactText: false,
      showContactAlternative: false,
      showForm: false,
      form: {
        name: null,
        email: null,
        subject: '',
        message: ''
      }
    };
  },

  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      }
    }
  },

  mounted() {
    this.showContactText = true;
    this.showContactAlternative = true;
    this.showForm = true;
  },

  methods: {
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("hola gango");
      }
    }
  }
}
</script>

<style scoped>
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact .contact-text-container {
  width: 35%;
  margin-top: 102px;
  margin-right: -70px;
  z-index: 2;
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
  width: fit-content;
  z-index: 1;
}

.contact .contact-text-container .contact-me-text .title::before {
  content: "";
  position: absolute;
  width: 70px;
  height: 50px;
  background-color: #68a506;
  opacity: 0.3;
  right: 0;
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

.contact .contact-text-container .contact-alternative .linkedin-github .sites .site-container .site-link {
  display: flex;
}

.contact .contact-text-container .contact-alternative .linkedin-github .sites .site-container .site-link .icon {
  color: white;
  font-size: 130%;
}

.contact .contact-form-container {
  background-color: black;
  padding: 150px 100px 150px 140px;
  z-index: 1;
}

.contact .contact-form-container h3.form-title {
  margin-bottom: 30px;
  color: white;
}

.contact .contact-form-container .form .form-control {
  padding: 1rem;
  border-radius: 0;
  border: 2px solid #888888;
  background-color: black;
  color: white;
}

.contact .contact-form-container .form .form-floating>label {
  color: #888888;
  margin-left: 8px;
}

.contact .contact-form-container .form .form-control:focus {
  box-shadow: none;
  border-color: white;
}

.contact .contact-form-container .form .form-control:focus::placeholder {
  color: transparent;
}

.contact .contact-form-container .form .form-floating>.form-control:focus~label,
.contact .contact-form-container .form .form-floating>.form-control:not(:placeholder-shown)~label,
.contact .contact-form-container .form .form-floating>.form-control-plaintext~label,
.form-floating>.form-select~label {
  font-weight: bold;
  transform: scale(0.85) translateY(-1.70rem) translateX(1.15rem);
}

.contact .contact-form-container .form .form-floating>.form-control:focus~label::after,
.contact .contact-form-container .form .form-floating>.form-control:not(:placeholder-shown)~label::after,
.contact .contact-form-container .form .form-floating>.form-control-plaintext~label::after,
.contact .contact-form-container .form .form-floating>.form-select~label::after {
  border-radius: 0;
  border: 0;
  background-color: black;
}


.contact .contact-form-container .form .form-floating>label {
  transition: opacity 0.4s ease-in-out, transform 0.2s ease-in-out;
}

.contact .contact-form-container .form .form-floating>.form-control:-webkit-autofill,
.contact .contact-form-container .form .form-floating>.form-control:-webkit-autofill:hover,
.contact .contact-form-container .form .form-floating>.form-control:-webkit-autofill:focus,
.contact .contact-form-container .form .form-floating>.form-control:-webkit-autofill:active {
  -webkit-background-clip: text;
  -webkit-text-fill-color: #ffffff;
  caret-color: white;
  transition: background-color 5000s ease-in-out 0s;
  box-shadow: inset 0 0 20px 20px #23232329;
}

.contact .contact-form-container .form .send-message-button {
  display: flex;
  align-items: center;
  padding: 15px 25px;
  background-color: #68a506;
  width: fit-content;
  color: white;
}

.contact .contact-form-container .form .send-message-button p {
  margin-bottom: 0;
  margin-left: 5px;
}

.contact .contact-form-container .form .send-message-button:hover {
  color: black;
  background-color: white;
}

.contact .contact-alternative-responsive {
  width: 80%;
  text-align: center;
  display: none;
  background-color: #2c2c2c;
  padding: 15px 20px 40px 20px;
}

.contact .contact-alternative-responsive img.arrow {
  width: 100px;
  transform: rotate(-50deg);
  filter: invert(1);
}

.contact .contact-alternative-responsive .linkedin-github {
  display: flex;
  margin-top: 20px;
  align-items: center;
  flex-direction: column;
}

.contact .contact-alternative-responsive .linkedin-github p.text {
  width: 90%;
  text-align: center;
  margin: 0;
  color: white;
  margin-bottom: 20px;
}

.contact .contact-alternative-responsive .linkedin-github .sites {
  display: flex;
  width: 100%;
  gap: 15px;
  justify-content: center;
}

.contact .contact-alternative-responsive .linkedin-github .sites .site-container {
  width: 45px;
  height: 45px;
  background-color: #888888;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.contact .contact-alternative-responsive .linkedin-github .sites .site-container:hover {
  background-color: #68a506;
  transition: all 0.5s ease-out;
}

.contact .contact-alternative-responsive .linkedin-github .sites .site-container .site-link {
  display: flex;
}

.contact .contact-alternative-responsive .linkedin-github .sites .site-container .site-link .icon {
  color: white;
  font-size: 130%;
}

.slide-fade-enter-active {
  transition: all 2s ease;
}

.contact-alternative.slide-fade-enter-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}


.slide-fade-leave-active {
  transition: all 4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(0%);
}

.slide-fade-enter-to,
.slide-fade-leave {
  opacity: 1;
  transform: translateX(0%);
}

.contact-me-text.slide-fade-enter,
.contact-me-text.slide-fade-leave-to {
  transform: translateX(-30%);
}

.contact-alternative.slide-fade-enter,
.contact-alternative.slide-fade-leave-to {
  transform: translateX(-30%);
}

.contact-form-container.slide-fade-enter,
.contact-form-container.slide-fade-leave-to {
  transform: translateX(20%);
}

@media screen and (max-width: 1200px) {
  .contact {
    flex-direction: column;
  }

  .contact .contact-text-container {
    width: 500px;
    margin: 0 0 -55px;
  }

  .contact .contact-text-container .contact-me-text .title {
    margin-left: 0;
  }

  .contact .contact-text-container .contact-alternative {
    display: none;
  }

  .contact .contact-form-container {
    width: 80%;
    padding-bottom: 100px;
    padding-left: 100px;
    padding-top: 100px;
    padding-bottom: 50px;

  }

  .contact .contact-form-container .form .send-message-button {
    width: 100%;
    justify-content: center;
    margin-left: 0 !important;
  }

  .contact .contact-alternative-responsive {
    display: block;
  }

  .contact-me-text.slide-fade-enter,
  .contact-me-text.slide-fade-leave-to {
    transform: translateY(-30%);
  }


  .contact-form-container.slide-fade-enter,
  .contact-form-container.slide-fade-leave-to {
    transform: translateY(20%);
  }

  .contact-alternative-responsive.slide-fade-enter,
  .contact-alternative-responsive.slide-fade-leave-to {
    transform: translateY(80%);
  }

}

@media screen and (max-width: 1000px) {
  .contact .contact-form-container {
    width: 90%;
  }

  .contact .contact-alternative-responsive {
    width: 90%;
  }
}

@media screen and (max-width: 900px) {
  .contact .contact-form-container .form .form-floating {
    width: 100%;
  }
}

@media screen and (max-width: 800px) {
  .contact .contact-text-container {
    width: 450px;
  }

  .contact .contact-text-container .contact-me-text .title,
  .contact .contact-text-container .contact-me-text .first-text,
  .contact .contact-text-container .contact-me-text .second-text,
  .contact .contact-alternative-responsive .linkedin-github p.text,
  .contact .contact-alternative-responsive img.arrow {
    zoom: 90%;
  }

  .contact .contact-form-container {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media screen and (max-width: 800px) {
  .contact .contact-text-container {
    width: 90%;
  }

}

@media screen and (max-width: 500px) {
  .contact .contact-text-container {
    width: 100%;
  }

  .contact .contact-alternative-responsive {
    width: 100%;
  }

  .contact .contact-text-container .contact-me-text {
    padding: 25px;
  }

  .contact .contact-text-container .contact-me-text::after {
    top: 27px;
  }

  .contact .contact-text-container .contact-me-text .title,
  .contact .contact-text-container .contact-me-text .first-text,
  .contact .contact-text-container .contact-me-text .second-text,
  .contact .contact-alternative-responsive .linkedin-github p.text,
  .contact .contact-alternative-responsive img.arrow {
    zoom: 80%;
  }

  .contact .contact-form-container {
    padding-left: 25px;
    padding-right: 25px;
    width: 100%;
  }
}
</style>