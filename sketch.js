// I after a variable name means it is a image variable
// T after a variable name means it is a tutorial variable
// B after a variable name means it is a background variable
// S after a variable name means it is a background variable

var TUTORIAL = 0.5;
var PAUSE = 0.2;
var TITLE = -1;
var PLAY = 1;
var END = 0;
var LEARN = 2;
var gameState = TITLE;
var road, roadI;
var boxp, boxI, boxGroup;
var truck, truckI;
var traffic, trafficI, trafficGroup;
var score = 0;
var lane = 2;
var title, titleI;
var start, startI;
var restart, restartI;
var gameover, gameoverI;
var tutorial, tutorialI;
var next, nextI;
var pause, pauseI;
var pauseScreen, pauseScreenI;
var aKey, aKeyI;
var dKey, dKeyI;
var akey = 0;
var dkey = 0;
var move = 0;
var diffuculty = "normal";
var easyB, easyBI;
var hardB, hardBI;
var mainMenu, mainMenuI;
var timer = 0;
var timer2 = 0;
var timer3 = 0;
var heart1, heartI;
var heart2;
var heart3;
var life = 0;
var coin, coinI, coinGroup;
var log, logI, logGroup;
var rock, rockI, rockGroup;
var test = 0;
var add = 0;
var logT = 0;
var coinT = 0;
var rockT = 0;
var learnBI1, learnBI2, learnBI3;
var learnB, learnB2, learnB3;
var cheat = 0;
var cheatType = 1;
var logH, logHGroup;
var hurtS;
var pointUpS;
var musicS;
var lane1 = 76;
var lane2 = 360;
var lane3 = 654;
var screenWidthH = width/2;
var screenHeightH = height/2;


function preload() {
  roadI = loadImage("Road Lanes.png");
  boxI = loadImage("Box.png");
  truckI = loadImage("Truck.png");
  trafficI = loadImage("Traffic Cones.png");
  titleI = loadImage("Gather The Boxes title page.png");
  startI = loadImage("normal diffucutly.png");
  restartI = loadImage("restart.png");
  gameoverI = loadImage("GaMe OvEr.png");
  nextI = loadImage("Next.png");
  tutorialI = loadImage("Tutorial.png");
  pauseI = loadImage("pause.png");
  pauseScreenI = loadImage("PauseScreen.png");
  aKeyI = loadImage("A KEY.png");
  dKeyI = loadImage("D KEY.png");
  easyBI = loadImage("easy diffucutly.png");
  hardBI = loadImage("Hard diffucutly.png");
  mainMenuI = loadImage("MainMenu.png");
  heartI = loadImage("heart.png");
  coinI = loadImage("coin.png");
  logI = loadImage("Log.png");
  rockI = loadImage("rock.png");
  learnBI1 = loadImage("coinT.png");
  learnBI2 = loadImage("logT.png");
  learnBI3 = loadImage("rockT.png");
  hurtS = loadSound("hurt.wav");
  pointUpS = loadSound("pointUp.wav");
  musicS = loadSound("music.wav");
}

