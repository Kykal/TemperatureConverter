function convert(){
    var number = parseFloat( document.getElementById('number').value );
    var numA = parseInt(number);
    var tempA = document.getElementById('selectTemp1').value;
    var tempB = document.getElementById('selectTemp2').value;

    switch(tempA){
        case "ºC":
            numA = number + 273.15;
            break;

        case "ºF":
            numA = (number - 32) * (5/9) + (273.15);
            break;

        case "R":
            numA = number * (5/9);
            break;
    }

    switch(tempB){
        case "ºC":
            numA = numA - 273.15;
            break;

        case "ºF":
            numA = (numA - 273.15) * (9/5) + 32;
            break;

        case "R":
            numA = numA * (9/5);
            break;
    }
    document.getElementById('res1').innerHTML = number + " " + tempA + " = " + numA + " " + tempB;
}