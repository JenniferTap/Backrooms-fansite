let title = document.getElementById("title");
let fonts = ["Chiller","Papyrus","Impact","Blackletter","Rockwell","Papyrus","Old English Text Mt","Times New Roman","Stencil","Copperplate","Chalkboard","Brush Script MT"]


//CODE HERE

title.onclick = function() {
    
    let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    title.style.fontFamily = randomFont;
};