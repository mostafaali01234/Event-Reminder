export function createEvent(input, TimeDate, list) {
  let eventDate = new Date(document.querySelector("#eventtime").value),
    submitDate = new Date();

  if (eventDate < submitDate) {
    alert("Please put a valid date");
  } else if (input.value != "" && TimeDate.value) {
    ////////////////////////////// Create Event Element //////////////////////////////////

    let newTask = document.createElement("span"),
      title = document.createElement("span"),
      deleteElement = document.createElement("span"),
      deleteText = document.createTextNode("Delete"),
      dateElement = document.createElement("span");

    dateElement.className = "myDate";
    deleteElement.appendChild(deleteText);
    deleteElement.className = "delete";

    title.textContent = input.value;
    newTask.classList.add("taskBox");

    newTask.appendChild(title);

    newTask.appendChild(deleteElement);

    ////////////////////////////  Calcaulating remaining time && Countdown start    ////////////////////////////////////
    let x = setInterval(function () {
      let sub = new Date();
      let diffInSeconds = (eventDate.getTime() - sub.getTime()) / 1000;

      const eventObj = {
        EventTitle: title.textContent,
        RemainingDays: Math.floor(diffInSeconds / (60 * 60 * 24)),
        RemainingHours: Math.floor((diffInSeconds / (60 * 60)) % 24),
        RemainingMinutes: Math.floor((diffInSeconds / 60) % 60),
        RemainingSeconds: Math.floor(diffInSeconds % 60),
      };

      const {
        EventTitle,
        RemainingDays,
        RemainingHours,
        RemainingMinutes,
        RemainingSeconds,
      } = eventObj;

      dateElement.innerHTML = `
        ${RemainingDays < 10 ? `0` + RemainingDays : RemainingDays} 
        <span> Days</span> :
        ${RemainingHours < 10 ? `0` + RemainingHours : RemainingHours} 
         <span> Hours</span> :
        ${RemainingMinutes < 10 ? `0` + RemainingMinutes : RemainingMinutes} 
         <span> Minutes</span> :
        ${RemainingSeconds < 10 ? `0` + RemainingSeconds : RemainingSeconds} 
         <span> Seconds</span>. `;

      ///////////////////////////////    Countdown end   /////////////////////////////////

      if (diffInSeconds * 1000 < 0) {
        clearInterval(x);
        dateElement.innerHTML = `
        00 
        <span> Days</span> :
        00 
         <span> Hours</span> :
        00
         <span> Minutes</span> :
        00 
         <span> Seconds</span>. `;
        alert(`Event "${EventTitle}" is starting rightnow!!`);
      }
    }, 1000);

    newTask.appendChild(dateElement);

    /********************************    Check if the event already exist or not ********************************/
    const tasks = document.querySelectorAll(".tasks-list .taskBox");
    let tasksName = [];

    [...tasks].forEach((item) => {
      tasksName.push(item.childNodes[0].textContent);
    });

    if (!tasksName.includes(input.value)) {
      list.appendChild(newTask);

      input.value = "";
      TimeDate.value = "";
      // console.log(input.value);
    } else {
      alert(
        `Event "${title.textContent}" already exist, change the event name`
      );
    }
  } /************************  Input is Empty  ***********************/ else {
    alert("Event Title or Date is missing!!");
  }
}
