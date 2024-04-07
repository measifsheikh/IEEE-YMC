

let  scrol = document.getElementById('inner-progressbar');
let progress ;
var element = document.getElementById("main");
var horizontalScrollPosition = document.querySelector("main").scrollLeft;


var widthMain = document.getElementById("main-body").clientWidth;
console.log(widthMain);

document.getElementById("upper-text").style.width = widthMain + "px";
document.getElementById("lower-text").style.width = widthMain + "px";

var ender = document.getElementById("ender") ;
var load = document.getElementById("more&more") ;
ender.style.left = (widthMain ) + "px";
load.style.left = (widthMain ) + "px";
  const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
  var x = window.matchMedia("(min-width: 601px)")
  if( x.matches ){
  var horizontalScrollPosition = document.querySelector("main").scrollLeft;
   
  var element = document.querySelector("main");
  var totalWidth = element.scrollWidth - element.clientWidth;

  progress = 100 * ( horizontalScrollPosition /totalWidth);



  console.log("Total Width of Element's Content:", progress );


  scrol.style.width =  progress + "%";
   evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  }
});



var car = document.getElementsByClassName("search-call");
var park = document.getElementById("search-box");

for (let i = 0; i < 2 ; i++) {
  
  car[i].addEventListener("click" , swap);


function swap(){
  park.classList.toggle("boz")
}
}




// loooop creation

load.addEventListener("click" , pagers);
var maxPages = 10;

var pageCounter = 1221;
var pageclass = 1000;


var headercounter = 3223;
var classheader  = 1001;

var classcontent = 1002;
var contentcounter = 2112;



var imgcounter = 4334;
var imghover = 1003;





const d = new Date();
let year = d.getFullYear();
let pix = year ;
for (let i = 0; i < 3; i++) {
  
  pagers();
}




function pagers() {
  if(maxPages > 0){
  const page = document.createElement("section");
  const element = document.getElementById("main-body");
  element.appendChild(page);
   page.setAttribute("id", "page" + pageCounter);
page.setAttribute("class", "page"+pageclass);

  //  header /year
const header = document.createElement("div");

    page.appendChild(header);
    const tode = document.createTextNode(pix);
    header.appendChild(tode);
    header.setAttribute("id", "header" + headercounter);
    header.setAttribute("class", "header" + classheader);


// body /box
    const content = document.createElement("div");
    page.appendChild(content);
    content.setAttribute("id", "content" + contentcounter);
    content.setAttribute("class", "content" + classcontent);
 


// body/ img
    for (let i = 0; i < 10; i++) {
      const img = document.createElement("img");
      img.src = 'https://lh3.googleusercontent.com/drive-viewer/AEYmBYTfseTqECYy-EcJtZembFhvb1b_LE3m5Sz-XvHNsYBcwgJ_Wxp-hTJvCoQuFDrDVITh15tCeY9u_rNk429P2aRA5iZL=s1600';
      content.appendChild(img);
      img.style.width = "17%";
      // img.style.border = "2px solid black";
      img.style.padding = "1%";
      img.setAttribute("id", "content" + imgcounter);
      img.setAttribute("class", "content" + imghover); 
    
      imgcounter ++;  
    }






var widthMain = document.getElementById("main-body").clientWidth;
ender.style.left = (widthMain) + "px";
load.style.left = (widthMain) + "px";
document.getElementById("upper-text").style.width = widthMain + "px";
document.getElementById("lower-text").style.width = widthMain + "px";
ender.style.left = (widthMain ) + "px";
pageCounter ++;
contentcounter ++;
headercounter ++;  
imgcounter ++;
maxPages --;
pix --;

}

if (maxPages == 0) {
  load.style.display = "none";
  ender.style.visibility ="visible";
  ender.style.display ="flex";
}
}




