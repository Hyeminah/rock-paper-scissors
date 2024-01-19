<script lang="ts">
  import { onMount } from "svelte";
  import ChoiceButton from "./ChoiceButton.svelte";
  import Header from "./Header.svelte";
  import Score from "./Score.svelte";
  import { userScore } from "$lib/gameStore";

  let userChoice = "";
  let computerChoice = "";
  let resultMessage = "";
  let score = 0;

  const choices = ["rock", "paper", "scissors"];
  const maxScore = 3; // Set your desired maximum score
  onMount(() => {
  });

  function handleChoice(chosen: string) {
    console.log(chosen)
    userChoice = chosen;
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
      resultMessage = "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      resultMessage = "You win!";
      userScore.update((value) => {
        const newScore = value + 1;
        if (newScore >= maxScore) {
          resultMessage = "You are the winner!";
          return 0; // Reset the score to 0
        }
        return newScore;
      });
    } else {
      resultMessage = "You lose!";
      userScore.update((value) => Math.max(0, value - 1));
    }


    // Bonus: Save the score
    localStorage.setItem("score", score.toString());
  }
  function aleatory() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
  function roulette() {
    computerChoice = aleatory();
  }
</script>

<div>
  <div style="align-items: center;">
    <div class="rock">
      <ChoiceButton type="rock" onClick={() => handleChoice("rock")} />
    </div>
    <div class="paper">
      <ChoiceButton type="paper" onClick={(type) => handleChoice("paper")} />
    </div>
    <div class="scissors">
      <ChoiceButton
        type="scissors"
        onClick={(type) => handleChoice("scissors")}
      />
    </div>
  </div>
  <p>{resultMessage}</p>
</div>

<style>
  .rock {
    border: 15px solid hsl(349, 71%, 52%);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 250px;
    left: 630px;
    width: 150px;
    height: 150px;
    border-radius: 200px;
  }
  .scissors {
    border: 15px solid hsl(39, 89%, 49%);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 70px;
    left: 750px;
    width: 150px;
    height: 150px;
    border-radius: 200px;
  }

  .paper {
    border: 15px solid hsl(230, 89%, 62%);
    background-color: white;
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 70px;
    left: 500px;
    width: 150px;
    height: 150px;
    border-radius: 200px;
  }

  .paper::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
</style>
