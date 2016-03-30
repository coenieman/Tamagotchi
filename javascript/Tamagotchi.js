//preparing the menu
function prepareMenu(){
	//social Menu

		//simpel dropdown menu
	var socialMenuTab = document.getElementById("socialTab");
	var socialHiddenContent = socialMenuTab.getElementsByClassName("liHidden")
	socialMenuTab.onclick = function(){
		if (socialHiddenContent[0].style.display == "none"){
			socialHiddenContent[0].style.display = "block";
		}else {
			socialHiddenContent[0].style.display = "none";
		}
	};

	//Primary Menu
	var primaryMenuTab = document.getElementById("primaryTab");
	var primaryHiddenContent = primaryMenuTab.getElementsByClassName("liHidden")
	primaryMenuTab.onclick = function(){
		if (primaryHiddenContent[0].style.display == "none"){
			primaryHiddenContent[0].style.display = "block";
		}else {
			primaryHiddenContent[0].style.display = "none";
		}
	};
	//Financial Menu
	var financialMenuTab = document.getElementById("financialTab");
	var financialHiddenContent = financialMenuTab.getElementsByClassName("liHidden")
	financialMenuTab.onclick = function(){
		if (financialHiddenContent[0].style.display == "none"){
			financialHiddenContent[0].style.display = "block";
		}else {
			financialHiddenContent[0].style.display = "none";
		}
	};

//Tab Buttons
	//Primary needs menu buttons
var feedButton = document.getElementById('feedButton'),
	waterButton = document.getElementById('waterButton');

	cleanButton.onclick = function(){
	catAction = "clean";
	console.log(catAction);
};
	feedButton.onclick = function(){
	hungerValue = hungerValue - 30;
	blatterValue= blatterValue + 10;
	hygieneValue= hygieneValue - 5;
	fatigueValue= fatigueValue + 10;
	// set hunger range
		if (hungerValue >100){
			hungerValue = 100;
		}
};
	waterButton.onclick = function(){
	catAction = "water";
	thirstValue = thirstValue - 30;
	blatterValue = blatterValue + 5;
	// set thirst range
		if(thirstValue < 0){
			thirstvalue = 1
		}
	catAction = "empty";
};

}
//catObject details
var 	catContainer = document.getElementById("petObject"),
		catAnimation = document.getElementById("catAnimation"),
	 	catPosX = 50,
		catPosY = 75;

//ANIMATE THE CAT
function catclean(){
	var arrayCursor	 	= 0,
		duration 		= 0,
		cleaningSpeed	= 50,
		cleanInterval,
		cleanArray 		= [
			{ marginTop : -221 ,marginLeft : -535  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -608  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -685  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -760  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -847  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -923  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -1024  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -1100  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -1178  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -1252  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -1324  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -608  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -1457  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -1534  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -1614  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -1688  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -1768  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -685  , 	duration : 2 },
			{ marginTop : -225 ,marginLeft : -608  , 	duration : 2 },
		];
		catAnimation.style.marginTop = cleanArray[0].marginTop +'px';
		catAnimation.style.marginLeft = cleanArray[0].marginLeft + 'px';


		cleanInterval = setInterval(function(){
			duration++;

			if(duration > cleanArray[arrayCursor].duration){
				duration = 0;
				arrayCursor++;
				hygieneValue = hygieneValue + 0.2;
				catAnimation.style.marginTop = cleanArray[arrayCursor].marginTop + 'px';
				catAnimation.style.marginLeft = cleanArray[arrayCursor].marginLeft + 'px';
				}

			if(arrayCursor === cleanArray.length-1){
				clearInterval(cleanInterval);
				}
			}
		, cleaningSpeed);
	}

