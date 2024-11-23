<script>
  import Accordion from '$lib/components/Accordion.svelte';
  const workExperience = [
    { title: "Service IT Manager", content: "Managed the day-to-day operations of the IT service department, ensuring systems, servers, and networks functioned smoothly. Improved system performance and reduced downtime by implementing effective IT support strategies. Languages and technologies involved: Vue, Directus, Java for SAP, Gitlab, Jira and Confluence. Microsoft Teams for communication." },
    { title: "Drupal Web Developer", content: "Developed and maintained Drupal websites with custom themes and modules. Integrated third-party services and ensured websites were user-friendly, secure, and responsive across devices. Languages and technologies involved: Drupal, Vue, NodeJS, Bitbucket, Jira and Custom Wiki. Zoom and Mattermost for communication." },
    { title: "Research Fellow", content: "Led research initiatives in the field of web development and computer science. Published research papers and collaborated with other researchers and developers to drive innovations in the industry. Languages and technologies involved: Flask, Django, PHP and Redmine. Email and daily meetings for communication." },
  ];
  const education = [
    { title: "Computing Engineer Degree", content: "Earned a Computing Engineer Degree, focusing on software development, computer networks and database management. Developed a strong foundation in programming languages and general algorithms." },
    { title: "Master's Degree in Web Application Development", content: "Completed a Master's Degree in Web Application Development. Specialized in front-end and back-end technologies, working with frameworks like Angular for development, Cypress for Testing and backend built in Python and PHP, with special focus on creating scalable, secure web applications." },
  ];
  const volunteering = [
    { title: "Website Content Administrator", content: "Managed the content for a non-profit organization's website, ensuring the content was up-to-date and aligned with the organization's goals. Optimized content for SEO and enhanced user engagement through visual and textual improvements." },
    { title: "Vice-chair of the committee (ITcom)", content: "Served as Vice-chair of the ITcom committee, organizing tech events, mentoring members, and collaborating with industry professionals. Helped guide the committee’s strategy to support innovation and professional development in the tech community inside ESN organization." },
  ];
  const tech_skills = [
    { title: "Drupal (8-10) - Advanced", content: "Proficient in building and maintaining dynamic websites using Drupal. Experience with custom module development, theme customization, and integrating third-party services. Proffessional work experience: 4 years + 2 years as drupal system administrator." },
    { title: "HTML/CSS/JavaScript - Advanced", content: "Strong command over HTML5, CSS3, and JavaScript. Expertise in creating responsive layouts, CSS animations, and interactive user interfaces with JavaScript. 7 years of experience, 5 of them being proffessional." },
    { title: "Vue/Svelte/TypeScript - Intermediate", content: "Intermediate experience with Vue.js, Svelte, and TypeScript for building web applications. Comfortable with state management and component-driven development. 2 years of proffessional experience and an extra year with studying experience in Angular." },
    { title: "PHP/Python - Intermediate", content: "Mid-level experience in PHP and Python for back-end development. Experience with frameworks like Laravel for PHP and Flask for Python, as well as integrating databases and APIs. 4 years of proffesional experience with PHP + 3 years of Python experience that gathers both studying and hobby experience." },
    { title: "Java/NodeJS/Go - Beginner", content: "Beginner-level knowledge of Java, NodeJS and Go. Familiar with building basic applications, using libraries, and understanding core programming concepts. 1 year of hobby experience with both Java and Go." },
  ];
  const personal_skills = [
    { title: "Scrum format and Kanban", content: "Experienced in Agile development practices, particularly Scrum and Kanban. Skilled at managing sprints, ensuring efficient workflows, and delivering high-quality projects on time." },
    { title: "Code quality", content: "Strong focus on code quality, including writing clean, efficient, and maintainable code. Familiar with code review processes, unit testing, and debugging techniques." },
    { title: "Teamwork management", content: "Proficient in managing and participating in cross-functional teams. Skilled at fostering collaboration, resolving conflicts, and ensuring that team members work effectively together." },
    { title: "Client relationship quality", content: "Experienced in managing client relationships and ensuring satisfaction through clear communication, understanding their needs, and delivering high-quality solutions." },
  ];
  const language = [
    { title: "Spanish - Native", content: "Native Spanish speaker." },
    { title: "English - Fluent", content: "English speaker since primary school. Current level C1." },
    { title: "German - Basic", content: "German speaker since 2021. Current level A2." },
  ];
</script>

<main>
  <h1>Work Experience</h1>
  <Accordion sections={workExperience} />
  <br>
  <h1>Education</h1>
  <Accordion sections={education} />
  <br>
  <h1>Volunteering</h1>
  <Accordion sections={volunteering} />
  <br>
  <h1>Technical Skills</h1>
  <Accordion sections={tech_skills} />
  <br>
  <h1>Personal Skills</h1>
  <Accordion sections={personal_skills} />
  <br>
  <h1>Language</h1>
  <Accordion sections={language} />
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

