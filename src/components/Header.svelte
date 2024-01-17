<script lang="ts">
  import logo from "$lib/img/logo.svg";
  export let score = 0;
</script>

<header>
  <div class="scoreBoard">


    <img src={logo} class="logo" alt="Title_logo" />
    <div style="margin-top: 20px;"></div>

    <img class="logo" src="$lib/img/logo.svg" alt="Title_logo" />
    <div class="score-container">
      <div class="scoretitle">Score</div>
      <div class="scorenumber">{score}</div>
    </div>
  </div>
  <style>
    .scoreBoard {
      display: flex;
      width: 100%;
      max-width: 550px;
      justify-content: space-between;
      border: 1.5px solid white;
      border-radius: 5px, 5px, 5px, 5px;
      padding: 0.7em;
      margin: auto;
    }

    .score-container {
      display: flex;
      width: 30%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-radius: 5px;
      padding: 0.5rem;
    }

    .scoretitle {
      background-color: white;
      font-size: 1.5rem;
      font-weight: bold;
      color: black;
    }
    .scorenumber {
      background-color: white;
      font-size: 2rem;
      font-weight: 700;
      color: black;
    }
    .logo {
      width: 10rem;
      height: 10rem;
    }
  </style>
</header>
