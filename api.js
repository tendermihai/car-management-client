function api(path, method, body) {
  // const e declarata o data, pe cat let se redeclara la folosirea functiei
  const url = "http://localhost:5000" + path;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  if (body !== null) {
    options.body = JSON.stringify(body);

    //stringify transforma din javascript in json
    //parse transforma din json in javascript
  }
  return fetch(url, options);
}

async function getAllCars() {
  let data = await api("/api/v1/car/all", "GET", null);
  return data.json();
}

async function getSortedBy(field) {
  let cars = await api("/api/v1/car/sort/" + field, "GET", null);

  return cars.json();
}

async function addCar(car) {
  let carResponse = await api("/api/v1/car/add", "POST", car);

  return carResponse.json();
}

async function delCar(id) {
  let carResponse = await api(`/api/v1/car/delete/id/${id}`, "DELETE");
  return carResponse.json();
}

async function updatePutCar(car) {
  let data = {
    car,
  };
  console.log(data);
  let carResponse = await api("/api/v1/car/update", "PUT", data);

  return carResponse.json();
}
