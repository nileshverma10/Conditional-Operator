function enoughFuelConsumption(fuel, distance) {
    //write code here
    let required = fuel*distance;
    if(required>50){
        console.log("Enough");
    }else{
        console.log("Go On");
    }
}
