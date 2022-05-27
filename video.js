let displaydata=JSON.parse(localStorage.getItem("display"))||[];
let populardata=JSON.parse(localStorage.getItem("popular"))||[];
const video= document.getElementById("video");


const popular= (populardata) =>{
    populardata.forEach((el)=>{
        video.innerHTML="";
        let iframe=document.createElement("iframe");
        iframe.setAttribute("id","iframe")
        iframe.src= `https://www.youtube.com/embed/${el}`;
        iframe.allow="fullscreen";
        video.append(iframe);
        })
}
const displayvideo =(displaydata) =>{
    displaydata.forEach((el)=>{
        video.innerHTML="";
        let iframe=document.createElement("iframe");
        iframe.setAttribute("id","iframe")
        iframe.src= `https://www.youtube.com/embed/${el}`;
        iframe.allow="fullscreen";
        video.append(iframe);
        })  
}
popular(populardata);
displayvideo(displaydata);
  