function setup() {
  createCanvas(1450, 600);

  road = createSprite(screenWidthH, screenHeightH, 400, 400);
  road.addImage("roa", roadI);
  

  title = createSprite(screenWidthH, screenHeightH, 400, 400);
  title.addImage("titl", titleI);

  aKey = createSprite(94, 240, 200, 200);
  aKey.addImage("ake", aKeyI);

  dKey = createSprite(298, 240, 200, 200);
  dKey.addImage("dke", dKeyI);

  easyB = createSprite(screenWidthH, screenHeightH, 400, 400);
  easyB.addImage("eas", easyBI);
  easyB.scale = 0.75;

  hardB = createSprite(screenWidthH, 600, 400, 400);
  hardB.addImage("har", hardBI);
  hardB.scale = 0.75;

  mainMenu = createSprite(100,654, 200, 200);
  mainMenu.addImage("mai", mainMenuI);
  mainMenu.debug = true;
  mainMenu.scale = 1.3;
  mainMenu.setCollider("rectangle", 0, 10, 190, 90);

  pauseScreen = createSprite(screenWidthH, screenHeightH, 400, 400);
  pauseScreen.addImage("pause", pauseScreenI);

  start = createSprite(screenWidthH, 480, 400, 400);
  start.addImage("sta", startI);
  start.scale = 0.75

  pause = createSprite(1284, 23, 400, 400);
  pause.addImage("pau", pauseI);

  truck = createSprite(196, lane2, 400, 400);
  truck.addImage("tru", truckI);
  truck.scale = 0.75;
  truck.setCollider("rectangle", 0, 0, 450,150);
  truck.debug = false;

  next = createSprite(screenWidthH, 554, 20, 20);
  next.addImage("nex", nextI);

  tutorial = createSprite(screenWidthH, screenHeightH, 400, 400);
  tutorial.addImage("tut", tutorialI);

  restart = createSprite(screenWidthH, 303, 20, 20);
  restart.addImage("res", restartI);
  restart.scale = 4;

  gameover = createSprite(screenWidthH, screenHeightH, 400, 400);
  gameover.addImage("gam", gameoverI);
  gameover.depth = -6;
  
  heart1 = createSprite(1416,20,400,400);
  heart1.addImage("hear", heartI);
  heart1.scale = 0.75;
  
  heart2 = createSprite(1461,20,400,400);
  heart2.addImage("hear", heartI);
  heart2.scale = 0.75;
  
  heart3 = createSprite(1506,20,400,400);
  heart3.addImage("hear", heartI);
  heart3.scale = 0.75;

  learnB = createSprite(screenWidthH, screenHeightH,400,400);
  learnB.addImage("coinT", learnBI1);

  learnB2 = createSprite(screenWidthH, screenHeightH,400,400);
  learnB2.addImage("logT", learnBI2);

  learnB3 = createSprite(screenWidthH, screenHeightH,400,400);
  learnB3.addImage("rockT", learnBI3);



  boxGroup = createGroup();
  trafficGroup = createGroup();
  coinGroup = createGroup();
  logGroup = createGroup();
  rockGroup = createGroup();
  logHGroup = createGroup();
  obstacleGroup = createGroup();
  collectibleGroup = createGroup();


}

