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

// Example: Update the img src for the logo

//Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImage = document.querySelector("#cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

const imgSnip = document.querySelector('#middle-img');
imgSnip.setAttribute('src', siteContent['main-content']['middle-img-src']);


// Header 
const navTags = document.querySelectorAll("nav a");
  navTags[0].prepend(siteContent["nav"]['nav-item-1']);
  navTags[1].prepend(siteContent["nav"]['nav-item-2']);
  navTags[2].prepend(siteContent["nav"]['nav-item-3']);
  navTags[3].prepend(siteContent["nav"]['nav-item-4']);
  navTags[4].prepend(siteContent["nav"]['nav-item-5']);
  navTags[5].prepend(siteContent["nav"]['nav-item-6']);
  
  

  // Navigation text Green
  navTags.forEach(element => element.style.color = "green");

  //New items
    
  const navOne = document.querySelector('nav');
  const oneTag = document.createElement('a');
    oneTag.setAttribute('href', '#');
    oneTag.innerHTML = 'Home';
    oneTag.style.color = 'green';
    navOne.appendChild(oneTag);



  const twoTag = document.createElement('a');
    twoTag.setAttribute('href', '#');
    twoTag.innerHTML = 'Privacy';
    twoTag.style.color = 'green';
    navOne.append(twoTag);




// cta
const mainTitle = document.querySelector(".cta-text h1");
  mainTitle.prepend(siteContent['cta']['h1']);

const topButton = document.querySelector(".cta-text button");
  topButton.prepend(siteContent['cta']['button']);


// main content

const contBlocksTitles = document.querySelectorAll(".text-content h4");
  contBlocksTitles[0].prepend(siteContent['main-content']['features-h4']);
  contBlocksTitles[1].prepend(siteContent['main-content']['about-h4']);
  contBlocksTitles[2].prepend(siteContent['main-content']['services-h4']);
  contBlocksTitles[3].prepend(siteContent['main-content']['product-h4']);
  contBlocksTitles[4].prepend(siteContent['main-content']['vision-h4']);

const contBlocks = document.querySelectorAll(".text-content p");
  contBlocks[0].prepend(siteContent['main-content']['features-content']);
  contBlocks[1].prepend(siteContent['main-content']['about-content']);
  contBlocks[2].prepend(siteContent['main-content']['services-content']);
  contBlocks[3].prepend(siteContent['main-content']['product-content']);
  contBlocks[4].prepend(siteContent['main-content']['vision-content']);


let contactInfo = document.querySelector(".contact h4");
  contactInfo.prepend(siteContent['contact']['contact-h4']);

const contactInfoP = document.querySelectorAll('.contact p');
  contactInfoP[0].innerHTML = '123 Way 456 Street <br>Somewhere, USA';
  contactInfoP[1].prepend(siteContent['contact']['phone']);
  contactInfoP[2].prepend(siteContent['contact']['email']);



//footer section

let copyRight = document.querySelector("footer p");
  copyRight.prepend(siteContent['footer']['copyright']);
