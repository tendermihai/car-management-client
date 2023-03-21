async function getCars() {
  let data = await fetch("http://localhost:5000/api/v1/car/all");
  let conv = await data.json();
  console.log(conv);
  attachCards(conv);
}

function createCard(car) {
  let section = document.createElement("section");
  section.classList.add("card");

  section.innerHTML = `
  
  <section class="card">
  <p class="id">ID: ${car.id}</p>
  <p class="make">Make: ${car.make}</p>
  <p class="model">Model: ${car.model}</p>
  <p class="year">Year: ${car.year}</p>
  <p class="color">Color: ${car.color}</p>
  <p class="price">Price: ${car.price} euro</p>

</section>
  
  `;

  return section;
}

function attachCards(cars) {
  console.log(cars);
  let container = document.querySelector(".container");
  container.innerHTML = "";
  cars.forEach((car) => {
    container.appendChild(createCard(car));
  });
}

getCars();
