document.addEventListener("DOMContentLoaded", function() {
  const monthFilter = document.getElementById("month-filter");

  if (!monthFilter) {
    console.warn("No element with id 'month-filter' found.");
    return;
  }

  monthFilter.addEventListener("change", function () {
    const selectedMonth = this.value;
    const eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(card => {
      const cardMonth = card.getAttribute("data-month");

      if (selectedMonth === "all" || cardMonth === selectedMonth) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
