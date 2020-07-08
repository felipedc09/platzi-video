const video = document.querySelector('video')
const button = document.querySelector('button')

button.onclick = togglePlayVideo

function togglePlayVideo(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}