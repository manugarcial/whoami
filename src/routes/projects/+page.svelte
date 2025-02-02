<script>
  import Card from '../../lib/components/Card.svelte';
  export let projects = [
    {
      id: "financapp",
      title: "Financapp",
      summary: "test project docs",
      link: "/projects/financapp",
      bgColor: "#A8D58A",
      bgImage: "/images/finances.svg"
    },
    {
      id: "whoami",
      title: "Whoami",
      summary: "test project docs",
      link: "/projects/whoami",
      bgColor: "#C7DF5F",
      bgImage: "/images/employee.svg"
    },
    {
      id: "hema",
      title: "Hema",
      summary: "test project docs",
      link: "/projects/hema",
      bgColor: "#A1BFF7",
      bgImage: "/images/hema-sewing.svg"
    },
    // {
    //   id: "HemaBackoffice",
    //   title: "Hema Backoffice",
    //   summary: "test project docs",
    //   link: "/projects/hema_backoffice",
    //   bgColor: "#F4A261",
    //   bgImage: "/images/default.svg"
    // },
  ];
</script>

<main>
  <div class="card-container">
    <!-- <Card 
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
    /> -->

    {#each projects as project}
      <Card 
        title={project.title}
        link={project.link}
        bgColor={project.bgColor}
        bgImage={project.bgImage}
      />
      {/each}
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