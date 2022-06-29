function login(element){
    console.log("element clicked");
    element.remove();
}

function definition(element){
    console.log("element clicked", definition);
    element.innerText = "Definithion added";
}

// function likes2(element){
//     console.log("element clicked", likes2);
//     element.innerText = "38 Likes";
// }

// function likes1(element){
//     console.log("element clicked", likes1);
//     element.innerText = "14 Likes";
// }

function cookieMonster(){
    console.log("Cookie Monster!", cookieMonster);
    var element = document.querySelector("#cookie-box")
    element.remove();
}

function incrementLike(id){
    console.log("liking!", id);
    var element = document.querySelector(id);
    console.log("elemet looks like this", element.innerText);
    let likeCount = Number(element.innerText);
    console.log(likeCount);
    likeCount++;
    element.innerText = likeCount;
}

function playVideo(element){
    console.log("wazaaa playing video");
    element.play();
}

function pawsVideo(element){
    element.pause();
}

function changeImg(element){
    console.log("wazaa", element);
    element.src = "https://cdn.discordapp.com/attachments/788487473033773146/989731581163864214/netflix-loading.gif";
}

function changeImg2(element){
    console.log("wazaa", element);
    element.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Warning_icon.svg/1153px-Warning_icon.svg.png";
}

// https://validator.w3.org/#validate_by_input


// onmouseover="playVideo(this)" onmouseout="pawsVideo(this)"


// function pawsVideo(element){
//     element.pause();
// }


// function changeImg(element){
//     console.log("wazaa", element);
// }


// function example(element) {

// }

// onmouseover







