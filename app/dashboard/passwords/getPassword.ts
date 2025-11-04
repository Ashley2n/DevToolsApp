'use server'
const key = process.env.API_NINJAS_KEY;
const BASE_URL = process.env.API_NINJAS_PASSWORD_URL;

// console.log("KEY: " +key)
// console.log("URl: "+ BASE_URL);
// console.log("Hello")

const getPassword = async (lenght: number) => {

console.log("URl: "+ BASE_URL);

  const url = `${BASE_URL}?length=${lenght}`;

  // console.log(url);
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": `${key}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

    console.log(data)
  return data;
  };

export default getPassword;
