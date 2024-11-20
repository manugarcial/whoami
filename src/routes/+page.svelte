<script>
  import Card from '../lib/components/Card.svelte';
  import { onMount } from 'svelte';

  let message = '';

  // Fetch data from the Go API when the component is mounted
  onMount(async () => {
    try {
      const res = await fetch('http://localhost:3000/api/');
      console.log(res);
      if (res.ok) {
        const data = await res.json();
        message = data.message;
        console.log(message);
      } else {
        message = 'Error fetching data';
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      message = 'Network error';
    }
  });
</script>

<main>
  <h1>Message from Go API</h1>
  <p>{message}</p>
    <!-- Use CustomCard component -->
  <Card 
    title="My GitHub"
    link="https://github.com/username"
    bgColor="#4CAF50" 
  />

  <Card 
    title="My LinkedIn"
    link="https://linkedin.com/in/username"
    bgColor="#0077B5" 
  />
  
  <Card 
    title="My Portfolio"
    link="/portfolio"
    bgColor="#FF6347" 
  />

  <Card 
    title="My Blog"
    link="/blog"
    bgColor="#A3A347" 
  />
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    padding: 20px;
    margin: 0 auto;
  }
</style>
