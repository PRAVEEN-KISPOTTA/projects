
function clickToFetchImage(){
    var fetchImageAddress = new XMLHttpRequest();
    fetchImageAddress.onload = function(){
        console.log(fetchImageAddress.response);

        var responseJSON = JSON.parse(fetchImageAddress.response);
        var imageUrl = responseJSON.message;

        $("#imageID").attr("src", imageUrl);
    }



    fetchImageAddress.open("get","https://dog.ceo/api/breeds/image/random", true);
    fetchImageAddress.send();
}



$("#fetch-random-image").click(clickToFetchImage);