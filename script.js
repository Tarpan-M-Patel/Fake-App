let inputNum = 0;
function addInputFild() {
    inputNum++;
    let inputDiv = document.createElement("div")
    inputDiv.className = "inputTag";
    inputDiv.id = "inputMsgDiv-" + inputNum;
    inputDiv.classList.add('inputDiv');

    let inputContDiv = document.createElement("div")
    inputContDiv.className = "inputMsg flex";
    inputContDiv.id = "inputPartOfMsg-" + inputNum;
    inputContDiv.classList.add('inputContDiv');

    //create input tag and btns
    let inputTag = document.createElement('input');
    inputTag.type = "text";
    inputTag.className = "InputMsgStyle";
    inputTag.placeholder = "Message...";
    inputTag.id = "inputMessage-" + inputNum;
    inputTag.classList.add('inputTag');
    inputTag.setAttribute('oninput', 'txtmessage(this)');
    inputTag.setAttribute('oninput', 'getInputIds(this)');


    //create output p or span tag here
    let outputDiv = document.createElement("div")
    outputDiv.className = "outputClassActiveMsg";
    outputDiv.id = "outputMsg-" + inputNum;
    outputDiv.classList.add('outputDiv');

    let msgPtag = document.createElement('p');
    msgPtag.className = "msgOutput msgActiveOutput ptag";
    msgPtag.id = "outputMessage-" + inputNum;
    msgPtag.classList.add('msgPtag');

    outputDiv.appendChild(msgPtag);

    document.getElementById("allMsgDiv").appendChild(outputDiv);

    //create btn for left and right
    let btnLeft = document.createElement('button');
    btnLeft.id = "btnleft-" + inputNum;
    btnLeft.className = "grey btn bleft";
    btnLeft.classList.add('btnLeft');
    btnLeft.setAttribute( "onclick", 'leftAlign()')
    //img in btn
    let greyImg = document.createElement("img");
    greyImg.src = "images/grey-button.png";
    greyImg.id = "imgrightgrey-" + inputNum;
    greyImg.setAttribute('onclick','leftAlign()');
    btnLeft.appendChild(greyImg);


    let btnRightBlue = document.createElement('button');
    btnRightBlue.id = "btnrightblue-" + inputNum;
    btnRightBlue.className = "blue btn bright";
    btnRightBlue.classList.add('btnRightBlue');
    btnRightBlue.setAttribute( "onclick", 'rightAlign()');

    //img in btn
    let blueImg = document.createElement("img");
    blueImg.id = "imgrightblue-" + inputNum;
    blueImg.src = "images/blue-button.png";
    blueImg.setAttribute('onclick','rightAlign()');
    btnRightBlue.appendChild(blueImg);


    let btnRightGreen = document.createElement('button');
    btnRightGreen.id = "btnrightgreen-" + inputNum;
    btnRightGreen.className = "green btn bright";
    btnRightGreen.classList.add('btnRightGreen');
    btnRightGreen.setAttribute( "click", 'rightAlign()')
    
    //img in btn
    let greenImg = document.createElement("img");
    greenImg.id = "imgrightgreen-" + inputNum;
    greenImg.src = "images/green-button.png";
    btnRightGreen.appendChild(greenImg);
    greenImg.setAttribute('onclick','rightAlign()');
    

    inputDiv.appendChild(inputTag);
    inputDiv.appendChild(btnLeft);
    inputDiv.appendChild(btnRightBlue);
    inputDiv.appendChild(btnRightGreen);

    inputContDiv.appendChild(inputDiv);


    document.getElementById("allInputId").appendChild(inputContDiv);
}

//parsing name

function getName() {
    let inputNameValue = document.getElementById("userName").value;
    let outputNameValue = document.getElementById("userOutputName");
    outputNameValue.innerHTML = inputNameValue;
}

// passing msg to output container

function getInputIds() {
    // Loop through input tags
    for (let i = 0; i <= inputNum; i++) {
        let outputId = "outputMessage-" + i;   //p
        let outputElement = document.getElementById(outputId);
        let inputId = "inputMessage-" + i; //ip
        let inputElement = document.getElementById(inputId);
        console.log(outputElement);
        console.log(inputElement);

        // Check if the input element exists
        if (inputElement) {
            console.log("ID of Input " + i + ": " + outputElement.id);
            if (inputElement) {
                console.log("ID of Input " + i + ": " + inputElement.id);
                let msg = inputElement.value
                outputElement.innerHTML = msg;
            }

        } else {
            console.log("Input " + i + " not found!");
        }
    }
}   

function leftAlign() {

    let btnId =this.event.target.id;
     console.log("btnid:->"+btnId);
     let index = btnId.split("-")[1];
     console.log("btnid:->"+btnId+" index:->"+index);
     document.getElementById("outputMessage-"+index).style.textAlign="left";
}

function rightAlign() {   
     let btnId =this.event.target.id;
     console.log("btnid:->"+btnId);
     let index = btnId.split("-")[1];
     console.log("btnid:->"+btnId+" index:->"+index);

     document.getElementById("outputMessage-"+index).style.textAlign="right";
    
}