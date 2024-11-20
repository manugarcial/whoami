<!-- <script lang="ts">
  import { t } from 'svelte-i18n'; // Import t function from svelte-i18n
</script>

<h1>{$t('blog')}</h1> -->
<script>
  // Sample data for blog posts; you can replace this with an API or database call.
  export let blogs = [
    {
      id: "1",
      title: "Understanding SvelteKit",
      summary: "Learn the basics of SvelteKit and how to get started.",
      date: "2024-11-20",
    },
    {
      id: "2",
      title: "Building Reusable Components in Svelte",
      summary: "Discover best practices for creating reusable components in Svelte.",
      date: "2024-11-19",
    },
    {
      id: "3",
      title: "Introduction to Server-Side Rendering (SSR)",
      summary: "Understand SSR and how SvelteKit leverages it for better performance.",
      date: "2024-11-18",
    },
  ];
</script>

<style>
  .blog-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .blog-item {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: box-shadow 0.3s;
    cursor: pointer;
  }

  .blog-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .blog-title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  .blog-summary {
    margin: 10px 0;
    font-size: 16px;
    color: #666;
  }

  .blog-date {
    font-size: 14px;
    color: #aaa;
  }
</style>

<div class="blog-list">
  <h1>Blog</h1>
  {#each blogs as blog}
    <a href={`/blog/${blog.id}`} class="blog-item">
      <div class="blog-title">{blog.title}</div>
      <div class="blog-summary">{blog.summary}</div>
      <div class="blog-date">Published on {blog.date}</div>
    </a>
  {/each}
</div>
