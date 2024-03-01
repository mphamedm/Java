let run1 = document.getElementById("run1")
let stop1=document.getElementById("stop1")
let run2 = document.getElementById("run2")

let stop = document.getElementById("stop3")
let song = document.getElementById("song")

let run3 = document.getElementById("run3")
  
  


let ispling = false;
let index = 0;



function ply(index) {
  ispling=true
  song.src="https://server8.mp3quran.net/frs_a/001.mp3"
  song.play()
  run1.innerHTML="ايقاف"
    
  
  
}
    
    
run1.addEventListener("click",()=>{
  ispling ? sto():ply()
  
  
})  

function ply1 () {
  ispling=true
  song.src="https://server8.mp3quran.net/frs_a/002.mp3"
  song.play()
  
  // Tab to edit
}

function ply2() {
  ispling=true
  song.src="https://server8.mp3quran.net/frs_a/003.mp3"
  song.play()
  // Tab to edit
}
run3.addEventListener("click",()=>{
  ispling?sto():ply2()
})
  
  

    
    
    
    
  
  

function sto() {
  ispling=false
  song.pause()
  run1.innerHTML="تشغيل"
  
  
    
  }
    
  
  

run2.addEventListener("click",()=>{
  ispling?sto():ply1()
  
    
    
    
    
    
    
    
  
})


  
  
  
  
  

  
  


  
  
  
  
  

  
  
  



    
      
    
    
  

  
    
  
  
  
    
    
    
  
    
    
  
    
  




  



