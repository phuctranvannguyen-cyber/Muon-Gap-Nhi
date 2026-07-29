const screen = document.getElementById("screen");

const lines = [

    "[BOOT] PHÚC nè System v1.0",
    "",
    "[OK] Loading kernel...",
    "[OK] Initializing memory...",
    "[OK] Checking graphics...",
    "[OK] Starting rendering engine...",
    "[OK] Establishing secure connection...",
    "",
    "[SYS] Compiling...",
    "",
    "[DONE] Build Successful."

];

let line = 0;
let char = 0;

function typeWriter(){

    if(line >= lines.length){

        screen.innerHTML +=
        '<span class="cursor"></span>';

        return;

    }

    const current = lines[line];

    if(char < current.length){

        screen.innerHTML += current.charAt(char);

        char++;

        setTimeout(typeWriter,35);

    }else{

        screen.innerHTML += "<br>";

        line++;

        char = 0;

        setTimeout(typeWriter,250);

    }

}

typeWriter();
