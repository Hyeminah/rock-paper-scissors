<script lang="ts">
  import { onMount } from "svelte";
  import ChoiceButton from "./ChoiceButton.svelte";
  import Header from "./Header.svelte";
  import Score from "./Score.svelte";

  let userChoice = "";
  let computerChoice = "";
  let resultMessage = "";
  let score = 0;

  const choices = ["rock", "paper", "scissors"];
  onMount(() => {
    // Bonus: Load the score
    const savedScore = localStorage.getItem("score");
    if (savedScore) {
      score = parseInt(savedScore, 10);
    }
  });

  const handleChoice = (chosen: string) => {
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
      score++;
    } else {
      resultMessage = "You lose!";
      score--;
    }

    // Bonus: Save the score
    localStorage.setItem("score", score.toString());
  };
  function aleatory() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
  function roulette() {
    computerChoice = aleatory();
  }
</script>

<div>
  <!-- <ChoiceButton type="rock" onClick={() => handleChoice("rock")} />
    <ChoiceButton type="paper" onClick={() => handleChoice("paper")} />
    <ChoiceButton type="scissors" onClick={() => handleChoice("scissors")} /> -->

  <p>{resultMessage}</p>

  <Score {score} />
</div>

