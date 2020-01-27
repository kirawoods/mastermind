import axios from "axios";

axios
  .get(
    `https://www.random.org/integers/?num=4&min=0&max=7&col=4&base=10&format=plain&rnd=new`
  )
  .then(response => {
    const codeInfo = response.data;
    code = codeInfo
      .replace(/\s/g, "")
      .split("")
      .map(el => parseInt(el));
  })
  .catch(error => {
    console.log(error);
  });