function draw() {
  background("gray");
  console.log(World.mouseY + "  mouseY");
  console.log(World.mouseX + "  mouseX");
  console.log("gameState:" + gameState);
  console.log("diffuculty:" + diffuculty);
  console.log("timer:" + timer);
  mainMenu.debug = false;

  if (gameState === TITLE) {
    if (timer < 10) {
      timer = timer + 0.25
    }
    learnB.visible = false;
    learnB2.visible = false;
    learnB3.visible = false;
    test = 0;
    add = 0;
    
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    hardB.visible = false;
    easyB.visible = false;
    start.visible = false;
    hardB.setCollider("rectangle", 10000, 1000, 1, 1);
    easyB.setCollider("rectangle", 10000, 1000, 1, 1);
    start.setCollider("rectangle", 10000, 1000, 1, 1);
    if (timer === 10) {
      hardB.setCollider("rectangle", 0, 0, 250, 120);
      easyB.setCollider("rectangle", 0, 0, 250, 120);
      start.setCollider("rectangle", 0, 0, 250, 120);
      hardB.visible = true;
      easyB.visible = true;
      start.visible = true;
    }
    aKey.visible = false;
    dKey.visible = false;
    truck.visible = false;
    title.visible = true;

    tutorial.visible = false;
    next.visible = false;
    pause.visible = false;
    pauseScreen.visible = false;
    mainMenu.visible = false;

    if (mousePressedOver(start) || mousePressedOver(easyB) || mousePressedOver(hardB)) {
      gameState = TUTORIAL;
      if (mousePressedOver(start)) {
        diffuculty = "normal";
      } else if (mousePressedOver(easyB)) {
        diffuculty = "easy";
      } else if (mousePressedOver(hardB)) {
        diffuculty = "hard";
      }
    }
    restart.visible = false;
  }

  if (gameState === TUTORIAL) {
    
    if(diffuculty === "normal"){
      life = 3;
    } else if(diffuculty === "easy"){
      life = 3;
    } else if(diffuculty === "hard"){
      life = 2;
    }
    easyB.visible = false;
    hardB.visible = false;
    title.visible = false;
    start.visible = false;
    tutorial.visible = true;
    next.visible = true;
    next.depth = 100;
    if (mousePressedOver(next)) {
      gameState = PLAY;
      timer = 0;
      cheat = 0;
      cheatType = 1;
      logT = 0;
      coinT = 0;
      rockT = 0;
      musicS.loop();
    }
  }

  if (gameState === PAUSE) {
    road.velocityY = 0;
    pauseScreen.visible = true;
    pause.visible = false;
    truck.visible = false;
    mainMenu.visible = true;
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    mainMenu.depth = 100;
    boxGroup.destroyEach();
    coinGroup.destroyEach();
    trafficGroup.destroyEach();
    logGroup.destroyEach();
    rockGroup.destroyEach();
    if (keyDown("space")) {
      gameState = PLAY;
    }
    if (mousePressedOver(mainMenu)) {
      gameState = TITLE;
      timer = 0;
      score = 0;
    }
  }


  if(gameState === LEARN){
    
    road.velocityY = 0;
    pauseScreen.visible = false;
    pause.visible = false;
    truck.visible = false;
    mainMenu.visible = false;
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    mainMenu.depth = 100;
    boxGroup.destroyEach();
    coinGroup.destroyEach();
    trafficGroup.destroyEach();
    logGroup.destroyEach();
    rockGroup.destroyEach();
    
    

    if(keyDown("space")){
      gameState = PLAY;

      if(score === 6){
        coinT = 1;
        score = 7;
      }

      if(score > 10 && score < 17){
        logT = 1;
        score = 11;
      }

      if(score > 16){
        rockT = 1;
        score = 17;
      }

    }
  }

  if (gameState === PLAY) {
    spawnTraffic();
    spawnBoxes();
    spawnCoin();
    spawnLog();
    spawnRock();
    mainMenu.visible = false;
    truck.visible = true;
    title.visible = false;
    start.visible = false;
    tutorial.visible = false;
    next.visible = false;
    pause.visible = true;
    pauseScreen.visible = false;
    truck.x = 196;
    truck.y = 319;
    timer = timer+0.25;
    timer2 = timer2+0.25;
    truck.debug = false;
    

    if(score === 6 && coinT === 0){
      gameState = LEARN;
      learnB.visible = true;
      learnB2.visible = false;
      learnB3.visible = false;
    } else if(score > 10 && logT === 0){
      gameState = LEARN;
      learnB.visible = false;
      learnB2.visible = true;
      learnB3.visible = false;
    } else if(score > 16 && rockT === 0){
      gameState = LEARN;
      learnB.visible = false;
      learnB2.visible = false;
      learnB3.visible = true;
    } else{
      learnB.visible = false;
      learnB2.visible = false;
      learnB3.visible = false;
    }

      
    



    
    
    if(life === 3){
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = true;
    } else if(life === 2){
      heart1.visible = false;
      heart2.visible = true;
      heart3.visible = true;
    } else if(life === 1){
      heart1.visible = false;
      heart2.visible = false;
      heart3.visible = true;
    } else if(life === 0){
      heart1.visible = false;
      heart2.visible = false;
      heart3.visible = false;
      gameState = END;
    }
    

    if (akey === 0) {
      aKey.visible = false;
    }

    if (dkey === 0) {
      dKey.visible = false;
    }

    //to make background infinite
    if (diffuculty === "normal") {
      road.velocityX = (-20 - (3*score / 5));
    } else if (diffuculty === "easy") {
      road.velocityX = (-8 - (3*score / 10));
    } else if (diffuculty === "hard") {
      road.velocityX = (-25 - (3*score / 2));
    }



    if (road.x < 0) {
      road.x = 1541
    }

    if (keyDown("p")) {
      gameState = PAUSE;
      boxGroup.destroyEach();
      trafficGroup.destroyEach();

    }






    if (keyDown("s") && lane < 3 && move === 0 && timer > 1) {
      lane = lane + 1;
      dKey.visible = false;
      dkey = 1;
      timer = 0;
    }

    if (keyDown("w") && lane > 1 && timer2 > 1) {
      lane = lane - 1;
      aKey.visible = false;
      akey = 1;
      timer2 = 0;
    }

    if (lane === 1) {
      truck.y = lane1;
    }

    if (lane === 2) {
      truck.y = lane2;
    }

    if (lane === 3) {
      truck.y = lane3;
    }


    // sound effects & music

    if(truck.isTouching(collectibleGroup)){
      pointUpS.play();
    }

    if(truck.isTouching(obstacleGroup)){
      hurtS.play();
    }

    
    // to prevent collision between different collectibles/obstaacles
    if (boxGroup.isTouching(trafficGroup)) {
      trafficGroup.destroyEach();
    }

    if(boxGroup.isTouching(logGroup)){
      boxGroup.destroyEach();
    }

    if(coinGroup.isTouching(logGroup)){
      coinGroup.destroyEach();
    }

    if (coinGroup.isTouching(trafficGroup)) {
      coinGroup.destroyEach();
    }

    if(rockGroup.isTouching(logGroup)){
      logGroup.destroyEach();
    }

    if(boxGroup.isTouching(coinGroup)){
      coinGroup.destroyEach();
    }

    
    if(rockGroup.isTouching(boxGroup)){
      rockGroup.destroyEach();
    }

    if(rockGroup.isTouching(coinGroup)){
      coinGroup.destroyEach();
    }

    if(rockGroup.isTouching(trafficGroup)){
      rockGroup.destroyEach();
    }

    if(logHGroup.isTouching(trafficGroup)){
      trafficGroup.destroyEach();
    }

    if(logHGroup.isTouching(rockGroup)){
      rockGroup.destroyEach();
    }


   // truck touching obstacles/collectibles 
    if(truck.isTouching(logGroup)){
      if(cheatType === 1){
        life = life+-1;
      }
      if(cheatType === 2 || cheatType === 100){ 
        life = life+0;
      }
      logGroup.destroyEach();
      logGroup.debug = false;
    }

    if (truck.isTouching(boxGroup)) {
      score = score + 1;
      boxGroup.destroyEach();

    }

    if(truck.isTouching(rockGroup)){
      if(cheatType === 1){
        life = life+-1;
        score = score-2;
      }
      if(cheatType === 2 || cheatType === 100){
        life = life+0;
        score = score;
      }
      rockGroup.destroyEach();
    }

    if(truck.isTouching(coinGroup)){
      score = score+2;
      coinGroup.destroyEach();
    }

    if (truck.isTouching(trafficGroup)) {
      if(cheatType === 2 || cheatType === 100){
        life = life+0;
      } else {
        life = life+-1;
      }
      trafficGroup.destroyEach();
      aKey.visible = false;
      dKey.visible = false;
    }


    //the cheats!!!!
    //bulldozer = 2
    // noCheat = 1
    // scoreAdd = 3
    // instantDeath = 0
    // godMode = 100
    // debug = 4
    // if cheat = 1 then that means cheat are active, 
    // while if it equals zero cheats are off

    if(keyDown("c") && cheat === 0 && timer > 2.5){
      cheat = 1;
      timer = 0;
    
  } else if(keyDown("c") && cheat === 1 && timer > 2.5){
      cheat = 0;
      timer = 0;
      cheatType = "noCheat";
  }
    timer = timer+0.25;


    if(cheat === 1){
      if(keyDown("b")){
        cheatType = 2;
      } else if(keyDown("a")){
        cheatType = 3;
      } else if(keyDown("y")){
        cheatType = 0;
      } else if(keyDown("g")){
        cheatType = 100;
      } else if(keyDown("o")){
        cheatType = 4;
      }
    }

    if(cheatType === 3 || cheatType === 100){
      timer3 = timer3+0.25;
      if(keyDown("up_arrow") && timer3 > 1){
        score = score+1;
        timer3 = 0;
      }
    }

    if(cheatType === 0){
      score = score+100;
      gameState = END;
      life = 0;
    }
   
  }
  


  if (gameState === END) {
    pause.visible = false;
    fill("black");
    textSize(50);
    text("Game Over", 60, 200);
    truck.velocityX = (12 -(3*score/2));
    road.velocityX = (-12 -(3*score/2));
    restart.visible = true;
    restart.depth = -5;
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    if (mousePressedOver(restart)) {
      gameState = TITLE;
      score = 0;
      truck.x = 196;
      timer = 0;
    }
  }


  drawSprites();

  textSize(20);
  fill("white");
  if(gameState === PLAY){
    text("Score" + ":" + score, 768, 30);
  }
  
  if(gameState === PLAY){
    if(cheatType === 2){
      fill("white");
      textSize(25);
      text("bulldozer", 40,45);
    }

    if(cheat === 1){
      fill("white");
      textSize(25);
      text("cheats active:", 40,20);
    }

    if(cheatType === 3){
      fill("white");
      textSize(25);
      text("scoreAdd", 40,45);
    }

    if(cheatType === 100){
      fill("white");
      textSize(25);
      text("godMode", 40,45);
    }

    if(cheatType === 4){
      fill("white");
      textSize(25);
      text("debug", 40,45);
    }
  }
  
  

}

