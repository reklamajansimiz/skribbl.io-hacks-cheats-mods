// ==UserScript==
// @name         Skribbl.io AUTO GUESS - Skribblio Hacks - Best Skribbl Cheat 2019 to 2020
// @description  Skribblio Mods Features: Auto Guess, Draw Bot, Words List, Save Image, FPS, Adblock
// @namespace    iomods.org
// @author       iomods.org
// @version      2.0
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/skribblio.user.js
// @downloadURL  https://iomods.org/mods/skribblio.user.js
// @match        *://skribbl.io/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// @supportURL https://github.com/rosslh/skribbler/issues
// @connect skribbler.herokuapp.com
// @grant GM_xmlhttpRequest
// @grant GM.xmlHttpRequest
// @homepageURL https://github.com/rosslh/skribbler
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

setTimeout(function() {
//tanitim belgeseli
var colorize,colorizer,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "KRUNKERIOPLAY.COM", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "BUILDROYALEIO.ORG", "WORMAX.ORG", "WORMAX2IO.COM", "WORMATE-IO.NET", "IOGAMESLIST.ORG", "IO-OYUNLAR.COM", "IOMODS.ORG"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET" || value == "KRUNKERIOPLAY.COM") { colorize = true; } else { colorize = false; }
if(value == "SLITHERE.COM" || value == "IOMODS.ORG") { colorizer = true; } else { colorizer = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "WORMATE-IO.NET") { value2="WORMATEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
ministyler = "color:white;font-size:12px;padding:3px;text-decoration:none;";
if(colorize == true){ministyler = "color:yellow;font-size:12px;padding:3px;text-decoration:none;";}
if(colorizer == true){ministyler = "color:darkorange;font-size:12px;padding:3px;text-decoration:none;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+' <font color="#555555">-</font></a>';
}

	//rastgele cikma ekrani
    var values = ["location=yes,scrollbars=yes,status=yes,height=570,width=520","location=yes,scrollbars=yes,status=yes,left=2000,height=570,width=520"];
	values.sort(function(a, b){return 0.5 - Math.random()});

    //LINKLER
    var links = ["https://bit.ly/2EgRmIx","https://bit.ly/2Okhczb","https://bit.ly/2E0JJHx","https://bit.ly/2Z3XxaI","https://bit.ly/30tvJxW","https://bit.ly/2DKqVst","https://bit.ly/2pXBkie","https://bit.ly/2JsS2ii","https://bit.ly/33eXPh8","https://bit.ly/2M8aeO6","https://bit.ly/33oe1gc","https://bit.ly/2WLZ5FK","https://bit.ly/31d3t20","https://bit.ly/2nHLsLu","https://bit.ly/2VFInIo","https://bit.ly/2M5bHVu","https://bit.ly/31bSgyJ", "https://bit.ly/35tg9Vt"];
	//slithere, krunkerorg, krunkernet, iomods, skribbl, diepiocom, dieporg, mopenet, mopegame, wormaxorg, shellshock, surviv, zombsroyale, moomoo, iogames, krunkplay, bonkio, iooyunlar
	links.sort(function(a, b){return 0.5 - Math.random()});

    //ozellikler
    var fts = ["Auto Guess","Auto Draw","Draw Bot","Color Mod","Guess Bot","Anti Lag","Anti Ads","Tool Mod","Words List","Show Players","Save Image"];
	fts.sort(function(a, b){return 0.5 - Math.random()});

	//play butonu
	    let itv = setInterval( () => {
        let btn = document.createElement("button");
        btn.innerHTML = "Enter Game";
        btn.style.display = "inline-block";
        btn.style.width = "700px";
        btn.id = "byebtn";
        btn.style.height = "300px";
        btn.style.position =  "absolute";
        btn.style.top = "30%";
        btn.style.opacity = 0;
        btn.style.left = "25%";
        document.body.appendChild(btn);
        clearInterval(itv);
    }, 300);
    document.addEventListener("click", (e) => {
        if (e.target.id == "byebtn"){
            window.open(""+links[13]+"", null, ``+values[0]+``);
            byebtn.style.display = "none";
        }
    });

//genel isimlendirme ve ayarlar
 this.st = {
     f1: "Show FPS",
     f2: "Zoom In/Out",
     f3: "Rainbow BG",
     f4: "Change BG",
     string: "<a style=\"padding-right: 4px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 4px;\"></a>",
     bp: "padding-left: 2px;",
	 os: "font-weight:bold;color:black;font-size:14px;text-decoration:none;",
     os2: "color:black;font-size:11px;text-decoration:none;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:25px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 	 imagelist: '<a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg" width="160px" height="40px"></a><a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg" width="160px" height="40px"></a></br>'
 };

//degisenkisimlar
$('#formLogin').prepend('<div style="'+this.st.fpsstyle+'" id="fps" class="fps"></div></br>');
$('.tooltip-wrapper').prepend('<div style="'+this.st.fpsstyle+'" id="fps2" class="fps2"></div>');
$('#boxChatInput').append('<div style="'+this.st.formstyle+'"><div class="option1"></div></div>');
$('.containerFreespace').html('<div class="list1"></div>');
$('.loginPanelContent').append('<div style="'+this.st.formstyle+'"><div class="option1"></div></div>');
//general
$('.option1').html('<a style="'+this.st.os+'" href="'+links[0]+'" target="blank">'+this.st.f1+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\''+links[0]+'\', \'_blank\', \''+values[0]+'\');" checked></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[1]+'" target="blank">'+fts[0]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[1]+'\', \'_blank\', \''+values[1]+'\');"><span class=\'slider\'></span></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option2').html('<a style="'+this.st.os+'" href="'+links[2]+'" target="blank">'+fts[1]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[2]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[3]+'" target="blank">'+fts[2]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[3]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option3"></div>');
$('.option3').html('<a style="'+this.st.os+'" href="'+links[4]+'" target="blank">'+fts[3]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[4]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[5]+'" target="blank">'+fts[4]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[5]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option4"></div>');
$('.option4').html('<a style="'+this.st.os+'" href="'+links[6]+'" target="blank">'+fts[5]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[6]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[7]+'" target="blank">'+fts[6]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[7]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.st.os+'" href="'+links[8]+'" target="blank">'+fts[7]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[8]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[9]+'" target="blank">'+fts[8]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[9]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.st.os+'" href="'+links[10]+'" target="blank">'+fts[9]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[10]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[11]+'" target="blank">'+fts[10]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[11]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option7"></div>');
$('.option7').html('<a style="'+this.st.os+'" href="'+links[12]+'" target="blank">'+this.st.f3+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\''+links[12]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[13]+'" target="blank">'+this.st.f4+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\''+links[13]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option8"></div>');
$('.option7').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').on('change', '.bgcont', function() { changebackground(); });
$('.option8').html('<a style="'+this.st.os+'" href="'+links[14]+'" target="blank">'+this.st.f2+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\''+links[14]+'\', \'_blank\', \''+values[0]+'\');"> <a style="'+this.st.os2+'" href="'+links[14]+'" target="blank">(Min: 70-Max: 140)</a>');
$('.option8').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.st.liststyler+'">'+text+'</div>'+this.st.imagelist+'');
    }, 0);

//fps counter
var before,now,fps
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
	document.getElementById('fps2').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  var x2 = document.getElementById("fps2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
   if (x2.style.display === "none") {
    x2.style.display = "block";
  } else {
    x2.style.display = "none";
  }
}

//background kismi degisir
function activateautoguess() {
        if (admin) {
            getLoginDetails();
        }
        else {
            fetchWords("", "");
        }
}

function changebackground() {
    var changecolor =  $('.bgcont').val();
	    var rgbaC2 = 'rgba(' + parseInt(changecolor.slice(-6, -4), 16) + ',' + parseInt(changecolor.slice(-4, -2), 16) + ',' + parseInt(changecolor.slice(-2), 16) + ',0.35)';
			$('body').css('background',rgbaC2);
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["url(https://skribbl.io/res/background.png)"];
    }
      setInterval(function() {
                 var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
                 var selectedcolor = colorsrain[bodybgarrayno];
			var rgbaCol = 'rgba(' + parseInt(selectedcolor.slice(-6, -4), 16) + ',' + parseInt(selectedcolor.slice(-4, -2), 16) + ',' + parseInt(selectedcolor.slice(-2), 16) + ',0.35)';
                $("body").css("background",rgbaCol);
      }, 3000);
}

//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}



(function() {
    'use strict';

if (localStorage.getItem('wordlist') !== null) {
  window.alert('Hello from n0thing! I am the developer of Skribbl.io Helper, and I\'ve just updated the script from 0.12 to 0.20.\nThis new update allows for multi-language support, but your current WORDLIST will be affected!\nPlease transfer your current wordlist to wordlist[Lang] so Skribbl.io helper can use your current wordlist.\nSee this this forum (greasyfork.org/en/forum/discussion/48865/) for more information and how to transfer!\n\n This popup will stop appearing once the transfer is complete.');
}

//create wordlist name, check if wordlist localstorage exists upon joining game
var wordlist; //declare global scope wordlist var
document.querySelector('#formLogin > button').onclick = function(){
wordlist = 'wordlist' + document.querySelector('#loginLanguage').value;
if (localStorage.getItem(wordlist) === null) {
localStorage.setItem(wordlist,'""');
}
};

var wordhint;
var wordRGX;
var i;

//create message element
var messageelement = document.createElement('p');
messageelement.setAttribute('style', 'display: none');
messageelement.setAttribute('id','botChat');
var c = document.createElement('span');
c.setAttribute('id','hint');
messageelement.appendChild(c);
document.getElementById('containerSidebar').insertBefore(messageelement, document.getElementById('containerSidebar').childNodes[0]); //insert bot chat

document.getElementById('containerFreespace').setAttribute('style','display: none');

var css = document.createElement('style');
css.innerHTML = '#botChat{ border-radius: 2px; background: rgb(238, 238, 238); width:inherit-5px; overflow-wrap: break-word; position:absolute;right:0;top:3px;left:3px; color: rgb(206, 79, 10);}';
document.body.appendChild(css);

document.getElementById('inputChat').setAttribute('placeholder', 'Press ALT to open matching words');  // input wordhint into chat

document.getElementsByTagName("body")[0].onkeyup = function() {
            if (parseInt(event.keyCode) == 18 ){
							chatbot();
						}};

//mutationObserver > trigger wordCapture
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var element = document.querySelector('#overlay > div > div.text');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type == 'childList') {
      if (document.querySelector('#overlay > div > div.text').textContent.startsWith("Choose a word")){wordchoiceCapture();}; //trigger wordCatupre() when turn ends
      if (document.querySelector('#overlay > div > div.text').textContent.startsWith("The word was")){wordCapture();};
    }
  });
});
observer.observe(element, {
  childList: true
});

