//              ______________________________
//             |==============================|
//             |            PROJECT           |
//             |==============================|
//             |$                            $|
//             |$         EEMI BATTLE        $|
//             |$                            $|
//             |==============================|
//             |          FILES-INFO          |
//             |==============================|
//             |    author : Julien Lachaux   |
//             |      date : 10/11/2016       |
//             |      type : Javascript       |
//             |      name : script           |
//             |==============================|
//             |           CONTACT            |
//             |   julien.lachaux@eemi.com    |
//             |______________________________|
//
//====================================================
//
// Animation au lancement de la page
// 
//====================================================

//====================================
// les variables
//====================================

// le ciblage des éléments à animés
var sections = document.querySelectorAll('div.row');
var cubes = document.querySelectorAll('div.cube div');
var bubbles = document.querySelectorAll('div.bubble');
var pointille = document.querySelectorAll('div.pointille');
var plus = document.querySelectorAll('div.plus');

//====================================
// initialisation
//====================================
// sections
for(var u = 0; u < sections.length; u++) {
    if ('matchMedia' in window) {
        if (window.matchMedia('(max-width: 960px)')) {
            sections[u].classList.toggle('responsiveSection');
        }
    }
}
// cubes
for(var u = 0; u < cubes.length; u++) {
	if (u % 2 === 0) {
		cubes[u].classList.toggle('animCube1');
	}else {
		cubes[u].classList.toggle('animCube2');
	}
	
}

// bubbles
for(var u = 0; u < bubbles.length; u++) {
    if ('matchMedia' in window) {
        if (window.matchMedia('(max-width: 960px)')) {
            bubbles[u].classList.toggle('hidden-mobile');
            if (u % 2 === 0) {
                bubbles[u].classList.toggle('animBubbleLeft');
            }else {
                bubbles[u].classList.toggle('animBubbleRight');
            }
        } 
    }
}

// pointilles
for(var u = 0; u < pointille.length; u++) {
	if (u % 2 === 0) {
		pointille[u].classList.toggle('animPointLeft');
	}else {
		pointille[u].classList.toggle('animPointRight');
	}
}

// plus
for(var u = 0; u < plus.length; u++) {
	if (u % 2 === 0) {
		plus[u].classList.toggle('animPointLeft');
	}else {
		plus[u].classList.toggle('animPointRight');
	}
}

//====================================================
//
// Animation de changement de couleur au survol
// 
//====================================================

//====================================
// fonction animationSurvol : sert a créer un effet de changement de couleur d'un cube de l'infographie au survol d'un élément
// param 1 - section : String - class CSS qui declanchera l'animation 
// param 2 - cible : String - class CSS à cibler
// param 3 - border : String - clas CSS à appliquer sur les bordure des cubes
// param 4 - faceColor : String - clas CSS à appliquer sur la face avant du cube
// param 5 - rightColor : String - clas CSS à appliquer sur la face droite du cube
// param 6 - backColor : String - clas CSS à appliquer sur la arriere du cube
// param 7 - leftColor : String - clas CSS à appliquer sur la gauche du cube
// param 8 - font : String - ON ou OFF - ON = applique changement de couleur sur le text dans le cube (default)
//====================================

var animationSurvol = function(section, cible, border, faceColor, rightColor, backColor, leftColor, font) {
	
	// on déclare les variables pour la colorisation
	var cube = document.querySelector('.' + cible + ' .cube');
	var cubeFaces = cube.querySelectorAll('div');
	var faceStyle = cube.querySelector('.face');
	var rightStyle = cube.querySelector('.right');
	var backStyle = cube.querySelector('.back');
	var leftStyle = cube.querySelector('.left');
	
	// la fonction qui va colorier nos cubes et activer l'effet fil de fer
	var ColorCubes = function() {
		// on applique la colorisation
		faceStyle.classList.toggle(faceColor);
		rightStyle.classList.toggle(rightColor);
		backStyle.classList.toggle(backColor);
		leftStyle.classList.toggle(leftColor);
        
        // on active le fil de fer
        faceStyle.classList.toggle('animation-' + border);
		rightStyle.classList.toggle('animation-' + border);
		backStyle.classList.toggle('animation-' + border);
		leftStyle.classList.toggle('animation-' + border);
        
        // on change la couleur du texte
        if (font !== 'OFF') {
            cube.classList.toggle('font-white');
        }
        
	}
    
    // la fonction qui va afficher cacher les element au click d'un cube dans la version mobile
    var responsiveCube = function() {
        var bubble = AnimeArea.querySelectorAll('.bubble');
        AnimeArea.classList.toggle('animeResponsiveSection');
        AnimeArea.classList.toggle('animeResponsiveSection');
            AnimeArea.classList.toggle('responsiveSection');
        for (var i = 0; i < bubble.length; i++) {
            bubble[i].classList.toggle('animResponsiveBubble');
            bubble[i].classList.toggle('hidden-mobile');
        }
    }
    
    
	if ('matchMedia' in window) {
        var AnimeArea = document.querySelector('.' + section);
        if (window.matchMedia('(max-width: 960px)')) {
            cube.addEventListener('click', responsiveCube);
            AnimeArea.addEventListener('mouseover', ColorCubes);
            AnimeArea.addEventListener('mouseout', ColorCubes);
        }else {
            // on declare l'animation
            AnimeArea.addEventListener('mouseover', ColorCubes);
            AnimeArea.addEventListener('mouseout', ColorCubes);
        }
    }
}