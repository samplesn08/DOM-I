const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const aTags = document.querySelectorAll('a');
const ctaH1 = document.querySelector('.cta h1');
const button = document.querySelector('.cta button');
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
const mainContent = document.querySelector('.main-content');
const topContent = document.querySelector('.top-content');
const textContent = document.querySelectorAll('.text-content');
textContent[0].setAttribute('id', 'features');
textContent[1].setAttribute('id', 'about');
textContent[2].setAttribute('id', 'services');
textContent[3].setAttribute('id', 'product');
textContent[4].setAttribute('id', 'vision');
const featuresH4 = document.querySelector('#features h4');
const featuresP = document.querySelector('#features p');
const aboutH4 = document.querySelector('#about h4');
const aboutP = document.querySelector('#about p');
const servicesH4 = document.querySelector('#services h4');
const servicesP = document.querySelector('#services p');
const productH4 = document.querySelector('#product h4');
const productP = document.querySelector('#product p');
const visionH4 = document.querySelector('#vision h4');
const visionP = document.querySelector('#vision p');
featuresH4.textContent = siteContent["main-content"]["features-h4"];
featuresP.textContent = siteContent["main-content"]["features-content"];
aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutP.textContent = siteContent["main-content"]["about-content"];
servicesH4.textContent = siteContent["main-content"]["services-h4"];
servicesP.textContent = siteContent["main-content"]["services-content"];
productH4.textContent = siteContent["main-content"]["product-h4"];
productP.textContent = siteContent["main-content"]["product-content"];
visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionP.textContent = siteContent["main-content"]["vision-content"];
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
const bottomContent = document.querySelector('.bottom-content');
const contact = document.querySelector('.contact');
const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');
const footer = document.querySelector('footer');
const footerP = document.querySelector('footer p');
aTags[0].setAttribute('class', 'nav-item-1');
aTags[1].setAttribute('class', 'nav-item-2');
aTags[2].setAttribute('class', 'nav-item-3');
aTags[3].setAttribute('class', 'nav-item-4');
aTags[4].setAttribute('class', 'nav-item-5');
aTags[5].setAttribute('class', 'nav-item-6');
aTags[0].textContent = siteContent['nav']['nav-item-1'];
aTags[1].textContent = siteContent['nav']['nav-item-2'];
aTags[2].textContent = siteContent['nav']['nav-item-3'];
aTags[3].textContent = siteContent['nav']['nav-item-4'];
aTags[4].textContent = siteContent['nav']['nav-item-5'];
aTags[5].textContent = siteContent['nav']['nav-item-6'];
ctaH1.textContent = "DOM is awesome";
button.textContent = "Get Started";
contactH4.textContent = "Contact";
contactP[0].setAttribute('class', 'address');
contactP[1].setAttribute('class', 'phone');
contactP[2].setAttribute('class', 'email');
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];
footerP.setAttribute('class', 'copyright');
footerP.textContent = siteContent['footer']['copyright'];

nav.style.color = "green";
const newNav1 = document.createElement("a");
newNav1.textContent = "Nicks first new page";
newNav1.setAttribute('src', '#');
nav.prepend(newNav1);
const newNav2 = document.createElement("a");
newNav2.textContent = "Nicks second page";
newNav2.setAttribute('src', '#');
nav.appendChild(newNav2);