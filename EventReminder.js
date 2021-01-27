import { createEvent } from "./CalcaulatingTime.js";

const input = document.querySelector(".add-box input"),
  addButton = document.querySelector(".plus"),
  list = document.querySelector(".tasks-list"),
  TimeDate = document.querySelector("#eventtime");

/******************************** Adding new event ********************************/
addButton.onclick = (_) => {
  createEvent(input, TimeDate, list);
};

/*-------------------- Delete events  --------------------*/
document.addEventListener("click", function (e) {
  let tasks = document.querySelectorAll(".tasks-list .taskBox");

  // Delete Event
  if (e.target.classList.contains("delete")) {
    // Remove Current Event
    e.target.parentNode.remove();
  }
});
/*--------------------  --------------------*/
