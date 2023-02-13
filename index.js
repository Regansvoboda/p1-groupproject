
const musicAPI = "http://localhost:3000/Songs"
const musicL = document.getElementById("music-list")
const musicForm = document.getElementById('new-song')

musicForm.addEventListener('submit', e=> {
    e.preventDefault()

const newMusicCard = {
    title: e.target.title.value,
    artist: e.target.artist.value,
    album: e.target.album.value,
    link: e.target.link.value
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
    <p></p>
    <button class='listen-button'>Listen</button>
    `

   musicDiv.querySelector("h2").textContent = musicObj.artist
   musicDiv.querySelector("h3").textContent = musicObj.title
   musicDiv.querySelector("img").src = musicObj.album
   musicDiv.querySelector("button").src = musicObj.link
   
   musicL.append(musicDiv)
}
