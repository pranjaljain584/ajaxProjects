var input = $( "#datepicker" ).datepicker({
  dateFormat: "yy-mm-dd"
});

$("form button").click(function(e){
    e.preventDefault() ;
    var currentDate = input.val();

    if(currentDate===""){
        alert("Please fill the field");
        return;
    }

    $.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${currentDate}&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2`,function(response,status){

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