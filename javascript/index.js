const dropdown = $("#referredby");
const popup = $(".mystery");
popup.css("display", "none");

dropdown.on("change", (e) => {
  let selected = e.target.value;
  if (selected === "Magic!" || selected === "Other") {
    popup.css("display", "initial");
  } else {
    popup.css("display", "none");
  }
});
