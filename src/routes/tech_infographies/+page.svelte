<script>
  let technologies = [
      {
          category: "Frontend",
          name: "Svelte",
          version: "v3.0",
          projects: [
              {
                  title: "Hema Atelier E-commerce",
                  reason: "Efficient state management and component-based architecture.",
                  tasks: ["Data visualization", "User authentication", "API integrations"],
                  repo: "https://github.com/user/admin-dashboard",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
              },
              {
                  title: "Whoami Portfolio",
                  reason: "Efficient state management and component-based architecture.",
                  tasks: ["Data visualization", "User authentication", "API integrations"],
                  repo: "https://github.com/user/admin-dashboard",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
              }
          ]
      },
      {
          category: "Frontend",
          name: "Vue.js",
          version: "v3.0",
          projects: [
              {
                  title: "Financapp",
                  reason: "Efficient state management and component-based architecture.",
                  tasks: ["Data visualization", "User authentication", "API integrations"],
                  repo: "https://github.com/user/admin-dashboard",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
              }
          ]
      },
      {
          category: "Frontend",
          name: "AngularJS",
          version: "v3.0",
          projects: [
              {
                  title: "Admin Dashboard",
                  reason: "Efficient state management and component-based architecture.",
                  tasks: ["Data visualization", "User authentication", "API integrations"],
                  repo: "https://github.com/user/admin-dashboard",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
              }
          ]
      },
      {
          category: "CMS",
          name: "Drupal",
          version: "v3.0",
          projects: [
              {
                  title: "Admin Dashboard",
                  reason: "Efficient state management and component-based architecture.",
                  tasks: ["Data visualization", "User authentication", "API integrations"],
                  repo: "https://github.com/user/admin-dashboard",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
              }
          ]
      },
      {
          category: "Backend",
          name: "Python",
          version: "v3.0",
          projects: [
              {
                  title: "API for a Social Media App",
                  reason: "Handles real-time data and scalable backend processing.",
                  tasks: ["User authentication", "Live notifications", "RESTful API endpoints"],
                  repo: "https://github.com/user/social-media-api",
                  live_url: "https://admin-dashboard.com",
                  documentation_url: "https://docs.admin-dashboard.com"
              }
          ]
      }
  ];

  function getColor(index) {
      const colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#17a2b8", "#6f42c1", "#fd7e14", "#20c997", "#e83e8c", "#343a40"];
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
  .project a {
      display: inline-block;
      margin-top: 5px;
      padding: 5px 10px;
      background: #008cff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 14px;
  }
  .project a:hover {
      background: #0056b3;
  }
  /* Buttons Container */
  .project-buttons {
      margin-top: 20px;
      display: flex;
      gap: 10px;
  }
  /* View Repository Button */
  .project-btn {
      background: #007bff;
  }
  .project-btn:hover {
      background: #0056b3;
  }
  /* View Live Button */
  .live-btn {
      background: #28a745;
  }
  .live-btn:hover {
      background: #218838;
  }

  /* View Documentation Button */
  .doc-btn {
      background: #ffc107;
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
  }
</style>

<div class="container">
  <h1 class="title">Technologies Infographics</h1>
  {#each Object.keys(groupedTechnologies) as category}
    <div class="tech-category">
      <h2 class="category-title">{category}</h2>
      {#each groupedTechnologies[category] as tech}
        <div class="tech-card">
            <h2>{tech.name} <span class="tech-version">{tech.version}</h2>
            {#each tech.projects as project, i}
                <div class="project" style="border-left-color: {getColor(i)}">
                    <h3>{project.title}</h3>
                    <p><strong>Why?</strong> {project.reason}</p>
                    <p><strong>Main Tasks:</strong></p>
                    <ul>
                        {#each project.tasks as task}
                            <li>{task}</li>
                        {/each}
                    </ul>
                    <div class="project-buttons">
                      <a href="{project.repo}" target="_blank" class="project-btn">View Repository</a>
                      {#if project.live_url}
                          <a href="{project.live_url}" target="_blank" class="project-btn live-btn">View Live</a>
                      {/if}
                      {#if project.documentation_url}
                          <a href="{project.documentation_url}" target="_blank" class="project-btn doc-btn">View Documentation</a>
                      {/if}
                  </div>
                </div>
            {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>

<div class="cta-container">
  <a href="https://github.com/user" target="_blank" class="github-link">Visit My GitHub</a>
  <a href="/projects" class="projects-link">See My Projects</a>
</div>
