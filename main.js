// Array Visualizer

// HTML variables
let containerEl = document.getElementById("container");

// Global Variable
let myData = []
for (let n = 600; n >= 10; n-= 10) {
    myData.push(Math.random() * 600);
}
console.log(myData);

// Display data
drawArray();

function drawArray() {
    let outputStr = ""
    for (let i =0; i < myData.length; i++) {
        outputStr += `<div style="height:${myData[i]}px"></div>`

    }
    containerEl.innerHTML = outputStr;
}

// key event stuff
document.addEventListener("keydown", keydownHandler)

function keydownHandler(event) {
    if (event.keyCode === 38) {
        // Up arrow - add 600 to the index
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 0, Math.random() * 600);
    } else if (event.keyCode === 40) {
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 1);
    }

    // if (event.keyCode === 38) {
    //     // Up arrow - Push value to the end of the array
    //     for (let i =0; i < myData.length; i++) {
    //         myData[i] += 10;
    //     }
    // } else if (event.keyCode === 40) {
    //     let poppedValue = myData.pop();
    //     console.log(poppedValue)
    // }

    
    // myData.push(Math.random() * 600);
    // redraw array
    drawArray();
}