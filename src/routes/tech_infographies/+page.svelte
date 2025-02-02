<script>
  import { t } from 'svelte-i18n';
  let technologies = [
      {
          category: "Frontend",
          name: "Svelte",
          version: "v5.19.5",
          projects: [
              {
                  title: "Hema Atelier E-commerce",
                  reason: "hema_reason",
                  tasks: ["catalog", "product", "cart", "checkout"],
                  status: "in_development",
                  start: "23/11/2024",
                  end: "on_going",
                  // Esto va a la pagina individual de proyecto. Emborrona mucho la informacion en esta página
                  databases: [""],
                  analytics: ["Google Tag Manager (GTM)", "Google Analytics (GA4)"],
                  UX_UI: ["UX/UI wireframes"],
                  server_side: ["Vercel hosting"],
                  doc_repo_control: ["Jira", "Github"],
                  logging: [""],
                  testing: [""],
                  other: ["Management comunication: Slack"],
                  // -----------------------------------------------------------------------------------------
                  repo: "https://github.com/manugarcial/Hema",
                  live_url: "https://hema-pro.vercel.app/",
                  documentation_url: "/projects"
              },
              {
                  title: "Whoami Portfolio",
                  reason: "whoami_reason",
                  tasks: ["resume_visual", "project_exh", "professional_development"],
                  status: "in_development",
                  start: "20/11/2024",
                  end: "on_going",
                  // Esto va a la pagina individual de proyecto. Emborrona mucho la informacion en esta página
                  databases: [""],
                  analytics: [""],
                  UX_UI: [""],
                  server_side: ["Vercel hosting"],
                  doc_repo_control: ["Github"],
                  logging: [""],
                  testing: [""],
                  other: [""],
                  // -----------------------------------------------------------------------------------------
                  repo: "https://github.com/manugarcial/whoami",
                  live_url: "https://whoami-dusky-six.vercel.app/",
                  documentation_url: "/projects"
              }
          ]
      },
      {
          category: "Frontend",
          name: "Vue.js",
          version: "v3.5.12",
          projects: [
              {
                  title: "Financapp",
                  reason: "financapp_reason_fe",
                  tasks: ["data", "user_auth", "API", "economic_calc"],
                  status: "on_hold",
                  start: "01/10/2024",
                  end: "on_going",
                  // Esto va a la pagina individual de proyecto. Emborrona mucho la informacion en esta página
                  databases: ["PostgreSQL"],
                  analytics: [""],
                  UX_UI: ["UX/UI wireframes"],
                  server_side: ["Vercel hosting"],
                  doc_repo_control: ["Github"],
                  logging: [""],
                  testing: [""],
                  other: [""],
                  // -----------------------------------------------------------------------------------------
                  repo: "https://github.com/manugarcial/my-finances/tree/main/financapp-front",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "/projects"
              }
          ]
      },
      {
          category: "Frontend",
          name: "AngularJS",
          version: "v9.0",
          projects: [
              {
                  title: "Exodus",
                  reason: "exodus_reason_fe",
                  tasks: ["data", "living_metrics", "API"],
                  status: "finished",
                  start: "01/03/2019",
                  end: "08/06/2019",
                  // Esto va a la pagina individual de proyecto. Emborrona mucho la informacion en esta página
                  databases: ["MongoDB"],
                  analytics: ["Google Tag Manager (GTM)", "Google Analytics (GA4)"],
                  UX_UI: ["UX/UI wireframes", "Just In Mind"],
                  server_side: ["UOC hosting"],
                  doc_repo_control: ["Github"],
                  logging: [""],
                  testing: ["Cypress"],
                  other: ["Management comunication: UOC Intranet"],
                  // -----------------------------------------------------------------------------------------
              }
          ]
      },
      {
          category: "CMS",
          name: "Drupal",
          version: "v8.0, 9.0 & 10.0",
          projects: [
              {
                  title: "Coosto's website",
                  reason: "coosto_reason",
                  tasks: ["user_data", "user_management", "market_campaigns"],
                  status: "finished",
                  start: "20/07/2020",
                  end: "31/01/2024",
                  live_url: "https://www.coosto.com/en",
                  // Esto va a la pagina individual de proyecto. Emborrona mucho la informacion en esta página
                  databases: ["MySQL"],
                  analytics: ["Google Tag Manager (GTM)", "Google Analytics (GA4)"],
                  UX_UI: ["Figma", "InVision", "Abode Photoshop", "Adobe Illustrator"],
                  server_side: ["Private hosting", "Local Datacenter", "Amazon Web Services (AWS)"],
                  doc_repo_control: ["Jira", "Bibucket"],
                  logging: [""],
                  testing: [""],
                  other: ["Management comunication: Mattermost"],
                  // -----------------------------------------------------------------------------------------
              }
          ]
      },
      {
          category: "Backend",
          name: "Python (Flask)",
          version: "v3.7.3 & 3.12.6",
          projects: [
              {
                  title: "Financapp",
                  reason: "financapp_reason_be",
                  tasks: ["user_auth", "live_not", "API_end"],
                  status: "on_hold",
                  start: "01/10/2024",
                  end: "on_going",                  
                  // Esto va a la pagina individual de proyecto. Emborrona mucho la informacion en esta página
                  databases: ["PostgreSQL"],
                  analytics: [""],
                  UX_UI: ["UX/UI wireframes"],
                  server_side: ["Render hosting"],
                  doc_repo_control: ["Github"],
                  logging: [""],
                  testing: [""],
                  other: [""],
                  // -----------------------------------------------------------------------------------------
                  repo: "https://github.com/manugarcial/my-finances/tree/main/financapp",
                  live_url: "https://my-finances-nu.vercel.app/",
                  documentation_url: "/projects"
              },
              {
                  title: "Exodus",
                  reason: "exodus_reason_be",
                  tasks: ["data_collection", "currency", "API_end"],
                  status: "finished",
                  start: "01/03/2019",
                  end: "08/06/2019",
                  // Esto va a la pagina individual de proyecto. Emborrona mucho la informacion en esta página
                  databases: ["MongoDB"],
                  analytics: ["Google Tag Manager (GTM)", "Google Analytics (GA4)"],
                  UX_UI: ["UX/UI wireframes", "Just In Mind"],
                  server_side: ["UOC hosting"],
                  doc_repo_control: ["Github"],
                  logging: [""],
                  testing: ["Cypress"],
                  other: ["Management comunication: UOC Intranet"],
                  // -----------------------------------------------------------------------------------------
              },
              {
                  title: "Poetry AI Generator with Machine Learning",
                  reason: "poetry_ai_gen_reason",
                  tasks: ["data_collection", "data_gen", "API_end", "mach_learn", "neural_net"],
                  status: "finished",
                  start: "01/02/2018",
                  end: "10/06/2018",
                  // Esto va a la pagina individual de proyecto. Emborrona mucho la informacion en esta página
                  databases: ["MongoDB"],
                  analytics: [""],
                  UX_UI: ["UX/UI wireframes"],
                  server_side: ["Local hosting"],
                  doc_repo_control: ["Redmine", "Gitlab"],
                  logging: [""],
                  testing: [""],
                  other: ["Management comunication: UJA Intranet"],
                  // -----------------------------------------------------------------------------------------
              }
          ]
      }
  ];

  function getColor(index) {
      const colors = ["#20c997", "#fd7e14", "#007bff", "#28a745", "#dc3545", "#ffc107", "#6f42c1", "#17a2b8", "#e83e8c", "#343a40"];
      return colors[index % colors.length];
  }

  let groupedTechnologies = {};
  technologies.forEach((tech) => {
      if (!groupedTechnologies[tech.category]) {
          groupedTechnologies[tech.category] = [];
      }
      groupedTechnologies[tech.category].push(tech);
  });
