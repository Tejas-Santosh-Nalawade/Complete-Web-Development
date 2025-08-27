let url1 = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", async () => {
  // console.log("Button clicked");
  let fact = await getFacts();
  // console.log(fact);
  let p = document.querySelector("#result1");
  p.innerHTML = fact;
});

async function getFacts() {
  try {
    let response = await axios.get(url1);
    return response.data.fact;
  } catch (error) {
    return "No fact found";
  }
}

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", async () => {
  let link = await getDog();
  // console.log(link);
  let img = document.querySelector("#result2");
  img.setAttribute("src", link);
  console.log(link);
  // img.src = link;
  img.alt = "Dog Image";
  img.style.width = "300px";
  img.style.height = "300px";
  img.style.borderRadius = "50%";
  img.style.boxShadow = "0 0 10px black";
  img.style.marginTop = "20px";
  img.style.transition = "all 0.5s ease-in-out";
  img.style.transform = "scale(1.1)";
  img.style.objectFit = "cover";
  img.style.objectPosition = "center";
  img.style.filter = "grayscale(100%)";
  img.style.cursor = "pointer";
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.2)";
    img.style.filter = "grayscale(0%)";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1.1)";
    img.style.filter = "grayscale(100%)";
  });
});

async function getDog() {
  try {
    let response = await axios.get(url2);
    return response.data.message;
  } catch (error) {
    return "No Image found";
  }
}

const url = "https://icanhazdadjoke.com/";

async function getJoke() {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    let response = await axios.get(url, config);
    console.log(response.data);
    console.log(response.data.joke);
  } catch (error) {
    return "No joke found";
  }
}