function catWalkLeft (){
	var duration = 0,
		arrayCursor = 0,
		walkingSpeed = 70,
		walkLeftInterval,
		walkLeftArray = [
			{ marginTop : -621 ,marginLeft :  -0  	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -86  	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -176 	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -272 	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -360 	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -452 	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -537 	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -624 	, duration : 2 },
			{ marginTop : -621 ,marginLeft :  -0  	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -86  	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -176 	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -272 	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -360 	, duration : 2 },
			{ marginTop : -621 ,marginLeft : -452 	, duration : 1 },
		];
		
		catAnimation.style.marginTop = walkLeftArray[0].marginTop +'px';
		catAnimation.style.marginLeft = walkLeftArray[0].marginLeft + 'px';

		walkLeftInterval = setInterval(function(){
		duration++;
		// catContainer move to the right
		catPosX = catPosX - 0.5;
		catContainer.style.left = catPosX +"%";
		
		if (duration > walkLeftArray[arrayCursor].duration) {
			duration = 0;
			arrayCursor++;
		catAnimation.style.marginTop = walkLeftArray[arrayCursor].marginTop +'px';
		catAnimation.style.marginLeft = walkLeftArray[arrayCursor].marginLeft +'px';
			}
		if (arrayCursor === walkLeftArray.length-1){
			clearInterval(walkLeftInterval);
			}
		}, walkingSpeed);
	}

function catWalkRight (){
	var duration = 0,
		arrayCursor = 0,
		walkingSpeed = 70,
		walkRightInterval,
		walkRightArray = [
			{ marginTop : -621 ,marginLeft :  -1358 , duration : 2 },
			{ marginTop : -621 ,marginLeft :  -1261 , duration : 2 },
			{ marginTop : -621 ,marginLeft :  -1174 , duration : 2 },
			{ marginTop : -621 ,marginLeft :  -1084	, duration : 2 },
			{ marginTop : -621 ,marginLeft :  -994 	, duration : 2 },
			{ marginTop : -621 ,marginLeft :  -812 	, duration : 2 },
			{ marginTop : -621 ,marginLeft :  -726 	, duration : 2 },
			{ marginTop : -621 ,marginLeft :  -1358 , duration : 2 },
			{ marginTop : -621 ,marginLeft :  -1261 , duration : 2 },
			{ marginTop : -621 ,marginLeft :  -1176 , duration : 2 },
			{ marginTop : -621 ,marginLeft :  -1084	, duration : 2 },
			{ marginTop : -621 ,marginLeft :  -996 	, duration : 2 },
			{ marginTop : -621 ,marginLeft :  -812 	, duration : 2 },

		];
		
		catAnimation.style.marginTop = walkRightArray[0].marginTop +'px';
		catAnimation.style.marginLeft = walkRightArray[0].marginLeft + 'px';

		walkRightInterval = setInterval(function(){
		duration++;
		//catContainer move to the right
		catPosX = catPosX + 0.5;
		catContainer.style.left = catPosX +"%";
		
		if (duration > walkRightArray[arrayCursor].duration) {
			duration = 0;
			arrayCursor++;
			catAnimation.style.marginTop = walkRightArray[arrayCursor].marginTop +'px';
			catAnimation.style.marginLeft = walkRightArray[arrayCursor].marginLeft +'px';
			}
		if (arrayCursor === walkRightArray.length-1){
			clearInterval(walkRightInterval);
			}
		}, walkingSpeed);
	}

function catSleep (){
	clearInterval(behaviourInterval);
	var duration = 0,
		arrayCursor = 0,
		SleepSpeed = 200,
		catSleepInterval,
		catSleepArray = [
			{ marginTop : -521 ,marginLeft :  -689 	, duration : 10 },
			{ marginTop : -521 ,marginLeft :  -764 	, duration : 10 },
			{ marginTop : -521 ,marginLeft :  -836 	, duration : 2 },
			{ marginTop : -521 ,marginLeft :  -909 	, duration : 2 },
			{ marginTop : -521 ,marginLeft :  -977	, duration : 2 },

		];
		
		catAnimation.style.marginTop = catSleepArray[0].marginTop +'px';
		catAnimation.style.marginLeft = catSleepArray[0].marginLeft + 'px';
		catSleepInterval = setInterval(function(){
		duration++;
		hygieneValue = hygieneValue - 0.2;
		console.log(hygieneValue);
		

		if (duration > catSleepArray[arrayCursor].duration) {
			duration = 0;
			arrayCursor++;
			fatigueValue = fatigueValue + 4;
			catAnimation.style.marginTop = catSleepArray[arrayCursor].marginTop +'px';
			catAnimation.style.marginLeft = catSleepArray[arrayCursor].marginLeft +'px';
			if (arrayCursor>=catSleepArray.length-1){
				arrayCursor = 2;
			}

			}if (fatigueValue >= 100){
				fatigueValue = 100;
				clearInterval(catSleepInterval);
				behaviourInterval = setInterval(catBehaviour,2750);
			}
		}, SleepSpeed);				
	}

