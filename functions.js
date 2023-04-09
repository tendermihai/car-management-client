async function home() {
  let container = document.querySelector(".container");

  container.innerHTML = `
  
  <h1>Car Management</h1>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <button class="addBtn" >Add a new car</button>
  
  <select name="sort" class="sort">
      <option value="sort">--Sort by--</option>
      <option value="year">Sort by year</option>
      <option value="model">Sort by model</option>
      <option value="price">Sort by price</option>
  
  </select>


<div class="container-cards">







</div>
  
  `;
  let data = await getAllCars();
  attachCards(data);
  let btn = document.querySelector(".addBtn");

  btn.addEventListener("click", (e) => {
    addCarPage();
  });

  container.addEventListener("click", (e) => {
    let obj = e.target;
    if (obj.classList.contains("btn-update")) {
      updateCarPage();
    }
  });
}

function addCarPage() {
  let container = document.querySelector(".container");

  container.innerHTML = "";

  container.innerHTML = `
  
  
  <div class="container-new bootstrap snippets bootdey">
  <h1 class="text-primary">Car Management</h1>
  <hr>
  <div class="row">
      <!-- left column -->


      <!-- edit form column -->
      <div class="col-md-9 personal-info">

          <h3>Add a new Car</h3>

          <form class="form-horizontal" role="form">
              <!-- <div class="form-group">
                  <label class="col-lg-3 control-label">ID:</label>
                  <div class="col-lg-8">
                      <input class="form-control id" type="text" value="" placeholder="Please enter the car ID">
                  </div>
              </div> -->
              <div class="form-group">
                  <label class="col-lg-3 control-label">Make:</label>
                  <div class="col-lg-8">
                      <input class="form-control make" type="text" value="" placeholder="Ex: Volkswagen ">
                  </div>
              </div>
              <div class="form-group">
                  <label class="col-lg-3 control-label">Model:</label>
                  <div class="col-lg-8">
                      <input class="form-control model" type="text" value="" placeholder="Ex: Passat">
                  </div>
              </div>
              <div class="form-group">
                  <label class="col-lg-3 control-label">Year:</label>
                  <div class="col-lg-8">
                      <input class="form-control year" type="text" value=""
                          placeholder="Please enter the year of the car">
                  </div>
              </div>
              <div class="form-group">
                  <label class="col-lg-3 control-label">Color:</label>
                  <div class="col-lg-8">
                      <input class="form-control color" type="text" value=""
                          placeholder="Please specify the car color">
                  </div>
              </div>
              <div class="form-group">
                  <label class="col-lg-3 control-label">Price:</label>
                  <div class="col-lg-8">
                      <input class="form-control price" type="text" value="" placeholder="Please enter a price">
                  </div>

              </div>
          </form>
      </div>
  </div>

  <button  class="submitCar">Submit</button>
  <button class="cancelNew">Cancel</button>
</div>
  
  `;

  let cancelNew = document.querySelector(".cancelNew");
  cancelNew.addEventListener("click", () => {
    home();
  });

  let submitBtn = document.querySelector(".submitCar");

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const make = document.querySelector(".make").value;
      const model = document.querySelector(".model").value;
      const year = document.querySelector(".year").value;
      const color = document.querySelector(".color").value;
      const price = document.querySelector(".price").value;
      addCar({ make, model, year, color, price }).value;
    });
  }
}

function updateCarPage() {
  let container = document.querySelector(".container");
  container.innerHTML = "";
  container.innerHTML = `
  <div class="container">

        <div class="container-new update-container bootstrap snippets bootdey">
            <h1 class="text-primary">Car Management</h1>
            <hr>
            <div class="row">
                <!-- left column -->


                <!-- edit form column -->
                <div class="col-md-9 personal-info">

                    <h3>Update this car</h3>

                    <form class="form-horizontal" role="form">

                        <div class="form-group">
                            <label class="col-lg-3 control-label">Make:</label>
                            <div class="col-lg-8">
                                <input class="form-control make" type="text" value="" placeholder="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Model:</label>
                            <div class="col-lg-8">
                                <input class="form-control model" type="text" value="" placeholder="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Year:</label>
                            <div class="col-lg-8">
                                <input class="form-control year" type="text" value="" placeholder="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Color:</label>
                            <div class="col-lg-8">
                                <input class="form-control color" type="text" value="" placeholder="">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-lg-3 control-label">Price:</label>
                            <div class="col-lg-8">
                                <input class="form-control price" type="text" value="" placeholder="">
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <button class="editCar">Update</button>
        </div>

    </div>
  
  `;

  //   container.addEventListener("click", async (e) => {
  //     let obj = e.target;

  //     if (obj.classList.contains("editCar")) {
  //       let make = document.querySelector(".make").value;
  //       let model = document.querySelector(".model").value;
  //       let year = document.querySelector(".year").value;
  //       let color = document.querySelector(".color").value;
  //       let price = document.querySelector(".price").value;

  //       let updatedCar = {
  //         make: make,
  //         model: model,
  //         year: year,
  //         color: color,
  //         price: price,
  //       };

  //       await updatePutCar(updatedCar);
  //       window.location.href = "index.html";
  //     }
  //   });
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
      <button class="btn btn-primary btn-update">Update</button>
  </div>
</div>
  
  `;

  return div;
}

function attachCards(cars) {
  console.log(cars);
  let container = document.querySelector(".container-cards");
  container.innerHTML = "";
  cars.forEach((car) => {
    container.appendChild(createCard(car));
  });
}

// functie ce adauga o masina noua
