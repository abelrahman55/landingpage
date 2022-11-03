let links= document.querySelectorAll("header .links a");
links.forEach(function(link){
    link.addEventListener("click",function(e){
        links.forEach(function(link){
            link.classList.remove("active");
        })
        link.classList.add("active");
    })
})
bar=document.querySelector(".lists i");
links=document.querySelector(".links");
bar.onclick=function(){
links.classList.toggle("open");
}