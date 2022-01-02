console.log("script launched");
let detailsTitle = document.querySelector(".details-title");
let detailsImage = document.querySelector(".details-image");
let anchors = document.querySelectorAll(".thumbnails-anchor");//all html elements belonging class thumbnails-anchor
let thumbnailsTitle = document.querySelector(".thumbnails-title");
for(let i = 0; i < anchors.length; i++)
{
    anchors[i].addEventListener("click", function(event)
    {
        event.preventDefault();//canceling default behavior of anchor element hitting
        setDetails(anchors[i]);//setDetails function call with passing reference to appropriate anchor
    })
}
function setDetails(anchor)
{
    detailsImage.setAttribute("src",anchor.getAttribute("href"));
    detailsTitle.textContent = thumbnailsTitle.textContent + ": " + anchor.getAttribute ("data-details-title");

}