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

  :global(body.one) {
    --primary: #8f9924;
    --secondary: #f1396d;
    --accent: #fd6081;
    --background: #f3ffeb;
  }
  :global(body.two) {
    --primary: #ff0d51;
    --secondary: #a88c8c;
    --accent: #6bacbf;
    --background: #909d9e;

    --body-font: "Montserrat", sans-serif;
    --special-font: "Roboto Slab", serif;
  }
</style>

<Router {routes} />