function spawnTraffic() {
  if (frameCount % 100 === 0) {
    var ro = Math.round(random(1, 3));
    traffic = createSprite(1600, 0, 20, 20);
    traffic.addImage("tra", trafficI);
    traffic.scale = 1;
    if (ro === 1) {
      traffic.y = lane1;
    } else if (ro === 2) {
      traffic.y = lane2;
    } else if (ro === 3) {
      traffic.y = lane3;
    }

    if (diffuculty === "normal") {
      traffic.velocityX = (-20 - (3*score / 5));
    } else if (diffuculty === "easy") {
      traffic.velocityX = (-8 - (3*score / 8));
    } else if (diffuculty === "hard") {
      traffic.velocityX = (-25 - (3*score / 3));
    }

    if(cheatType === 4 || cheatType === 100){
      traffic.debug = true;
    } else {
      traffic.debug = false;
    }

    

    traffic.lifetime = 600;
    trafficGroup.add(traffic);
    obstacleGroup.add(traffic);

  }
}

function spawnBoxes() {
  if (frameCount % 140 === 0) {
    var fl = Math.round(random(1, 3));
    boxp = createSprite(1540, 0, 20, 20);
    boxp.addImage("box", boxI);
    boxp.setCollider("rectangle", 0,0,80,100);
    boxp.debug = true;

    if(diffuculty === "normal") {
      boxp.velocityX = (-20 - (3*score / 5));
    } else if (diffuculty === "easy") {
      boxp.velocityX = (-8 - (3*score / 8));
    } else if (diffuculty === "hard") {
      boxp.velocityX = (-25 - (3*score / 3));
    }

    boxp.lifetime = 600;
    
    if(cheatType === 4 || cheatType === 100){
      boxp.debug = true;
    } else {
      boxp.debug = false;
    }

    boxGroup.add(boxp);
    collectibleGroup.add(boxp);
    if (fl === 1) {
      boxp.y = lane1;
    } else if (fl === 2) {
      boxp.y = lane2;
    } else if (fl === 3) {
      boxp.y = lane3;
    }
  }
}

