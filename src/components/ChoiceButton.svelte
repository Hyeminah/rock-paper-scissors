<script lang="ts">

  export let type = "";
  export let onClick:(type :string) => void;

  const handleClick = () => {
    onClick(type);
  };
</script>

<div class="button--container">
  <button
    on:click={handleClick}
    class="button-choice"
    class:rock={type === "rock"}
    class:paper={type === "paper"}
    class:scissors={type === "scissors"}
  >
    <div class="button__content">
      <img src={`./src/lib/img/icons/icon-${type}.svg`} alt="icon" />
    </div>
  </button>
</div>

<style>
   .button__content{
    background-color: white;
    border-radius: 50%;
    width: 100%;
    height: 100%;
   }
   .button__content img {
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 30%;
   }
    button {
    width: 100px;
    height: 100px;
    position: relative;
    cursor: pointer;
    background-color: white;
  }
</style>
