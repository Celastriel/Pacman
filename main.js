let wall = 292;
let boule = 189;
let supa = 4;
let path = 46;
let voida = 36;

let imgPacman = document.createElement("img");
let imgFantome = document.createElement("img");

let score = 0;

const map = [
    ["w1","w2","w3","w4","w5","w6","w7","w8","w9","w10","w11","w12","w13","w14","w15","w16","w17","w18","w19","w20","w21"],
    ["w22","b1","b2","b3","b4","b5","b6","b7","b8","b9","w23","b10","b11","b12","b13","b14","b15","b16","b17","b18","w24"],
    ["w25","b19","w26","w27","w28","b20","w29","w30","w31","b21","w32","b22","w33","w34","w35","b23","w36","w37","w38","b24","w39"],
    ["w40","s1","w41","v1","w42","b25","w43","v2","w44","b26","w45","b27","w46","v3","w47","b28","w48","v4","w49","s2","w50"],
    ["w51","b29","w52","w53","w54","b30","w55","w56","w57","b31","w58","b32","w59","w60","w61","b33","w62","w63","w64","b34","w65"],
    ["w66","b35","b36","b37","b38","b39","b40","b41","b42","b43","b44","b45","b46","b47","b48","b49","b50","b51","b52","b53","w67"],
    ["w68","b54","w69","w70","w71","b55","w72","b56","w73","w74","w75","w76","w77","b57","w78","b189","w79","w80","w81","b58","w82"],
    ["w83","b59","w84","w85","w86","b60","w87","b61","w88","w89","w90","w91","w92","b62","w93","b63","w94","w95","w96","b64","w97"],
    ["w98","b65","b66","b67","b68","b69","w99","b70","b71","b72","w100","b73","b74","b75","w101","b76","b77","b78","b79","b80","w102"],
    ["w103","w104","w105","w106","w107","b81","w108","w109","w110","p1","w111","p2","w112","w113","w114","b82","w115","w116","w117","w118","w119"],
    ["v5","v6","v7","v8","w120","b83","w121","p3","p4","p5","p6","p7","p8","p9","w122","b84","w123","v9","v10","v11","v12"],
    ["v13","v14","v15","v16","w124","b85","w125","p10","w126","w127","p11","w128","w129","p12","w130","b86","w131","v17","v18","v19","v20"],
    ["w132","w133","w134","w135","w136","b87","w137","p13","w138","p14","p15","p16","w139","p17","w140","b88","w141","w142","w143","w144","w145"],
    ["p18","p19","p20","p21","p22","b89","p23","p24","w146","p25","p26","p27","w147","p28","w148","b90","p29","p30","p31","p32","p33"],
    ["w149","w150","w151","w152","w153","b91","w154","p34","w155","w156","w157","w158","w159","p35","w160","b92","w161","w162","w163","w164","w165"],
    ["v21","v22","v23","v24","w166","b93","w167","p36","p37","p38","p39","p40","p41","p42","w168","b94","w169","v25","v26","v27","v28"],
    ["v29","v30","v31","v32","w170","b95","w171","p43","w172","w173","w174","w175","w176","p44","w177","b96","w178","v33","v34","v35","v36"],
    ["w179","w180","w181","w182","w183","b97","w184","p45","w185","w186","w187","w188","w189","p46","w190","b98","w191","w192","w193","w194","w195"],
    ["w196","b99","b100","b101","b102","b103","b104","b105","b106","b107","w197","b108","b109","b110","b111","b112","b113","b114","b115","b116","w198"],
    ["w199","b117","w200","w201","w202","b118","w203","w204","w205","b119","w206","b120","w207","w208","w209","b121","w210","w211","w212","b122","w213"],
    ["w214","s3","b123","b124","w215","b125","b126","b127","b128","b129","b130","b131","b132","b133","b134","b135","w216","b136","b137","s4","w217"],
    ["w218","w219","w220","b138","w221","b139","w222","b140","w223","w224","w225","w226","w227","b141","w228","b142","w229","b143","w230","w231","w232"],
    ["w233","w234","w235","b144","w236","b145","w237","b146","w238","w239","w240","w241","w242","b147","w243","b148","w244","b149","w245","w246","w247"],
    ["w248","b150","b151","b152","b153","b154","w249","b155","b156","b157","w250","b158","b159","b160","w251","b161","b162","b163","b164","b165","w252"],
    ["w253","b166","w254","w255","w256","w257","w258","w259","w260","b167","w261","b168","w262","w263","w264","w265","w266","w267","w268","b169","w269"],
    ["w270","b170","b171","b172","b173","b174","b175","b176","b177","b178","b179","b180","b181","b182","b183","b184","b185","b186","b187","b188","w271"],
    ["w272","w273","w274","w275","w276","w277","w278","w279","w280","w281","w282","w283","w284","w285","w286","w287","w288","w289","w290","w291","w292"]
];

