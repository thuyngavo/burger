//==========================================================================================
// Make sure we wait to attach our handlers until the DOM is fully loaded.
//==========================================================================================
$(function() {

//==========================================================================================
//CREATE: onclick function to create new burgers 
//==========================================================================================
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        //variable to hold new burger
        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        //send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added da burger");
            //reload the page to get the updated burger list.
            location.reload();
        });
    });

//==========================================================================================
//UPDATE: onclick function to edit burger to devoured
//==========================================================================================
    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        //send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("You ate da burger!");
            //reload the page to get the updated burger list.
            location.reload();
        });
    });

//==========================================================================================
//DELETE: onclick function to remove burger from list
//==========================================================================================
    $(".trashburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        //send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        // Reload the page to get the updated burger list.
        }).then(location.reload());
    });
});