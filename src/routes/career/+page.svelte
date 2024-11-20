<script>
  import Accordion from '$lib/components/Accordion.svelte';
  const accordionSections = [
    { title: "Introduction", content: "This is the introduction section content." },
    { title: "Features", content: "This section contains details about the features." },
    { title: "FAQ", content: "Here are some frequently asked questions." },
  ];
</script>

<main>
  <h1>Details</h1>
  <Accordion sections={accordionSections} />
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

