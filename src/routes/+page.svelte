<script>
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
      title="My Resume"
      link="/resume"
      bgColor="#FFDF53" 
      bgImage="/images/portfolio-logo.svg"
    />

    <Card 
      title="My Career Path"
      link="/portfolio"
      bgColor="#FFDF53" 
      bgImage="/images/portfolio-logo.svg"
    />

    <Card 
      title="My Projects"
      link="https://github.com/username"
      bgColor="#A8D58A" 
      bgImage="/images/github-logo.svg"
    />

    <Card 
      title="My Blog"
      link="/blog"
      bgColor="#C7DF5F" 
      bgImage="/images/blog-logo.svg"
    />

    <Card 
      title="My GitHub"
      link="https://github.com/username"
      bgColor="#A8D58A" 
      bgImage="/images/github-logo.svg"
    />

    <Card 
      title="My LinkedIn"
      link="https://linkedin.com/in/username"
      bgColor="#A1CFF7" 
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
    grid-template-columns: repeat(2, 1fr); /* Creates two columns */
    gap: 20px; /* Space between cards */
  }

  /* Optionally, you can adjust the responsiveness of the layout */
  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: 1fr; /* Stack the cards on smaller screens */
    }
  }
</style>
