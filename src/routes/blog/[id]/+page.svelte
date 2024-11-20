<script>
  export let params;

  // Sample blog data (replace this with an API/database call based on params.id)
  const blogPosts = {
    "1": {
      title: "Understanding SvelteKit",
      content: `
        SvelteKit is a modern framework for building web applications. It leverages Svelte's
        component-based architecture and adds routing, SSR, and other powerful features...
      `,
      date: "2024-11-20",
    },
    "2": {
      title: "Building Reusable Components in Svelte",
      content: `
        Reusable components allow you to create consistent and maintainable UIs. In this guide,
        we will explore how to structure components effectively in Svelte...
      `,
      date: "2024-11-19",
    },
    "3": {
      title: "Introduction to Server-Side Rendering (SSR)",
      content: `
        Server-Side Rendering (SSR) improves performance and SEO by rendering HTML on the server.
        SvelteKit provides a seamless way to integrate SSR in your applications...
      `,
      date: "2024-11-18",
    },
  };

  const blog = blogPosts[params.id];
</script>

<style>
  .blog-post {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .blog-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
  }

  .blog-date {
    font-size: 14px;
    color: #aaa;
    margin-bottom: 20px;
  }

  .blog-content {
    font-size: 18px;
    line-height: 1.6;
    color: #444;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<div class="blog-post">
  {#if blog}
    <h1 class="blog-title">{blog.title}</h1>
    <p class="blog-date">Published on {blog.date}</p>
    <div class="blog-content">{@html blog.content}</div>
    <a href="/blog">← Back to Blog</a>
  {:else}
    <p>Blog post not found.</p>
    <a href="/blog">← Back to Blog</a>
  {/if}
</div>
