function farToCel(tempFar){
    var tempCel = Math.floor((tempFar - 32) * (5/9));
    
    if (tempCel < 10) {
        console.log("The current temperature is " + tempCel + " Celsius. It's cold outside.");
    }else if (tempCel >= 10 && tempCel <= 25 ) {
        console.log("The current temperature is " + tempCel + " Celsius. It's fair outside.");
    }else{
        console.log("The current temperature is " + tempCel + " Celsius. It's hot outside.");
    }
}