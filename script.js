function challenge1(width, height) {
    let rectangleString = "";
    for (let i=0;i<height;i++) {
        for (let j=0;j<width;j++) {
            rectangleString += "*";
        }
        rectangleString += "\n";
    }
    return rectangleString;
}


function challenge2(array) {
    let size = array.length;
    for(let i=0;i<size/2;i++){
        let temp = array[i];
        array[i] = array[size - i - 1];
        array[size - i - 1] = temp;
    }
    return array;
}


function challenge3(array) {
    let total = 0;
    let size = array.length;
    if (size == 0) return 0;
    for(let i=0;i<size;i++){
        total += array[i];
    }
    let average = total/size;
    return average; 
}


function challenge4(text, character){
    let count = 0;
    let size = text.length;
    for(let i=0;i<size;i++){
        if(text[i] == character){
            count++;
        }
    }
    return count;
}


function challenge5(text){
    let count = 0;
    let temp = text.trim();
    let size = temp.length;
    if(size == 0) return 0;
    for(let i=0;i<size;i++){
        if(temp[i] == " ") count++;
    }
    return count+1;
}


function challenge6(votes){
    let totalVotes = votes.length;
    if(totalVotes == 0){
        console.log("There is not vote yet");
        return;
    }
    let a = 0;
    let b = 0;
    let c = 0;
    for(let i=0;i<totalVotes;i++){
        if(votes[i] == "A") a++;
        else if(votes[i] == "B") b++;
        else if(votes[i] == "C") c++;
    }
    let maxVotes = Math.max(a,b,c);
    let winner = [];
    if(a == maxVotes) winner.push("A");
    if(b == maxVotes) winner.push("B");
    if(c == maxVotes) winner.push("C");
    if(winner.length == 1){
        console.log(winner[0] + " is the winner");
    } else if(winner.length == 2){
        console.log(winner[0] + " and " + winner[1] + " are both winners");
    } else {
        console.log("A, B and C all winners");
    }  
}