//capture word from skribbl.io after round
function wordCapture() {
 var word = document.querySelector('#overlay > div > div.text').textContent.slice(14);
 if (localStorage.getItem(wordlist).search(word) === -1){
 	if (word.endsWith('word!') === false){
localStorage.setItem(wordlist,localStorage.getItem(wordlist) + ',"' + word + '"');  //updates localstorage
}
 }
}
function wordchoiceCapture() { //Is called twice by mutation observer
  var wordchoicelist = [];
  for (i = 0; i < document.getElementsByClassName("word").length; i++){
     wordchoicelist.push(document.getElementsByClassName("word")[i].textContent); //collects words from word options when it's the player's turn to draw.
  }; // somehow creates undefined,"word1","word2","word3"
  console.log(wordchoicelist)
  for (i = 0; i < wordchoicelist.length; i++){
    if (localStorage.getItem(wordlist).search(wordchoicelist[i]) === -1){
      localStorage.setItem(wordlist,localStorage.getItem(wordlist) + ',"' + wordchoicelist[i] + '"');
  }
}
}

function chatbot(){
  var wordRGX = document.getElementById('currentWord').textContent;

while (wordRGX.charAt(0) === '_' || wordRGX.charAt(wordRGX.length-1) === '_'){
if (wordRGX.charAt(0) === '_'){
      wordRGX = wordRGX.replace('_','[^ ]');
    } else if(wordRGX.charAt(wordRGX.length-1) === '_'){
      wordRGX = wordRGX.replace(/_$/,'[^ ]');
    }
  }
  wordRGX = wordRGX.replace(/_/g,'[^ ]');
  wordRGX = '"'.concat(wordRGX,'"');
  wordRGX = new RegExp(wordRGX, 'g');

	var wordhint = localStorage.getItem(wordlist).match(wordRGX).filter(function(f){return !f.includes(',');}).sort().toString().replace(/"/g,'').replace(/,/g,', '); // clean up result for bot chat

if (document.getElementById('botChat').attributes[0].value.search('display: none') != -1){//if hidden
document.getElementById('hint').innerHTML = wordhint;
document.getElementById('botChat').setAttribute('style','display:');
} else {document.getElementById('botChat').setAttribute('style','display: none');}

document.getElementById('boxMessages').scrollTop = document.getElementById('boxMessages').scrollHeight; //scrollto bottom of chat
}
})();

