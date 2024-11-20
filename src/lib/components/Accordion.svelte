<script>
  import { writable } from 'svelte/store';

  // Store to track the currently open section
  let activeSection = writable(null);

  // Function to toggle sections
  function toggleSection(index) {
    activeSection.update((current) => (current === index ? null : index));
  }

  // Sections array (replace or pass as a prop)
  export let sections = [
    { title: "Section 1", content: "Content for Section 1" },
    { title: "Section 2", content: "Content for Section 2" },
    { title: "Section 3", content: "Content for Section 3" },
  ];
</script>

<style>
  .accordion {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }

  .section {
    border-bottom: 1px solid #ddd;
  }

  .section:last-child {
    border-bottom: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    font-size: 18px;
    background-color: #f9f9f9;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s;
  }

  .header:hover {
    background-color: #f0f0f0;
  }

  .icon {
    font-size: 20px;
  }

  .content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease, padding 0.3s ease;
    padding: 0 15px;
  }

  .content.open {
    max-height: 300px; /* Adjust based on your content size */
    padding: 15px;
  }
</style>

<div class="accordion">
  {#each sections as { title, content }, index}
    <div class="section">
      <!-- Header Section -->
      <div class="header" on:click={() => toggleSection(index)}>
        <span>{title}</span>
        <span class="icon">
          {#if $activeSection === index}
            -
          {:else}
            +
          {/if}
        </span>
      </div>

      <!-- Content Section -->
      <div class={`content ${$activeSection === index ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  {/each}
</div>