var catAction="empty",
	randomCatAction;

function catBehaviour(){
	if (catAction == "empty"){
		randomCatAction = Math.floor((Math.random() * 3) + 1); 
		console.log(randomCatAction);

		switch(randomCatAction){
			case 1:
			if(catPosX <= 15){
				catWalkRight();
			}else {
				catWalkLeft()}
			break;
			case 2:
			if(catPosX >= 80){
				catWalkLeft();
			}else {
				catWalkRight()}
			break;
			case 3:
			catclean();
			break;
		if (catAction != "empty"){
				switch(catAction){
				case "clean":
				catClean();
				break;
				case "water":
				console.log("water");
				break;
				case "feed":
				console.log("feed");
				break;
			}
		}
	}
}
}

// Statusbar Decay


	var hungerBar = document.getElementById('hungerBar'),
		fatigueBar = document.getElementById('fatigueBar'),
		thirstBar = document.getElementById('thirstBar'),
		blatterBar = document.getElementById('blatterBar'),
		hygieneBar = document.getElementById('hygieneBar')
		hungerValue = 0,
		fatigueValue = 100,
		blatterValue = 0,
		thirstValue = 0,
		hygieneValue = 100;

 // Hungerbar Decay
	function hungerBarDecay(){
		hungerBar.style.width = hungerValue + "%";
		hungerValue++;
		if (hungerValue <= 0){
			hungerValue = 0;
		};
	}

 // ThirstBar Decay
	function thirstBarDecay(){
		thirstBar.style.width = thirstValue + "%";
		thirstValue = thirstValue + 0.5;
		if (thirstValue >= 100){
			thirstValue = 100;
		};
		if(thirstValue <= 0){
			thirstValue = 0
		};
	}
 // fatigueBar decay 
	function fatigueBarDecay() {
		fatigueBar.style.width = fatigueValue + "%";
		fatigueValue = fatigueValue - 5;
			if(fatigueValue >= 100){
				fatigueValue = 100;
			};
			if(fatigueValue == 0){
				clearInterval(behaviourInterval);
				catSleep();
			};
		}
//poo Amount reactions : 
	var pooAmount = 1,
		hygieneDecay = (pooAmount * 0.2);


 // blatterBar Reactions
		function blatterBarReactions(){
		blatterBar.style.width = blatterValue + "%";
		blatterValue = blatterValue + 0.2;
			if (blatterValue >= 100){
				blatterValue = 0;
				pooAmount = pooAmount + 1;
			}
		}

 // blatterBar Reactions
		function hygieneBarReactions(){
		hygieneBar.style.width = hygieneValue + "%";
		hygieneValue = hygieneValue0 - hygieneDecay;
			if (hygieneValue <= 0){
				hygieneValue = 20;
			};
			if(hygieneValue >=100){
				hygieneValue=99;
			}
		}


// init func the statusbar decays
	function statusBarDecay(){
		fatigueBarDecay();
		hungerBarDecay();
		thirstBarDecay();
		blatterBarReactions();
		hygieneBarReactions();
}




window.onload = function() {
	prepareMenu();
	setInterval(statusBarDecay,2000);
	behaviourInterval = setInterval(catBehaviour,2750);


};

// if blatter is full >> commit (("make mess function"))
//