function spawnCoin() {
    if (frameCount % 90 === 0 && score > 6) {
      var vl = Math.round(random(1, 3));
      coin = createSprite(1540, 0, 20, 20);
      coin.addImage("coi", coinI);
      coin.scale = 0.25;
      coin.setCollider("rectangle", 0, 0, 320, 200);
      coin.depth = truck.depth-1;
      coin.debug = true;
  
      if (diffuculty === "normal") {
        coin.velocityX = (-20 - (3*score / 5));
      } else if (diffuculty === "easy") {
        coin.velocityX = (-8 - (3*score / 8));
      } else if (diffuculty === "hard") {
        coin.velocityX = (-25 - (3*score / 3));
      }
  
      coin.lifetime = 100;
      
      if(cheatType === 4 || cheatType === 100){
        coin.debug = true;
      } else {
        coin.debug = false;
      }

      coinGroup.add(coin);
      collectibleGroup.add(coin);
      if (vl === 1) {
        coin.y = lane1;
      } else if (vl === 2) {
        coin.y = lane2;
      } else if (vl === 3) {
        coin.y = lane3;
      }
    }
  }

  function spawnLog(){
    if (frameCount % 180 === 0 && score > 10) {
      var rl = Math.round(random(1, 4));
      log = createSprite(1540, 0, 20, 20);
      log.addImage("log", logI);
      log.setCollider("rectangle", 0, 0, 50, 450);
      log.depth = truck.depth-1;
      log.scale = 1.5;
      logH = createSprite(1540, 0, 10, 10);
      logH.setCollider("rectangle", 0, 0, 50, 1500);
      logH.visible = false;
      logH.depth = log.depth-1;
      logH.scale = 1.5;
  
  
      if (diffuculty === "normal") {
        log.velocityX = (-20 - (3*score / 5));
        logH.velocityX = (-20 - (3*score / 5));
      } else if (diffuculty === "easy") {
        log.velocityX = (-8 - (3*score / 8));
        logH.velocityX = (-8 - (3*score / 8));
      } else if (diffuculty === "hard") {
        log.velocityX = (-25 - (3*score / 3));
        logH.velocityX = (-25 - (3*score / 3));
      }
  
      log.lifetime = 100;
      
      if(cheatType === 4 || cheatType === 100){
        log.debug = true;
      } else {
        log.debug = false;
      }
  
      logGroup.add(log);
      obstacleGroup.add(log);
      if (rl === 1) {
        log.y = 270;
        logH.y = 270;
      } else if (rl === 2) {
        log.y = 725;
        logH.y = 725;
      } else if (rl === 3) {
        log.y = 270;
        logH.y = 270;
      } else if (rl === 4) {
        log.y = 725;
        logH.y = 725;
      }
      logH.lifetime = 100;
      logHGroup.add(logH);
    }
  }

  function spawnRock(){
    if (frameCount % 240 === 0 && score > 16) {
      var dl = Math.round(random(1, 3));
      rock = createSprite(1540, 0, 20, 20);
      rock.addImage("roc", rockI);
      rock.depth = truck.depth-1;
      rock.scale = 1.25;
  
      if (diffuculty === "normal") {
        rock.velocityX = (-20 - (3*score / 5));
      } else if (diffuculty === "easy") {
        rock.velocityX = (-8 - (3*score / 8));
      } else if (diffuculty === "hard") {
        rock.velocityX = (-25 - (3*score / 3));
      }
  
      rock.lifetime = 100;
      
      if(cheatType === 4 || cheatType === 100){
        rock.debug = true;
      } else {
        rock.debug = false;
      }

      rockGroup.add(rock);
      obstacleGroup.add(rock);
      if (dl === 1) {
        rock.y = lane1;
      } else if (dl === 2) {
        rock.y = lane2;
      } else if (dl === 3) {
        rock.y = lane3;
      } 
    }
  }

  function pause(){
    boxGroup.destroyEach();
    coinGroup.destroyEach();
    trafficGroup.destroyEach();
    logGroup.destroyEach();
    rockGroup.destroyEach();
  }