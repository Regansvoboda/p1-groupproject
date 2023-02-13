
const musicAPI = "http://localhost:3000/Songs"
const musicL = document.getElementById("music-list")




fetch(musicAPI)
    .then( r => r.json())
    .then(musicArray => {
        musicArray.forEach(musicObj => {
            renderMusicList(musicObj)
            
        });
    })

function renderMusicList(musicObj) {
    const musicDiv = document.createElement("div")
    musicDiv.innerHTML = `
    <h2></h2>
    <h3></h3>
    <img />
    <p></p>
    <button>Listen</button>`

    musicDiv.querySelector("h2").textContent = musicObj.artist
    musicDiv.querySelector("h3").textContent = musicObj.title
    musicDiv.querySelector("img").src = musicObj.album
    musicDiv.querySelector("button").src = musicObj.link
    musicL.append(musicDiv)
}
