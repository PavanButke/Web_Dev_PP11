let videoElement = document.querySelector("video");
let recordButton = document.querySelector(".inner-record");
let capturePhoto = document.querySelector("inner-capture");
let filters = document.querySelectorAll(".filter");
let filterSelected = "none";
let zoomIn = document.querySelector(".zoomIn");
let zoomOut = document.querySelector(".zoomOut");

let minZoom = 1;
let maxZoom = 3.1;
let currentZoom = 1;

let recordingState = false;
let mediaRecorder;

(async function (){

    let constraint = { video : true};
    let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
    videoElement.srcObject = mediaStream;
    mediaRecorder = new mediaRecorder(mediaStream);
    mediaRecorder.onstart = function(){
      console.log("Inside on Start");
    };
    mediaRecorder.ondataavailable = function(e){
      console.log("Inside on data available");
      console.log(e.data);
      let videoObject = new Blob([e.data] , {type: "mp4/video"});

      let videoURL = URL.createObjectURL(videoObject);
      let aTag = document.createElement("a");
      aTag.download = `Video${Date.now()}.mp4`;
      aTag.href = videoURL ;
      aTag.click();

    };
    mediaRecorder.addEventListner("click", function(){
      if( recordingState)
      {
        mediaRecorder.stop();
        recordingState = false;
        recordButton.classList.remove("animate-record");

      }

    })

    capturePhoto.addEventListener("click", function(){
      capturePhoto.classList.add("animate-capture");
      setTimeout(function(){
        capturePhoto.classList.remove("animate-capture");
      } , 1000);
      
      let canvas = document.createElement("canvas");
      canvas.width= 640;
      canvas.height=480;

      let ctx = canvas.getContext("2d");
      if(cureentZoom != 1)
      {
        ctx.translate(canvas.width/2 , canvas.height/2);
        ctx.scale(currentZoom , currentZoom);
        ctx.translate(-canvas.width/2 , -canvas.height/2);
      }

     

      ctx.drawImage(videoElement,0,0);
      if( filterSelected != "none")
      { 
        ctx.fillStyle = filterSelected;
        ctx.fillRect(0,0, canvas.width , canvas.height);
      }

      let aTag = document.createElement("a");
      aTag.download= `Image${Date.now()}.jpg`;
      aTag.href = canvas.toDataURL("image/jpg");
      aTag.click();


      });

    })();

    for(let i=0 ; i < filters.length ; i++)
    {
      filters[i].addEventListener("click", function(e){
        let currentFilterSelected = e.target.style.backgroundColor;
        if(currentFilterSelected=="")
        {
          if(document.querySelector(".filter-div")){
            document.querySelector(".filter-div").remove();
              filterSelected="none";
              return ;
          }
        }

        if(filterSelected== currentFilterSelected)
        {
            return;
        }

        let filterDiv = document.createElement("div");
        filterDiv.classList.add("filter-div");
        filterDiv.style.backgroundColor = currentFilterSelected;

        if( filterSelected == "none")
        {
          document.body.append(filterDiv);

        }
        else{
            document.querySelector(".filter-div").remove();
            document.body.append(filterDiv);
        }
        filterSelected = currentFilterSelected;

      })
    }

    zoomIn.addEventListener("click", function(){
      if(cureentZoom + 0.1 > maxZoom)
      {
        return;
      }
      currentZoom = cureentZoom+0.1;
      videoElement.style.transform =`scale(${cureentZoom})`;

    });

    zoomOut.addEventListener("click", function(){
      if(cureentZoom - 0.1 <minZoom)
      {
        return;
      }
      cureentZoom = cureentZoom-0.1;
      videoElement.style.transform = `scale(${cureentZoom})`;

    });



    