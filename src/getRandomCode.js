import axios from "axios";

export const getRandomCode = codeLength => {
  return axios
    .get(
      `https://www.random.org/integers/?num=${codeLength}&min=0&max=7&col=4&base=10&format=plain&rnd=new`
    )
    .then(response => {
      const codeInfo = response.data;
      return codeInfo
        .replace(/\s/g, "")
        .split("")
        .map(el => parseInt(el));
    });
};
