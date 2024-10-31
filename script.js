let scene;
let firstDialC1 = 2;
let gun = true;
let gunUsed = false;
let firstGun = true;
let bluffChoice = false;
let getFinal = 0;

function startVideoStream()
{
  let video = document.createElement("video");
  video.setAttribute("id", "videoStage");

  video.src = "Video/First_choice.mp4";
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene = 1;
    stampascelte1();
    rAF(updateStatus);
  };
}

function buttonPressed(button)
{
  let b = button;

    if(bluffChoice == true)
    {
      switch(b)
      {
          case 1:
            finals(2);
            break;
  
          case 0:
            bluffChoice = false;
            getFinal++;
            giveUp();
            break;
      }
    }else
    {
      if(gunUsed == true)
      {
        switch(b)
        {
            case 1:
                finals(5); //executed deviant
              break;
    
            case 0:
            if(firstGun == true)
            {
              firstGun = false;
              intimidate();
            }else
            {
              finals(4);
            }
              break;
        }
      }else
      {
        switch(scene)
        {
          case 1:
            firstChoices(b);
            break;
      
          case 2:
            tourniquetChoices(b)
            break;
            
          case 3:
            theGunChoices(b);
            
            break;
      
          case 4:
            firstDialChoices(b);
            
            break;
            
          case 5:
            secondDialChoices(b);
            
            break;
      
          case 6:
            thirdDialChoices(b);
            
            break;
            
          case 7:
            helicopterChoices(b);
            
            break;
          
          case 8:
            fourthDialChoices(b);
            
            break;
            
          case 7:
            fifthDialChoices(b);
            
            break;
      
          case 8:
            sixthDialChoices(b);
            break;
          
          case 9:
            finals(b);
            break;
        }
      }
    }
}

// scena 1
function firstChoices(b)
{
  
  let button = b;
  
  let video = document.getElementById("videoStage");
  let playVideo;

  switch(button)
  {
    case 3:
      playVideo = "Video/First_choice/Calm.mp4";
      getFinal += 2;
    break;

    case 2:
      playVideo = "Video/First_choice/release.mp4";
      getFinal++;
    break;

    case 1:
      playVideo = "Video/First_choice/reassure.mp4";
      getFinal += 2;
    break;

    case 0:
      playVideo = "Video/First_choice/empathize.mp4";
      getFinal += 2;
    break;

  }
  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    //inserire funzione per visualizzare le scelte
      
    stampascelte2();
    scene++;
    rAF(updateStatus);
  };
  puliscicelle();
}

// scena 2
function tourniquetChoices(b)
{

  let button = b;

  let video = document.getElementById("videoStage");
  let playVideo;

  switch(button)
  {
    case 1:
      playVideo = "Video/Tourniquet/ignore.mp4";
      getFinal++;
      break;

    case 0:
      playVideo = "Video/Tourniquet/obey.mp4";
      getFinal+=2;
      break;
  }
  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    stampascelte3();
    rAF(updateStatus);
  };
  puliscicelle();
}

// scena 3
function theGunChoices(b)
{
  
  rAF(updateStatus);

  let button = b;

  let video = document.getElementById("videoStage");
  let playVideo;

  switch(button)
  {
    case 1:
      playVideo = "Video/Gun/lieGun.mp4";
      getFinal++;
      break;

    case 0:
      gun = false;
      playVideo = "Video/Gun/truthGun.mp4";
      getFinal+=2;
      break;
  }
  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);
  
  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    stampascelte4array();
    rAF(updateStatus);
  };
  puliscicelle();
}

//choices emma and you, possible cause, realistic, defective

let pb = "Video/Approaching the deviant/first dialogue/Possible_cause1.mp4";
let eay = "Video/Approaching the deviant/first dialogue/emma_and_you.mp4";
let realistic = "Video/Approaching the deviant/first dialogue/realistic.mp4";
let defective = "Video/Approaching the deviant/first dialogue/defective.mp4";
let blaming = "Video/Approaching the deviant/second dialogue/blaming.mp4";
let sympathetic = "Video/Approaching the deviant/third dialogue/Sympathetic.mp4";

let choices = {defective, realistic, eay, pb};

