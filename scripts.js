var totalMCSlider = document.getElementById("totalMCPoints");
var totalMCOutput = document.getElementById("totalMCValue");
var totalOESlider = document.getElementById("totalOEPoints");
var totalOEOutput = document.getElementById("totalOEValue");

var mc_slider = document.getElementById("mcPoints");
var mc_output = document.getElementById("mcValue");
var oe_slider = document.getElementById("oePoints");
var oe_output = document.getElementById("oeValue");

var calculateButton = document.getElementById("calculateButton");
var finalGrade = document.getElementById("finalGrade");

// =============================================================
totalMCOutput.innerHTML = totalMCSlider.value;

totalOEOutput.innerHTML = totalOESlider.value;

totalMCSlider.oninput = function () {
    totalMCOutput.innerHTML = totalMCSlider.value;

    // Set max attribute
    mc_slider.setAttribute("max", totalMCSlider.value);
}

totalOESlider.oninput = function () {
    totalOEOutput.innerHTML = totalOESlider.value;

    // Set max attribute
    oe_slider.setAttribute("max", totalOESlider.value);
}

mc_slider.setAttribute("max", totalMCSlider.value);
oe_slider.setAttribute("max", totalOESlider.value);

// =============================================================
mc_output.innerHTML = mc_slider.value;
oe_output.innerHTML = oe_slider.value;

mc_slider.oninput = function () {
    mc_output.innerHTML = mc_slider.value;
}

oe_slider.oninput = function () {
    oe_output.innerHTML = oe_slider.value;
}

// =============================================================
function toggleExamSettings() {
    if (document.getElementById("exam-settings").style.display == "block") {
        document.getElementById("exam-settings").style.display = "none";
        return;
    }
    document.getElementById("exam-settings").style.display = "block";
}

function calculateGrade() {
    mcP = parseFloat(mc_slider.value);
    oeP = parseFloat(oe_slider.value);

    mcTot = parseFloat(totalMCSlider.value);
    oeTot = parseFloat(totalOESlider.value);

    var grade = ((((mcP - 0.333 * mcTot) / (mcTot - 0.333 * mcTot)) * mcTot + oeP) / (mcTot + oeTot)) * 10;

    if (grade >= 5.5) {
        finalGrade.style.color = "#00ff00";
    } else {
        finalGrade.style.color = "#ff0000";
        if (grade < 1) {
            grade = 1.0;
        }
    }

    if (grade % 1 == 0) {
        grade = grade + ".0";
    }

    finalGrade.innerHTML = grade;
}