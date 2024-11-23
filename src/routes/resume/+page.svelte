<script lang="ts">
  // import { t } from 'svelte-i18n';

  // Print function
  function printResume() {
    const printContents = document.querySelector('main')?.innerHTML;
    const originalContents = document.body.innerHTML;

    // Temporarily replace body content with the main content
    document.body.innerHTML = printContents || '';

    // Trigger print
    window.print();

    // Restore original content
    document.body.innerHTML = originalContents;
  }
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

    /* Center and style the print button */
  .print-button-container {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .print-button {
    padding: 15px 25px;
    font-size: 16px;
    background-color: #4a90e2;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }

  .print-button:hover {
    background-color: #357ABD;
  }

  /* Print-specific styles */
  @media print {
    body *, .print-button-container {
      visibility: hidden; /* Hide everything except main */
    }
    main {
      visibility: visible;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
</style>

<!-- <h1>{$t('career_path')}</h1> -->

<main>
  <div class="header">
    <div>
      <h1>Manuel García</h1>
    </div>
    <div class="contact-info">
      <p>Av. Alcoy 45, 5th, 03009, Alicante, Spain</p>
      <p>
        <a href="tel:+34635968035" style="color: inherit; text-decoration: none;">+34 635 96 80 35</a>
      </p>
      <p>
        <a href="mailto:manuel.garcia.developer@gmail.com" style="color: inherit; text-decoration: none;">manuel.garcia.developer@gmail.com</a>
      </p>
    </div>
  </div>
  <section class="summary">
    <br>
    <h2 class="section-title">Proffessional Role</h2>
    <p>A hard-working, creative, and sociable IT manager with
      years of experience leading tech projects, delivering the
      highest quality of services, and maintaining relationships
      with stakeholders and clients.</p>
  </section>
  <section class="experience">
    <hr />
    <h2 class="section-title">WORK EXPERIENCE</h2>
    <h3><strong>SERVICE IT MANAGER</strong></h3>
    <p>Better Consultants S.L. | Remote | February 2024 - Now</p>
    <br>
      <p>Oversaw IT service delivery alignment with goals,
        optimized resource allocation. Led incident, problem,
        and change management processes. Ensured
        compliance and communicated effectively with
        stakeholders.
      </p>
      <br>
      <ul>
        <li>Client - Provider communication</li>
        <li>Team management and developments supervisor</li>
        <li>Quality assurance</li>
        <li>Project management</li>
      </ul>
    <br>
    <h3><strong>DRUPAL WEB DEVELOPER</strong></h3>
    <p>Coosto Spain S.L. | Alicante | July 2020 - January 2024</p>
    <br>
    <p>Single-handedly spearheaded the dynamic
      development of the company's primary website.
      Directed migrations, crafted modules, facilitated
      updates, and pioneered the development of novel
      components.</p>
    <br>
    <ul>
      <li>Technical support for content creation</li>
      <li>New feature developments</li>
      <li>Google analytics and Google Tag Manager management</li>
      <li>SEO enhancements</li>
    </ul>
    <br>
    <h3><strong>RESEARCH FELLOW</strong></h3>
    <p>University of Jaén | Jaén | September 2018 - December 2018</p>
    <br>
    <p>Research fellow in a team of developers in the
      Department of Computer Science, Natural Language
      Processing area.
      <b>Project:</b> Representation of hate within natural
      language in social networks.</p>
    <br>
    <ul>
      <li>Web development</li>
      <li>Sentiment analysis</li>
      <li>Natural language processing</li>
      <li>Integrations of deep learning neural networks
        based on word dictionaries</li>
    </ul>
    <br>
  </section>
  <section class="education">
    <hr />
    <h2 class="section-title">EDUCATION</h2>
    <p><strong>Degree in Computer Engineering with a year abroad at Umeå Universitet, Sweden</strong> | University of Jaén, Jaén | 2014 / 2019</p>
    <br>
    <p><strong>Master's Degree in Web Application Development</strong> | Open university of Catalunya, Remote | 2019 / 2020</p>
    <br>
  </section>
  <section class="volunteering">
    <hr />
    <h2 class="section-title">VOLUNTEERING</h2>
    <p><strong>Erasmus Student Network (ESN)| September 2019 - June 2021 </strong></p>
    <p>Website content administrator - Drupal 7</p>
    <p>Vice-chair of the committee (ITcom) for the
      development of a new template for the association
      at European level, Satellite 5 (theme) - Drupal 9</p>
    <br>
  </section>
  <section class="skills">
    <hr />
    <h2 class="section-title">SKILLS</h2>
    <h3><strong>Technical</strong></h3>
    <ul>
      <li>Drupal (8-10) - Advanced</li>
      <li>HTML/CSS/JavaScript - Advanced</li>
      <li>Vue/Svelte/TypeScript - Intermediate</li>
      <li>PHP/Python - Intermediate</li>
      <li>Java/Go - Beginner</li>
    </ul>
    <h3><strong>Proffessional</strong></h3>
    <ul>
      <li>Scrum format and Kanban</li>
      <li>Code quality</li>
      <li>Teamwork management</li>
      <li>Client relationship quality</li>
    </ul>
  </section>
  <section class="languages">
    <hr />
    <h2 class="section-title">Languages</h2>
    <ul>
      <li>Spanish - Native speaker</li>
      <li>English - Fluent</li>
      <li>German - Basic</li>
    </ul>
  </section>
</main>

<!-- Add a Print Button -->
<div class="print-button-container">
  <button on:click={printResume} class="print-button">Print Resume as PDF</button>
</div>