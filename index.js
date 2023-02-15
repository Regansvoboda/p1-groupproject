
const musicAPI = "http://localhost:3000/Songs"
const musicL = document.getElementById("music-list")
const newCard = document.getElementById('new-song')
const popularSong = "http://localhost:3000/Popular-Songs"


newCard.addEventListener('submit', e=> {
    e.preventDefault()
    
    const newMusicCard = {
        title: e.target.title.value,
        artist: e.target.artist.value,
        album: e.target.album.value,

    }
    
    fetch(musicAPI, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newMusicCard)
    })
    .then(r => r.json())
    .then(newMusicCard => {
        renderMusicList(newMusicCard)
    })
})

fetch(musicAPI)
.then( r => r.json())
.then(musicArray => {
    musicArray.forEach(musicObj => {
        renderMusicList(musicObj)
    });
})


function renderMusicList(musicObj) {
    const musicDiv = document.createElement("div")
    musicDiv.className = 'card'
    musicDiv.innerHTML = `
    <h2></h2>
    <h3></h3>
    <img class='album-cover' />
    `
    
    // <button id='listen-button' class='listen-button'>Listen</button>
    
    musicDiv.querySelector("h2").textContent = musicObj.artist
    musicDiv.querySelector("h3").textContent = musicObj.title
    musicDiv.querySelector("img").src = musicObj.album
    
    musicL.append(musicDiv)
}

const button = document.getElementById("create-button")

button.addEventListener("click", showMessage) 

function showMessage() {
    alert("Thank you for submitting!")
}
button.addEventListener('mouseover', (e)=> {
    e.target.style.backgroundColor = "#36454F"
    e.target.style.color = "whitesmoke"
    e.target.style.cursor = "pointer"
    e.target.style.height = "40px"
    e.target.style.width = "80px"
})

button.addEventListener('mouseout', (e)=> {
    e.target.style.backgroundColor = "white"
    e.target.style.cursor = "auto"
    e.target.style.height = "auto"
    e.target.style.width = "auto"
    e.target.style.color = "black"
})
const name4 = document.getElementById("name4")
const name3 = document.getElementById("name3")
const name2 = document.getElementById("name2")
const name1 = document.getElementById("name1")

showMe = (e)=> {
    e.preventDefault()
    let sele = e.target.parentNode.id
    let para = document.querySelector(`#${sele} > p`)
    console.log(para)
    if (para.style.fontSize === "50px") {
        console.log("#1")
        para.style.fontSize = "0px";
    } else {
        console.log("fix it")
        para.style.fontSize = "50px";
    }
}

name1.addEventListener("click", showMe)
name2.addEventListener("click", showMe)
name3.addEventListener("click", showMe)
name4.addEventListener("click", showMe)

hap1 = document.getElementById("p1")
console.log(hap1)

// 
takeAway =(e)=>{
    e.preventDefault()
    console.log(e.target)
    let hap = e.target
    hap.style.fontSize = "0px";
    
}

hap1.addEventListener("click", takeAway)