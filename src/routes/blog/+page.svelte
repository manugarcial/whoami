<script>
  import { t } from 'svelte-i18n';
  export let blogs = [
    {
      id: 1,
      title: "blog_1_title",
      summary: "blog_1_summary",
      date: "2024-11-20",
    },
    // {
    //   id: "2",
    //   title: "Building Reusable Components in Svelte",
    //   summary: "Discover best practices for creating reusable components in Svelte.",
    //   date: "2024-11-19",
    // },
    // {
    //   id: "3",
    //   title: "Introduction to Server-Side Rendering (SSR)",
    //   summary: "Understand SSR and how SvelteKit leverages it for better performance.",
    //   date: "2024-11-18",
    // },
  ];
</script>


<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }

  .blog-list {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .blog-list h1 {
    text-align: center;
    font-size: 36px;
    color: #333;
    margin-bottom: 30px;
    font-weight: 600;
  }

  .blog-item {
    display: block;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: #fafafa;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .blog-item:hover {
    background-color: #f1f1f1;
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .blog-item:active {
    transform: translateY(0);
  }

  .blog-title {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
  }

  .blog-summary {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
    line-height: 1.6;
  }

  .blog-date {
    font-size: 14px;
    color: #aaa;
    font-style: italic;
  }

  @media (max-width: 768px) {
    .blog-list {
      padding: 15px;
      margin: 20px;
    }

    .blog-title {
      font-size: 22px;
    }

    .blog-summary {
      font-size: 14px;
    }
  }

  .read-more {
    display: inline-block;
    margin-top: 15px;
    font-size: 14px;
    color: #0070f3;
    text-decoration: none;
  }

  .read-more:hover {
    text-decoration: underline;
  }
</style>

<div class="blog-list">
  {#each blogs as blog}
    <a href={`/blog/${blog.id}`} class="blog-item">
      <div class="blog-title">{$t(blog.title)}</div>
      <div class="blog-summary">{$t(blog.summary)}</div>
      <div class="blog-date">{$t('blog_published')} {blog.date}</div>
      <div class="read-more">{$t('read_more')}</div>
    </a>
  {/each}
</div>
