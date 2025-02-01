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
                  reason: "Efficient and fast fashion atelier e-commerce portal.",
                  tasks: ["Catalog renderization", "Product selection", "Cart management", "Fast checkout"],
                  status: "in_development",
                  start: "23/11/2024",
                  end: "on_going",
                  repo: "https://github.com/user/admin-dashboard",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
              },
              {
                  title: "Whoami Portfolio",
                  reason: "Personal portfolio website.",
                  tasks: ["Resume visualization", "Project exhibition", "Professional development and contact."],
                  status: "in_development",
                  start: "20/11/2024",
                  end: "On going",
                  repo: "https://github.com/user/admin-dashboard",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
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
                  reason: "Personal finances application. Salary and mortgage calculator. Stock market investments tracking.",
                  tasks: ["Data visualization", "User authentication", "API integrations", "Different economic calculations"],
                  status: "on_hold",
                  start: "01/10/2024",
                  end: "On going",
                  repo: "https://github.com/user/admin-dashboard",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
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
                  reason: "Frontend data visualization for user living standards studies and migration puposes.",
                  tasks: ["Data visualization", "Living metrics calculation", "API integrations"],
                  status: "finished",
                  start: "01/03/2019",
                  end: "08/06/2019",
                  repo: "https://github.com/user/admin-dashboard",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
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
                  reason: "Company's public website used for marketing and sales purposes.",
                  tasks: ["User data tracking", "User management", "Marketing campaigns"],
                  status: "finished",
                  start: "20/07/2020",
                  end: "31/01/2024"
              }
          ]
      },
      {
          category: "Backend",
          name: "Python",
          version: "v3.7.3 & 3.12.6",
          projects: [
              {
                  title: "Financapp",
                  reason: "Backend data calculations and API management from Real time data sources and historical sources (Finhub and Yahoo finance).",
                  tasks: ["User authentication", "Live notifications", "RESTful API endpoints"],
                  status: "on_hold",
                  start: "01/10/2024",
                  end: "on_going",
                  repo: "https://github.com/user/social-media-api",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
              },
              {
                  title: "Exodus",
                  reason: "Backend data calculations for user living standards studies and migration puposes.",
                  tasks: ["Data collection (source numbeo)", "Currency change", "RESTful API endpoints"],
                  status: "finished",
                  start: "01/03/2019",
                  end: "08/06/2019",
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
                    {#if project.repo}
                      <div class="project-buttons">
                        <a href="{project.repo}" target="_blank" class="project-btn repo-btn">{$t("tech_infographies_repo")}</a>
                        {#if project.live_url}
                            <a href="{project.live_url}" target="_blank" class="project-btn live-btn">{$t("tech_infographies_live")}</a>
                        {/if}
                        {#if project.documentation_url}
                            <a href="{project.documentation_url}" target="_blank" class="project-btn doc-btn">{$t("tech_infographies_docs")}</a>
                        {/if}
                      </div>
                    {:else}
                      <div class="protected-data project-buttons project-btn">{$t("tech_infographies_protected_data")}</div>
                    {/if}
                </div>
            {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>

<div class="cta-container">
  <a href="https://github.com/manugarcial" target="_blank" class="github-link">{$t("tech_infographies_github")}Visit My GitHub</a>
  <a href="/projects" class="projects-link">{$t("tech_infographies_projects")}See My Projects</a>
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
      margin-bottom: 40px;
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
  .project a:hover {
      background: #0056b3;
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