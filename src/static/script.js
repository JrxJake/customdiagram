// static/script.js
document.addEventListener('DOMContentLoaded', function () {
    // Function to be executed when the DOM is fully loaded
    var yearDropdown = document.getElementById('selectYear');
    var makeDropdown = document.getElementById('selectMake');
    var modelDropdown = document.getElementById('selectModel');
    var submitButton = document.getElementById('submitButton');
    
    var selectedMake;

    yearDropdown.addEventListener('change', function () {
        var selectedYear = yearDropdown.options[yearDropdown.selectedIndex].text;

        alert('Selected year: ' + selectedYear);
    });

    makeDropdown.addEventListener('change', function () {
        selectedMake = makeDropdown.options[makeDropdown.selectedIndex].text;

        alert('Selected make: ' + selectedMake);

        removeOptions(modelDropdown);

        if (selectedMake == "Toyota") {
            addOption(modelDropdown, "4Runner", "4Runner");
            addOption(modelDropdown, "Tundra", "Tundra");
        }
        else if (selectedMake == "Dodge"){
            addOption(modelDropdown, "Charger", "Charger");
            addOption(modelDropdown, "Challenger", "Challenger");
        }

    });

    modelDropdown.addEventListener('change', function () {
        var selectedModel = modelDropdown.options[modelDropdown.selectedIndex].text;

        alert('Selected model: ' + selectedModel);
    });


});

function addOption(selectElement, value, text) {
    var option = document.createElement('option');
    option.value = value;
    option.text = text;
    selectElement.add(option);
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
}
    