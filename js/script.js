let isMenuOpen = false,
  mq;
document.querySelectorAll(".collapsed-menu > li").forEach((el) => {
  el.addEventListener("click", (event) => {
    document.querySelector(".right > .text-container").innerHTML =
      event.target.innerHTML;
    if (window.matchMedia) {
      mq = window.matchMedia("(min-width: 640px)");
      onMediaChange(mq);
    }
  });
});
document.querySelector(".menu-toggle").addEventListener("click", () => {
  if (!isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

if (window.matchMedia) {
  mq = window.matchMedia("(min-width: 640px)");
  mq.addListener(onMediaChange);
}

function closeMenu() {
  document.querySelector(".container").style.transform = "translateX(-300px)";
  isMenuOpen = false;
}

function openMenu() {
  document.querySelector(".container").style.transform = "translateX(0)";
  isMenuOpen = true;
}

function onMediaChange(mq) {
  if (mq.matches) {
    document.querySelector(".container").style.transform = "translateX(0)";
  } else {
    closeMenu();
  }
}

var header = document.getElementById("sidenav");
var btns = header.getElementsByClassName("sidenavBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("sidenavBtn-active");
    current[0].className = current[0].className.replace(
      " sidenavBtn-active",
      ""
    );
    this.className += " sidenavBtn-active";
  });
}

var detail = [];

const reset = () => {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("postalcode").value = "";
  document.getElementById("country").value = "";
};

const getData = () => {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let mail = document.getElementById("mail").value;
  let phone = document.getElementById("phone").value;
  let gender = document.getElementsByName("gender");
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) gender = gender[i].value;
  }
  let addressline = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let postalcode = document.getElementById("postalcode").value;
  let country = document.getElementById("country").value;

  var person = {
    firstName: firstname,
    lastName: lastname,
    mail: mail,
    phone: phone,
    gender: gender,
    addressline: addressline,
    city: city,
    state: state,
    postalcode: postalcode,
    country: country,
  };

  let url = "";
  if (gender == "male") {
    url = "./assets/male.png";
  } else if (gender == "female") {
    url = "./assets/female.png";
  }

  if (
    firstname.length <= 3 &&
    lastname.length <= 3 &&
    mail.length <= 3 &&
    phone.length != 10 &&
    addressline.length <= 3 &&
    city.length <= 3 &&
    state.length <= 3 &&
    postalcode.length <= 3 &&
    country <= 3
  ) {
    document.getElementById("errormessage").innerHTML = "Enter all the details";
    document.getElementById("successmessage").innerHTML =
      "";
  } else {
    document.getElementById("successmessage").innerHTML =
      "Submitted Successfully";
    document.getElementById("errormessage").innerHTML = "";

    document.getElementById("tableerror").innerHTML = "";
    document.getElementById("tableerror").style.margin = "0";

    reset();
    if ($("#personDetail tbody").length == 0) {
      $("#personDetail").append("<tbody></tbody>");
    }

    $("#personDetail tbody").append(
      '<tr class="table-row"><td><div class="name-cell"><img src=' +
        url +
        ' class="table-profile" alt="profile-img" /><h4 class="name-typo capitalize">' +
        firstname +
        " " +
        lastname +
        '</h4></div></td><td class="capitalize"><div class=' +
        gender +
        "></div>" +
        gender +
        "</td><td>" +
        mail +
        "</td><td>" +
        phone +
        ' </td><td class="cell-link">View detail<i class="fa-solid fa-arrow-right"></i></td></tr>'
    );
    detail.push(person);
  }
};

window.addEventListener("load", () => {
  if (detail.length == 0) {
    document.getElementById("tableerror").innerHTML = "No Data Found";
  } 
});

function changeSection(evt, sectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
