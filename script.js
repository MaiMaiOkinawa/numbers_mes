const sounds = [
  "0" ,
  "1" , 
  "2" ,
  "3" ,
  "4" ,
  "5" ,
  "6" ,
  "7" ,
  "8" ,
  "9" ,
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "40",
  "50",
  "60",
  "70",
  "80",
  "90",
  "100"
]

sounds.forEach(sound => {
  // Creates sound buttons
  const btn = document.createElement('button')
  btn.classList.add('btn')
  // Name each buttons of sounds as it loops
  btn.innerText = sound

  btn.addEventListener('click', () => {
    // Adding a fnc pauses songs
    stopSongs() 

    // This plays the song
    document.getElementById(sound).play()
  })
  
  document.getElementById('buttons').appendChild(btn)
})

// A fnc pauses songs when other buttons were clicked
function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0;
  })
}