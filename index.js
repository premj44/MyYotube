let API = "AIzaSyDhpsh3qIFB2fmk_epH_i2TBCWjoTYF__4"

let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=in&key=${API}`



fetch(url)
    .then((res) => {
        return res.json()
    })
    .then( (res) =>{

        append1(res.items)

        console.log(res)
    })
    .catch((err) =>{
        console.log(err)
    })

let append1 = (data) => {

    let trending = document.getElementById("trending")
   
    

    data.forEach(({ id, snippet: { title, description} }) => {

        let div = document.createElement("div")
        div.setAttribute("class", "video")

        let iframe = document.createElement("iframe")
        iframe.src = `https://www.youtube.com/embed/${id}`

        iframe.width = "500px";
        iframe.height = "250px";
        iframe.allow = "fullscreen";

        let name1 = document.createElement("p")
        name1.innerText = title
        name1.setAttribute("class", "name")

        

        let des = document.createElement("p")
        des.innerText = description
        des.setAttribute("class","trenddes")

        div.append(iframe, name1 , des)

        trending.append(div)
        
    })
    
}


// ***********************************************

// let API = "AIzaSyDhpsh3qIFB2fmk_epH_i2TBCWjoTYF__4"

async function search() {
    try {
        let query = document.getElementById("query").value
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API}`

        let res = await fetch(url)

        let data = await res.json()

        append(data.items)
        console.log(data)
    } catch (err) {
        console.log(err)
    }

}

let append = (data) => {
    let trending = document.getElementById("trending")
    trending.innerHTML = null

    let video = JSON.parse(localStorage.getItem("youtubevideo")) || []

    let container = document.getElementById("results");
    container.innerHTML = null;

    data.forEach(({ id: { videoId }, snippet: { title, description, thumbnails: { medium: { url } } } }) => {


        let div = document.createElement("div")
        div.setAttribute("class", "thumbdiv")


        let thumb = document.createElement("img")
        thumb.src = url
        thumb.setAttribute("class", "thumb")

        let h3 = document.createElement("h5")
        h3.innerText = title;

        div.append(thumb, h3)

        container.append(div)


        let data = {
            title,
            videoId,
            description,
        };
        div.onclick = () => {
            showvideo(data);
        }

    })

}

let showvideo = (video) => {
    localStorage.setItem("youtubevideo", JSON.stringify(video))
    window.location.href = "video.html"
}

