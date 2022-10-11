const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  preNextIcon = document.querySelectorAll(".icons span");

//getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDateOfMonth = new Date(currYear, currMonth, 1).getDay(), //getting day date of month
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(), //getting last date of month
    lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(), //getting last date of month
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); //getting last date of previous month
  let liTag = "";

  for (let i = firstDateOfMonth; i > 0; i--) {
    //creating li previous month lat days
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    //creating li all days of current month
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    //creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${month[currMonth]}  ${currYear}`;

  daysTag.innerHTML = liTag;
};

renderCalendar();

preNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear(); //updating current year with new date year
      currMonth = date.getMonth(); //updaing current month with new date month
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
