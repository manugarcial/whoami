<script lang="ts">
  import { t } from 'svelte-i18n';
  import { writable } from 'svelte/store';
  import { init, register, locale } from 'svelte-i18n';

  let isOpen = false;
  let isLanguageMenuOpen = false; // Store for the current language
  let searchQuery = "";
  let currentLanguage = writable<'en' | 'es' | 'de'>('en');

  const menuItems = [
    { title: 'about_me', path: '/about' },
    { title: 'resume', path: '/resume' },
    { title: 'career_path', path: '/career' },
    { title: 'projects', path: '/projects' },
    { title: 'tech_infographies', path: '/tech_infographies' },
    { title: 'blog', path: '/blog' },
    { title: 'github', path: 'https://github.com/manugarcial' },
    { title: 'linkedin', path: 'https://linkedin.com/in/manuel-g-a5b879156' },
  ];

  const queryItems = [
    { title: 'about_me', path: '/about' },
    { title: 'resume', path: '/resume' },
    { title: 'career_path', path: '/career' },
    { title: 'projects', path: '/projects' },
    { title: 'tech_infographies', path: '/tech_infographies' },
    { title: 'blog', path: '/blog' },
    { title: 'github', path: 'https://github.com/manugarcial' },
    { title: 'linkedin', path: 'https://linkedin.com/in/manuel-g-a5b879156' },
    { title: 'JavaScript', path: '/career#tech_skills' },
    { title: 'TypeScript', path: '/career#tech_skills' },
    { title: 'Svelte', path: '/tech_infographies#Svelte' },
    { title: 'Vue 3', path: '/tech_infographies#Vue.js' },
    { title: 'Angular', path: '/tech_infographies#AngularJS' },
    { title: 'Drupal', path: '/tech_infographies#Drupal' },
    { title: 'Python', path: '/tech_infographies#Python (Flask)' },
    { title: 'Hema E-commerce', path: '/tech_infographies#Hema Atelier E-commerce' },
    { title: 'Whoami Portfolio', path: '/tech_infographies#Whoami Portfolio' },
    { title: 'Financapp FE', path: '/tech_infographies#Financapp FE' },
    { title: 'Financapp BE', path: '/tech_infographies#Financapp BE' },
    { title: 'Exodus FE', path: '/tech_infographies#Exodus FE' },
    { title: 'Exodus BE', path: '/tech_infographies#Exodus BE' },
    { title: 'Coosto\'s public website', path: '/tech_infographies#Coosto\'s website' },
    { title: 'Poetry AI Generator', path: '/tech_infographies#Poetry AI Generator with Machine Learning' },
  ];

  // Toggle the menu
  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  // Close the menu
  const closeMenu = () => {
    isOpen = false;
    // isLanguageMenuOpen = false;
  };

  // Switch the language
  const changeLanguage = (lang: 'en' | 'es' | 'de') => {
    currentLanguage.set(lang);
    locale.set(lang);
    isLanguageMenuOpen = false;
  };

  // Filter search results
  let filteredResults = [];
  $: filteredResults = queryItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));


  // Initialize i18n (just as a placeholder)
  init({
    fallbackLocale: 'en',
    initialLocale: 'en',
  });

  // Register translation files
  register('en', () => import('$lib/lang/en.json'));
  register('es', () => import('$lib/lang/es.json'));
  register('de', () => import('$lib/lang/de.json'));
</script>

