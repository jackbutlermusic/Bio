 $('.section').hide();
 $('#home').show();


$(".navbar-brand").click(function(){
  $('.section').hide();
  $('#home').show();
});


$("#bio").click(function(){
  $('.section').hide();
  $('#sectOne').show();
});

$("#about").click(function(){
   $('.section').hide();
   $('#sectTwo').show();
});

$("#bands").click(function(){
   $('.section').hide();
   $('#sectThree').show();
});


$("#contact").click(function(){
   $('.section').hide();
   $('#sectFour').show();
});

var currentTrack = 1;
$('.fa-pause').hide();

function playNext(){
 if(currentTrack<4){ // change this if I had more tracks!!
   currentTrack++;
 } else {
  currentTrack = 1;
 }
 
  keyData[currentTrack].sound.play();
}

function onPlay(){
  $('.fa-play').hide();
  $('.fa-pause').show();
  $("#songTitle").text(keyData[currentTrack].title);
}



function showPlay(){
  $('.fa-play').show();
  $('.fa-pause').hide();
}

var keyData = {
  1 : {
  sound : new Howl({src: ["music/El_Rado_Scuffle_bytheragtimenightmare.mp3"], 
  html5: false,                  
  onend: playNext,
  onpause: showPlay,                  
  onplay: onPlay,
  onstop: showPlay               
                   }),
  title: "Scott Joplin - Wall Street Rag" 
  },
  2 : {
  sound : new Howl({src: ["music/Uninvited02.mp3"],
  onend: playNext,
  onpause: showPlay,                  
  onplay: onPlay,
  onstop: showPlay  
                    
                   }),
  title: "Sweet Sue" 
  }, 
  3 : {
  sound : new Howl({src: ["music/El_Rado_Scuffle_bytheragtimenightmare.mp3"], 
  onend: playNext,
  onpause: showPlay,                  
  onplay: onPlay,
  onstop: showPlay  
                    
                    }),
  title: "The Ragtime Nightmare - El Rado Scuffle "
  }
}  


$(".fa-play").click(function(){
   keyData[currentTrack].sound.play();
});

$(".fa-pause").click(function(){
   keyData[currentTrack].sound.pause();
});

$(".fa-stop").click(function(){
   keyData[currentTrack].sound.stop();
});

$(".fa-step-backward").click(function(){
   keyData[currentTrack].sound.stop();
    if(currentTrack !== 1){
   currentTrack--;
 } else {
  currentTrack = 3; // change this if I had more tracks!!
 }
   keyData[currentTrack].sound.play();
});

$(".fa-step-forward").click(function(){
   keyData[currentTrack].sound.stop();
   if(currentTrack<3){ // change this if I had more tracks!!
   currentTrack++;
 } else {
  currentTrack = 1;
 }
   keyData[currentTrack].sound.play();
});




$( document ).ready(function() {
   
 keyData[1].sound.play();
 
//run on document load and on window resize
   //on load
    hideDiv();
    //on resize
    $(window).resize(function(){
        hideDiv();
    });
});

//the function to hide the div
function hideDiv(){
    if ($(window).width() < 564) {
            $("#songStatus").fadeOut("slow");
    }else{
        $("#songStatus").fadeIn("slow");
    }
}



var englishVersion = true;
$(".turkish").hide();

//Lets BUILD a Change language button!!!
$("#language").click(function(){
  if(englishVersion){
    $(".english").hide();
    $(".turkish").show();
    menuToTurkish();
  } else {
    $(".turkish").hide();
    $(".english").show();
    menuToEnglish();
  }
  englishVersion = !englishVersion;
});

function menuToTurkish(){
 
  $("#about").text("Fotograflar");
  $("#bands").text("Videolar");
  $("#contact").text("Irtibat");
  $("#language").text("English");
}

function menuToEnglish(){
 
  $("#photos").text("About");
  $("#videos").text("Recordings");
  $("#contact").text("links");
  $("#language").text("Irtibat");
}

