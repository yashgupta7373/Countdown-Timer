let current_date = document.getElementById("current-date");
var end_date;
let eDate = document.getElementById("input-date");
let eMonth = document.getElementById("input-month");
let eYear = document.getElementById("input-year");
let eHour = document.getElementById("input-hours");
let eMinute = document.getElementById("input-minutes");
let endMsg = document.getElementById("end-msg");
let bgImg = document.getElementsByClassName("box")[0];
let bgClr = document.getElementsByClassName("clr")[0];
let days = [
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
let date = new Date();
// Button
function action() {
  document.getElementsByClassName("overlay")[0].style.top = "0px";
}

// default end time
const diff_time = () => {
  end_date = `${(eDate.value = date.getDate())} 
  ${(eMonth.value = days[date.getMonth()])} 
  ${(eYear.value = date.getFullYear())} 
  ${(eHour.value = date.getHours())}:${(eMinute.value = date.getMinutes())}`;
  document.getElementById("end-date").innerHTML = end_date;
};
diff_time();

//set time
function done(img) {
  end_date = `${eDate.value} ${days[eMonth.value - 1]} ${eYear.value} ${
    eHour.value
  }:${eMinute.value}`;
  document.getElementById("end-date").innerHTML = end_date;
  document.getElementsByClassName("overlay")[0].style.top = "-100vh";
  countDown();

  // background...
  console.log(img);
  if (img == 0) {
    bgImg.style = `background-color: ${bgClr.value}`;
  } else {
    bgImg.style = `background-image: url(${img})`;
  }
}
console.log(eDate.value);
const countDown = () => {
  // current Date
  current_date.innerText = `${new Date().getDate()} ${
    days[new Date().getMonth()]
  } ${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`;

  let end = new Date(end_date);
  let now = new Date();
  const difference = end - now;
  if (difference < 0) {
  (document.getElementById("msg").innerText = endMsg.value); // Return if Time End
  // document.getElementById('audio').play();

  } else {
  document.getElementById('audio');
    document.getElementById("msg").innerText = ""; // Return if Time End
    document.getElementsByClassName("input")[0].innerText = Math.floor(
      difference / 1000 / 60 / 60 / 24
    ); // Calculate Days Left
    document.getElementsByClassName("input")[1].innerText =
      Math.floor(difference / 1000 / 60 / 60) % 24; // Calculate Hours Left
    document.getElementsByClassName("input")[2].innerText =
      Math.floor(difference / 1000 / 60) % 60; // Calculate Minutes Left
    document.getElementsByClassName("input")[3].innerText =
      Math.floor(difference / 1000) % 60; // Calculate Second Left
  }
};

countDown();

setInterval(() => {
  countDown();
}, 1000);
