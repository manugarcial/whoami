<script>
  import { t } from 'svelte-i18n';
  let name = "Manuel García López";
  let title = "Full-Stack Web Developer & Service manager";
  let profilePic = "/images/profile_picture.jpg";
</script>

<style>
  .container {
      max-width: 600px;
      margin: auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      margin-top: 30px;
  }
  .profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid black;
    margin-bottom: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
      color: #333;
      font-size: 24px;
  }
  p {
      color: #666;
      font-size: 16px;
      line-height: 1.6;
  }
  .links {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
  }
  .links a {
      flex: 1;
      max-width: 40%;
      min-width: 90%;
      text-align: center;
      padding: 10px 15px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
  }
  .links a:hover {
      background-color: #0056b3;
  }
  @media (min-width: 600px) {
      .links a {
          min-width: unset;
          max-width: 40%;
      }
  }
</style>

<div class="container">
  <img src={profilePic} alt="Profile" class="profile-pic">
  <h1>{name}</h1>
  <h2>{title}</h2>
  <br>
  <p>
    {$t("about_passion")}
  </p>
  <br>
  <p>
    {$t("about_experience")}
  </p>
  <br>
  <p>
    {$t("about_goals")}
  </p>
  <div class="links">
    <a href="/career" target="_blank">Career Path</a>
    <a href="/resume" target="_blank">Resume</a>
  </div>
</div>