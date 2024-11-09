const year = document.getElementById("year")! as HTMLSpanElement;
const currYear = new Date().getFullYear().toString();
year.setAttribute("datetime", currYear);
year.textContent = currYear;
