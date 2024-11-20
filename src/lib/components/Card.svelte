<script lang="ts">
  export let title: string;
  export let link: string;
  export let bgColor: string = '#f0f0f0';
</script>

<style>
  .card {
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    text-align: center;
    color: #333;
    transition: background-color 0.3s ease;
  }

  .card a {
    color: #00d1b2;
    text-decoration: none;
    font-size: 18px;
  }

  .card:hover {
    background-color: #e0e0e0;
  }
</style>

<div class="card" style="background-color: {bgColor}">
  <h2>{title}</h2>
  <a href={link} target="_blank">Visit Link</a>
</div>
