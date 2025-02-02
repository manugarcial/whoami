<script>
  import Accordion from '$lib/components/Accordion.svelte';
  import { t } from 'svelte-i18n';

  const workExperience = [
    { titleKey: "work_experience_title_1", contentKey: "work_experience_content_1" },
    { titleKey: "work_experience_title_2", contentKey: "work_experience_content_2" },
    { titleKey: "work_experience_title_3", contentKey: "work_experience_content_3" },
  ];
  const education = [
    { titleKey: "education_title_1", contentKey: "education_content_1" },
    { titleKey: "education_title_2", contentKey: "education_content_2" },
  ];
  const volunteering = [
    { titleKey: "volunteering_title_1", contentKey: "volunteering_content_1" },
    { titleKey: "volunteering_title_2", contentKey: "volunteering_content_2" },
  ];
  const tech_skills = [
    { titleKey: "techskills_title_1", contentKey: "techskills_content_1" },
    { titleKey: "techskills_title_2", contentKey: "techskills_content_2" },
    { titleKey: "techskills_title_3", contentKey: "techskills_content_3" },
    { titleKey: "techskills_title_4", contentKey: "techskills_content_4" },
    { titleKey: "techskills_title_5", contentKey: "techskills_content_5" },
  ];
  const personal_skills = [
    { titleKey: "personalskills_title_1", contentKey: "personalskills_content_1" },
    { titleKey: "personalskills_title_2", contentKey: "personalskills_content_2" },
    { titleKey: "personalskills_title_3", contentKey: "personalskills_content_3" },
    { titleKey: "personalskills_title_4", contentKey: "personalskills_content_4" },
  ];
  const language = [
    { titleKey: "language_title_1", contentKey: "language_content_1" },
    { titleKey: "language_title_2", contentKey: "language_content_2" },
    { titleKey: "language_title_3", contentKey: "language_content_3" },
  ];
</script>

<main>
  <h1 id="work_experience">{$t("work_experience")}</h1>
  <Accordion sections={workExperience.map(section => ({
    title: $t(section.titleKey),
    content: $t(section.contentKey),
  }))} />
  <br>
  <h1 id="education">{$t("education")}</h1>
  <Accordion sections={education.map(section => ({
    title: $t(section.titleKey),
    content: $t(section.contentKey),
  }))} />
  <br>
  <h1 id="volunteering">{$t("volunteering")}</h1>
  <Accordion sections={volunteering.map(section => ({
    title: $t(section.titleKey),
    content: $t(section.contentKey),
  }))} />
  <br>
  <h1 id="tech_skills">{$t("tech_skills")}</h1>
  <Accordion sections={tech_skills.map(section => ({
    title: $t(section.titleKey),
    content: $t(section.contentKey),
  }))} />
  <br>
  <h1 id="personal_skills">{$t("personal_skills")}</h1>
  <Accordion sections={personal_skills.map(section => ({
    title: $t(section.titleKey),
    content: $t(section.contentKey),
  }))} />
  <br>
  <h1 id="languages">{$t("languages")}</h1>
  <Accordion sections={language.map(section => ({
    title: $t(section.titleKey),
    content: $t(section.contentKey),
  }))} />
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 800px;
    margin: auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
</style>

