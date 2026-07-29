/* =====================================
   PHÚC ENGINE
   script.js
===================================== */

const screen = document.getElementById("screen");
const status = document.getElementById("status");

let code = [];
let line = 0;
let char = 0;
let typingSpeed = 20;
code = [

"#include <iostream>",
"#include <vector>",
"#include <chrono>",
"",
"class PhucEngine",
"{",
"public:",
"",
"    void Boot();",
"    void Compile();",
"    void Render();",
"",
"};",
"",
"int main()",
"{",
"",
"    PhucEngine engine;",
"",
"    engine.Boot();",
"    engine.Compile();",
"    engine.Render();",
"",
"    return 0;",
"",
"}"

];
function typeCode() {

    if (line >= code.length) {

        finishTyping();

        return;

    }

    const current = code[line];

    if (char < current.length) {

        screen.innerHTML += current.charAt(char);

        char++;

        setTimeout(typeCode, typingSpeed);

    } else {

        screen.innerHTML += "\n";

        line++;

        char = 0;

        setTimeout(typeCode, 80);

    }

}
function finishTyping(){

    status.textContent = "Compiling...";

    setTimeout(startCompile,800);

}
let progress = 0;

function startCompile(){

    screen.innerHTML += "\n";

    screen.innerHTML += "\nCompiling...\n\n";

    let timer = setInterval(()=>{

        progress++;

        screen.innerHTML =
        screen.innerHTML.replace(/\\[[█░]*\\]\\s\\d+%/g,'');

        let bar = "";

        for(let i=0;i<20;i++){

            if(i < progress/5){

                bar += "█";

            }else{

                bar += "░";

            }

        }

        screen.innerHTML +=
        "[" + bar + "] " + progress + "%";

        if(progress>=100){

            clearInterval(timer);

            status.textContent="Build Success";

            setTimeout(startParticles,1000);

        }

    },40);

}
function startParticles(){

    screen.innerHTML +=

    "\n\nLaunching PHÚC ENGINE...";

}
typeCode();