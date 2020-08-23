<script>
  import { copyStore } from '../stores/copyStore.js';

  let copy;

  copyStore.subscribe(data => {
    copy = data;
  });
</script>

<main>
  <h1>{copy.hed}</h1>
  <p>{copy.body1}</p>
</main>

<style>

</style>
