<script lang="ts">
  import { goto } from "@roxi/routify";

  enum Day {
    one,
    two,
    three,
  }

  const days = Object.keys(Day).filter((v) => isNaN(Number(v)));

  const handleSelect = (day?: Day) => {
    $goto(`/${Day[day]}`);
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
    <li on:click={() => handleSelect(undefined)}>
      <span class="nav-btn">Home</span>
    </li>

    {#each days as day}
      <li on:click={() => handleSelect(Day[day])}>
        <span class="nav-btn">{day}</span>
      </li>
    {/each}
  </ul>
</header>

<section>
  <slot>Select a day!</slot>
</section>
