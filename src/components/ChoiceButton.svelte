<script lang="ts">
  export let type = "";
  export let onClick: (type: string) => void;

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
  button {
    border: none;
    width: 100px;
    height: 100px;
    position: relative;
    cursor: pointer;
    background-color: white;
  }

  .button__content {
    border: none;
    background: none;
    background-color: white;
    border-radius: 50%;
  
  } 
</style>
