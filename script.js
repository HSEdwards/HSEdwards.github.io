function menuFunction(){  
  var m = document.getElementById("menu");
  m.style.visibility = "visible"
  m.style.opacity = 1
}

function servicesFunction(){
  var s = document.getElementById("services")
  s.style.description.hide

  function showFullHeight() {
    $(".gallery li").each(function () {
      $(this)
        .find(".btn")
        .click(function (e) {
          e.preventDefault();

          //NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
          $(".description").slideUp("normal");

          //IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
          if ($(this).next().is(":hidden") == true) {
            //ADD THE ON CLASS TO THE BUTTON
            $(this).addClass("on");

            //OPEN THE SLIDE
            $(this).next().slideDown("normal");
          }
        }); //click
    }); //each
  } //function

  showFullHeight();

};
