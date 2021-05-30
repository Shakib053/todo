let todInput=document.getElementById("input-list")
let showTodo=document.getElementById("history")


inputTake=()=>{
if(todInput.value==""){
    alert("write something")
}else{
    
    let para=document.createElement("p")
para.innerHTML=todInput.value
    showTodo.appendChild(para)
para.style.textAlign="center"
para.style.background="#009432"
para.style.fontSize="2rem"
para.style.color="white"
para.style.cursor="pointer"
todInput.value=""

  para.addEventListener("click",function(){
    para.style.textDecoration="line-through"
  })
  para.addEventListener("dblclick",function(){
      showTodo.removeChild(para)
  })
}
}