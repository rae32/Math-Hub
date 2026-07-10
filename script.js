/* =========================
   SCIENTIFIC CALCULATOR
========================= */


function addValue(value) {

    document.getElementById("calculatorDisplay").value += value;

}



function clearCalculator() {

    document.getElementById("calculatorDisplay").value = "";

}



function deleteNumber() {

    let display = document.getElementById("calculatorDisplay");

    display.value = display.value.slice(0, -1);

}



function calculateAnswer() {

    let expression = document.getElementById("calculatorDisplay").value;


    try {

        expression = expression.replace("^", "**");

        let answer = eval(expression);


        document.getElementById("calculatorDisplay").value = answer;


    }

    catch {

        document.getElementById("calculatorDisplay").value = "Error";

    }

}



function squareRoot() {

    let display = document.getElementById("calculatorDisplay");


    let number = Number(display.value);


    display.value = Math.sqrt(number);

}



function percentage() {

    let display = document.getElementById("calculatorDisplay");


    let number = Number(display.value);


    display.value = number / 100;

}





/* =========================
   DIAMETER CALCULATIONS
========================= */


function calculateDiameter(){

    let r = Number(document.getElementById("diameterRadius").value);

    let result = 2 * r;


    document.getElementById("diameterResult").innerHTML =
    "Diameter = " + result;

}



function calculateRadius(){

    let d = Number(document.getElementById("radiusDiameter").value);

    let result = d / 2;


    document.getElementById("radiusResult").innerHTML =
    "Radius = " + result;

}



function calculateCircumference(){

    let r = Number(document.getElementById("circumferenceRadius").value);

    let result = 2 * Math.PI * r;


    document.getElementById("circumferenceResult").innerHTML =
    "Circumference = " + result.toFixed(2);

}





/* =========================
   AREA CALCULATIONS
========================= */


function rectangleArea(){

    let l = Number(document.getElementById("rectangleLength").value);

    let w = Number(document.getElementById("rectangleWidth").value);


    document.getElementById("rectangleAreaResult").innerHTML =
    "Area = " + (l*w);

}




function squareArea(){

    let s = Number(document.getElementById("squareSide").value);


    document.getElementById("squareAreaResult").innerHTML =
    "Area = " + (s*s);

}





function triangleArea(){

    let b = Number(document.getElementById("triangleBase").value);

    let h = Number(document.getElementById("triangleHeight").value);


    document.getElementById("triangleAreaResult").innerHTML =
    "Area = " + (0.5*b*h);

}





function circleArea(){

    let r = Number(document.getElementById("circleRadius").value);


    document.getElementById("circleAreaResult").innerHTML =
    "Area = " + (Math.PI*r*r).toFixed(2);

}





function parallelogramArea(){

    let b = Number(document.getElementById("parallelogramBase").value);

    let h = Number(document.getElementById("parallelogramHeight").value);


    document.getElementById("parallelogramAreaResult").innerHTML =
    "Area = " + (b*h);

}





function trapezoidArea(){

    let a = Number(document.getElementById("trapezoidBase1").value);

    let b = Number(document.getElementById("trapezoidBase2").value);

    let h = Number(document.getElementById("trapezoidHeight").value);



    document.getElementById("trapezoidAreaResult").innerHTML =
    "Area = " + (0.5*(a+b)*h);

}





/* =========================
   VOLUME CALCULATIONS
========================= */


function cubeVolume(){

    let s = Number(document.getElementById("cubeSide").value);


    document.getElementById("cubeVolumeResult").innerHTML =
    "Volume = " + (s*s*s);

}




function cylinderVolume(){

    let r = Number(document.getElementById("cylinderRadius").value);

    let h = Number(document.getElementById("cylinderHeight").value);


    document.getElementById("cylinderVolumeResult").innerHTML =
    "Volume = " + (Math.PI*r*r*h).toFixed(2);

}





function coneVolume(){

    let r = Number(document.getElementById("coneRadius").value);

    let h = Number(document.getElementById("coneHeight").value);


    document.getElementById("coneVolumeResult").innerHTML =
    "Volume = " + ((Math.PI*r*r*h)/3).toFixed(2);

}





function sphereVolume(){

    let r = Number(document.getElementById("sphereRadius").value);


    document.getElementById("sphereVolumeResult").innerHTML =
    "Volume = " + ((4/3)*Math.PI*r*r*r).toFixed(2);

}





function prismVolume(){

    let l = Number(document.getElementById("prismLength").value);

    let w = Number(document.getElementById("prismWidth").value);

    let h = Number(document.getElementById("prismHeight").value);


    document.getElementById("prismVolumeResult").innerHTML =
    "Volume = " + (l*w*h);

}





/* =========================
   PERIMETER CALCULATIONS
========================= */


function rectanglePerimeter(){

    let l = Number(document.getElementById("rectanglePerimeterLength").value);

    let w = Number(document.getElementById("rectanglePerimeterWidth").value);


    document.getElementById("rectanglePerimeterResult").innerHTML =
    "Perimeter = " + (2*(l+w));

}





function squarePerimeter(){

    let s = Number(document.getElementById("squarePerimeterSide").value);


    document.getElementById("squarePerimeterResult").innerHTML =
    "Perimeter = " + (4*s);

}





function trianglePerimeter(){

    let a = Number(document.getElementById("triangleSideA").value);

    let b = Number(document.getElementById("triangleSideB").value);

    let c = Number(document.getElementById("triangleSideC").value);


    document.getElementById("trianglePerimeterResult").innerHTML =
    "Perimeter = " + (a+b+c);

}





function circleCircumference(){

    let r = Number(document.getElementById("circlePerimeterRadius").value);


    document.getElementById("circleCircumferenceResult").innerHTML =
    "Circumference = " + (2*Math.PI*r).toFixed(2);

}





function parallelogramPerimeter(){

    let a = Number(document.getElementById("parallelSideA").value);

    let b = Number(document.getElementById("parallelSideB").value);


    document.getElementById("parallelogramPerimeterResult").innerHTML =
    "Perimeter = " + (2*(a+b));

}