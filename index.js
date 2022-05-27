
//AIzaSyClrrDvdoc9C40jxXhu-uG8tzbx8TzA1g4

const gosearch = async() => {
    try{
        let input= document.getElementById("srch").value;
        let video= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyClrrDvdoc9C40jxXhu-uG8tzbx8TzA1g4&maxResults=20`)
        
        let data = await video.json();
        console.log(data)
        let videos= data.items;
        appendVideos(videos)
    }
    catch(error){
        console.log("error:",error)
    }
}
//popular videos
const popular = async() => {
    try{
        
        let video= await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=AIzaSyClrrDvdoc9C40jxXhu-uG8tzbx8TzA1g4&maxResults=20`)
        
        let data = await video.json();
        console.log(data)
        let videos= data.items;
        appendpopularVideos(videos)
    }
    catch(error){
        console.log("error:",error)
    }
}
popular();



let search_result_div= document.getElementById("search_result_div")


const appendVideos= (data) => {
    search_result_div.innerHTML="";
    data.forEach(({snippet:{title},id:{videoId},snippet:{thumbnails:{high:{url}}}}) => {
        let div =document.createElement("div")

        let name = document.createElement("p")
        name.innerText=title;

        // let iframe= document.createElement("iframe");
        // iframe.src=`https://www.youtube.com/embed/${videoId}`
        // iframe.height="100%";
        // iframe.width="100%";
        let thumbnail=document.createElement("img");
        thumbnail.setAttribute("id","thumbnail")
        thumbnail.src=url;
        thumbnail.addEventListener("click",()=>{
            let arr=[];
            arr.push(videoId);
            console.log(arr)
            localStorage.setItem("display",JSON.stringify(arr));
            window.location.href="./video.html";
        })
        
        
        div.append(thumbnail,name)
        search_result_div.append(div)

    })
}
//appendpopularVideos
const appendpopularVideos= (data) => {
    search_result_div.innerHTML="";
    data.forEach(({snippet:{title},id,snippet:{thumbnails:{high:{url}}}}) => {
        let div =document.createElement("div")

        let name = document.createElement("p")
        name.innerText=title;

        // let iframe= document.createElement("iframe");
        // iframe.src=`https://www.youtube.com/embed/${videoId}`
        // iframe.height="100%";
        // iframe.width="100%";
        let thumbnail=document.createElement("img");
        thumbnail.setAttribute("id","thumbnail")
        thumbnail.src=url;
        thumbnail.addEventListener("click",()=>{
            let arr=[];
            arr.push(id);
            console.log(arr)
            localStorage.setItem("popular",JSON.stringify(arr));
            window.location.href="./video.html";
        })
        
        
        div.append(thumbnail,name)
        search_result_div.append(div)

    })
}