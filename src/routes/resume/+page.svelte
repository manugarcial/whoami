<script lang="ts">
  import { t } from 'svelte-i18n'; // Import t function from svelte-i18n
</script>

<style>
  main {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    color: #333;
    line-height: 1.6;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 20px;
  }

  .header h1 {
    font-size: 40px;
    margin: 0;
  }

  .header h1 span {
    display: block;
    font-size: 24px;
    color: #4a90e2;
  }

  .contact-info p {
    margin: 5px 0;
    text-align: right;
  }

  hr {
    border: none;
    border-top: 2px solid #e0e0e0;
    margin: 20px 0;
  }

  .section-title {
    font-size: 24px;
    color: #4a90e2;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  ul {
    padding-left: 20px;
  }

  ul li {
    margin-bottom: 10px;
  }
</style>

<h1>{$t('career_path')}</h1>

<main>
  <div class="header">
    <div>
      <h1>DANIEL <span>GARCÍA</span></h1>
    </div>
    <div class="contact-info">
      <p>C/ Don Ramón de la Cruz, 81 Bajo D</p>
      <p>913 569 812</p>
      <p>danimadrid@live.es</p>
    </div>
  </div>
  <section class="summary">
    <hr />
    <h2 class="section-title">Resumen profesional</h2>
    <p>Gestor experimentado con excelentes aptitudes de gestión de clientes y proyectos. Orientado a la acción con gran capacidad para comunicarse de forma eficaz con público del sector tecnológico, ejecutivo y empresarial.</p>
  </section>
  <section class="experience">
    <hr />
    <h2 class="section-title">Experiencia</h2>
    <h3>Gerente de distrito</h3>
    <p>Movistar | Madrid | Septiembre 2015 - Actual</p>
    <ul>
      <li>Aumenté satisfactoriamente la retención de empleados...</li>
      <li>Administré operaciones diarias...</li>
    </ul>
  </section>
  <section class="skills">
    <hr />
    <h2 class="section-title">Aptitudes</h2>
    <ul>
      <li>Gerente de compras titulado</li>
      <li>Actitud de trabajo activa</li>
    </ul>
  </section>
  <section class="education">
    <hr />
    <h2 class="section-title">Formación</h2>
    <p><strong>Máster en Administración de Empresas (MBA)</strong> | Universidad Complutense, Madrid | 2009</p>
    <p>Administración de operaciones</p>
  </section>
</main>
