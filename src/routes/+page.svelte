<script lang="ts">
  import Game from "../components/Game.svelte";
  import ChoiceButton from "../components/ChoiceButton.svelte";
  import Score from "../components/Score.svelte";
  import triangle from "$lib/img/bg-triangle.svg";
  import Header from "../components/Header.svelte";
</script>

<Header />
<main>
  <img src={triangle} class="triangle" alt="triangle" />
  <Game />
</main>

<style>
  main {
    background: linear-gradient(
      to bottom,
      hsl(214, 47%, 23%),
      hsl(237, 49%, 15%)
    );
	height: 100vh;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    position: relative;
  }
  .triangle {
	margin-top: 15vh;
  }
</style>
