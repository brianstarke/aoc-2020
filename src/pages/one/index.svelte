<script lang="ts">
  import { FileInput } from "../../_components";

  let input: number[];

  let partOneSet: number[];
  let partOneRes: number;

  let partTwoSet: number[];
  let partTwoRes: number;

  const handleUpload = (e: CustomEvent): void => {
    const s = e.detail.data;
    input = s.split("\n").map((v) => parseInt(v, 10));
    find2020();
  };

  const is2020 = (...n: number[]): boolean => {
    let sum = 0;

    for (const num of [...n]) {
      sum += num;
      if (sum > 2020) return false;
      if (sum === 2020) return true;
    }

    return false;
  };

  const find2020 = () => {
    for (let i = 0; i < input.length; i++) {
      const x = input[i];

      for (let j = 1; j < input.length; j++) {
        const y = input[j];

        if (i === j) continue;

        if (is2020(x, y)) {
          partOneSet = [x, y];
          partOneRes = x * y;
          break;
        }

        for (let k = 0; k < input.length; k++) {
          if (i === k || j === k) continue;
          const z = input[k];

          if (is2020(x, y, z)) {
            partTwoSet = [x, y, z];
            partTwoRes = x * y * z;
            break;
          }
        }
      }
    }
  };
</script>

<FileInput on:upload={handleUpload} />

{#if partOneRes}
  <h1>Part 1</h1>
  <h1>{partOneSet.join(' * ')} = {partOneRes}</h1>
{/if}

{#if partTwoRes}
  <h1>Part 2</h1>
  <h1>{partTwoSet.join(' * ')} = {partTwoRes}</h1>
{/if}
