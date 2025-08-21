// Login Function
function loginOperator() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    window.location.href = "dashboard.html";
    return false;
  } else {
    alert("Invalid Credentials! Try admin / 1234");
    return false;
  }
}

// Generate Sample Markers
window.onload = function () {
  const map = document.getElementById("map");
  if (map) {
    // Sample Capsule Locations (blue)
    const capsules = [
      { top: "30%", left: "40%" },
      { top: "60%", left: "70%" },
      { top: "45%", left: "20%" }
    ];

    // Sample Help Areas (red)
    const helpAreas = [
      { top: "25%", left: "60%" },
      { top: "70%", left: "50%" }
    ];

    capsules.forEach(pos => {
      let marker = document.createElement("div");
      marker.className = "marker capsule-marker";
      marker.style.top = pos.top;
      marker.style.left = pos.left;
      map.appendChild(marker);
    });

    helpAreas.forEach(pos => {
      let marker = document.createElement("div");
      marker.className = "marker help-marker";
      marker.style.top = pos.top;
      marker.style.left = pos.left;
      map.appendChild(marker);
    });
  }
};
