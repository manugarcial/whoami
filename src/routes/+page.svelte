<script>
  import { t } from 'svelte-i18n';
  import Card from '../lib/components/Card.svelte';
  // import { onMount } from 'svelte';

  // let message = '';

  // Fetch data from the Go API when the component is mounted
  // onMount(async () => {
  //   try {
  //     const res = await fetch('http://localhost:3000/api/');
  //     console.log(res);
  //     if (res.ok) {
  //       const data = await res.json();
  //       message = data.message;
  //       console.log(message);
  //     } else {
  //       message = 'Error fetching data';
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     message = 'Network error';
  //   }
  // });
</script>

<main>
  <!-- <h1>Message from Go API</h1>
  <p>{message}</p> -->
  <div class="card-container">
    <Card 
      title="{$t('about_me')}"
      link="/about"
      bgColor="#A1153F" 
      bgImage="/images/portfolio-logo.svg"
    />

    <Card 
      title="{$t('resume')}"
      link="/resume"
      bgColor="#FFAF53" 
      bgImage="/images/portfolio-logo.svg"
    />

    <Card 
      title="{$t('career_path')}"
      link="/career"
      bgColor="#FFDF53" 
      bgImage="/images/portfolio-logo.svg"
    />

    <Card 
      title="{$t('projects')}"
      link="/projects"
      bgColor="#A8D58A" 
      bgImage="/images/github-logo.svg"
    />

    <Card 
      title="{$t('tech_infographies')}"
      link="/tech_infographies"
      bgColor="#A115A1" 
      bgImage="/images/github-logo.svg"
    />

    <Card 
      title="{$t('blog')}"
      link="/blog"
      bgColor="#C7DF5F" 
      bgImage="/images/blog-logo.svg"
    />

    <Card 
      title="{$t('github')}"
      link="https://github.com/manugarcial"
      bgColor="#A1BFF7" 
      bgImage="/images/github-logo.svg"
    />

    <Card 
      title="{$t('linkedin')}"
      link="https://linkedin.com/in/manuel-g-a5b879156"
      bgColor="#A1DFF7" 
      bgImage="/images/linkedin-logo.svg"
    />
  </div>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    padding: 20px;
    margin: 0 auto;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
</style>
