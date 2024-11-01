document.getElementById("infoga").addEventListener("click", function(){
  let input = document.getElementById("input-box").value
  let box = document.getElementById("box").textContent = input

  
})
document.getElementById("Nollställ").addEventListener("click", function(){
  document.getElementById("box").textContent = "";
})
document.getElementById("färg").addEventListener("click", function(){
  let box = document.getElementById("box")
  let rfärg = "#" + Math.floor(Math.random() * 16777215).toString(16)
  box.style.color = rfärg
});