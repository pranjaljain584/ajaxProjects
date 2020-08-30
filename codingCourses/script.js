
$("#button").click(fetchCourses) ;

function fetchCourses(){
    $("#get-courses").remove() ;

    $.get("https://codingninjas.in/api/v3/courses" , function(response,status){

        var list = response.data.courses ;

        for(let i=0 ; i < list.length ; i++){

            let imageUrl = list[i].preview_image_url ;
            let name = list[i].name ;
            let level = list[i].level ;

            $("#courses").append(`<div class="card my-4 ml-3" style="width: 18rem;"><img src="${imageUrl}" class="card-img-top"><div class="card-body"><p class="card-text">${name}</p> <p class="float-right">${level}</p></div></div>`) ;

        }
    }) ;

}