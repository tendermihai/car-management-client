home();

// //eventuri
// if (selectBtn) {
//   selectBtn.addEventListener("change", async () => {
//     console.log(selectBtn.value);

//     let data = await getSortedBy(selectBtn.value);

//     attachCards(data);
//   });
// }

// let container = document.querySelector(".container");

// if (container) {
//   container.addEventListener("click", async (e) => {
//     let obj = e.target;

//     if (obj.classList.contains("delete")) {
//       let card = obj.closest(".col-lg-4");
//       let id = card
//         .querySelector(".text-muted:first-child")
//         .textContent.split(":")[1]
//         .trim();

//       await delCar(id);
//       card.remove();
//     }
//   });
// }

// let containerNew = document.querySelector(".update-container");

// containerNew.addEventListener("click", async (e) => {
//   let obj = e.target;

//   if (obj.classList.contains("editCar")) {
//     let make = document.querySelector(
//       ".form-horizontal input:nth-of-type(2)"
//     ).value;
//     let model = document.querySelector(
//       ".form-horizontal input:nth-of-type(3)"
//     ).value;
//     let year = document.querySelector(
//       ".form-horizontal input:nth-of-type(4)"
//     ).value;
//     let color = document.querySelector(
//       ".form-horizontal input:nth-of-type(5)"
//     ).value;
//     let price = document.querySelector(
//       ".form-horizontal input:nth-of-type(6)"
//     ).value;

//     let updatedCar = {
//       id: id,
//       make: make,
//       model: model,
//       year: year,
//       color: color,
//       price: price,
//     };

//     await updatePutCar(updatedCar);
//     attachCards();
//     window.location.href = "index.html";
//   }
// });
