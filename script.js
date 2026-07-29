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
/* =======================
      IDE LAYOUT
======================= */

.editor{

    position:absolute;

    left:50%;
    top:50%;

    transform:translate(-50%,-50%);

    width:1000px;

    max-width:92%;

    height:620px;

    background:#0f0f0f;

    border-radius:16px;

    overflow:hidden;

    box-shadow:

        0 0 30px rgba(255,213,79,.12);

    z-index:5;

}

/* ---------- */

.topbar{

    height:50px;

    background:#171717;

    display:flex;

    align-items:center;

    padding:0 18px;

}

.buttons{

    display:flex;

    gap:8px;

}

.buttons span{

    width:12px;

    height:12px;

    border-radius:50%;

}

.filename{

    margin-left:20px;

    color:#FFD54F;

}

/* ---------- */

.workspace{

    display:flex;

    height:520px;

}

/* ---------- */

.sidebar{

    width:220px;

    background:#121212;

    border-right:1px solid rgba(255,213,79,.08);

}

.file{

    color:#888;

    padding:14px 18px;

    font-size:15px;

    cursor:pointer;

}

.file:hover{

    background:#1d1d1d;

}

.active{

    color:#FFD54F;

    background:#191919;

}

/* ---------- */

.code{

    flex:1;

    padding:30px;

    overflow:auto;

}

.code pre{

    color:#FFD54F;

    font-size:17px;

    line-height:32px;

}

/* ---------- */

.status{

    height:50px;

    background:#171717;

    border-top:1px solid rgba(255,213,79,.08);

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:0 20px;

    color:#888;

    font-size:14px;

}
#include <iostream>

class HeartEngine
{
public:

    void Compile();
    void Render();

};

int main()
{

    HeartEngine app;

    app.Compile();

    app.Render();

}