var check = false;

var imgButton = document.createElement('button');
imgButton.id = 'imgButton';
imgButton.innerHTML = 'Show';

var refPicture = document.createElement('img');
refPicture.id = 'refPicture';
refPicture.style.width = '200px';
refPicture.style.height = '100px';
refPicture.style.top = '300px';
refPicture.style.position = 'fixed';
refPicture.style.display = 'none';

document.getElementById('containerChat').appendChild(refPicture);
document.getElementsByClassName('containerToolbar')[0].appendChild(imgButton);

document.getElementsByClassName('containerToolbar')[0].addEventListener('click', function(ele){
	if (ele.target.id == 'imgButton') {

    refPicture.setAttribute('src',imageDisplay());

    const endGame = setInterval(function(){
 			if(document.getElementById('overlay').style.display !== 'none') {
  			clearInterval(endGame);
    		refPicture.style.display = 'none';
        ele.target.innerHTML = 'Show';
  		}
  	},500);

    if (ele.target.innerHTML == 'Show') {
    	refPicture.style.display = '';
      ele.target.innerHTML = 'Hide';
    } else {
    	refPicture.style.display = 'none';
      ele.target.innerHTML = 'Show';
    }
  }
});

function imageDisplay(){
	const word = document.getElementById('currentWord').innerHTML;
	var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', "https://api.qwant.com/api/search/images?count=1&offset=0&q=" + word + " drawing",false);
  xmlHttp.send();
  var result = JSON.parse(xmlHttp.responseText);
  if (result.status == 'error') {
  	alert('An Error Occured While Getting Image');
  } else {
  	result = result.data.result.items[0].media;
  	return result;
  }
}

