let url_data = "http://universities.hipolabs.com/search?name=";



let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let colleges= await getColleges(country);
  show(colleges)
});

function show(colleges) {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for(col of colleges){ 
        console.log(col.name);
        let li = document.createElement("li");
        li.innerHTML = col.name;
        list.appendChild(li);
    }
}


async function getColleges(country) {
  try {
    let res = await axios.get(url_data + country);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
