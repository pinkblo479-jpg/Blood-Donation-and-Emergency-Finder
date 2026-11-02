
function searchDonor() {
    const bloodGroup = document.getElementById("bloodGroup").value;
    const result = document.getElementById("result");

    if (bloodGroup === "") {
        result.textContent = "Please select a blood group first.";
    } else {
        result.textContent =
            "You selected " + bloodGroup +
            ". Real donor search will be connected to the database later.";
    }
}

document.getElementById("donorSearchForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const bloodGroup =
            document.getElementById("donorBloodGroup").value;

        const city =
            document.getElementById("donorCity").value;

        const message =
            document.getElementById("donorSearchMessage");

        message.textContent =
            "Search request for " + bloodGroup +
            " blood group in " + city +
            " is ready. Donor database will be connected later.";

    });

document.getElementById("emergencyForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const message =
            document.getElementById("emergencyMessage");

        message.textContent =
            "Your emergency request form is ready. " +
            "The database will be connected later.";

    });

function searchHospitals() {
    const cityInput = document.getElementById("hospitalCity");
    const message = document.getElementById("hospitalMessage");

    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Please enter your city name.";
        return;
    }

    message.textContent =
        "Hospital search for " + city +
        " will work after connecting the backend.";
}

function editProfile() {
    document.getElementById("profileMessage").textContent =
        "Profile editing will be available after connecting the backend.";
}

function searchAdminDonors() {
    const searchInput = document.getElementById("donorSearch");
    const tableBody = document.getElementById("donorTableBody");
    const message = document.getElementById("adminDonorMessage");

    const searchValue = searchInput.value.trim().toLowerCase();
    const rows = tableBody.getElementsByTagName("tr");

    let found = false;

    for (let i = 0; i < rows.length; i++) {
        const donorName = rows[i].cells[1].textContent.toLowerCase();

        if (donorName.includes(searchValue)) {
            rows[i].style.display = "";
            found = true;
        } else {
            rows[i].style.display = "none";
        }
    }

    if (searchValue === "") {
        message.textContent = "Please enter a donor name.";
    } else if (!found) {
        message.textContent = "No donor found.";
    } else {
        message.textContent = "Search completed.";
    }
}

function changeDonorStatus(button) {
    const row = button.closest("tr");
    const statusCell = row.cells[5];

    if (statusCell.textContent.trim() === "Available") {
        statusCell.textContent = "Unavailable";
    } else {
        statusCell.textContent = "Available";
    }
}

function searchAdminHospitals() {
    const searchInput = document.getElementById("hospitalSearch");
    const tableBody = document.getElementById("hospitalTableBody");
    const message = document.getElementById("adminHospitalMessage");

    const searchValue = searchInput.value.trim().toLowerCase();
    const rows = tableBody.getElementsByTagName("tr");

    let found = false;

    for (let i = 0; i < rows.length; i++) {
        const hospitalName = rows[i].cells[1].textContent.toLowerCase();

        if (hospitalName.includes(searchValue)) {
            rows[i].style.display = "";
            found = true;
        } else {
            rows[i].style.display = "none";
        }
    }

    if (searchValue === "") {
        message.textContent = "Please enter a hospital name.";
    } else if (!found) {
        message.textContent = "No hospital found.";
    } else {
        message.textContent = "Search completed.";
    }
}

function changeHospitalStatus(button) {
    const row = button.closest("tr");
    const statusCell = row.cells[5];

    if (statusCell.textContent.trim() === "Available") {
        statusCell.textContent = "Unavailable";
    } else {
        statusCell.textContent = "Available";
    }
}