// scena 4
function firstDialChoices(b)
{
  let button = b;

  let video = document.getElementById("videoStage");
  let playVideo;

  if(choices[button] == realistic || choices[button] == defective)
  {
    getFinal++;
  }else
  {
    getFinal+=2;
  }
  
  playVideo = choices[button];
  choices[button] = blaming;

  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    stampascelte4array();
    rAF(updateStatus);
  };
  puliscicelle();
}

// scena 5
function secondDialChoices(b)
{
  
  let button = b;

  let video = document.getElementById("videoStage");
  let playVideo;

  playVideo = choices[button];
  choices[button] = sympathetic;

  if(choices[button] == realistic || choices[button] == defective || choices[button] == blaming)
  {
    getFinal++;
  }else
  {
    getFinal+=2;
  }
  
  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    stampascelte4array();
    rAF(updateStatus);
  };
  puliscicelle();
}

// scena 6
function thirdDialChoices(b)
{
  
  let button = b;

  let video = document.getElementById("videoStage");
  let playVideo;

  playVideo = choices[button];

  if(choices[button] == realistic || choices[button] == defective || choices[button] == blaming)
  {
    getFinal++;
  }else
  {
    getFinal+=2;
  }
  
  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    stampascelte7();
    rAF(updateStatus);
  };
  puliscicelle();
}

// scena 7
function helicopterChoices(b)
{
  
  let button = b;

  let video = document.getElementById("videoStage");
  let playVideo;

  switch(button)
  {
    case 1:
      playVideo = "Video/Accept.mp4";
      getFinal+=2;
      break;

    case 0:
      playVideo = "Video/Refuse.mp4";
      getFinal++;
      break;
  }
  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    stampascelte8();
    rAF(updateStatus);
  };
  puliscicelle();
}

// scena 8
function fourthDialChoices(b)
{
  
  let button = b;

  let video = document.getElementById("videoStage");
  let playVideo;

  switch(button)
  {
    case 3:
      playVideo = "Video/lastChance.mp4";
      getFinal+=2;
      break;

    case 2:
      playVideo = "Video/trust.mp4";
      getFinal+=2;
      break;

    case 1:
      bluff();
      getFinal++;
      break;

    case 0:
      playVideo = "Video/rational.mp4";
      getFinal++;
      break;
  }
  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    stampascelte9();
    rAF(updateStatus);
  };
  puliscicelle();
}

// scena 9
function fifthDialChoices(b)
{
  
  let button = b;

  let video = document.getElementById("videoStage");
  let playVideo;

  switch(button)
  {
    case 3:
      getFinal++;
      useGun();
      
      break;
    
    case 2:
      finals(0);
      break;

    case 1:
      playVideo = "Video/Approaching the deviant/fifth dialogue/Compromise.mp4";
      getFinal+=2;
      break;

    case 0:
      playVideo = "Video/Approaching the deviant/fifth dialogue/refuse.mp4";
      getFinal++;
      break;
  }
  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    stampascelte10();
    rAF(updateStatus);
  };
  puliscicelle();
}

// scena 10
function sixthDialChoices(b)
{
  
  let button = b;

  let video = document.getElementById("videoStage");
  let playVideo;

  switch(button)
  {
    case 3:
      getFinal++;
      useGun();
      
      break;

    case 2:
      playVideo = "Video/Approaching the deviant/sixth dialogue/sacrifice_self.mp4";
      break;
    
    case 1:
      playVideo = "Video/Approaching the deviant/sixth dialogue/Reassure.mp4";
      getFinal+=2;
      break;

    case 0:
      playVideo = "Video/Approaching the deviant/sixth dialogue/truth.mp4";
      getFinal++;
      break;
  }
  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    rAF(updateStatus);
  };
  puliscicelle();
}

// scena 11
function finals(b)
{
  let ending = b;

  //finals 1, 2, 3
  if(ending != 1 && ending != 2 && ending != 3)
  {
    if(getFinal % 2 == 0)
    {
      ending = 1;
    }else
    {
      ending = Math.floor(Math.random() * (4 - 2) + 2);
    }
  }
  
  let video = document.getElementById("videoStage");
  let playVideo;

  switch(ending)
  {
    case 5:
      playVideo = "Video/Gun/connorShotDeviant.mp4"; //execute
      break;
    
    case 4:
      playVideo = "Video/Gun/convince.mp4"; //connor gets shot
      break;
    
    case 3:
      playVideo = "Video/Endings/connor_fell.mp4"; //connor leaps for emma and falls
      break;
    
    case 2:
      playVideo = "Video/Endings/daniel_falls.mp4"; //daniel falls with emma
      break;
    
    case 1:
      playVideo = "Video/Endings/sniper_shot_daniel.mp4"; //daniel gets sniped
      break;

    case 0:
      playVideo = "Video/Approaching the deviant/fifth dialogue/sacrifice_self.mp4"; //connor sacrifices himself
      break;
  }
  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);
}

