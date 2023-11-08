document.addEventListener("DOMContentLoaded",function () {
    // const tableHtml = localStorage.getItem("DataTable");
    // if (tableHtml) {
    //     document.querySelector(".result").innerHTML = tableHtml;
    // }
//will be true, when user will choose valid data for them
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

    function isValidY(event) {
        let y = event.target.value;
        console.log("текущий y: " + y);
        y = y.replace(",",".");
        if (y.trim() === "" || isNaN(y)) {
            yValid = false;
            checkEverythingIsValid();
            return false;
        } else if (y >= -3 && y <= 5) {
            yValid = true;
            checkEverythingIsValid();
            return true;
        } else {
            yValid = false;
            checkEverythingIsValid();
            return false;
        }
    }

    function isClickedX(event) {
        xValid = true;
        checkEverythingIsValid();
        return true;
    }

    function isSelectedR(event) {
        let R = event.target.value;
        if (R !== undefined && R !== "") {
            RValid = true;
            checkEverythingIsValid();
        }
    }

    $(document).ready(function () {
        $("#submit-button").click(function () {


            let localTime = Intl.DateTimeFormat().resolvedOptions().timeZone;
            let formData = $("#coordinatesForm").serialize();

            formData += "&localTime=" + localTime       

            $.ajax({
                type: "POST",
                url: "areaCheckServlet",
                data: formData,
                success: function (result) {
                    console.log(result)
                    $("#result").append(result);
                    // table = ""
                    // for (let i = 0; i < result.length; i++) {
                    //     table += result[i];
                    // }
                    // localStorage.setItem("DataTable",table)
                },
                error: function (error) {
                    console.error("Error while getting data from server");
                }
            })
        });
    });
});
