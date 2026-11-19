
let appointments = JSON.parse(
    localStorage.getItem("appointments")
) || [];

function displayAppointments() {

    let list = document.getElementById(
        "receptionistAppointmentList"
    );

    list.innerHTML = "";

    let total = appointments.length;

    let pending = appointments.filter(function(appointment) {
        return (appointment.status || "Pending") === "Pending";
    }).length;

    let approved = appointments.filter(function(appointment) {
        return appointment.status === "Approved";
    }).length;

    document.getElementById("totalAppointments").textContent = total;
    document.getElementById("pendingAppointments").textContent = pending;
    document.getElementById("approvedAppointments").textContent = approved;

    if (total === 0) {
        list.innerHTML =
            '<tr><td colspan="5">No appointments found.</td></tr>';
        return;
    }

    appointments.forEach(function(appointment) {

        let row = document.createElement("tr");

        let values = [
            appointment.department,
            appointment.doctor,
            appointment.date,
            appointment.time,
            appointment.status || "Pending"
        ];

        values.forEach(function(value) {

            let cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);

        });

        list.appendChild(row);

    });
}

function goToBooking() {
    window.location.href = "appointment.html";
}

function logout() {
    window.location.href = "login.html";
}

displayAppointments();
