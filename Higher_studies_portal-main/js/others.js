let div1=document.querySelector("#form1")
let div2=document.querySelector("#form2")
let div3=document.querySelector("#form3")
let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let btn3=document.querySelector("#btn3")

function toggleform(id){
  var s=""+id
  console.log(s)

  if(s=="1" && !btn1.classList.contains("clicked")){
    toggleform1()
  }
  if(s=="2" && !btn2.classList.contains("clicked")){
    toggleform2()
  }
  if(s=="3" && !btn3.classList.contains("clicked")){
    toggleform3()
  }
}

function toggleform1(){
  if(div2.classList.contains("clicked")){
    div2.classList.toggle("clicked")
    btn2.classList.toggle("clicked")
  }
  if(div3.classList.contains("clicked")){
    div3.classList.toggle("clicked")
    btn3.classList.toggle("clicked")

  }
  div1.classList.toggle("clicked")
  btn1.classList.toggle("clicked")
}

function toggleform2(){
  if(div1.classList.contains("clicked")){
    div1.classList.toggle("clicked")
    btn1.classList.toggle("clicked")

  }
  if(div3.classList.contains("clicked")){
    div3.classList.toggle("clicked")
    btn3.classList.toggle("clicked")

  }
  div2.classList.toggle("clicked")
  btn2.classList.toggle("clicked")


}

function toggleform3(){
  if(div2.classList.contains("clicked")){
    div2.classList.toggle("clicked")
    btn2.classList.toggle("clicked")

  }
  if(div1.classList.contains("clicked")){
    div1.classList.toggle("clicked")
    btn1.classList.toggle("clicked")

  }
  div3.classList.toggle("clicked")
  btn3.classList.toggle("clicked")


}

function ifothers(val){
    var element=document.getElementById('CompanyName');
    if(val=='Others')
      element.style.display='block';
    else  
      element.style.display='none';
   }

function validateTerms(){
    let btn=document.getElementById('companybtn');
    let inp=document.getElementById('answer')
    var element=document.getElementById('CompanyName');
    if (!btn.classList.contains("clicked")){
      btn.value="No"
      btn.style.backgroundColor="red"
      inp.classList.toggle("clicked")
      btn.classList.toggle("clicked")
      if (inp.value=="Others"){
        element.style.display='block'
      }
    }
    else{
      btn.value="Yes"
      btn.style.backgroundColor="#3598dc"
      inp.classList.toggle("clicked")
      btn.classList.toggle("clicked")
      element.style.display='none';
    }
  }
window.onload = function () {
  //Reference the DropDownList.
  var passYears = document.getElementById("passYears");
  var year1 = document.getElementById("year1");
  var year2 = document.getElementById("year2");
  var year3 = document.getElementById("year3");

  var currentYear = (new Date()).getFullYear();
  
  //Loop and add the Year values to DropDownList.
  for (var i = currentYear-20; i <= currentYear+20; i++) {
      var option = document.createElement("OPTION");
      option.innerHTML = i;
      option.value = i;
      passYears.appendChild(option);
  }
  for (var i = currentYear-20; i <= currentYear+20; i++) {
    var option = document.createElement("OPTION");
    option.innerHTML = i;
    option.value = i;
    year1.appendChild(option);


  }
  for (var i = currentYear-20; i <= currentYear+20; i++) {
    var option = document.createElement("OPTION");
    option.innerHTML = i;
    option.value = i;
    year2.appendChild(option);

  }
  for (var i = currentYear-20; i <= currentYear+20; i++) {
    var option = document.createElement("OPTION");
    option.innerHTML = i;
    option.value = i;
    year3.appendChild(option);

  }}
