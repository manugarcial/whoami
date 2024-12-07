<script lang="ts">
  import { t } from 'svelte-i18n';
  import { page } from '$app/stores';

  interface BlogPost {
    title: string;
    content: string;
    date: string;
    id: string;
  };

  let blogPosts: BlogPost [] = [
    {
      title: "blog_1_title",
      content: "blog_1_detail",
      date: "2024-11-20",
      id: "1"
    },
  ];

  let blog: BlogPost | undefined;
  $: {
    const id = $page.url.pathname.split('/').pop();
    blog = blogPosts.find((p) => p.id === id);
  }
</script>

<style>
  /* Global Styles */
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }

  /* Blog Post Container */
  .blog-post {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  /* Blog Title */
  .blog-title {
    font-size: 36px;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
    line-height: 1.3;
  }

  /* Blog Date */
  .blog-date {
    font-size: 16px;
    color: #aaa;
    font-style: italic;
    margin-bottom: 30px;
  }

  /* Blog Content */
  .blog-content {
    font-size: 18px;
    line-height: 1.8;
    color: #444;
    margin-bottom: 40px;
  }

  /* Link Styles */
  a {
    color: #0070f3;
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Optional: Add a Read More link */
  .read-more {
    display: inline-block;
    margin-top: 20px;
    font-size: 14px;
    color: #0070f3;
    font-weight: bold;
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .blog-post {
      padding: 15px;
      margin: 20px;
    }

    .blog-title {
      font-size: 28px;
    }

    .blog-content {
      font-size: 16px;
    }

    .blog-date {
      font-size: 14px;
    }

    .read-more {
      display: inline-block;
      padding: 12px 24px;
      font-size: 16px;
      color: #fff; /* White text color */
      background-color: #0070f3; /* Blue background */
      text-decoration: none; /* Remove underline */
      font-weight: 600;
      border-radius: 8px; /* Rounded corners */
      text-align: center; /* Center the text inside the button */
      transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition */
      margin-top: 20px; /* Space above the button */
    }

    .read-more:hover {
      background-color: #005bb5; /* Darker blue on hover */
      transform: translateY(-2px); /* Slight upward movement on hover */
    }

    .read-more:active {
      background-color: #004494; /* Even darker blue when the button is clicked */
      transform: translateY(0); /* Reset movement when clicked */
    }
  }
</style>

<div class="blog-post">
  {#if blog}
    <h1 class="blog-title">{$t(blog.title)}</h1>
    <p class="blog-date">{$t('blog_published')} {blog.date}</p>
    <div class="blog-content">{@html $t(blog.content)}</div>
    <br>
    <a href="/blog" class="read-more">{$t('blog_back')}</a>
  {:else}
    <p>{$t('blog_not_found')}</p>
    <a href="/blog" class="read-more">{$t('blog_back')}</a>
  {/if}
</div>
