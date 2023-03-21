async function getCars() {
  let data = await fetch("http://localhost:5000/api/v1/car/all");
  let conv = await data.json();
  console.log(conv);
}
