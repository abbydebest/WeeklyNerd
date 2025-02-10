let bag = document.querySelector(".bagContainer");
let minibag = document.querySelector(".charm1 img");
let charm = document.querySelector(".charm2 img");
let airpodCase = document.querySelector(".extraSmall img");
let stuff = document.querySelector(".stuff");
let show = document.querySelector(".show");


// SOURCE: https://pixelscommander.com/javascript/rotate-html-elements-with-mouse/
    new Propeller(bag, {
        inertia: 0.2,
        onDragStop: function() {
            console.log('stop');
            console.log(this.angle)

            if (
                this.angle < 250 && 100 < this.angle
            ) {
                console.log("storten maar die spulletjes")
                stuff.classList.remove("show");
            } else {
                stuff.classList.add("show");
            }
        },
        onDragStart: function () {
            console.log('start');
        },
        onRotate: function () {
            console.log(this.angle);

            minibag.style.setProperty("--angle", this.angle);
            charm.style.setProperty("--angle", this.angle);
            airpodCase.style.setProperty("--angle", this.angle);
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


