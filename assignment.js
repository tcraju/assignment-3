 //Solution for the question no 1.
 
 function feetToMile(feet) {
     if (feet >= 0) {
         var mile = feet / 5280; // since 1 mile = 5280 feet.
         return mile;
     } else if (feet < 0) {
         return "Lenth can't be negetive. Insert positive value please."
     }
 }
 var convertedMile = feetToMile(30000);
 console.log(convertedMile);

//Solution for the question no 2.

 function woodCalculator(chairNos, tabelNos, bedNos){
        var woodCount = chairNos*1 + tabelNos*3 + bedNos*5;
        if(chairNos>=0 && tabelNos>=0 && bedNos>=0){
            return woodCount;
        } else { return "plese insert positive value"};
 }
 var woodVolume = woodCalculator(2, 3, 5); 
 console.log(woodVolume);


 function brickCalculator