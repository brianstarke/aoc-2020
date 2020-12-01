<script lang="ts">
  import One from "./one/index.svelte";
  import Two from "./two/index.svelte";

  enum Day {
    zero,
    one,
    two,
    three,
  }

  const days = Object.keys(Day).filter((v) => isNaN(Number(v)));

  let currentComponent = undefined;

  const setTheme = (day: Day) => {
    window.document.body.classList.remove(...days);
    window.document.body.classList.add(Day[day]);
  };

  const handleSelect = (day: Day) => {
    setTheme(day);

    switch (day) {
      case Day.zero:
        currentComponent = undefined;
        break;
      case Day.one:
        currentComponent = One;
        break;
      case Day.two:
        currentComponent = Two;
        break;
      default:
        currentComponent = undefined;
        break;
    }
  };
</script>

<style>
  header {
    background-color: var(--primary);
    color: var(--accent);
    font-family: var(--special-font);
    font-size: large;
    padding: 1px;
    min-height: 64px;
  }

  ul {
    list-style-type: none;
  }

  li {
    float: left;
    margin-left: 6px;
    margin-right: 6px;
    /* padding: 8px; */
  }

  section {
    padding: 16px;
  }

  .nav-btn {
    border-bottom: 2px solid var(--accent);
    color: var(--secondary);
    font-family: var(--special-font);
    cursor: pointer;
  }
  .nav-btn:hover {
    background-color: var(--accent);
  }
</style>

<header>
  <ul>
    {#each days as day}
      <li on:click={() => handleSelect(Day[day])}>
        <span class="nav-btn">{day}</span>
      </li>
    {/each}
  </ul>
</header>

<section>
  {#if !currentComponent}
    Select a day!
  {:else}
    <svelte:component this={currentComponent} />
  {/if}
</section>
