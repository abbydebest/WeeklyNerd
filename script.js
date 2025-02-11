let bag = document.querySelector(".bagContainer");
let minibag = document.querySelector(".charm1 img");
let charm = document.querySelector(".charm2 img");
let stuffMiniBag = document.querySelector(".stuffMiniBag");

let stuff = document.querySelector(".stuff");
let hidden = document.querySelector(".hidden");
let shadow = document.querySelector(".shadow");


// SOURCE: https://pixelscommander.com/javascript/rotate-html-elements-with-mouse/
    new Propeller(bag, {
        inertia: 0.2,
        onDragStop: function() {
            console.log('stop');
            console.log(this.angle)

            if (this.angle < 250 && 100 < this.angle) {
                console.log("storten maar die spulletjes");
                stuff.classList.remove("hidden");
                stuffMiniBag.classList.remove("hidden");
                shadow.classList.remove("hidden");
            } else {
                // stuff.classList.add("hidden");
                // stuffMiniBag.classList.add("hidden");
                // shadow.classList.add("hidden");
            }
        },
        onDragStart: function () {
            console.log('start');
        },
        onRotate: function () {
            console.log(this.angle);

            // if (this.angle < 250 && 100 < this.angle) {
            //     console.log("dontShowStuff");
            //     stuff.classList.add("hidden");
            //     stuffMiniBag.classList.add("hidden");
            //     shadow.classList.add("hidden");
            // }
                
            minibag.style.setProperty("--angle", this.angle);
            charm.style.setProperty("--angle", this.angle);
            stuffMiniBag.style.setProperty("--angle", this.angle);
        }
});

    // function showLibraryInfo() {
    //     if (window.libInfoShown !== true) {
    //         var windStuff = document.getElementsByClassName('wind');
    //         var libStuff = document.getElementsByClassName('propeller');
    //         for (var i = 0; i < windStuff.length; i++) {
    //             var obj = windStuff[i];
    //             obj.style.display = 'none';
    //         }
    //         for (var i = 0; i < libStuff.length; i++) {
    //             var obj = libStuff[i];
    //             obj.style.display = 'inline-block';
    //         }
    //         window.libInfoShown = true;
    //     }
    // }


