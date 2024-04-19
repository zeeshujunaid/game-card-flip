var head = document.getElementById("heading")
var headingaa = document.getElementById("heading-again")

function over1(tag){
    head.innerHTML = "you lose "
    tag.src="https://media.gettyimages.com/id/165639019/vector/colored-queen-of-hearts-playing-card.jpg?s=1024x1024&w=gi&k=20&c=28Qrh8EVz2DylDJwGRLqWV11JoV_bmc35ejfK23v27I="
}
function over2(tag){
    head.innerHTML = "you lose "
    tag.src="https://media.istockphoto.com/id/124676510/photo/close-up-of-jack-of-spades-playing-card.jpg?s=612x612&w=0&k=20&c=JepUaNknZV_d4_keuzKZWWTmUTt--t85FH9d3t0HrWc="

}
    
    function over3(tag){
    head.innerHTML = "you win "
    tag.src="https://c0.klipartz.com/pngpicture/929/679/gratis-png-war-as-of-spades-naipe-as-of-spades.png"
}
function out1(tag) {
    tag.src="cardreal.jpg"
    head.innerHTML = headingaa.innerHTML
}