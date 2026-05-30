let ifloggedIn = true;
let user = "Viewerr";

if (ifloggedIn) {

    if (user === "Admin") {
        console.log("Admin can do all operations");
    }
    else if (user === "Editor") {
        console.log("Editor can edit")
    }
    else if (user === "Viewer") {
        console.log("user can only view")
    }
    else {
        console.log("you are a guest")
    }
}
else {
    console.log("not loggged In")
}