function useGun()
{
  let video = document.getElementById("videoStage");
  let playVideo;
  gunUsed = true;
  
  playVideo = "Video/Approaching the deviant/fifth dialogue/useGun.mp4";

  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    rAF(updateStatus);
    //scelte: execute, intimidate
  };
}

function intimidate()
{
  let video = document.getElementById("videoStage");
  let playVideo = "Video/Approaching the deviant/bluff/give up.mp4";

  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);
  
  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    rAF(updateStatus);
  };
}

function giveUp()
{
  let video = document.getElementById("videoStage");
  let playVideo;
  bluffChoice = false;

  playVideo = "Video/Approaching the deviant/bluff/give up.mp4";

  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    rAF(updateStatus);
  };
}

function bluff()
{
  let video = document.getElementById("videoStage");
  let playVideo;
  bluffChoice = true;
  
  playVideo = "Video/bluff.mp4";

  video.src = playVideo;
  video.autoplay = true;
  video.controls = false;
  video.muted = false;
  video.height = 670; // in px
  video.width = 1000; // in px
  let box = document.getElementById('box');
  box.appendChild(video);

  video.onended = ()=>
  {
    scene++;
    //inserire funzione per visualizzare le scelte
    sceltebluff();
    rAF(updateStatus);
    //scelte: give up, move closer
  };
}


function stampascelte1(){

  document.getElementById("c3").innerHTML="Calm" ;
  document.getElementById("c2").innerHTML="Release hostage" ;
  document.getElementById("c1").innerHTML="Reassure";
  document.getElementById("c0").innerHTML="Empathize" ;

}

function stampascelte2(){
  document.getElementById("c1").innerHTML="Ignore";
  document.getElementById("c0").innerHTML="Obey" ;
 

}

function stampascelte3(){
  
  document.getElementById("c1").innerHTML="lieGun";
  document.getElementById("c0").innerHTML="truthGun" ;
}

function stampascelte4array(){
  document.getElementById("c3").innerHTML=choices[3] ;
  document.getElementById("c2").innerHTML=choices[2] ;
  document.getElementById("c1").innerHTML=choices[1] ;
  document.getElementById("c0").innerHTML=choices[0] ;

}

function stampascelte7(){
  
  document.getElementById("c1").innerHTML="Accept" ;
  document.getElementById("c0").innerHTML="Refuse" ;
  

}

function stampascelte8(){

  document.getElementById("c3").innerHTML="Last Chance" ;
  document.getElementById("c2").innerHTML="Trust" ;
  document.getElementById("c1").innerHTML="Bluff" ;
  document.getElementById("c0").innerHTML="Raional" ;

}

function stampascelte9(){

  document.getElementById("c3").innerHTML="Refuse" ;
  document.getElementById("c2").innerHTML="Compromise" ;
  document.getElementById("c1").innerHTML="Finals" ;
  document.getElementById("c0").innerHTML="Use the gun" ;
 
}

function stampascelte10(){

  document.getElementById("c3").innerHTML="Truth" ;
  document.getElementById("c2").innerHTML="Reassure" ;
  document.getElementById("c1").innerHTML="sacrifice_self" ;
  document.getElementById("c0").innerHTML="Use the gun" ;

}

function sceltebluff(){
  
  document.getElementById("c1").innerHTML="Give Up" ;
  document.getElementById("c0").innerHTML="Move closer" ;
  
}

function sceltegiveup(){
  document.getElementById("c3").innerHTML=choice[3] ;
  document.getElementById("c2").innerHTML=choice[3] ;
  document.getElementById("c1").innerHTML=choice[3] ;
  document.getElementById("c0").innerHTML=choice[3] ;
}

function puliscicelle(){
  document.getElementById("c3").innerHTML=null ;
  document.getElementById("c2").innerHTML=null ;
  document.getElementById("c1").innerHTML=null ;
  document.getElementById("c0").innerHTML=null ;
}