setInterval(function(){
  const word = document.getElementsByClassName('word');
	if(document.getElementById('overlay').style.display !== 'none' && word.length > 1 && !word[2].getAttribute('title')) {
    check = true;
  	word[0].setAttribute('title',wikiWord(word[0].innerHTML));
    word[1].setAttribute('title',wikiWord(word[1].innerHTML));
    word[2].setAttribute('title',wikiWord(word[2].innerHTML));
  }
},1000);

function wikiWord(word) {
  const xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "POST", 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&list=search&srsearch=' + word, false);
    xmlHttp.send(null);
    var result = xmlHttp.responseText;
		if (result.startsWith('Missing required request header')) {
    	xmlHttp.open( "POST", 'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&list=search&srsearch=' + word, false);
      xmlHttp.send(null);
  	  var result = xmlHttp.responseText;
      return JSON.parse(result).query.search[0].snippet.replace(/<(.*?)\>/g,'').replace(/\&(.*?)\;/g,'');
    } else {
    	return JSON.parse(result).query.search[0].snippet.replace(/<(.*?)\>/g,'').replace(/\&(.*?)\;/g,'');
    }
}


var canvas = document.createElement('canvas');

var mousePosition = {
  x: 0,
  y: 0
};

var piePosition = {
  x: 0,
  y: 0
};

var pie = false;
var selectedColor = 0;
var lastColor = 0;
var selectedAngle = 0;
var colorCount = document.getElementsByClassName("colorItem").length;
var colorTable = [0, 1, 12, 11, 21, 13, 10, 14, 2, 3, 15, 4, 5, 16, 18, 17, 7, 6, 19, 8, 20, 9];

canvas.id = "PieMenu";
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";
canvas.style.backgroundColor = "transparent";

canvas.style.zIndex = 8;
canvas.style.left = 0;
canvas.style.top = 0;
canvas.style.pointerEvents = "none";

pieAngle = 360 / (colorCount);

PieMenu = document.getElementById("PieMenu");

var ctx = canvas.getContext("2d");
var textBox;
var checkbox = document.createElement('input');
var muteArray = {};


function setupImageButton() {
  let btnGetImage = document.createElement('a');
  let buttonText = document.createTextNode("Save image");
  btnGetImage.appendChild(buttonText);
  btnGetImage.style.fontSize = "12px";
  btnGetImage.style.cursor = "pointer";
  btnGetImage.style.display = "block";
  btnGetImage.style.padding = "10px";
  btnGetImage.style.borderRadius = "2px";
  btnGetImage.style.fontWeight = "bold";
  btnGetImage.style.background = "#5cb85c";
  btnGetImage.style.color = "white";
  btnGetImage.style.textAlign = "center";
  btnGetImage.style.textDecoration = "none";
  btnGetImage.style.marginTop = "5px";
  document.getElementsByClassName("tooltip-wrapper")[0].appendChild(btnGetImage);
  btnGetImage.addEventListener('click', function() {
    getImageFunction(btnGetImage);
  }, false);
  return btnGetImage;
};

var text = document.getElementById("overlay").getElementsByClassName("content")[0].getElementsByClassName("text")[0];
text.addEventListener('DOMSubtreeModified', function() {
  if (checkbox.checked && text.textContent.includes("The word was: ")) {
    textBox.value = "skribbl-" + text.textContent.substring(text.textContent.indexOf(":") + 2);
    getImageButton.click();
  };
}, false);


PlayerList = document.getElementById("containerGamePlayers");
Messages = document.getElementById("boxMessages");

PlayerList.addEventListener('DOMSubtreeModified', function() {
  muteArray = {};
  for (let i = 0; i < PlayerList.childNodes.length; i++) {
    if (PlayerList.childNodes[i].getElementsByClassName("mute")[0]) {
      if (PlayerList.childNodes[i].getElementsByClassName("mute")[0].checked) {
        muteArray[i] = PlayerList.childNodes[i].getElementsByClassName("info")[0].getElementsByClassName("name")[0].textContent;
      };
    } else {

      let checkbox = document.createElement('input');
      checkbox.className = "mute";
      checkbox.type = "checkbox";
      checkbox.style.width = "30px";
      checkbox.style.height = "30px";
      checkbox.addEventListener('change', function() {
        let name = this.parentElement.getElementsByClassName("info")[0].getElementsByClassName("name")[0];
        flagMessage = this.parentElement.getElementsByClassName("message")[0]
        if (this.checked) {

          for (i = 0; i < Messages.childNodes.length; i++) {
            message = Messages.childNodes[i]
            if (message.getElementsByTagName("b")[0]) {
              if (message.getElementsByTagName("b")[0].textContent.indexOf(name.textContent) !== -1) {
                message.parentElement.removeChild(message);
              };
            };
          };
          name.style.visibility = "hidden";
          flagMessage.style.visibility = "hidden";
        } else {
          name.style.visibility = "visible";
          flagMessage.style.visibility = "visible";
        };
      });
      PlayerList.childNodes[i].insertBefore(checkbox, PlayerList.childNodes[i].getElementsByClassName("message")[0]);
    };
  };
}, false);