</script>

<div class="container">
  <h1 class="title">{$t("tech_infographies")}</h1>
  {#each Object.keys(groupedTechnologies) as category}
    <div class="tech-category">
      <h2 class="category-title">{category}</h2>
      {#each groupedTechnologies[category] as tech}
        <div class="tech-card">
            <h2>{tech.name} <span class="tech-version">{tech.version}</h2>
            {#each tech.projects as project, i}
                <div class="project" style="border-left-color: {getColor(i)}">
                    <h3><strong>{project.title}</strong></h3>
                    <p><strong>{$t("tech_infographies_why")}</strong> {$t(project.reason)}</p>
                    <p><strong>{$t("tech_infographies_main")}</strong></p>
                    <ul>
                        {#each project.tasks as task}
                            <li>{$t(task)}</li>
                        {/each}
                    </ul>
                    <p><strong>{$t("tech_infographies_status")}</strong> {$t(project.status)}</p>
                    <p><strong>{$t("tech_infographies_start")}</strong> {$t(project.start)}</p>
                    <p><strong>{$t("tech_infographies_end")}</strong> {$t(project.end)}</p>
                    {#if project.repo || project.live_url || project.documentation_url}
                      <div class="project-buttons">
                        {#if project.repo}
                            <a href="{project.repo}" target="_blank" class="project-btn repo-btn">{$t("tech_infographies_repo")}</a>
                        {:else}
                            <div class="protected-data project-btn">{$t("tech_infographies_protected_data")}</div>
                        {/if}
                        {#if project.live_url}
                            <a href="{project.live_url}" target="_blank" class="project-btn live-btn">{$t("tech_infographies_live")}</a>
                        {/if}
                        {#if project.documentation_url}
                            <a href="{project.documentation_url}" target="_blank" class="project-btn doc-btn">{$t("tech_infographies_docs")}</a>
                        {/if}
                      </div>
                    {:else}
                      <div class="protected-data project-btn">{$t("tech_infographies_protected_data")}</div>
                    {/if}
                </div>
            {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>

<div class="cta-container">
  <a href="https://github.com/manugarcial" target="_blank" class="github-link">{$t("tech_infographies_github")}</a>
  <a href="/projects" class="projects-link">{$t("tech_infographies_projects")}</a>
</div>

<style>
  .container {
      max-width: 800px;
      margin: auto;
      padding: 20px;
  }
  .title {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 20px;
      color: #333;
  }
  .tech-category {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .tech-category .category-title {
      font-size: 1em;
      font-weight: bold;
      color: #000000;
      text-transform: uppercase;
      border-bottom: 3px solid #000000;
      padding-bottom: 5px;
      margin-bottom: 20px;
  }
  .tech-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      background: #f9f9f9;
  }
  .tech-card h2 {
      color: #007bff;
  }
  .project {
      margin-top: 10px;
      padding-left: 15px;
      border-left: 3px solid;
      padding: 10px;
  }
  .project h3 {
      margin: 5px 0;
  }
  .project a, .project .protected-data {
      display: inline-block;
      margin-top: 5px;
      padding: 5px 10px;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 14px;
  }

  .project .protected-data {
      display: inline-block;
      margin-top: 5px;
      padding: 5px 10px;
      background: #000000;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 14px;
  }
  .project .protected-data:hover {
      background: #000000;
  }
  .project-buttons {
      margin-top: 20px;
      display: flex;
      gap: 10px;
  }
  .repo-btn {
      background: #1349ac;
  }

  .repo-btn:hover {
      background: #17007a;
  }
  .live-btn {
      background: #28a745;
  }
  .live-btn:hover {
      background: #218838;
  }
  .doc-btn {
      background: #ff9c07;
  }
  .doc-btn:hover {
      background: #e0a800;
  }
  .cta-container {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      max-width: 760px;
      margin-left: auto;
      margin-right: auto;
  }
  .cta-container a {
      flex: 1;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
      text-decoration: none;
      color: white;
      font-weight: bold;
      margin: 5px;
      max-width: 49%;
  }
  .github-link {
      background: #333;
  }
  .projects-link {
      background: #007bff;
  }
  @media (max-width: 600px) {
    .cta-container {
        flex-direction: column;
        max-width: 100%;
    }
    .cta-container a {
        max-width: 100%;
    }
    .project-buttons {
        display: flex;
        flex-direction: column;
        gap: 0;
    }
  }
</style>