const pos = {
    x : 0,
    y : 0
}

const posFantome = {
    x : 0,
    y : 0
}

window.addEventListener('DOMContentLoaded',function(){
    init();
    initPacam();
    initFantome();
    ghostMove();
})



function init(){
    document.querySelector(".score").innerHTML = `Score : ${score}`;
    for(let i = 1; i <= wall; i++){
        let div = document.createElement("div");
        div.classList.add("w");
        div.classList.add("case");
        div.classList.add(`w${i}`)
        div.style.gridArea = `w${i}`;
        document.querySelector('.container-map').appendChild(div);
    }
    for(let i = 1; i <= boule; i++){
        let div = document.createElement("div");
        div.classList.add("b");
        div.classList.add("case");
        div.classList.add(`b${i}`)
        div.style.gridArea = `b${i}`;
        div.style.position = "relative"
        if(i === 130){
            div.appendChild(imgPacman);
            map.forEach(y => {
                if(y.indexOf(`b${i}`)!=-1){
                    pos.y = map.indexOf(y);
                    pos.x = y.indexOf(`b${i}`);
                }
            })
        }else{
            div.appendChild(initBoule());
        }
        document.querySelector('.container-map').appendChild(div);
    }
    for(let i = 1; i <= path; i++){
        let div = document.createElement("div");
        div.classList.add("p");
        div.classList.add("case");
        div.classList.add(`p${i}`)
        div.style.gridArea = `p${i}`;
        div.style.position = "relative"
        document.querySelector('.container-map').appendChild(div);
    }
    for(let i = 1; i <= supa; i++){
        let div = document.createElement("div");
        div.classList.add("s");
        div.classList.add("case");
        div.classList.add(`s${i}`)
        div.style.gridArea = `s${i}`;
        div.style.position = "relative"
        div.appendChild(initSuper());
        document.querySelector('.container-map').appendChild(div);
    }
    for(let i = 1; i <= voida; i++){
        let div = document.createElement("div");
        div.classList.add("v");
        div.classList.add("case");
        div.classList.add(`v${i}`)
        div.style.gridArea = `v${i}`;
        document.querySelector('.container-map').appendChild(div);
    }

    document.querySelector(".p26").appendChild(imgFantome);
    map.forEach(y => {
        if(y.indexOf(`p26`)!=-1){
            posFantome.y = map.indexOf(y);
            posFantome.x = y.indexOf(`p26`);
        }
    })
}

function initPacam(){
    imgPacman.src = "/img/Pacman.png";
    imgPacman.style.height = "4rem";
    imgPacman.style.width = "4rem";
    imgPacman.style.position = "absolute";
    imgPacman.style.transition = "1s"
    imgPacman.style.left = "0rem";
}

function initBoule(){
    let imgBoule = document.createElement("img");
    imgBoule.src = "/img/Boule.png";
    imgBoule.style.height = "4rem";
    imgBoule.style.width = "4rem";
    return imgBoule;
}

function initSuper(){
    let imgSuper = document.createElement("img");
    imgSuper.src = "/img/Super.png";
    imgSuper.style.height = "4rem";
    imgSuper.style.width = "4rem";
    return imgSuper;
}

function initFantome(){
    imgFantome.src = "/img/RedGhostRigth.png";
    imgFantome.style.height = "4rem";
    imgFantome.style.width = "4rem";
    imgFantome.style.position = "absolute";
    imgFantome.style.transition = "1s"
    imgFantome.style.left = "0rem";
}

function getMapElem(){
    return map[pos.y][pos.x];
}

function getMapElemFant(){
    return map[posFantome.y][posFantome.x];
}