Messages.addEventListener('DOMSubtreeModified', function() {
  let message = Messages.childNodes[Messages.childNodes.length - 1]
  for (name in muteArray) {
    if (message.getElementsByTagName("b")[0]) {
      console.log(message.getElementsByTagName("b")[0].textContent + "  " + name);
      if (message.getElementsByTagName("b")[0].textContent.indexOf(muteArray[name]) !== -1) {
        message.parentElement.removeChild(message);
      };
    };
  };
});

function getImageFunction(button) {
  var gameCanvas = document.getElementById("canvasGame")
  button.href = gameCanvas.toDataURL();
  console.log(textBox.value);
  if (textBox.value) {
    button.download = textBox.value + '.png';

  } else {
    button.download = 'skribbl-Drawing.png';
  };
};

function drawPie() {
  selectedAngle = 360 - Math.atan2(piePosition.x - mousePosition.x, piePosition.y - mousePosition.y) * 180 / Math.PI;
  if (selectedAngle >= 360) {
    selectedAngle -= 360
  };
  selectedAngle += 90;
  if (selectedAngle >= 360) {
    selectedAngle -= 360
  };
  lastColor = selectedColor;
  selectedColor = Math.floor(selectedAngle / pieAngle);
  if (selectedColor != lastColor) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowBlur = 50;
    ctx.shadowColor = "black";
    ctx.beginPath();
    ctx.fillStyle = document.getElementsByClassName("colorItem")[colorTable[selectedColor]].style.backgroundColor;
    ctx.arc(mousePosition.x, mousePosition.y, 180, 0, Math.PI * 2);
    ctx.lineTo(mousePosition.x, mousePosition.y);
    ctx.closePath;
    ctx.fill();
    for (var colorNr = 0; colorNr < colorCount; colorNr++) {
      ctx.shadowBlur = 5;
      ctx.shadowColor = "black";
      ctx.beginPath();
      ctx.moveTo(mousePosition.x, mousePosition.y);
      ctx.fillStyle = document.getElementsByClassName("colorItem")[colorTable[colorNr]].style.backgroundColor;
      ctx.arc(mousePosition.x, mousePosition.y, 160, Math.PI / 180 * colorNr * pieAngle, Math.PI / 180 * colorNr * pieAngle + (Math.PI / 180 * pieAngle));
      ctx.lineTo(mousePosition.x, mousePosition.y);
      ctx.closePath;
      ctx.fill();
      ctx.stroke();
    }
    ctx.shadowBlur = 40;
    ctx.shadowColor = "white";
    ctx.beginPath();
    ctx.moveTo(mousePosition.x, mousePosition.y);
    try {
      ctx.fillStyle = document.getElementsByClassName("colorItem")[colorTable[selectedColor]].style.backgroundColor;
    } catch (err) {
      console.log(selectedColor);
    };
    ctx.arc(mousePosition.x, mousePosition.y, 200, Math.PI / 180 * selectedColor * pieAngle, Math.PI / 180 * selectedColor * pieAngle + (Math.PI / 180 * pieAngle));
    ctx.lineTo(mousePosition.x, mousePosition.y);
    ctx.closePath;
    ctx.fill();
    ctx.stroke();
  }
}

document.addEventListener('mousedown', function(mouseDownEvent) {
  if (mouseDownEvent.button === 2) {
    pie = true;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawPie();
  }
}, false);

document.addEventListener('mouseup', function() {
  if (pie) {
    pie = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementsByClassName("colorItem")[colorTable[selectedColor]].click();
  }
}, false);

document.addEventListener('keydown', function(e) {
  switch (e.keyCode || e.which) {
    case 49:
      document.getElementsByClassName("brushSize")[0].click();
      break;
    case 50:
      document.getElementsByClassName("brushSize")[1].click();
      break;
    case 51:
      document.getElementsByClassName("brushSize")[2].click();
      break;
    case 52:
      document.getElementsByClassName("brushSize")[3].click();
      break;
    case 221:
    case 192:
      getImageButton.click();
      break;
    case 13:
      document.getElementById("inputChat").focus();
      break;
    default:
      break;
  }

  if (e.code === "KeyV" && e.altKey) {
    document.getElementById("votekickCurrentplayer").click();
    document.getElementById("inputChat").focus();
  }
  if (e.code === "KeyG" && e.altKey) {
    document.getElementsByClassName("thumbsUp")[0].click();
    document.getElementById("inputChat").focus();
  }
  if (e.code === "KeyN" && e.altKey) {
    document.getElementsByClassName("thumbsDown")[0].click();
    document.getElementById("inputChat").focus();
  }
}, false);

