import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// add a piece of text at position (120, 80)

loadSprite("kartka", "CHOINKI.png")
loadSprite("balwan", "balwan.png")

loadSound("muzyka", "DZISIAJ_W_BETLEJEM.mp3")

add([
    sprite("kartka"),
    pos(0,0),
]);

const balwan = add([
    sprite("balwan"),
    pos(150,150),
 ])
 

let wprawo=true

onUpdate(()=>{

    if( wprawo && balwan.pos.x< 500)

    {

        balwan.pos.x=balwan.pos.x+1

    }

    else if(wprawo && balwan.pos.x==500)

    { 
        wprawo=false

    }

    else if(!wprawo && balwan.pos.x>200)


    {
        balwan.pos.x=balwan.pos.x-1
    }

    else 

    { 
        wprawo = true
    }
})  

onMouseRelease(()=>play("muzyka"))
