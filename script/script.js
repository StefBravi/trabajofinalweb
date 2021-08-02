window.onload=function(){
    var isshow=false
    var botton=document.getElementById("btn-menu")
    var menu=document.getElementById("ul")
    
    
    
    botton.addEventListener("click",function(){
        if(isshow){
            menu.classList.remove("show")
            isshow=false
            
        } else{
            menu.classList.add("show")
            isshow=true
        }

    })
    
}
