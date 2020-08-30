
var breedImage = $("#image");
var dropdown = $("#list");
var allowSubmit = true;
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropdown.change(function () {
    allowSubmit = true;
});

$("#fetch-img").click(function (e) {
    e.preventDefault();

    if (allowSubmit) {
        breed = dropdown.val();
        displayDog(breed);
        allowSubmit = false;
    }

});

$("#next a").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        displayDog(breed);
    }
});

function displayDog(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#image img").remove();

    $.get(url, function (data, status) {
        let imageUrl = data.message;
        breedImage.append('<img src="' + imageUrl + '" alt="' + breed + '">');
    });

}













// var list = $("#list") ;
// var breed ;
// var allowSubmit = true ;
// var breedImage = $("#img") ;

// $.get("https://dog.ceo/api/breeds/list/all",function(data,status){
//     let dogbreed = data.message ;
//     for(let breed in dogbreed){
//         list.append('<option value=" '+ breed + '"> ' + breed + ' </option>');
//     }
// });

// list.change(function(){
//     allowSubmit=true ;
// });

// $("#fetch-img").click(function(event){
//     event.preventDefault() ;
//     if(allowSubmit){

//         breed=list.val() ;
//         displayDog(breed);
//         allowSubmit=false;

//     }
// }) ;

// $("#next").click(function(event){
//     event.preventDefault() ;
//     if(breed !== undefined){
//         displayDog(breed) ;
//     }
// });

// function displayDog(breed){
//     let url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    
//     $("#img img").remove() ;

//     $.get(url , function(data,status){
//         let imageUrl = data.message ;
//         breedImage.append('<img src=" '+imageUrl+' " alt=" '+breed+'">') ;
//     });
// }