function increaseScore(doc){
    if(doc.childNodes[0] === undefined){
        ///////////////////////////////// ¯\_(ツ)_/¯¯ //////////////////////////////////
    }
    else if(doc.childNodes[0].src == "http://127.0.0.1:5500/img/Boule.png" || doc.childNodes[0].src == "http://127.0.0.1:5500/img/Super.png"){
        score = score + 100;
        document.querySelector(".score").innerHTML = `Score : ${score}`;
    }
}
/* IA Ghost V1
function FantomeMove(){
    let random = Math.floor(Math.random()*4) + 1;
    switch(random){
        case 1 :
            if((posFantome.y-1)>-1){
                if(map[posFantome.y-1][posFantome.x].charAt(0)=="b"){
                    posFantome.y--;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);  
                } else if(map[posFantome.y-1][posFantome.x].charAt(0)=="p"){
                    posFantome.y--;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
    
                } else if(map[posFantome.y-1][posFantome.x].charAt(0)=="s"){
                    posFantome.y--;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
                }
            }
            break;
        case 2 :
            if((posFantome.y+1)<map.length){
                if(map[posFantome.y+1][posFantome.x].charAt(0)=="b"){
                    posFantome.y++;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
    
                } else if(map[posFantome.y+1][posFantome.x].charAt(0)=="p"){
                    posFantome.y++;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
    
                } else if(map[posFantome.y+1][posFantome.x].charAt(0)=="s"){
                    posFantome.y++;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
                }
            }
            break
        case 3 :
            if((posFantome.x-1)>-1){
                if(map[posFantome.y][posFantome.x-1].charAt(0)=="b"){
                     posFantome.x--;
                     document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
     
                } else if(map[posFantome.y][posFantome.x-1].charAt(0)=="p"){
                     posFantome.x--;
                     document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
     
                } else if(map[posFantome.y][posFantome.x-1].charAt(0)=="s"){
                     posFantome.x--;
                     document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
                }
     
            } else if(map[posFantome.y][posFantome.x] == "p18"){
                 posFantome.x = map[posFantome.y].length-1;
                 document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
            }
            break;
        case 4 :
            if((posFantome.x+1)<map[posFantome.y].length){
                if(map[posFantome.y][posFantome.x+1].charAt(0)=="b"){
                     posFantome.x++;
                     document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
     
                } else if(map[posFantome.y][posFantome.x+1].charAt(0)=="p"){
                     posFantome.x++;
                     document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
                     
                } else if(map[posFantome.y][posFantome.x+1].charAt(0)=="s"){
                     posFantome.x++;
                     document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
     
             }else if(map[posFantome.y][posFantome.x] == "p33"){
                    posFantome.x = 0;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
                    }
            }


    }
    if(pos.x == posFantome.x && pos.y == posFantome.y){
        alert("GameOver");
    }
    if(score == 19200){
        alert("Win");
    }
}
*/ // Influencer le déplacement du fantôme pour la cohérence

let index = 0;
let left = false;
let right = false;
let topa = false;
let bottom = false

function ghostMove(){
    setTimeout(function(){
        console.log(getMapElemFant())
        console.log(left,right,topa,bottom)
        if(index < 3 ){
            index++;
            posFantome.y--;
            document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
        }
        if(left){
            if(map[posFantome.y+1][posFantome.x].charAt(0)!='w'||(map[posFantome.y-1][posFantome.x].charAt(0)!='w')){
                left = false;
            }
            else if(map[posFantome.y][posFantome.x-1].charAt(0)=='w'){
                    left = false;
                }else{
                    posFantome.x--;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
                }
            }

            if(right){
                if(map[posFantome.y+1][posFantome.x].charAt(0)!='w'||(map[posFantome.y-1][posFantome.x].charAt(0)!='w')){
                    right= false;
                }
                else if(map[posFantome.y][posFantome.x+1].charAt(0)=='w'){
                    right = false;
                }else{
                    posFantome.x++;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
                }
            }

            if(topa){
                if(map[posFantome.y][posFantome.x+1].charAt(0)!='w'||(map[posFantome.y][posFantome.x-1].charAt(0)!='w')){
                    topa= false;
                }
                else if(map[posFantome.y-1][posFantome.x].charAt(0)=='w'){
                    topa = false;
                }else{
                    posFantome.y--;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
                }
            }

            if(bottom){
                if(map[posFantome.y][posFantome.x+1].charAt(0)!='w'||(map[posFantome.y][posFantome.x-1].charAt(0)!='w')){
                    bottom= false;
                }
                else if(map[posFantome.y+1][posFantome.x].charAt(0)=='w'){
                    bottom = false;
                }else{
                    posFantome.y++;
                    document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
                }
            }
            if(!left&&!right&&!topa&&!bottom){
                switchMoveGhost()
            }
        ghostMove();
    }, 1000)
}

