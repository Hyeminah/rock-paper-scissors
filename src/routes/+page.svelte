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
  <div style="align-items: center;">
    <div class="rock">
      <ChoiceButton type="rock" onClick={(type) => console.log(type)} />
    </div>
    <div class="paper">
      <ChoiceButton type="paper" onClick={(type) => console.log(type)} />
    </div>
    <div class="scissors">
      <ChoiceButton type="scissors" onClick={(type) => console.log(type)} />
    </div>
  </div>
  <Game />
</main>

<style>

  .rock {
	border:15px solid red;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 200px;
    left: 500px;
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }
  .scissors {
	border: 15 px solid yellow;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 700px;
    width: 200px;
    height: 200px;
    border-radius: 200px;
  }

  .paper {
    background-color: hsl(230, 89%, 62%);
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 400px;
    left: 900px;
    width: 200px;
    height: 200px;
    border-radius: 200px;
    color: white;
  }

  .paper::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px; /* Adjust as needed */
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }

  main {
    background: linear-gradient(
      to bottom,
      hsl(214, 47%, 23%),
      hsl(237, 49%, 15%)
    );
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    position: relative;
  }
</style>
