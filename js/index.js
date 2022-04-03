
let moonSun = document.querySelector(".button-darkmode");
let moon = document.querySelector(".navbar-button--moon")
let sun = document.querySelector(".navbar-button--sun")

moonSun.addEventListener("change", ()=>{
    document.body.classList.toggle("dark-mode");
});

// funcionalidad del tabs
let libraryTitle = document.querySelectorAll(".bd-library-title");
let libraryLink = document.querySelectorAll(".bd-library-link");

for(let i=0; i<libraryLink.length; i++){
	libraryLink[i].addEventListener("click", () =>{
	    for(k=0; k<libraryLink.length; k++){
		libraryTitle[k].classList.remove("display-block");
	    }
	    libraryTitle[i].classList.add("display-block");
	});    
}
// fin funcionalidad del tabs


// funcionalidad del dropdown
let main = document.querySelector(".main");
let library = document.querySelector(".bd-library");
let opcionesLink = document.querySelectorAll(".bd-opciones-link"); 
library.style.display="none";
for(let i=0;i<opcionesLink.length;i++){
    opcionesLink[i].addEventListener("click", ()=>{
	for(let k=0; k<opcionesLink.length; k++){
	    libraryTitle[k].classList.remove("display-block");
	}
	main.style.display="none";
	library.removeAttribute("style");
	libraryTitle[i].classList.add("display-block");
    });
}
// fin funcionalidad del dropdown

//  bd-sample-item
let sampleItem = document.querySelectorAll(".bd-sample-item");
for(let i=0;i<sampleItem.length;i++){
    sampleItem[i].addEventListener("click", ()=>{
	for( k=0; k<(sampleItem.length - 3); k++){
	    libraryTitle[k].classList.remove("display-block");
	};
	for( k=10; k<(sampleItem.length); k++){
	    let r = k - 9;
	    libraryTitle[r].classList.remove("display-block");
	};
	main.style.display="none";
	library.removeAttribute("style");
	libraryTitle[i].classList.add("display-block");
    });
}
//  fin bd-sample-item

// logo a pagina de inicio 
let logo = document.querySelector(".content-logo");
logo.addEventListener("click", ()=>{
    main.removeAttribute("style");
    library.style.display="none";
});
// fin logo a pagina de inicio 

//  home a main
let home = document.querySelector(".home");
home.addEventListener("click", ()=>{
    main.removeAttribute("style");
    library.style.display="none";
})
//  fin home a main

