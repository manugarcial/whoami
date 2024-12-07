<script lang="ts">
  import { t } from 'svelte-i18n';
</script>

<style>
  .footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
    position: relative;
    width: 100%;
    z-index: 1;
    bottom: 0;
    margin-top: 40px;
  }

  @media (min-width: 768px) {
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-content p,
    .footer-content .social-links {
      margin: 0;
    }
    .social-links a {
      margin: 0 10px;
    }
  }

  /* Mobile version: stack content vertically */
  @media (max-width: 767px) {
    .footer-content {
      display: block;
    }
  }

  .footer a {
    color: #00d1b2;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer a:hover {
    color: #ffffff;
  }

  .footer .social-links {
    margin-top: 10px;
  }

  .footer .social-links a {
    margin: 0 10px;
  }
</style>

<div class="footer">
  <div class="footer-content">
    <p>© 2024 My Portfolio</p>
    <div class="social-links">
      <a href="https://github.com/manugarcial" target="_blank">{$t('github')}</a>
      <a href="https://linkedin.com/in/manuel-g-a5b879156" target="_blank">{$t('linkedin')}</a>
    </div>
  </div>
  <p>
    Developed by <a href="/" style="color: #00d1b2;">Manuel Garcia</a>
  </p>
</div>
