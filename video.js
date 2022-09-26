let video = JSON.parse(localStorage.getItem("youtubevideo")) || []
console.log(video)

let { videoId, title,description} = video;

let div = document.createElement("div")
div.setAttribute("class", "video")

let iframe = document.createElement("iframe")
iframe.src = `https://www.youtube.com/embed/${videoId}`

iframe.width = "500px";
iframe.height = "250px";
iframe.allow = "fullscreen";

let name1 = document.createElement("p")
name1.innerText = title
name1.setAttribute("class","name")

let des = document.createElement("p")
des.innerText = description
des.setAttribute("class","des")

div.append(iframe, name1 , des)

document.querySelector("#containervideo").append(div)