document.addEventListener('mousemove', function(mouseMoveEvent) {
  var rect = mouseMoveEvent.target.getBoundingClientRect();
  if (!pie) {
    mousePosition.x = mouseMoveEvent.pageX;
    mousePosition.y = mouseMoveEvent.pageY;
  } else {
    piePosition.x = mouseMoveEvent.pageX;
    piePosition.y = mouseMoveEvent.pageY;
    drawPie();
  }
}, false);

document.addEventListener('contextmenu', function(contextMenuEvent) {
  contextMenuEvent.preventDefault();
  return false;
}, false);

getImageButton = setupImageButton();

const state = {
    content: document.createElement("span"),
    links: document.createElement("strong"),
    pattern: "",
    prevAnswer: "",
    prevClue: "",
    wordsList: $(document.createElement("ul"))
};
unsafeWindow.dictionary = {
    confirmed: [],
    guessed: [],
    oneOffWords: [],
    standard: [],
    validAnswers: []
};
function scrollDown() {
    if ($("#screenGame").is(":visible") &&
        $("html").scrollTop() < $("#screenGame").offset().top) {
        $("html, body").animate({
            scrollTop: $("#screenGame").offset().top
        }, 1000);
    }
}
function getPlayer() {
    const nameElem = $('.info .name[style="color: rgb(0, 0, 255);')[0];
    if (typeof nameElem !== "undefined") {
        return nameElem.innerText.split(" (")[0];
    }
    return "";
}
function validClue(clue, minCharsFound) {
    const someoneDrawing = $(".drawing").is(":visible");
    const charsFound = clue.replace(/_|-| /g, "").length;
    const noUnderscores = clue.replace(/_/g, "").length;
    if (someoneDrawing &&
        (unsafeWindow.dictionary.oneOffWords.length > 0 ||
            (charsFound >= minCharsFound && noUnderscores !== clue.length))) {
        return true;
    }
    if (!someoneDrawing) {
        unsafeWindow.dictionary.validAnswers = [];
        unsafeWindow.dictionary.guessed = [];
        unsafeWindow.dictionary.oneOffWords = [];
    }
    return false;
}
function wordGuessed() {
    if ($('.guessedWord .info .name[style="color: rgb(0, 0, 255);"]').length) {
        unsafeWindow.dictionary.validAnswers = [];
        unsafeWindow.dictionary.guessed = [];
        unsafeWindow.dictionary.oneOffWords = [];
        return true;
    }
    return false;
}
function missingChar(short, long) {
    for (let i = 1; i < long.length + 1; i++) {
        if (short === long.substring(0, i - 1) + long.substring(i, long.length)) {
            return true;
        }
    }
    return false;
}
function oneOff(listWord, guessedWord) {
    if (listWord.length === guessedWord.length) {
        let wrongLetters = 0;
        for (let i = 0; i < listWord.length; i++) {
            if (listWord.charAt(i) !== guessedWord.charAt(i)) {
                wrongLetters += 1;
            }
            if (wrongLetters > 1) {
                return false;
            }
        }
        return wrongLetters === 1;
    }
    if (listWord.length === guessedWord.length - 1) {
        return missingChar(listWord, guessedWord);
    }
    if (guessedWord.length === listWord.length - 1) {
        return missingChar(guessedWord, listWord);
    }
    return false;
}
function checkPastGuesses(notOBO, word) {
    if (unsafeWindow.dictionary.guessed.indexOf(word) !== -1) {
        return false;
    }
    for (const oneOffWord of unsafeWindow.dictionary.oneOffWords) {
        if (!oneOff(word, oneOffWord)) {
            return false;
        }
    }
    for (const str of notOBO) {
        if (oneOff(word, str)) {
            return false;
        }
    }
    return true;
}
function getRegex(clue) {
    return new RegExp(`^${clue.replace(/_/g, "[^- ]")}$`);
}
function filterWords(words, notOBO, clue) {
    return words
        .filter(word => word.length === clue.length &&
        state.pattern.test(word) &&
        checkPastGuesses(notOBO, word))
        .sort();
}
function getWords(clue) {
    const dict = unsafeWindow.dictionary;
    let words;
    if (dict.validAnswers.length === 0) {
        // && dict.guessed.length === 0
        words = dict.confirmed.slice();
        for (const item of dict.standard) {
            if (words.indexOf(item) === -1) {
                words.push(item);
            }
        }
    }
    else {
        words = dict.validAnswers;
    }
    state.pattern = getRegex(clue);
    const notOBO = [];
    for (const word of dict.guessed) {
        if (dict.oneOffWords.indexOf(word) === -1) {
            notOBO.push(word);
        }
    }
    if (!wordGuessed()) {
        dict.validAnswers = filterWords(words, notOBO, clue);
    }
    else {
        dict.validAnswers = [];
    }
    return dict.validAnswers;
}
function constructWordsList(clue) {
    const newList = $(document.createElement("ul"));
    if (validClue(clue, 0) && !wordGuessed()) {
        const words = getWords(clue);
        for (const word of words) {
            const item = document.createElement("li");
            const child = $(`<span onClick="submitGuess('${word}')">${word}</span>`);
            child.css({ cursor: 'pointer', textDecoration: 'underline', textDecorationStyle: 'dotted' });
            if (unsafeWindow.dictionary.confirmed.indexOf(word) > -1) {
                child.css({ fontWeight: 'bold' });
            }
            $(item).append(child);
            newList.append(item);
        }
    }
    state.wordsList.html(newList.html());
    state.wordsList.css({
        width: `${$(document).width() - $("#containerChat").width() - 40}px`
    });
}
function getClue() {
    return $("#currentWord");
}
function getClueText() {
    return getClue()[0].textContent.toLowerCase();
}
function findGuessedWords() {
    const player = getPlayer();
    if (player) {
        const guesses = $(`#boxMessages p[style='color: rgb(0, 0, 0);'] b:contains(${player}:)`)
            .parent()
            .find("span")
            .not(".skribblerHandled")
            .slice(-10);
        guesses.each((i, elem) => {
            const guessText = elem.innerText;
            if (unsafeWindow.dictionary.guessed.indexOf(guessText) === -1) {
                unsafeWindow.dictionary.guessed.push(guessText);
                elem.classList.add("skribblerHandled");
                constructWordsList(getClueText());
            }
        });
    }
}
function findCloseWords() {
    const close = $("#boxMessages p[style='color: rgb(204, 204, 0); font-weight: bold;'] span:contains( is close!)")
        .not(".skribblerHandled")
        .slice(-10);
    close.each((i, elem) => {
        const text = elem.innerText.split("'")[1];
        if (unsafeWindow.dictionary.oneOffWords.indexOf(text) === -1) {
            unsafeWindow.dictionary.oneOffWords.push(text);
            elem.classList.add("skribblerHandled");
            constructWordsList(getClueText());
        }
    });
}
unsafeWindow.getInput = () => $("#inputChat");
function validateInput() {
    const word = getClueText();
    const input = unsafeWindow.getInput()[0];
    const remaining = word.length - input.value.length;
    state.content.textContent = remaining;
    state.content.style.color = "unset";
    if (remaining > 0) {
        state.content.textContent = `+${state.content.textContent}`;
        state.content.style.color = "green";
    }
    else if (remaining < 0) {
        state.content.style.color = "red";
    }
    state.pattern = getRegex(word);
    const short = getRegex(word.substring(0, input.value.length));
    if (state.pattern.test(input.value.toLowerCase())) {
        input.style.border = "3px solid green";
    }
    else if (short.test(input.value.toLowerCase())) {
        input.style.border = "3px solid orange";
    }
    else {
        input.style.border = "3px solid red";
    }
}
function showDrawLinks(clueText) {
    if (clueText.length > 0 && clueText.indexOf("_") === -1) {
        state.links.innerHTML = `<a style='color: blue' target='_blank'
href='https://www.google.com/search?tbm=isch&q=${clueText}'>Images</a>, `;
        state.links.innerHTML += `<a style='color: blue' target='_blank'
href='https://www.google.com/search?tbm=isch&tbs=itp:lineart&q=${clueText}'>Line art</a>`;
    }
    else {
        state.links.innerHTML = "";
    }
}
function clueChanged() {
    const clue = getClueText();
    if (clue !== state.prevClue) {
        state.prevClue = clue;
        validateInput();
        constructWordsList(clue);
        showDrawLinks(clue);
    }
}
function answerShown(username, password) {
    let answer = $("#overlay .content .text")[0].innerText;
    if (answer.slice(0, 14) === "The word was: ") {
        answer = answer.slice(14);
        if (answer !== state.prevAnswer) {
            state.prevAnswer = answer;
            unsafeWindow.dictionary.oneOffWords = [];
            unsafeWindow.dictionary.guessed = [];
            unsafeWindow.dictionary.validAnswers = [];
            if (admin) {
                handleWord(answer, username, password);
            }
        }
    }
}
function makeGuess(clue) {
    if (validClue(clue, 1) && !wordGuessed()) {
        const words = unsafeWindow.dictionary.validAnswers;
        const confWords = [];
        for (const item of words) {
            if (unsafeWindow.dictionary.confirmed.indexOf(item) > -1) {
                confWords.push(item);
            }
        }
        let guess;
        if (confWords.length > 0) {
            guess = confWords[Math.floor(Math.random() * confWords.length)];
        }
        else {
            guess = words[Math.floor(Math.random() * words.length)];
        }
        guessWord(guess, clue);
    }
}
unsafeWindow.submitGuess = (guess) => {
    const submitProp = Object.keys(unsafeWindow.formChat).filter((k) => ~k.indexOf("jQuery") // tslint:disable-line no-bitwise
    )[0];
    unsafeWindow.getInput().val(guess);
    unsafeWindow.formChat[submitProp].events.submit[0].handler();
};
function guessWord(guess, clue) {
    window.setTimeout(() => {
        if (unsafeWindow.getInput().val() === "" && validClue(clue, 1) && !wordGuessed()) {
            unsafeWindow.submitGuess(guess);
        }
    }, Math.floor(Math.random() * (Number($("#guessRate").val()) / 3)));
}
function toggleWordsList() {
    if ($(state.wordsList).is(":visible")) {
        if (state.wordsList.children().length === 0 ||
            wordGuessed() ||
            !validClue(getClueText(), 0)) {
            state.wordsList.hide();
        }
    }
    else if (state.wordsList.children().length > 0 &&
        !wordGuessed() &&
        validClue(getClueText(), 0)) {
        state.wordsList.show();
    }
}
function stillHere() {
    if (document.hidden &&
        $(".modal-dialog:contains(Are you still here?)").is(":visible")) {
        alert("Action required.");
    }
}
var activated=false;
function main(username, password) {
    $("#audio").css({
        left: "unset",
        right: "0px"
    }); // so it doesn't cover timer
    window.setInterval(scrollDown, 2000);
    $(state.links).css({
        padding: "0 1em 0 1em"
    });
    getClue().after(state.links);
    const formArea = $("#formChat")[0];
    $(state.content).css({
        left: "295px",
        position: "relative",
        top: "-25px"
    });
    state.wordsList.css({
        "background-color": "#eee",
        "border-radius": "2px",
        columns: "4",
        "list-style-position": "inside",
        "margin-top": "10px",
        padding: "4px",
        width: "70%"
    });
    formArea.appendChild(state.content);
    $("#screenGame")[0].appendChild(state.wordsList[0]);
    const input = unsafeWindow.getInput()[0];
    input.style.border = "3px solid orange";
    window.setInterval(() => {
        clueChanged();
        answerShown(username, password);
        findCloseWords();
        findGuessedWords();
        toggleWordsList();
        stillHere();
    }, 1000);
    if(activated==false)
    {
        activated=true;
                $(".autoguesser").prop("checked", true);
        activate.hide();
    $("#boxChatInput").prepend($(`<div class="activator" style="background-color:#eee; position:relative;
top:-20px; padding:0 5px; width:auto; margin:0;">
<input id="guessEnabled" name="guessEnabled" style="width:15px; height:15px;" type="checkbox">
<label for="guessEnabled" style="all: initial; padding-left:5px;">Enable auto-guesser</label><br>
<label for="guessRate" style="all: initial; padding-right:5px;">Guess frequency (seconds):</label>
<input id="guessRate" name="guessRate" type="number" step="0.5" min="1" value="1.5" style="width:4em;"></div>`));
    } else { checkactivatedvalue(); }
    let lastGuess = 0;
    let lastTyped = 0;
    window.setInterval(() => {
        if ($("#guessEnabled").is(":checked") &&
            Date.now() - lastTyped >= 1500 &&
            Date.now() - lastGuess >= 1000 * Number($("#guessRate").val())) {
            lastGuess = Date.now();
            makeGuess(getClueText());
        }
    }, 500);
    unsafeWindow.getInput().keyup(() => {
        lastTyped = Date.now();
    });
    unsafeWindow.getInput().keyup(validateInput);
}
function fetchWords(username, password) {
    GM.xmlHttpRequest({
        method: "GET",
        url: "https://skribbler.herokuapp.com/api/words",
        onload(res) {
            const response = JSON.parse(res.responseText);
            unsafeWindow.dictionary.standard = response.default;
            unsafeWindow.dictionary.confirmed = response.confirmed;
            const run = window.setInterval(() => {
                if (getClue()) {
                    clearInterval(run);
                    main(username, password);
                }
            }, 1000);
        }
    });
}
var onlinecheck=false;
function checkactivatedvalue() {
    if(onlinecheck==true){
        onlinecheck=false;
    $(".activator").show();
                $(".autoguesser").prop("checked", true);
    } else { $(".activator").hide(); onlinecheck=true;
                   $(".autoguesser").prop("checked", false);}
}
    let activate;
$(document).ready(() => {
    if (typeof GM === "undefined") {
        // polyfill GM4
        GM = {
            xmlHttpRequest: GM_xmlhttpRequest
        };
    }
    if (admin) {
        activate = $("<button>Activate skribbler (admin)</button>");
    }
    else
        activate = $("<button>Activate skribbler</button>");
    activate.css({
        "font-size": "0.6em"
    });
    $(".loginPanelTitle")
        .first()
        .append(activate);
    activate.click(() => {
        activate.hide();
activateautoguess();
$(".autoguesser").prop("checked", true);
    });
});
const handleWord = (clue, username, password) => { };
const getLoginDetails = () => { };
const admin = false;