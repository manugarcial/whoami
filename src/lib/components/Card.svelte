<script lang="ts">
  export let title: string;
  export let link: string;
  export let bgColor = '#FFF';
  export let bgImage = '';
</script>

<style>
  .card {
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: #333;
    transition: background-color 0.3s ease;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--bg-color);
    background-image: var(--bg-image);/* Set background image */
    background-size: 70px 70px; /* Resize the logo */
    background-repeat: no-repeat;
    background-position: center;
  }

  .card a {
    color: #00d1b2;
    text-decoration: none;
    font-size: 18px;
  }

  .card:hover {
    background-color: #e0e0e0;
  }

  .content {
    flex: 1;
  }

  h3 {
    font-size: 18px;
    margin: 0;
  }
</style>

<a href={link} class="card" style="--bg-color: {bgColor}; --bg-image: url('{bgImage}')">
  <div class="content">
    <h3>{title}</h3>
  </div>
</a>
