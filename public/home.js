var verticalposition;

document.body.addEventListener("wheel", () => {
  // Get the total available scroll length of the document
  var trackLength = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calculate how much the user has scrolled percentage-wise
  var pctScrolled = (window.scrollY / trackLength) * 100;

 

  //console.log("Vertical position:", window.scrollY);
  console.log("Scroll percentage:", pctScrolled);

  if (pctScrolled > 12 & pctScrolled < 20){

    var delayInMilliseconds = 500;

    setTimeout(function () {
    
      const counters = document.querySelectorAll('.count');
      const speed = 10;
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = parseInt(counter.getAttribute('data-target'));
          const count = parseInt(counter.innerText);
       const increment = Math.trunc((target) / speed);


          if (count < target ) {
            if (target < 50){
                counter.innerText = count + 1;
                setTimeout(updateCount, 500);
            }
else{
            counter.innerText = count + increment;
            setTimeout(updateCount, 500);


}
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    
    }, delayInMilliseconds);

  }
});









$(".light").on("click", function() {
    $("#nav11").toggleClass("dark");
    $("#about").toggleClass("dark-about");
    $("#project").toggleClass("dark-project");
    $("#Event").toggleClass("dark-event");
    $("#Membership").toggleClass("dark-Membership");
    $("#glimpse-tag-1").toggleClass("dark-glimpse-tag-1");
    $("#glimpse-tag").toggleClass("dark-glimpse-tag");
  });
  

  document.getElementsByClassName("light")[0].click(1);