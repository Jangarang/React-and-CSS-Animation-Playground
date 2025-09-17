console.clear();

var doc = document;
var flower = doc.querySelector('.flower');
var range = doc.querySelector('.range');

var petalPartMarkup = '<div class="box"> \
                    <div class="shape"></div> \
                </div>';

var maxParts = 20; /* Segment the petal into 20 divided boxes */

var maxPetalsDef = 7; /* # of petals */

var maxPetals = maxPetalsDef; // 6
// console.log('maxPetals', maxPetals);

var partsFontStepDef = 25 / maxParts; // 1.25
//console.log('partsFontStepDef', partsFontStepDef); // 1.25

var partsFontStep = partsFontStepDef;

var huetStep = 150 / maxParts;

createFlower ();

function createFlower () {
    
    var angle = 360 / maxPetals;
    
    for (var i = 0; i < maxPetals; i++) {

        var petal = createPetal(); 

        var currAngle = angle * i + 'deg'; 
        console.log(currAngle);

        var transform = 'transform: rotateY(' + currAngle + ') rotateX(-30deg) translateZ(9vmin)';

        // console.log(transform); 

        petal.setAttribute( 'style',transform);
        
        flower.appendChild( petal );
    }
}

function createPetal () {
    
    var box = createBox ( null, 0);
    
    var petal = doc.createElement('div');

    petal.classList.add('petal');
    
    for (var i = 1; i <= maxParts; i++) {
        newBox = createBox ( box, i ); 
        box = newBox;
    } 
    
    petal.appendChild( box );

    return petal;
}

/**
 * 
 * @param {*} box 
 * @param {*} pos The position of each segment within each petal 
 * @returns 
 */

function createBox ( box, pos ) {
    //console.log('(createBox() box', box);
    // console.log('(createBox()) pos:', pos); 

    // The size of each circle within the petal?
    var fontSize = partsFontStep * ( maxParts - pos ) + 'vmin';
    var boxShadow = '';
    // console.log(fontSize);

    //mid point of each petal
    var half = maxParts / 2;

    // console.log(half);

    var bright = '50';
    
    if ( pos < half + 1 ) { //pos < 11
        //console.log('(createBox()) outer pos', pos);
        // Size of the outer segments
        fontSize = partsFontStep * pos + 'vmin'; //1.25 * (0,1,2,3,4,5,6,7,8,9,10)
        // boxShadow = box-shadow: 0.5em 0 0 0, 1em 0 0 0, -1em 0 0 0, -0.5em 0 0 0; 
        //console.log(fontSize);
    }
    else {
        bright = 10 + 40 / half * ( maxParts - pos );
    }
    
    var color = 'hsl(' + huetStep * pos + ', 100%, ' + bright + '%)';
    
    // 1. Add shape
    var newShape = doc.createElement('div');
    newShape.classList.add( 'shape' );

    // // 2. Create wrapper .box
    var newBox = doc.createElement('div');
    newBox.classList.add('box');  
    
    var boxStyle = [
        // 'color: ' + color,
        'font-size: ' + fontSize
    ].join(';');
    newBox.setAttribute('style', boxStyle);

    // // 3. Add old box to new box
    if ( box ) {
        newBox.appendChild( box );
    }
    
    // // 4. Add shape to new box
    newBox.appendChild( newShape );

    // console.log(newBox);
    
    return newBox;
}

function out ( content ) {
    console.log( content );
}