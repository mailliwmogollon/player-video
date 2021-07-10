const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $pause = document.querySelector('#pause');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);

        function handlePlay() {
            console.log('hola')
            $video.play()
            $play.hidden = true
            $pause.hidden = false
        }
        
        function handlePause() {
            console.log('pause')
            $video.pause()
            $pause.hidden = true
            $play.hidden = false
        }

$backward.addEventListener('click', handleBackward) 

        function handleBackward() {
            $video.currentTime -= 10
            console.log('retro',  $video.currentTime)
        }

$forward.addEventListener('click', handleForward) 

        function handleForward() {
            $video.currentTime = $video.currentTime + 10
            console.log('adelante',  $video.currentTime)
        }
const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeupdate)

function handleLoaded() {
    $progress.max = $video.duration
}

function handleTimeupdate() {
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
}