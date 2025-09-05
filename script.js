const myBall = document.getElementById('myBall');
let computedStyle = window.getComputedStyle(myBall);

let leftPos = computedStyle.left;
let topPos = computedStyle.top;

// comes back as "10px" or whatever, need parse to remove
leftPos = parseInt(leftPos);
topPos = parseInt(topPos);


document.addEventListener('keydown', (event)=> {
    switch(event.key){
        case "ArrowUp":
            topPos -= 5;
            if(topPos < 0){
                topPos = 0;
            }
            console.log("UpA");
            myBall.style.top = topPos + "px";
            break;
        case "ArrowDown":
            topPos += 5;
            console.log("DownA");
            myBall.style.top = topPos + "px";
            break;
        case "ArrowLeft":
            leftPos -= 5;
            console.log("LeftA");
            if(leftPos < 0){
                leftPos = 0;
            }
            myBall.style.left = leftPos + "px";
            break;
        case "ArrowRight":
            leftPos += 5;
            console.log("RightA");
            myBall.style.left = leftPos + "px";
            break;

    }
    
})