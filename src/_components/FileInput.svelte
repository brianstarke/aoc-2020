<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let fileName: string;

  const handleUpload = (): void => {
    // @ts-ignore
    const f = document.getElementById("file-input").files[0];
    fileName = f.name;

    var reader = new FileReader();
    reader.readAsText(f, "UTF-8");
    reader.onload = (e) => {
      const s: string = e.target.result as string;
      dispatch("upload", { data: s });
    };
  };

  const openUpload = (): void => {
    document.getElementById("file-input").click();
  };
</script>

<style>
  .hidden-upload {
    display: none;
  }
</style>

<center>
  {#if !!fileName}
    <button type="button" class="btn" disabled>{fileName}</button>
  {:else}
    <button type="button" class="btn" on:click={openUpload}>Feed me!</button>
  {/if}
</center>

<input
  id="file-input"
  class="hidden-upload"
  type="file"
  accept="text/text"
  on:change={handleUpload} />
