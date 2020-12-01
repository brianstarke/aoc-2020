<script lang="ts">
  let input: number[];
  let result: number;
  let result2: number;

  const handleUpload = (): void => {
    // @ts-ignore
    const f = document.getElementById("file-input").files[0];

    var reader = new FileReader();
    reader.readAsText(f, "UTF-8");
    reader.onload = (e) => {
      const s: string = e.target.result as string;
      input = s.split("\n").map((v) => parseInt(v, 10));
      find2020();
      findThree();
    };
  };

  const find2020 = () => {
    for (let i = 0; i < input.length; i++) {
      const x = input[i];

      for (let j = 0; j < input.length; j++) {
        const y = input[j];

        if (i === j) continue;

        if (x + y == 2020) {
          result = x * y;
          break;
        }
      }
    }
  };

  const findThree = () => {
    for (let i = 0; i < input.length; i++) {
      const x = input[i];

      for (let j = 0; j < input.length; j++) {
        const y = input[j];

        if (i === j) continue;

        const sum = x + y;

        if (sum > 2020) continue;

        for (let k = 0; k < input.length; k++) {
          if (i === k || j === k) continue;
          const z = input[k];

          if (sum + z == 2020) {
            result2 = x * y * z;
            break;
          }
        }
      }
    }
  };
</script>

<input
  type="file"
  id="file-input"
  accept="text/text"
  on:change={handleUpload} />

<p>{input}</p>
<h1>{result}</h1>
<h1>{result2}</h1>
