//Solution for the probelem no 1.

function feetToMile(feet) {
    if (feet >= 0) {
        var mile = feet / 5280; // since 1 mile = 5280 (1760*3) feet.
        return mile;
    } else if (feet < 0) {
        return "Lenth can't be negetive. Insert positive value please.";//to avoid inserting negetive value
    }
}
var convertedMile = feetToMile(18480); //testing for 18480 feet that will converted to mile
console.log(convertedMile);




//Solution for the problem no 2.

function woodCalculator(chairNos, tabelNos, bedNos) {
    var woodCount = chairNos + tabelNos * 3 + bedNos * 5; //since  chair = 1 cubic foot,  table = 3 cubic foot & bed = 5 cubic foot
    if (chairNos >= 0 && tabelNos >= 0 && bedNos >= 0) {
        return woodCount;
    } else {
        return "plese insert positive value"; //to avoid inserting negetive value
    }
}
var woodVolume = woodCalculator(2, 3, 5); // testing for 2 chair, 3 table & 5 bed
console.log(woodVolume);





//Solution for the problem no 3.

function brickCalculator(floorNos) {
    if (floorNos >= 0 && floorNos <= 10) {
        var upToTen = floorNos * 15 * 1000; //since 15 feet high and 1000 brick per feet
        return upToTen;
    } else if (floorNos > 10 && floorNos <= 20) {
        var upToTwenty = 10 * 15 * 1000 + (floorNos - 10) * 12 * 1000; //since 12 feet high after 10th floor
        return upToTwenty;
    } else if (floorNos > 20) {
        var moreThanTwenty = (10 * 15 * 1000) + (10 * 12 * 1000) + (floorNos - 20) * 10 * 1000; //since 10 feet high after 20th floor
        return moreThanTwenty;
    } else if(floorNos < 0 ){
        return "Please insert a positive value" //to avoid inserting negetive value
    }
}
var totalBrick = brickCalculator(22); // testing for 22 floor buildign
console.log(totalBrick);





//Solution for the problem no 4.

function tinyFriends(friends) {
    var smallName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        while (smallName.length > friends[i].length) {
            smallName = friends[i];
        }
    }
    return smallName;
}
var friends = ["sumon", "rumon", "rafi", "sony", "boni", "Rim", "mostofa"]; //testing an array
console.log(tinyFriends(friends));