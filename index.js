
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
        link: newCard.link.value

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
    newCard.reset()
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
    <img class='album-cover' />
    <h3></h3>
    <p></p>
    `
    
    // <button id='listen-button' class='listen-button'>Listen</button>
    
    musicDiv.querySelector("h2").textContent = musicObj.artist
    musicDiv.querySelector("img").src = musicObj.album
    musicDiv.querySelector("h3").textContent = musicObj.title
    musicDiv.querySelector("p").textContent = musicObj.link
    //////////if sizing artist's name ///////////
    if (musicDiv.querySelector("h2").textContent.length < 25) {
        console.log("just right")

    } if (musicDiv.querySelector("h2").textContent.length > 25) {
        console.log("too big yo")
        musicDiv.querySelector("h2").style.fontSize = "15px"

    }


    musicDiv.addEventListener("click",(e)=>{
        console.log(musicDiv.querySelector("p").textContent)
        const Mvideo =  videoDiv.querySelector("iframe")
        Mvideo.src = musicDiv.querySelector("p").textContent
    })
    musicL.append(musicDiv)

    const videoDiv = document.getElementById("videoDiv")
    videoDiv.innerHTML = `<iframe src="https://player.vimeo.com/video/330696160?h=48d5474b37" width="940" height="760" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`

    // musicDiv.querySelector("iframe").src = musicObj.link
    // const Mvideo =  videoDiv.querySelector("iframe")
    // Mvideo.src = musicObj.link


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
    if (para.style.fontSize === "20px") {
        console.log("#1")
        para.style.fontSize = "0px";
    } else {
        console.log("fix it")
        para.style.fontSize = "20px";
    }
}

name1.addEventListener("click", showMe)
name2.addEventListener("click", showMe)
name3.addEventListener("click", showMe)
name4.addEventListener("click", showMe)

const duggan = document.querySelector("#duggan")
const mason = document.querySelector("#mason")
const laurence = document.querySelector("#laurence")
const regan = document.querySelector("#regan")
console.log(duggan)
console.log(mason)
console.log(laurence)
console.log(regan)

showMe2 = (e)=> {
    e.preventDefault()
    let sele = e.target.parentNode.id
    let para = document.querySelector(`#${sele} > p`)
    let h3 = document.querySelector(`#${sele} > h3`)
    let pic = document.querySelector(`#${sele} > img`)
    console.log(h3)
    console.log(para)
    // pic.style.width = "250px"
    if (para.style.fontSize === "20px") {
        para.style.fontSize = "0px";
    } else {
        para.style.fontSize = "20px";
    }
    if (h3.style.fontSize === "50px") {
        h3.style.fontSize = "0px";
    } else {
        h3.style.fontSize = "50px";
    }
    if (pic.style.width === "300px") {
        pic.style.width = "125px";
    } else {
        pic.style.width = "300px";
    }
}
MouseI = (e)=> {
    e.preventDefault()
    let sele = e.target.parentNode.id
    let para = document.querySelector(`#${sele} > p`)
    let h3 = document.querySelector(`#${sele} > h3`)
    let pic = document.querySelector(`#${sele} > img`)
    para.style.fontSize = "15px"
    h3.style.fontSize = "24px"
    pic.style.width = "150px"

}
MouseII = (e)=> {
    e.preventDefault()
    let sele = e.target.parentNode.id
    let para = document.querySelector(`#${sele} > p`)
    let h3 = document.querySelector(`#${sele} > h3`)
    let pic = document.querySelector(`#${sele} > img`)
    para.style.fontSize = "0px"
    h3.style.fontSize = "0px"
    pic.style.width = "125px"

}

laurence.addEventListener("mouseover", MouseI)
laurence.addEventListener("mouseout", MouseII)

duggan.addEventListener("mouseover", MouseI)
duggan.addEventListener("mouseout", MouseII)

mason.addEventListener("mouseover", MouseI)
mason.addEventListener("mouseout", MouseII)

regan.addEventListener("mouseover", MouseI)
regan.addEventListener("mouseout", MouseII)

// duggan.addEventListener("click", showMe2)
// mason.addEventListener("click", showMe2)
// regan.addEventListener("click", showMe2)
