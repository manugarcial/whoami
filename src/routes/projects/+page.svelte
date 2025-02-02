<script>
  import Card from '../../lib/components/Card.svelte';
</script>

<main>
  <div class="card-container">
    <Card 
      title="Financapp"
      link="https://github.com/manugarcial/my-finances"
      bgColor="#A8D58A"
      bgImage="/images/finances.svg"
    />

    <Card 
      title="Whoami"
      link="https://github.com/manugarcial/whoami"
      bgColor="#C7DF5F"
      bgImage="/images/employee.svg"
    />
  
    <Card 
      title="Hema Sewing"
      link="https://github.com/manugarcial/Hema"
      bgColor="#A1BFF7"
      bgImage="/images/hema-sewing.svg"
    />

    <!-- <Card 
      title="Hema Backoffice (To be started)"
      link="https://github.com/manugarcial"
      bgColor="#A1DFF7"
      bgImage="/images/hema-sewing.svg"
    /> -->
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