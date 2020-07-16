//Solution for the probelem no 1.

function feetToMile(feet) {
    if (feet >= 0) {
        var mile = feet / 5280; // since 1 mile = 5280 feet.
        return mile;
    } else if (feet < 0) {
        return "Lenth can't be negetive. Insert positive value please.";
    }
}
var convertedMile = feetToMile(30000);
console.log(convertedMile);

//Solution for the problem no 2.

function woodCalculator(chairNos, tabelNos, bedNos) {
    var woodCount = chairNos * 1 + tabelNos * 3 + bedNos * 5;
    if (chairNos >= 0 && tabelNos >= 0 && bedNos >= 0) {
        return woodCount;
    } else {
        return "plese insert positive value";
    }
}
var woodVolume = woodCalculator(2, 3, 5);
console.log(woodVolume);

//Solution for the problem no 3.
function brickCalculator(floorNos) {
    if (floorNos >= 0 && floorNos <= 10) {
        var upToTen = floorNos * 15 * 1000;
        return upToTen;
    } else if (floorNos > 10 && floorNos <= 20) {
        var upToTwenty = 10 * 15 * 1000 + (floorNos - 10) * 12 * 1000;
        return upToTwenty;
    } else if (floorNos > 20) {
        var moreThanTwenty = (10 * 15 * 1000) + (10 * 12 * 1000) + (floorNos - 20) * 10 * 1000;
        return moreThanTwenty;
    }
}
var totalBrick = brickCalculator(22);
console.log(totalBrick);
// Third problem End


//Solution for the problem no 4.
function tinyFriends(friends) {
    var smallName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (smallName.length > friends[i].length) {
            smallName = friends[i];
        }
    }
    return smallName;
}
var friends = ["sumon", "rumon", "rafi", "sony", "boni", "Rim", "mostofa"];
console.log(tinyFriends(friends));