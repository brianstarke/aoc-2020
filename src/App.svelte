<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style>
  :global(body) {
    --primary: #332717;
    --secondary: #ff370f;
    --accent: #6bacbf;
    --background: #9dbcbc;

    --body-font: "Montserrat", sans-serif;
    --special-font: "Roboto Slab", serif;
    transition: 0.6s;
  }
</style>

<Router {routes} />
