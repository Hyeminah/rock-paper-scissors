<script lang="ts">
  import Score from "./Score.svelte";
  import logo from "$lib/img/logo.svg";
  export let score = 0;
  //   import { score } from "$lib/gameStore";
</script>

<header>
  <div class="scoreBoard">
    <img src={logo} class="logo" alt="Title_logo" />

    <Score />
  </div>
</header>

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
  .logo {
    border-radius: 5px, 5px, 5px, 5px;
    margin-top: 20px;
    width: 10rem;
    height: 10rem;
  }
</style>
