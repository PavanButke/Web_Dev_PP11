let videoPlayer = document.querySelector("video");
      let recordBtn = document.querySelector("#record");
      let mediaRecorder;
      let chunks = [];
      let isRecording = false;

      captureBtn.addEventListener("click", function (){

        let innerSpan = captureBtn.querySelector("span");

        innerSpan.classList.add("capture-animation");
        setTimeout(function () {
        innerSpan.classList.remove("capture-animation");
         }, 1000);

          let canvas = document.createElement("canvas");
          canvas.width = videoPlayer.videoWidth;
          canvas.height = videoPlayer.videoHeight;

          let tool = canvas.getContext("2d");

          tool.drawImage(videoPlayer , 0, 0);

          let url =canvas.toDataURL();
          canvas.remove();
          let a = document.createElement("a");
          a.href = url;
          a.download = "image.png";
          a.click();
          a.remove();

      })

      recordBtn.addEventListener("click", function () {

        let innerSpan = recordBtn.querySelector("span");
        if(isRecording){
            //recording ko stop krna h
            mediaRecorder.stop()
            isRecording = false
            innerSpan.classList.remove("record-animation");
        }else{
            //recording shuru krni hai 
            mediaRecorder.start()
            isRecording = true
            innerSpan.classList.add("record-animation");
        }
      });

      let promiseToUseCamera = navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      promiseToUseCamera
        .then(function (mediaStream) {
          // laymen terms me media Stream ek object hai jisme continously camera and mic ka input ara hai and wo input fir maine using objects video me dalra hu
          videoPlayer.srcObject = mediaStream;

          mediaRecorder = new MediaRecorder(mediaStream);

          mediaRecorder.addEventListener("dataavailable", function (e) {
            chunks.push(e.data);
          });

          mediaRecorder.addEventListener("stop", function (e) {
            let blob = new Blob(chunks, { type: "video/mp4" });
            chunks = [];

            let link = URL.createObjectURL(blob); //kisi tarike se blob ki link bnadi h

            let a = document.createElement("a");
            a.href = link;
            a.download = "video.mp4";
            a.click();

          });
        })
        .catch(function () {
          console.log("user has denied the access of camera");
        }); 