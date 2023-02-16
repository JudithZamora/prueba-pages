(function(){
    let video = document.querySelector(".mi-video");
    let playPauseBtn = document.querySelector(".playPauseBtn");
    let fullScreenBtn = document.querySelector(".full_screen");
    let volume_btn = document.querySelector(".volume_btn");
    let slide = document.querySelector(".volume_range");
    let bar = document.querySelector(".bar");
    let full_duration = document.querySelector(".full_duration");
    let current_time = document.querySelector(".current_time");
    let progress = document.querySelector(".progress");
    
    function bindEvents(){
        playPauseBtn.addEventListener("click", playPause);
        fullScreenBtn.addEventListener("click", enterFullScreen);

        volume_btn.addEventListener("click", upVolume);
        slide.addEventListener("input", turnUp);

        video.addEventListener("timeupdate", updateTime);

       
    }
    bindEvents();

        function playPause(){
            if(video.paused){
                playPauseBtn.classList.remove("fa-play");
                playPauseBtn.classList.add("fa-pause");
                video.play();
            }else{
                playPauseBtn.classList.remove("fa-pause");
                playPauseBtn.classList.add("fa-play");
                video.pause();
            }
        }
        function enterFullScreen(){
            if(video.requestFullscreen){
                video.requestFullscreen();
            }else if (video.muozRequestFullScreen){
                video.muozRequestFullScreen();
            }else if(video.webkitRequestFullscreen){
                video.webkitRequestFullscreen();
            }else if(video.msRequestFullscreen){
                video.msRequestFullscreen();
            }
        }

        function upVolume(){
            slide.classList.toggle("active");
            volume_btn.classList.toggle("active");
        }
        function turnUp(){
            video.volume = slide.value;
        }

        function updateTime(){
            let curTime = video.currentTime;
            let duration = video.duration;

            let porcentage = (curTime * 100) / duration;
            bar.style.width  = porcentage + "%";

            let minutes = parseInt(duration / 60, 10);
            let seconds = parseInt(duration % 60);
            
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            if(seconds < 10){
                seconds = "0" + seconds;
            }

            full_duration.innerHTML = minutes + ":" + seconds
/* tiempo de video */
            let minutesCur = parseInt(curTime / 60, 10);
            let secondsCur = parseInt(curTime % 60);
            
            if(minutesCur < 10){
                minutesCur = "0" + minutesCur;
            }
            if(secondsCur < 10){
                secondsCur = "0" + secondsCur;
            }

            current_time.innerHTML = minutesCur + ":" + secondsCur
        }
        

        
})();
