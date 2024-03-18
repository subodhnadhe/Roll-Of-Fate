//generating random number for left image
let rand1=Math.floor(Math.random()*6)+1;
let randImgSrc1= "./images/dice"+rand1+".png";
//setting img attribute
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randImgSrc1);

//generating random number for left image
let rand2=Math.floor(Math.random()*6)+1;
let randImgSrc2= "./images/dice"+rand2+".png";
//setting img attribute
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randImgSrc2);

//displaying the result
if(rand1>rand2){
    document.querySelector("h1").innerHTML="You won..!";
}
else if(rand1<rand2){
    document.querySelector("h1").innerHTML="FATE won..!";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw..!";
}


//refreshing the page after clicking on roll button
function resetPage() {
    location.reload();
}
