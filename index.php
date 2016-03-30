<!-- BUG-FIXES -->
<!-- Fall asleep transition -->
<!-- Menu moves cat animation when collapsed -->

<!-- FINANCIAL TAB -->
<!--Todo inventory screen  -->
<!--Todo inventory mechanics -->
<!--Todo shop section -->

<!-- ANIMATIONS -->
<!--Todo rework transition to sleep animation-->
<!--Todo MouseAnimation-->

<!-- STATUS BARS -->
<!--Todo hygiene decrease while sleeping, eating and playing-->
<!-- 
var hygiene decay speed, increases according to ammount of Poo on the floor 
no poo = 0.2
1 poo = 0.4
2 poo = 0.8
3 poo = 1.6
4 poo = 3.2
-->

<!--Todo affection increase when petting -->
<!--Todo affection decrease when a bar gets negative -->
<!-- make allignment array
0 = evil
1 = bad
2 = naughty
3 = annoyed
4 = neutral
5 = sattisfied
6 = happy
7 = very happy
 -->
<!--Todo  allignment change when no communication occurs-->

<!-- FUNCTIONALITY -->

<!--Todo pet functionality-->
<!--Todo play functionality-->
<!--Todo punnish  functionality-->
<!--Todo comfort functionality-->
<!--Todo talk functionality-->
<!--Todo joke functionality -->
<!--Todo Teach functionality -->


<!doctype HTML>
<html>
<head>
	<title>Tamagotchi</title>
	<!--Styles-->
	<link rel="stylesheet" href="style/Tamagotchi.css">	
</head>
<body>
	<div id="wrapper"><!--start wrapper-->
		<header><!--Start Header-->
			<nav id="navigation">
				<ul id="actions"><!--action tab-->
					<div class="tabPH">
						<li id="socialTab"><span>SocialTab</span>
						<ul id="socialActions" class="liHidden"><!--Social-->
							<li class="lireset" id="petButton">Pet</li><!--pet-->
							<li class="lireset" id="playButton">Play</li><!--play-->
							<li class="lireset" id="punnishButton">Punnish</li><!--punnish-->
						</ul>
					</div>	
					</li>
					<div class="tabPH">
					<li id="primaryTab" ><span>PrimaryTab</span>
						<!--Primary needs of the pet-->
						<ul id="primaryActions" class="liHidden">
							<li class="lireset" id="feedButton">Feed</li><!--feed-->
							<li class="lireset" id="waterButton">Give water</li><!--give water-->
							<li class="lireset" id="cleanButton">Clean</li><!--clean-->
						</ul>
					</li>
					</div>
					<div class="tabPH">
					<li id="financialTab"><span>FinancialTab</span>
						<!--Financial actions and possibilities-->
						<ul id="financialActions" class="liHidden">
							<li class="lireset" id="InventoryButton">Open Inventory</li><!--sell from inventory-->
							<li class="lireset" id="shopButton">Go shopping</li><!--go shopping-->
						</ul>
					</li>
					</div>
				</ul>
			</nav>
		</header><!--End of header-->
<!--start of gamearea-->		
		<section id="gameArea">
			<div id="petObject">
				<img id ="catAnimation" src="images/catAnimation.png">
			</div>


<!--Statistics and skills of pet-->
			<section id="stats">
				
			</section>
<!--pet owner inventory-->
			<section id="inventory">
				
			</section>
		</section><!--End of Game Area-->

		<footer>
<!--Pet status section-->
			<section id="petProperties">
				<div class="statusBarPH">
					<div class="positiveBar">
						<div id="hungerBar" class ="negative-statusBar" >Hunger</div><!--hungry bar-->
					</div>
					<div class="positiveBar">
						<div id="thirstBar" class="negative-statusBar">Thirst</div><!--thirst bar-->
					</div>
					<div class="positiveBar">
						<div id="blatterBar" class="negative-statusBar">Blatter</div><!--blatter bar-->
					</div>
				</div>
				<div class="statusBarPH">
					<div class="negativeBar">
						<div id="hygieneBar" class="statusBar">Hygiene</div><!--hygiene bar-->
					</div>
					<div class="negativeBar">
						<div id="happinessBar" class="statusBar">Happiness</div><!--happiness bar-->
					</div>
					<div class="negativeBar">
						<div id="fatigueBar" class="statusBar">Energy</div><!--fatigue bar-->
					</div>
				</div>
				<div class="statusBarPH">
					<div class="negativeBar">
						<div id="affectionBar" class="statusBar">Affection</div><!--affection bar-->
					</div>
					<div class="negativeBar">
						<div id="allignmentBar" class="statusBar">Allignment</div><!--allignment bar-->
					</div>
					<div id="time">
						<span id="hours"></span>
						<span id="minutes"></span>
						<span id="seconds"></span>
					</div>

				</div>
			</section>
		</footer>
	</div><!--end of wrapper-->

	<!--Javascripts-->
	<script src="javascript/Tamagotchi.js"></script>

</body>
</html>