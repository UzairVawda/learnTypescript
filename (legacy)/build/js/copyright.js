"use strict";
const year = document.getElementById("year");
const currYear = new Date().getFullYear().toString();
year.setAttribute("datetime", currYear);
year.textContent = currYear;
