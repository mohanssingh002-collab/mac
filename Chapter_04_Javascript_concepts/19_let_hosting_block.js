let x = "gloabl"

if (true) {
    //console.log(x); //TDZ temporary dead zone
    let x = "block"
    console.log(x);
}