<script lang="ts">
  import { t } from 'svelte-i18n';

  function printResume() {
    const printContents = document.querySelector('main')?.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents || '';

    window.print();

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

  @media print {
    body *, .print-button-container {
      visibility: hidden;
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

<main>
  <div class="header">
    <div>
      <h1>Manuel García</h1>
    </div>
    <div class="contact-info">
      <p>{$t("contact-info")}</p>
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
    <h2 class="section-title">{$t("proffesional_role")}</h2>
    <p>{$t("proffesional_summary")}</p>
  </section>
  <section class="experience">
    <hr />
    <h2 class="section-title">{$t("work_experience")}</h2>
    <h3><strong>{$t("work_experience_4_title")}</strong></h3>
    <p>{$t("work_experience_4_subtitle")}</p>
    <br>
    <p>{$t("work_experience_4_detail")}
    </p>
    <br>
    <ul>
      <li>{$t("work_experience_4_feature_1")}</li>
      <li>{$t("work_experience_4_feature_2")}</li>
      <li>{$t("work_experience_4_feature_3")}</li>
      <li>{$t("work_experience_4_feature_4")}</li>
    </ul>
    <br>
    <h3><strong>{$t("work_experience_1_title")}</strong></h3>
    <p>{$t("work_experience_1_subtitle")}</p>
    <br>
    <p>{$t("work_experience_1_detail")}
    </p>
    <br>
    <ul>
      <li>{$t("work_experience_1_feature_1")}</li>
      <li>{$t("work_experience_1_feature_2")}</li>
      <li>{$t("work_experience_1_feature_3")}</li>
      <li>{$t("work_experience_1_feature_4")}</li>
    </ul>
    <br>
    <h3><strong>{$t("work_experience_2_title")}</strong></h3>
    <p>{$t("work_experience_2_subtitle")}</p>
    <br>
    <p>{$t("work_experience_2_detail")}
    </p>
    <br>
    <ul>
      <li>{$t("work_experience_2_feature_1")}</li>
      <li>{$t("work_experience_2_feature_2")}</li>
      <li>{$t("work_experience_2_feature_3")}</li>
      <li>{$t("work_experience_2_feature_4")}</li>
    </ul>
    <br>
    <h3><strong>{$t("work_experience_3_title")}</strong></h3>
    <p>{$t("work_experience_3_subtitle")}</p>
    <br>
    <p>{$t("work_experience_3_detail")}
    </p>
    <br>
    <ul>
      <li>{$t("work_experience_3_feature_1")}</li>
      <li>{$t("work_experience_3_feature_2")}</li>
      <li>{$t("work_experience_3_feature_3")}</li>
      <li>{$t("work_experience_3_feature_4")}</li>
    </ul>
    <br>
  </section>
  <section class="education">
    <hr />
    <h2 class="section-title">{$t("education")}</h2>
    <p><strong>{$t("education_1_strong")}</strong> {$t("education_1")}</p>
    <br>
    <p><strong>{$t("education_2_strong")}</strong> {$t("education_2")}</p>
    <br>
  </section>
  <section class="volunteering">
    <hr />
    <h2 class="section-title">{$t("volunteering")}</h2>
    <p><strong>{$t("volunteering_title")}</strong></p>
    <p>{$t("volunteering_subtitle")}</p>
    <p>{$t("volunteering_content")}</p>
    <br>
  </section>
  <section class="skills">
    <hr />
    <h2 class="section-title">{$t("skills")}</h2>
    <h3><strong>{$t("skills_technical")}</strong></h3>
    <ul>
      <li>{$t("skills_technical_1")}</li>
      <li>{$t("skills_technical_2")}</li>
      <li>{$t("skills_technical_3")}</li>
      <li>{$t("skills_technical_4")}</li>
      <li>{$t("skills_technical_5")}</li>
    </ul>
    <h3><strong>{$t("skills_proffessional")}</strong></h3>
    <ul>
      <li>{$t("skills_proffessional_1")}</li>
      <li>{$t("skills_proffessional_2")}</li>
      <li>{$t("skills_proffessional_3")}</li>
      <li>{$t("skills_proffessional_4")}</li>
      <li>{$t("skills_proffessional_5")}</li>
    </ul>
  </section>
  <section class="languages">
    <hr />
    <h2 class="section-title">{$t("languages")}</h2>
    <ul>
      <li>{$t("languages_1")}</li>
      <li>{$t("languages_2")}</li>
      <li>{$t("languages_3")}</li>
    </ul>
  </section>
</main>

<!-- Add a Print Button -->
<div class="print-button-container">
  <button on:click={printResume} class="print-button">{$t("print_resume")}</button>
</div>