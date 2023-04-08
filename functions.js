async function home() {
  let container = document.querySelector(".app-container");

  container.innerHTML = `
  
  <h1>Car Management</h1>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <button class="addBtn" onclick="location.href='addnew.html'">Add a new car</button>
  
  <select name="sort" class="sort">
      <option value="sort">--Sort by--</option>
      <option value="year">Sort by year</option>
      <option value="model">Sort by model</option>
      <option value="price">Sort by price</option>
  
  </select>
  
  `;

  let data = await getAllCars();
  attachCards(data);
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
  <span class="badge delete rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Delete</span>
  <h5>${car.model}</h5>
  <div class="mt-3">


      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          ID: ${car.id}</span>
      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          Make: ${car.make}</span>
      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          Model: ${car.model}</span>
      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          Year: ${car.year}</span>
      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          Color: ${car.color}</span>
      <span class="text-muted d-block"><i class="fa fa-car" aria-hidden="true"></i>
          Price: ${car.price}</span>
  </div>
  <div class="mt-3">
      <a href="update.html" class="btn btn-primary">Update</a>
  </div>
</div>
  
  `;

  return div;
}

function attachCards(cars) {
  console.log(cars);
  let container = document.querySelector(".container");
  container.innerHTML = "";
  cars.forEach((car) => {
    container.appendChild(createCard(car));
  });
}

// functie ce adauga o masina noua
