<script>
    import {userScore} from "$lib/gameStore"
  //export let score = 0;
</script>

<div class="score-container">
  <div class="scoretitle">Score</div>
  <div class="scorenumber">{$userScore}</div>
</div>

<style>
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
</style>
