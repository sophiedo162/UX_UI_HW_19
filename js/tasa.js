// var heading = document.getElementById("myHeading");
// heading.addEventListener("click", function() {
//     heading.style.color = "red";
// });

// $("#myHeading").on("click", function() { 
//     $(this).css("color", "red"); });

// const searchIcon = document.getElementById("searchIcon"); 
// const searchBar = document.getElementById("searchBar"); 
// searchIcon.addEventListener("click", function() {  
//     if (searchBar.style.display === "none") { searchBar.style.display = "block"; } 
//     else { searchBar.style.display = "none"; } 
// });


$("#searchIcon").on("click", function(){
    $("#searchBar").css("display", "flex");
        $(".navBar").css("display", "none");
    
});

$("#closeIcon").on("click", function() {
    $(".navBar").css("display", "flex");
    $("#searchBar").css("display", "none")
});

$("#searchIconMobile").on("click", function(){
    $("#searchExpandMobile").css("display", "flex");
    $("#searchIconMobile").css("display", "none");
});

$("#closeIconMobile").on("click", function() {
    $("#searchIconMobile").css("display", "flex");
    $("#searchExpandMobile").css("display", "none")
});

$("#searchIconMobile").on("tap", function(){
    $("#searchExpandMobile").css("display", "flex");
    $("#searchIconMobile").css("display", "none");
});

$("#closeIconMobile").on("tap", function() {
    $("#searchIconMobile").css("display", "flex");
    $("#searchExpandMobile").css("display", "none")
});

$("#hamburgerMenu").on("click", function(){
    $(".menuMobileContainer").css("display","block");
    $(".menuMobileContainer").css("height","100vh");
    $(".menuMobile").css("opacity", "1");
});

$("#closeMenuMobile").on("click",function(){
    $(".menuMobileContainer").css("display","none");
    $(".menuMobileContainer").css("height","0vh");
    $(".menuMobile").css("opacity", "0");
});

$("#aboutUs").on("click", function(){
    $(".aboutUs").css("opacity", "1")
});

$("#membership").on("click", function(){
    $(".membership").css("opacity", "1")
});

