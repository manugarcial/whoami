<script>
  import Card from '../../lib/components/Card.svelte';
</script>

<main>
  <div class="card-container">
    <Card 
      title="Project 1"
      link="https://github.com/username"
      bgColor="#4CAF50" 
    />

    <Card 
      title="Project 2"
      link="https://github.com/username"
      bgColor="#4CAF50" 
    />
  
    <Card 
      title="Project 3"
      link="https://github.com/username"
      bgColor="#4CAF50" 
    />

    <Card 
      title="Project 4"
      link="https://github.com/username"
      bgColor="#4CAF50" 
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