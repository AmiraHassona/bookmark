var siteNameInput = document.getElementById('siteName');
var siteUrlInput  = document.getElementById('siteUrl');
var submitButton  = document.getElementById('submitBtn');
var bookMarkerBox = document.getElementById('bookMarkerBox');
var alink = document.getElementsByTagName('a');
var globalIndex = " " ;
var bookMarkerArray ;

if (localStorage.getItem("bookMarkerTable") == null) {
    var bookMarkerArray =[] ;   
} else {
    bookMarkerArray = JSON.parse(localStorage.getItem("bookMarkerTable"));
    retrieveaddBookMarker();
}

function addBookMarker(){
    if (checkInput() == true) {
        var bookMarker = {
            siteNameValue : siteNameInput.value ,
            siteUrlValue  : siteUrlInput.value   
        };
         
        bookMarkerArray.push(bookMarker);
        localStorage.setItem("bookMarkerTable",JSON.stringify(bookMarkerArray));
        retrieveaddBookMarker();
        clearInput();
         console.log(bookMarkerArray);  
    }else{
        window.alert("Pleace Enter Your Data...");
    };
};

submitButton.addEventListener('click',addBookMarker);


function retrieveaddBookMarker(){
    var bookMarkerList = "" ;
    for (var i = 0; i <bookMarkerArray.length; i++) {
        bookMarkerList +=`<div class="d-flex p-4 my-2" >
        <h4 class="w-50 p-3">${bookMarkerArray[i].siteNameValue}</h4>
        <a  class="btn btn-primary my-3 mr-2" target="_blank" onclick="goToWeb(${i})";>Visit</a>
        <button class="btn btn-danger my-3" onclick="deleteBox(${i})"; >Delete</button>
        </div> `  
    };
    bookMarkerBox.innerHTML = bookMarkerList ;
};

function goToWeb(index){
     alink[index].setAttribute('href',`${bookMarkerArray[index].siteUrlValue}`);
};

function deleteBox(index){
    bookMarkerArray.splice(index ,1)
    localStorage.setItem("bookMarkerTable",JSON.stringify(bookMarkerArray));
    retrieveaddBookMarker();
};

function clearInput(){
    siteNameInput.value = " " ;
    siteUrlInput.value = " ";
};

function checkInput(){
    if ( siteNameInput.value != "" && siteUrlInput.value != "") {
        return true;    
    }else{
        return false;
    };
};


