async function getCars() {
  let data = await fetch("http://localhost:5000/api/v1/car/all");
  let conv = await data.json();
  console.log(conv);
  attachCards(conv);
}

function createCard(car) {
  let div = document.createElement("div");
  div.classList.add("col-lg-4");

  div.classList.add("col-md-6");
  div.classList.add("col-12");
  div.classList.add("mt-4");
  div.classList.add("pt-2");

  div.innerHTML = `
  
  <div class="card-body p-4">
  <span class="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Delete</span>
  <h5>${car.model}</h5>
  <div class="mt-3">


      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          ID:${car.id}</span>
      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          Make:${car.make}</span>
      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          Model:${car.model}</span>
      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          Year:${car.year}</span>
      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          Color:${car.color}</span>
      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          Price:${car.price}</span>
  </div>
  <div class="mt-3">
      <a href="#" class="btn btn-primary">Update</a>
  </div>
</div>
  
  `;

  return div;
}

function attachCards(cars) {
  console.log(cars);
  let container = document.querySelector(".app-container");
  container.innerHTML = "";
  cars.forEach((car) => {
    container.appendChild(createCard(car));
  });
}

getCars();
