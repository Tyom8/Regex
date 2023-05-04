let div = document.getElementById("div");
button.onclick = function () {
    let file = document.getElementById("file").files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
        let text = reader.result;
        const regex = text.match(/background-color:\s*(#[0-9A-Za-z]{3,6}|[a-z]{3,}|rgb\([0-9]{1,3},\s*[0-9]{1,3},\s*[0-9]{1,3}\));/gi);
        console.log(regex);
        for (let i = 0; i < regex.length; i++) {
            let x = regex[i];
            let color = x.split(": ")[1].replace(/;/g, "");
            console.log(color);
            let colorDiv = document.createElement("div");
            colorDiv.style.background = `${color}`;
            colorDiv.innerHTML = `background-color: ${color};`
            colorDiv.classList.add("colorDiv");
            div.append(colorDiv);
        }
    }
};



// JSI popoxakanner,Functionner,Cikler ev ayln
// button.onclick = function () {
//     let table = document.getElementById("table");
//     table.style.display = "table";
//     let tr = document.createElement("tr");
//     tr.style.backgroundColor = "#CC3333";
//     let th1 = document.createElement("th");
//     let th2 = document.createElement("th");
//     let th3 = document.createElement("th");
//     let th4 = document.createElement("th");
//     let th5 = document.createElement("th");
//     let th6 = document.createElement("th");
//     tr.append(th1, th2, th3, th4, th5, th6);
//     table.append(tr);

//     let file = document.getElementById("file").files[0];
//     let reader = new FileReader();
//     reader.readAsText(file);
//     reader.onload = function () {
//         let text = reader.result;

//         let arrayCycle = [];

//         let variableLet = text.match(/let /g);
//         let variableConst = text.match(/const /g);
//         let func  = text.match(/function /g);
//         let func2 = text.match(/\=\>\s* \{/g);
//         let func3 = text.match(/\=\>\{/g);
//         let generator = text.match(/function\*/g);
//         let classCount = text.match(/class /g);
//         let cycleFor = text.match(/for /g);

//         if (cycleFor) {
//             arrayCycle.push(cycleFor)
//         };
//         let cycleFor2 = text.match(/for\(/g);
//         if (cycleFor2) {
//             arrayCycle.push(cycleFor2)
//         };
//         let cycleWhile = text.match(/while /g);
//         if (cycleWhile) {
//             arrayCycle.push(cycleWhile)
//         };
//         let cycleWhile2 = text.match(/while\(/g);
//         if (cycleWhile2) {
//             arrayCycle.push(cycleWhile2)
//         };
//         let cycleForEach = text.match(/array.forEach\(/g);
//         if (cycleForEach) {
//             arrayCycle.push(cycleForEach)
//         };
//         let cycleForEach2 = text.match(/array.forEach /g);
//         if (cycleForEach2) {
//             arrayCycle.push(cycleForEach2)
//         };
//         let cycleDowhile = text.match(/\{while/g);
//         if (cycleDowhile) {
//             arrayCycle.push(cycleDowhile)
//         };
//         let cycleLength = 0;
//         for (let index = 0; index < arrayCycle.length; index++) {
//             cycleLength += arrayCycle[index].length
//         }

//         if(func && func2 && func3) {
//             th1.innerHTML = `${func.length + func2.length + func3.length}`;
//         }else if(func && func2 && !func3) {
//             th1.innerHTML = `${func.length + func2.length}`;
//         }else if(func && !func2 && func3) {
//             th1.innerHTML = `${func.length + func3.length}`;
//         }else if(func && !func2 && !func3) {
//             th1.innerHTML = `${func.length}`;
//         }else if(!func && func2 && !func3) {
//             th1.innerHTML = `${func2.length}`;
//         }else if(!func && func2 && func3) {
//             th1.innerHTML = `${func2.length + func3.length}`;
//         }else if(!func && !func2 && func3) {
//             th1.innerHTML = `${func3.length}`;
//         };

//         if (variableLet) {
//             th2.innerText = `${variableLet.length}`;
//         }else {
//             th2.innerText = 0;
//         }

//         if (variableConst) {
//             th3.innerText = `${variableConst.length}`;
//         }  else {
//             th3.innerText = 0;
//         };

//         if(generator) {
//             th4.innerText = `${generator.length}`;
//         } else {
//             th4.innerText = 0;
//         };

//         if(classCount) {
//             th5.innerText = `${classCount.length}`;
//         }else {
//             th5.innerText = 0;
//         };

//         th6.innerText = cycleLength;
//     }
// };
