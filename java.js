console.log("hi it work")

$(document).ready(function()
{
    // audio object
    var click = new Audio();
    click.src="click.mp3";

    
//button play agin
let playAgain = $("#agin")
playAgain.on("click",function(){
    
    location.reload(true);
   
})
//button instrruction page
 let instrctionPage=$('#instruction')
 instrctionPage.on("click",function(){
    window.location.replace("instraction.html"); 
})
//--------------------------------------------------------------------------
// to replace between thelphant
let moveElphant =1 

let space = $(".box")

    space.on( "click",function(){

        if(moveElphant<=9){

        if($(this).hasClass()== "" ){
        if(moveElphant%2==1){
            $(this).addClass('player1');
              click.play();
              $("#el2").addClass("turn")
              $("#el1").removeClass("turn")
              
        }
        else {
            $(this).addClass('player2');
            click.play();
            $("#el1").addClass("turn")
            $("#el2").removeClass("turn")
        }
     moveElphant++
// call winer
  if (winer() !="" && winer()!=-1){

        $("h1").text(winer())
        $("h1").css("color","  rgb(163, 59, 80)")
        $("#el2").removeClass("turn")
        $("#el1").removeClass("turn")
  }
 
   }

}

   
 
    
    
});
//--------------winer---------------

function winer (){
    
console.log("hi winer work")

   if($("#box1").hasClass("player1") &&$("#box2").hasClass("player1") &&  $("#box3").hasClass("player1")
   || $("#box1").hasClass("player2") &&$("#box2").hasClass("player2") &&  $("#box3").hasClass("player2")){
if( $("#box1").hasClass("player2")) {
return ("WOOOOW ELPHANT 2 GOOD JOB")
}
    return  ("WOOOOW ELPHANT 1 GOOD JOB")
    
}
if($("#box4").hasClass("player1") &&$("#box5").hasClass("player1") &&  $("#box6").hasClass("player1")
|| $("#box4").hasClass("player2") &&$("#box5").hasClass("player2") &&  $("#box6").hasClass("player2")){
if( $("#box4").hasClass("player2")) {
return ("WOOOOW ELPHANT 2 GOOD JOB")
}
 return  ("WOOOOW ELPHANT 1 GOOD JOB")
 
}

if($("#box7").hasClass("player1") &&$("#box8").hasClass("player1") &&  $("#box9").hasClass("player1")
|| $("#box7").hasClass("player2") &&$("#box8").hasClass("player2") &&  $("#box9").hasClass("player2")){
if( $("#box7").hasClass("player2")) {
return ("WOOOOW ELPHANT 2 GOOD JOB")
}
 return  ("WOOOOW ELPHANT 1 GOOD JOB")
 
}
if($("#box1").hasClass("player1") &&$("#box4").hasClass("player1") &&  $("#box7").hasClass("player1")
|| $("#box1").hasClass("player2") &&$("#box4").hasClass("player2") &&  $("#box7").hasClass("player2")){
if( $("#box1").hasClass("player2")) {
return ("WOOOOW ELPHANT 2 GOOD JOB")
}
 return  ("WOOOOW ELPHANT 1 GOOD JOB")
 
}

if($("#box2").hasClass("player1") &&$("#box5").hasClass("player1") &&  $("#box8").hasClass("player1")
|| $("#box2").hasClass("player2") &&$("#box5").hasClass("player2") &&  $("#box8").hasClass("player2")){
if( $("#box2").hasClass("player2")) {
return ("WOOOOW ELPHANT 2 GOOD JOB")
}
 return  ("WOOOOW ELPHANT 1 GOOD JOB")
 
}
if($("#box3").hasClass("player1") &&$("#box6").hasClass("player1") &&  $("#box9").hasClass("player1")
|| $("#box3").hasClass("player2") &&$("#box6").hasClass("player2") &&  $("#box9").hasClass("player2")){
if( $("#box3").hasClass("player2")) {
return ("WOOOOW ELPHANT 2 GOOD JOB")
}
 return  ("WOOOOW ELPHANT 1 GOOD JOB")
 
}
if($("#box3").hasClass("player1") &&$("#box5").hasClass("player1") &&  $("#box7").hasClass("player1")
|| $("#box3").hasClass("player2") &&$("#box5").hasClass("player2") &&  $("#box7").hasClass("player2")){
if( $("#box3").hasClass("player2")) {
return ("WOOOOW ELPHANT 2 GOOD JOB")
}
 return  ("WOOOOW ELPHANT 1 GOOD JOB")
 
}

if($("#box1").hasClass("player1") &&$("#box5").hasClass("player1") &&  $("#box9").hasClass("player1")
|| $("#box1").hasClass("player2") &&$("#box5").hasClass("player2") &&  $("#box9").hasClass("player2")){
if( $("#box1").hasClass("player2")) {
return ("WOOOOW ELPHANT 2 GOOD JOB")
}
 return  ("WOOOOW ELPHANT 1 GOOD JOB")
 
}
else{
   return -1 
}     
 }
});

// try untel u die you can do it "انتي قدها يلا حاولي"

// var box1=("#box1")
// var box2=("#box2")
// var box3=("#box3")
// var box4=("#box4")
// var box5=("#box5")
// var box6=("#box6")
// var box7=("#box7")
// var box8=("#box8")
// var box9=("#box9")
// let position = [
//     // 1   2    3
//     [box1,box2,box3],
//     [box4,box5,box6],
//     [box7,box8,box9],
//     [box1,box4,box7],
//     [box2,box5,box8],
//     [box3,box6,box9],
//     [box3,box5,box7],
//     [box1,box5,box9]


// ]
// for(colom=0 , colom=position.length,colom++){
//     for(row =0 , row=position.length[0]){

//     }
// }
