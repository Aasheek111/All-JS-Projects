let index= 0;

let songImage= document.querySelector("#boy");
let songName= document.querySelector(".song-name");
let songDetails =document.querySelector(".song-details");
let  previous = document.querySelector("#previous");
let play =document.querySelector("#play");
let next= document.querySelector("#next");
let volume= document.querySelector("#vol-range");
let seek= document.querySelector(".seek");
let start= document.querySelector("#start");
let playPause= document.querySelector(".play-pause");
let duration = document.querySelector(".duration");
let front=document.querySelector("#front");
let back = document.querySelector("#back");
let playlistSongs = document.querySelectorAll('.playlistsong');

seek.value=0;

start.addEventListener("click",()=>{

playPause.style.display="flex";
start.style.display="none";

playAudio(0);
})

let songs= [

    {
        name:"2002",
        singer:"Anne Marie",
        path:"song1.mp3",
        image:"images/2002.jpg"
    },
    {
        name:"Husn",
        singer:"Anuv Jain",
        path:"song2.mp3",
        image:"images/husn.jpg"
    }
    ,  {
        name:" Tu Hey Kahan",
        singer:"AUR",
        path:"song3.mp3",
        image:"images/tu hey kahah.jpg"
    }
]
console.log(songs.length);

let audio = document.createElement("audio");

function playAudio(index){

    console.log(songs[index].name)
    audio.src=songs[index].path;
    songName.innerText=songs[index].name;
    songDetails.innerHTML=songs[index].singer;
    let location= songs[index].image;
    songImage.src=location;

    audio.play();
console.log(location);
    
}


next.addEventListener("click",()=>{
    
    index+=1;
    if(index>songs.length-1){
        index=0
    }
    playAudio(index);
})
previous.addEventListener("click",()=>{
    index-=1;
    if(index<0){
        index=songs.length-1;
    }
    playAudio(index);
})

let playing= true;
play.src="icons/pause.svg";
play.addEventListener("click",()=>{

    if(playing==false){
        audio.play();
        playing=true;
        play.src="icons/pause.svg";
    }
    else{
        audio.pause();
        playing=false;
        play.src="icons/play.svg";
    }
})

seek.addEventListener("input",()=>{
    audio.currentTime= seek.value;
    console.log(seek.value);
})

volume.addEventListener("input",()=>{
    audio.volume= volume.value;
    console.log(volume.value);
})


audio.addEventListener("timeupdate",()=>{

    seek.value=audio.currentTime;
    back.innerHTML= formatTime(audio.currentTime);

});

function formatTime(time){

    let mins= Math.floor(time/60);
    let sec= Math.floor(time%60);
    return ` ${String(mins).padStart(2,0)} : ${String(sec).padStart(2,0)} `; 
}
audio.addEventListener("loadedmetadata",()=>{
    let dur= formatTime(audio.duration);
    front.innerHTML=`${dur}/`;
    seek.max=audio.duration;

    
})

let playlistIcon= document.querySelector("#playlist-icon");
let playlist= document.querySelector(".playlist")
playlistIcon.addEventListener("click",()=>{
playlist.classList.toggle("playlist-active")
});


playlistSongs.forEach((song,index) => {

    song.addEventListener("click",()=>{

        playAudio(index);
        playPause.style.display="flex";
        start.style="display:none;";
        

    })
    
});





