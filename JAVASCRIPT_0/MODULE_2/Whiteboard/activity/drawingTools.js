let pen = document.querySelector('#pen');
let eraser = document.querySelector('#eraser');

let penOptions = pen.querySelector(".tool-options");
let eraserOptions = eraser.querySelector(".tool-options");

pen.addEventListener("click", function(){

    if(pen.classList.contains("active-tool"))
    {
        if(penOptions.classList.contains("hide"))
        {
            penOptions.classList.remove("hide");
        }
        else{
            penOptions.classList.add("hide");
        }
    }
    else{
        eraser.classList.remove("active-tool");
        eraser.classList.add("fade");
        eraserOptions.classList.add("hide");
        
        pen.classList.remove("fade");
        eraserOptions.classList.add("active-tool")
    }
});
eraser.addEventListener("click", function () {
    if (eraser.classList.contains("active-tool")) {
      // eraser already active
      if(eraserOptions.classList.contains("hide")){
          eraserOptions.classList.remove("hide"); // remove hide class from penOptions
      }else{
          eraserOptions.classList.add("hide");
      }
    } else {
      // eraser not active
      pen.classList.remove("active-tool");
      pen.classList.add("fade");
      penOptions.classList.add("hide");
  
      eraser.classList.add("active-tool");
      eraser.classList.remove("fade");
    }
  });