<style>
  .hamburger-menu {
    position: sticky;
    top: 0;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    display: flex;
    justify-content: flex-start;
  }

  .hamburger-button {
    position: relative;
    width: 50px;
    height: 24px;
    cursor: pointer;
    border: none;
    background: none;
    left: -14px;
    margin-top: 8px;
  }

  .hamburger-button span {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: white;
    transition: all 0.3s ease;
  }

  .hamburger-button span:nth-child(1) {
    top: 4px;
    width: 24px;
  }

  .hamburger-button span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
  }

  .hamburger-button span:nth-child(3) {
    bottom: 4px;
    width: 24px;
  }

  .hamburger-button.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 50%;
    background-color: white;
    width: 24px;
  }

  .hamburger-button.open span:nth-child(2) {
    opacity: 0;
    width: 24px;
  }

  .hamburger-button.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 50%;
    background-color: white;
    width: 24px;
  }

  .user-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    cursor: pointer;
  }

  .user-icon svg {
    width: 40px;
    height: 40px;
    color: white;
  }

  .language-switcher {
    display: flex;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    position: relative;
  }

  .language-switcher span {
    margin-left: 5px;
    color: white;
  }
  .language-dropdown {
    position: absolute;
    top: 30px;
    left: -50px;
    background-color: #333;
    padding: 5px;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 0;
    transform: translateY(-10px);
  }

  .language-dropdown.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .language-dropdown button {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    width: 100%;
    text-align: left;
  }

  .language-dropdown button:hover {
    background-color: #444;
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .menu.open {
    transform: translateY(0%);
  }

  .menu a {
    text-decoration: none;
    color: white;
    font-size: 24px;
    margin: 0;
  }

  .menu a:hover {
    color: #00d1b2;
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav li {
    list-style-type: none;
    margin: 0;
  }

  nav li a {
    text-decoration: none;
    color: white;
    font-size: 24px;
    padding: 10px 15px;
    display: block;
    transition: color 0.3s ease;
  }

  nav li a:hover {
    color: #00d1b2;
  }

  .logo {
    color: white;
    margin-top: 8px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
  }

  .search-container {
    position: relative;
    text-align: center;
    flex: 1;
  }

  .search-bar {
    width: 60%;
    padding: 8px 12px;
    font-size: 16px;
    background: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 6px;
    outline: none;
    transition: background 0.3s, color 0.3s;
  }
  
  .search-bar:hover, .search-bar:focus, .search-bar:not(:placeholder-shown) {
    background: white;
    color: black;
  }

  .search-results {
    position: absolute;
    background: white;
    color: black;
    width: 60%;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    margin-left: 20%;
    border-radius: 6px;
    margin-top: 5px;
  }

  .search-results a {
    display: block;
    padding: 8px;
    text-decoration: none;
    color: black;
  }

  .search-results a:hover {
    background: #f0f0f0;
  }

  .search-result-item {
    height: 30px;
    cursor:pointer;
  }

  .search-bar::placeholder {
    color: white;
  }

  .search-bar::placeholder::hover {
    color: black;
  }
</style>

<div class="hamburger-menu">
  <button
    class={`hamburger-button ${isOpen ? 'open' : ''}`}
    on:click={toggleMenu}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="logo"><a href="/" on:click={closeMenu}>Whoami_</a></div>

  <div class="search-container">
    <input type="text" bind:value={searchQuery} placeholder={$t("search_placeholder")} class="search-bar" />
    {#if searchQuery && filteredResults.length > 0}
      <div class="search-results">
        {#each filteredResults as result}
          <div class="search-result-item" on:click={() => { closeMenu(); window.location.href = result.path; }}>
            {$t(result.title)}
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <div class="user-icon">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
      <circle cx="12" cy="6" r="4" stroke="white" stroke-width="2" fill="none" />
      <path d="M12 10 C 10 10, 8 12, 8 15" stroke="white" stroke-width="2" fill="none" />
      <path d="M12 10 C 14 10, 16 12, 16 15" stroke="white" stroke-width="2" fill="none" />
    </svg> -->
  </div>

  <!-- Language Switcher -->
  <div class="language-switcher" on:click={() => { isLanguageMenuOpen = !isLanguageMenuOpen; closeMenu(); }}>
    <span>{ $currentLanguage === 'en' ? 'EN' : $currentLanguage === 'es' ? 'ES' : 'DE' }</span>
    <!-- Language Dropdown menu -->
    <div class="language-dropdown {isLanguageMenuOpen ? 'visible' : ''}">
      <button on:click={() => changeLanguage('en')}>English</button>
      <button on:click={() => changeLanguage('es')}>Español</button>
      <button on:click={() => changeLanguage('de')}>Deutsch</button>
    </div>
  </div>
</div>

<div class="overlay" on:click={closeMenu} style:display={isOpen ? 'block' : 'none'}></div>

<div class={`menu ${isOpen ? 'open' : ''}`}>
  <nav>
    {#each menuItems as item}
      <li><a href={item.path} on:click={closeMenu}>{$t(item.title)}</a></li>
    {/each}
  </nav>
</div>
