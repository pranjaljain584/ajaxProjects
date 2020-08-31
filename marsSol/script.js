
  
$("form button").click(function(e){
    e.preventDefault() ;

    var sol= $("#sol").val() ;
    var page = $("#page").val() ;

    if(sol==="" || page===""){
        alert("Please fill the sol within 1000");
        return;
    }

    if(sol >1000){
        alert("please fill sol within 1000") ;
    }

    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2`

    $.get(url,function(response,status){

        let list =response.photos ;

        if(list.length === 0 ) {
            alert("No photos available for this date");
            return;
        }

        $("#nasa-images img").remove() ;   

        for(let i = 0 ; i < list.length ; i++){

            let imgUrl = list[i].img_src ;         

            $("#nasa-images").append(`<img src="${imgUrl}">`) ;
        }
    }) ;

});