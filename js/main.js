//header fixed on scroll
window.addEventListener('scroll', function (e) {
  var height = window.scrollY;
  if (height >= 75 ? document.querySelector('header').classList.add('fixed-menu') :
    document.querySelector('header').classList.remove('fixed-menu'));
});


//responsive menu js
let btnToggle = document.querySelector('.menu-toggle');
let menuToggle = document.querySelector('.menu-collapse');
let menuLink = document.querySelectorAll('.menu-collapse ul li:not(.hasDropdown) a, .menu-collapse .btn');
btnToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    btnToggle.classList.toggle('active');
});

menuLink.forEach(element => element.addEventListener('click', ()=> {
    menuToggle.classList.remove('active');
    btnToggle.classList.remove('active');
}))

//active menu on scroll js
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", menuActive);

function menuActive() {
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? 
      document.querySelector("nav a[href*=" + sectionId + "]").classList.add("active") :
      document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("active"));
  });
}


//dropdown menu js
const dropdown = document.querySelectorAll('.hasDropdown .menu-item');
dropdown.forEach(el => {
  el.addEventListener('click', function(e) {
    e.target.nextElementSibling.classList.toggle('open');
  }); 
});

document.onclick = function(e){ 
    const menuVisible = document.querySelectorAll(".dropdown.open");
    menuVisible.forEach(function(el){
        if(el != e.target.nextElementSibling && el != e.target.parentNode.parentNode){
                el.classList.toggle('open');
        }
    });
}


//slider js
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    slideshowContainer = document.getElementsByClassName('slider__container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0 ? showSlides(slideIndex -= 1) : showSlides(slideIndex += 1))
  if (n === -1 ? myTimer = setInterval(function(){plusSlides(n + 2)}, 4000) : myTimer = setInterval(function(){plusSlides(n + 1)}, 4000)); 
}

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  // let i;
  let slides = document.getElementsByClassName("slider__container-item");
  let dots = document.getElementsByClassName("slider__dot-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  console.log(slides);
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}


//tab js
const tab = document.querySelector('.tab');
const tabButtons = tab.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(e) {
	
	tabPanels.forEach(panel => {
		panel.hidden = 'true';
	});
	
	tabButtons.forEach( button => {
		button.setAttribute('aria-selected', 'false');
	});

	e.currentTarget.setAttribute('aria-selected', 'true');
	
	const {id} = e.currentTarget;
	
	const currentTab = tabPanels.find(
		panel => panel.getAttribute('aria-labelledby') === id
	);
	
	currentTab.hidden = false;
}

tabButtons.forEach(button => {
	button.addEventListener('click', tabClickHandler);
});


//logo slider js
(function() {
  var logoSlider = document.querySelectorAll('.slider__wrapper');
  
  [].forEach.call(logoSlider, function(logoSlider) {
    sliders(logoSlider);
  });
  
})();

function sliders(logoSlider) {
  var sliderList = logoSlider.querySelector('.logo__slider--list');
  var sliderListWidth = 0;
  var sliderListSteps = 0;
  var sliders = logoSlider.querySelectorAll('.logo');
  var sliderAmount = 0;
  var sliderAmountVisible = 4;
  var sliderPrev = logoSlider.querySelector('.prev');
  var sliderNext = logoSlider.querySelector('.next');

  //Count all the products
  [].forEach.call(sliders, function() {
    sliderAmount++;
    sliderListWidth += 250;
    sliderList.style.width = sliderListWidth+"px";
  });

  sliderNext.onclick = function() {
    if(sliderListSteps < sliderAmount-sliderAmountVisible) {
      sliderListSteps++;
      movesliderList();
    }
  }
  sliderPrev.onclick = function() {
    if(sliderListSteps > 0) {
      sliderListSteps--;
      movesliderList();
    }
  }

  function movesliderList() {
    sliderList.style.transform = "translateX(-"+205*sliderListSteps+"px)";
  }
}


//toast message js 
let toaster = document.querySelector("[data-message='msg']");
let msg = document.createElement('p');
let toastMessage = () => {
  // Get the snackbar DIV
  
  // Add the "show" class to DIV
  toaster.className = "show";
  
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ toaster.className = toaster.className.replace("show", ""); }, 3000);
}
const form = document.querySelector('[data-form="inquiry"]');
let fullName = document.querySelector('[aria-labelledby="fullname"]');
let email = document.querySelector('[aria-labelledby="email"]');
let password = document.querySelector('[aria-labelledby="password"]');
let cpassword = document.querySelector('[aria-labelledby="cpassword"]');
let comment = document.querySelector('[aria-labelledby="comment"]');
let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passwordFormat = /^(?=.*[0-9])(?=.*[~!@#$%^&*_])[a-zA-Z0-9~!@#$%^&*_]{8,}$/;
const inquiryBtn = document.querySelector('.btn-inquiry');

storeData = [];

const charCount = (count) => {
  document.querySelector('.input-info .charCount').innerHTML = count.value.length;
  if (count.value.length <= 10 ? comment.nextElementSibling.style.color = 'red' : comment.nextElementSibling.style.color = '' );
}
const passwordLength = () => {
  if (
    password.value.length < 8 ? password.nextElementSibling.style.color = 'red' : password.nextElementSibling.style.color = '' ||
    !email.value.match(mailformat) ? password.nextElementSibling.style.color = 'red' : password.nextElementSibling.style.color = ''
    );
}
localStorage.getItem('inquiryData');
inquiryBtn.addEventListener('click', () => {
  if(fullName.value.length <=2 ) {
      document.querySelector('[aria-labelledby="fullname"]').focus();
      msg.innerText = "required more then 3 character";
      var element = document.querySelector("[data-message='msg']");
      element.appendChild(msg);
      toastMessage();
      return;
  }
  if(!email.value.match(mailformat)) {
    document.querySelector('[aria-labelledby="email"]').focus();
      msg.innerText = "Please enter valid email address";
      var element = document.querySelector("[data-message='msg']");
      element.appendChild(msg);
      toastMessage();
      return;
  }
  if(!password.value.match(passwordFormat)) {
    document.querySelector('[aria-labelledby="password"]').focus();
      msg.innerText = "Password does not match requirement";
      var element = document.querySelector("[data-message='msg']");
      element.appendChild(msg);
      document.querySelector('.input-info').style.color = 'red';
      toastMessage();
      return;
  }
  if(cpassword.value !== password.value) {
    document.querySelector('[aria-labelledby="cpassword"]').focus();
      msg.innerText = "Confirm Password does not match with password";
      var element = document.querySelector("[data-message='msg']");
      element.appendChild(msg);
      toastMessage();
      return;
  }
  storeData.push({fullName:fullName.value,email:email.value,password:password.value,cpassword:cpassword.value,comment:comment.value})
  
  localStorage.setItem('inquiryData', JSON.stringify(storeData))

})


// theme toggle js
let switchBtn = document.querySelector('.theme_btn-mode');
let themeColor = localStorage.getItem('degitalDesign');
 document.body.classList.add(themeColor);
switchBtn.addEventListener('click', () => {
  document.body.classList.remove(themeColor);
 themeColor = themeColor == "dark" ? "light" : "dark";
  console.log(themeColor)
  document.body.classList.add(themeColor);
  localStorage.setItem('degitalDesign', themeColor);
})