function switchMoveGhost(){
    let rand = Math.floor(Math.random()*Math.floor(4));
    switch(rand){
        case 0 :
            if(map[posFantome.y-1][posFantome.x].charAt(0)!='w'){
                topa=true;
                posFantome.y--;
                document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
            }else{
                switchMoveGhost();
            }
            break;
        case 1 :
            if(map[posFantome.y+1][posFantome.x]=='p11'){
                switchMoveGhost();
            }
            else if(map[posFantome.y+1][posFantome.x].charAt(0)!='w'){
                bottom=true;
                posFantome.y++;
                document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
            }else{
                switchMoveGhost();
            }
            break;
        case 2 :
            if(getMapElemFant == "p23"){
                posFantome.x = 0;
                document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
            }else if(map[posFantome.y][posFantome.x+1].charAt(0)!='w'){
                right = true;
                posFantome.x++;
                document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
            }else{
                switchMoveGhost()
            }
            break;
        case 3 :
            if(getMapElemFant == "p18"){
                posFantome.x = map[pos.y].length-1;
                document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
            }else if(map[posFantome.y][posFantome.x-1].charAt(0)!='w'){
                left = true;
                posFantome.x--;
                document.querySelector(`.${getMapElemFant()}`).appendChild(imgFantome);
            }else{
                switchMoveGhost();
            }
            break;
        default : switchMoveGhost();
    }
}

document.onkeydown = move;


function move(e){
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        if((pos.y-1)>-1){
            if(map[pos.y-1][pos.x].charAt(0)=="b"){
                pos.y--;
                increaseScore(document.querySelector(`.${getMapElem()}`));
                document.querySelector(`.${getMapElem()}`).textContent = "";
                imgPacman.style.transform = "rotate(90deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);

            } else if(map[pos.y-1][pos.x].charAt(0)=="p"){
                pos.y--;
                imgPacman.style.transform = "rotate(90deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);

            } else if(map[pos.y-1][pos.x].charAt(0)=="s"){
                pos.y--;
                increaseScore(document.querySelector(`.${getMapElem()}`));
                document.querySelector(`.${getMapElem()}`).textContent = "";
                imgPacman.style.transform = "rotate(90deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);
            }
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        if((pos.y+1)<map.length){
            if(map[pos.y+1][pos.x].charAt(0)=="b"){
                pos.y++;
                increaseScore(document.querySelector(`.${getMapElem()}`));
                document.querySelector(`.${getMapElem()}`).textContent = "";
                imgPacman.style.transform = "rotate(270deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);

            } else if(map[pos.y+1][pos.x].charAt(0)=="p"){
                pos.y++;
                imgPacman.style.transform = "rotate(270deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);

            } else if(map[pos.y+1][pos.x].charAt(0)=="s"){
                pos.y++;
                increaseScore(document.querySelector(`.${getMapElem()}`));
                document.querySelector(`.${getMapElem()}`).textContent = "";
                imgPacman.style.transform = "rotate(270deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);
            }
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
       if((pos.x-1)>-1){
           if(map[pos.y][pos.x-1].charAt(0)=="b"){
                pos.x--;
                increaseScore(document.querySelector(`.${getMapElem()}`));
                document.querySelector(`.${getMapElem()}`).textContent = "";
                imgPacman.style.transform = "rotate(0deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);

           } else if(map[pos.y][pos.x-1].charAt(0)=="p"){
                pos.x--;
                imgPacman.style.transform = "rotate(0deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);

           } else if(map[pos.y][pos.x-1].charAt(0)=="s"){
                pos.x--;
                increaseScore(document.querySelector(`.${getMapElem()}`));
                document.querySelector(`.${getMapElem()}`).textContent = "";
                imgPacman.style.transform = "rotate(0deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);
           }

       } else if(map[pos.y][pos.x] == "p18"){
            pos.x = map[pos.y].length-1;
            imgPacman.style.transform = "rotate(0deg)"
            document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);
        }
    }
    else if (e.keyCode == '39') {
       // right arrow
       if((pos.x+1)<map[pos.y].length){
           if(map[pos.y][pos.x+1].charAt(0)=="b"){
                pos.x++;
                increaseScore(document.querySelector(`.${getMapElem()}`));
                document.querySelector(`.${getMapElem()}`).textContent = "";
                imgPacman.style.transform = "rotate(180deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);

           } else if(map[pos.y][pos.x+1].charAt(0)=="p"){
                pos.x++;
                imgPacman.style.transform = "rotate(180deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);
                
           } else if(map[pos.y][pos.x+1].charAt(0)=="s"){
                pos.x++;
                increaseScore(document.querySelector(`.${getMapElem()}`));
                document.querySelector(`.${getMapElem()}`).textContent = "";
                imgPacman.style.transform = "rotate(180deg)"
                document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);
           }

        }else if(map[pos.y][pos.x] == "p33"){
            pos.x = 0;
            imgPacman.style.transform = "rotate(180deg)"
            document.querySelector(`.${getMapElem()}`).appendChild(imgPacman);
        }
    }
}
        

//transform: rotate(90deg)