<script lang="ts">
  import { t } from 'svelte-i18n';
  import { page } from '$app/stores';

  interface ProjectDoc {
    title: string;
    reason: string;
    tasks: string[];
    status: string;
    start: string;
    end: string;
    databases: string[];
    analytics: string[];
    UX_UI: string[];
    server_side: string[];
    doc_repo_control: string[];
    logging: string[];
    testing: string[];
    other: string[];
    repo: string;
    live_url: string;
    documentation_url: string;
    id: string;
  }

  let projectDocs: ProjectDoc[] = [
    {
      title: "Financapp",
      reason: "A personal finance tracking app",
      tasks: ["Budgeting", "Expense Tracking", "Reports"],
      status: "completed",
      start: "01/01/2023",
      end: "12/12/2023",
      databases: ["PostgreSQL"],
      analytics: ["Google Tag Manager (GTM)", "Google Analytics (GA4)"],
      UX_UI: ["UX/UI wireframes", "Figma"],
      server_side: ["Vercel hosting", "Node.js backend"],
      doc_repo_control: ["Jira", "Github"],
      logging: ["Sentry"],
      testing: ["Jest", "Cypress"],
      other: ["Slack for team communication"],
      repo: "https://github.com/manugarcial/my-finances",
      live_url: "https://financapp.vercel.app/",
      documentation_url: "/projects",
      id: "financapp",
    },
    {
      title: "Whoami",
      reason: "Portfolio website",
      tasks: ["Personal Info", "Projects Showcase", "Blog"],
      status: "in_development",
      start: "10/05/2024",
      end: "on_going",
      databases: [],
      analytics: ["Google Analytics (GA4)"],
      UX_UI: ["SvelteKit", "TailwindCSS"],
      server_side: ["Vercel"],
      doc_repo_control: ["Github"],
      logging: [],
      testing: [],
      other: ["LinkedIn integration"],
      repo: "https://github.com/manugarcial/whoami",
      live_url: "https://whoami.vercel.app/",
      documentation_url: "/projects",
      id: "whoami",
    },
    {
      title: "Hema Atelier E-commerce",
      reason: "An online store for handmade clothing",
      tasks: ["Catalog", "Product", "Cart", "Checkout"],
      status: "in_development",
      start: "23/11/2024",
      end: "on_going",
      databases: ["Firebase"],
      analytics: ["Google Tag Manager (GTM)", "Google Analytics (GA4)"],
      UX_UI: ["Figma wireframes"],
      server_side: ["Vercel hosting"],
      doc_repo_control: ["Jira", "Github"],
      logging: [],
      testing: ["Cypress"],
      other: ["Slack for team communication"],
      repo: "https://github.com/manugarcial/Hema",
      live_url: "https://hema-pro.vercel.app/",
      documentation_url: "/projects",
      id: "hema",
    }
  ];

  let project: ProjectDoc | undefined;

  $: {
    const project_name = $page.url.pathname.split('/').pop();
    if (project_name) {
      project = projectDocs.find((p) => p.id === String(project_name));
    }
  }
</script>


<div class="project-post">
  {#if project}
    <h1 class="project-title">{project.title}</h1>
    <p><strong>Reason:</strong> {project.reason}</p>
    <p><strong>Status:</strong> {project.status}</p>
    <p><strong>Start Date:</strong> {project.start}</p>
    <p><strong>End Date:</strong> {project.end}</p>

    <h3>Tasks</h3>
    <ul>
      {#each project.tasks as task}
        <li>{task}</li>
      {/each}
    </ul>

    <h3>Technology Stack</h3>
    <ul>
      <li><strong>Databases:</strong> {project.databases.length ? project.databases.join(", ") : "N/A"}</li>
      <li><strong>Analytics:</strong> {project.analytics.length ? project.analytics.join(", ") : "N/A"}</li>
      <li><strong>UX/UI:</strong> {project.UX_UI.length ? project.UX_UI.join(", ") : "N/A"}</li>
      <li><strong>Server-side:</strong> {project.server_side.length ? project.server_side.join(", ") : "N/A"}</li>
      <li><strong>Documentation & Repo Control:</strong> {project.doc_repo_control.length ? project.doc_repo_control.join(", ") : "N/A"}</li>
      <li><strong>Logging:</strong> {project.logging.length ? project.logging.join(", ") : "N/A"}</li>
      <li><strong>Testing:</strong> {project.testing.length ? project.testing.join(", ") : "N/A"}</li>
      <li><strong>Other:</strong> {project.other.length ? project.other.join(", ") : "N/A"}</li>
    </ul>

    <h3>Links</h3>
    <p><a href={project.repo} target="_blank">🔗 GitHub Repository</a></p>
    <p><a href={project.live_url} target="_blank">🔗 Live Demo</a></p>
    <p><a href={project.documentation_url} target="_blank">📖 Documentation</a></p>
  {:else}
    <p>{$t('project_not_found')}</p>
  {/if}
</div>

<style>
  .project-post {
    max-width: 800px;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .project-title {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #555;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    color: #007BFF;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
</style>