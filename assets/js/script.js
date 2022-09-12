'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * send email
 */
const submitButton = document.querySelector("[submit-button]");


const sendEmail = function () {
  let name = document.getElementById("f_name").value.toUpperCase();
  let address = "edoardogruppi@gmail.com";
  let message = document.getElementById("f_message").value.replace(/\n|\r\n|\r/g,"%0a");
  let subject = name + '-' + document.getElementById("f_subject").value;
  let link = "https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&to=" + address + "&body=" + message + "&su=" + subject
  window.open(link, "_blank");
}


addEventOnElem(submitButton, "click", sendEmail);