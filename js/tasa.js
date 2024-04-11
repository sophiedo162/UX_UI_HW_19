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
})




