//declaration of variables
var placeholder=document.querySelector('.placeholderSrc');
var thumbs=document.querySelectorAll('.images');


thumbs.forEach(thumb => {
    //looping through each image using a for each loop and setting the src attribute of the thumbnail
//images to the placeholder src image when clicked
    thumb.addEventListener('click', function(){

    
    let thumbSrc=thumb.getAttribute('src');
    placeholder.setAttribute('src', thumbSrc);

    
    
    })
});


