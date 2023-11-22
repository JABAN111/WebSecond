document.addEventListener("DOMContentLoaded",function () {
    // const tableHtml = localStorage.getItem("DataTable");
    // if (tableHtml) {
    //     document.querySelector(".result").innerHTML = tableHtml;
    // }
//will be true, when user will choose valid data for them
    let E;
    let xValid = false;
    let yValid = false;
    let RValid = false;
// document.addEventListener('DOMContentLoaded', function () {
//Hooking the value of the input
    const xRadioButtons = document.querySelectorAll(".x");
    const Y = document.getElementById("yValue");
    const RButtons = document.querySelectorAll(".R")
    const submitButton = document.getElementById("submit-button");

//add event for every x-button
    for (const element of xRadioButtons) {
        element.addEventListener('change', isClickedX);
    }
//add event for every R-selector-button
    for (const element of RButtons) {
        element.addEventListener('change', isSelectedR);
    }
    Y.addEventListener('input', isValidY);

    function checkEverythingIsValid() {

        submitButton.disabled = !(xValid && yValid && RValid);
    }

    document.getElementById("yValue").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    });
    let y;

    function isValidY(event) {
        y = event.target.value;
        y = y.replace(",",".");
        if (y.trim() === "" || isNaN(y)) {
            yValid = false;
            checkEverythingIsValid();
            return false;
        } else if (y >= -5 && y <= 3) {
            yValid = true;
            checkEverythingIsValid();
            return true;
        } else {
            yValid = false;
            checkEverythingIsValid();
            return false;
        }
    }
    let x;
    function isClickedX(event) {
        xValid = true;
        x=event.target.value;
        checkEverythingIsValid();
        return true;
    }
    let R;
    function isSelectedR(event) {
        R = event.target.value;
        console.log(R);
        submitButton.disabled = false;

        // Rpicked(R);

        if (R !== undefined && R !== "") {
            RValid = true;
            setRadius(R);
            submitButton.disabled = false;
            E = event;
            checkEverythingIsValid();
        }

    }
    canvas.addEventListener("click",mouseHandler);
    function mouseHandler(event){
        if(currentRadius === null){
            return;
        }
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
        return clickingProcessing(mouse.x, mouse.y);
    }
    function clickingProcessing(clicked_x,clicked_y) {
         x = parseFloat((((clicked_x - w / 2) / hatchGap) / 2) * currentRadius).toFixed(3);
         y = parseFloat((-((clicked_y - h / 2) / hatchGap) / 2) * currentRadius).toFixed(3);
         xValid = true;
         yValid = true;
         checkEverythingIsValid();
        console.log(x, y);
        return {
            x: x,
            y: y,
        }
    }
    $(document).ready(function (){
        let pingInf = {codePing:0};
        $.ajax(
            {
                type: "GET",
                url: "controller",
                data: $.param(pingInf),
                success: function (result) {
                    $("#result").html(result);
                    let statusHit;
                    for (let i = 0; i < result.length; i++) {
                        statusHit = result[i] === "H";
                    }
                    printDotOnGraph(x, y, R, statusHit);
                },
                error: function (error) {
                    console.error("Error while getting data from server");
                }
            }
        )
    });
    $(document).ready(function () {
        $("#submit-button").click(function () {
            let localTime = Intl.DateTimeFormat().resolvedOptions().timeZone;
            let formData = {
                x: x,
                y: y,
                R: R,
                localTime: localTime
            }
            $.ajax({
                type: "POST",
                url: "controller",
                data: $.param(formData),
                success: function (result) {
                    $("#result").html(result);
                },
                error: function (error) {
                    console.error("Error while getting data from server");
                }
            })
        });
    });
});
