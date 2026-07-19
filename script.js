const tripStart = new Date(
  "2026-07-21T08:00:00+02:00"
);

const itinerary = [
  {
    date: "21 July",
    city: "Amsterdam → Bergen",
    items: [
      "Travel to Bergen and settle in",
      "12:30–15:00 · VilVite",
      "15:30–17:30 · Bryggen",
      "17:40–19:10 · Bergenhus Fortress",
      "19:10–20:15 · Vågen"
    ]
  },
  {
    date: "22 July",
    city: "Bergen",
    items: [
      "10:00–13:30 · Mostraumen Fjord Cruise",
      "14:00–18:00 · Fløibanen and Mount Fløyen",
      "Playground and Troll Forest",
      "Fish Market · optional"
    ]
  },
  {
    date: "23 July",
    city: "Bergen → Oslo",
    items: [
      "08:08–15:09 · Vy train to Oslo",
      "16:15–17:15 · Oslo Opera House",
      "17:15–19:30 · MUNCH Museum"
    ]
  },
  {
    date: "24 July",
    city: "Oslo → Copenhagen",
    items: [
      "08:30–10:30 · Vigeland Sculpture Park",
      "14:30 · Arrive at cruise terminal",
      "16:30 · Overnight cruise departure"
    ]
  },
  {
    date: "25 July",
    city: "Copenhagen",
    items: [
      "11:30 · Nyhavn",
      "13:30 · Canal Cruise",
      "15:00 · Amalienborg",
      "Little Mermaid · optional"
    ]
  },
  {
    date: "26 July",
    city: "Copenhagen",
    items: [
      "13:00–22:00 · Tivoli Gardens",
      "Dinner inside Tivoli",
      "Carry only light emergency snacks"
    ]
  },
  {
    date: "27 July",
    city: "Copenhagen → Amsterdam",
    items: [
      "09:30–13:30 · Experimentarium",
      "16:15 · Target airport arrival",
      "19:10 · KLM flight to Amsterdam"
    ]
  }
];

const bookings = [
  {
    name: "Flights",
    details: "Outbound and return flights",
    status: "Paid"
  },
  {
    name: "Accommodation",
    details: "Bergen, Oslo and Copenhagen",
    status: "Paid"
  },
  {
    name: "Bergen–Oslo train",
    details: "23 July · 08:08–15:09",
    status: "Paid"
  },
  {
    name: "Oslo–Copenhagen cruise",
    details: "24 July · 16:30",
    status: "Paid"
  },
  {
    name: "Mostraumen cruise",
    details: "22 July · 10:00",
    status: "Pending"
  },
  {
    name: "MUNCH Museum",
    details: "Book closer to the visit",
    status: "Pending"
  },
  {
    name: "Canal Cruise",
    details: "Book 1–2 days before",
    status: "Pending"
  },
  {
    name: "Tivoli Gardens",
    details: "Book 1–2 days before",
    status: "Pending"
  },
  {
    name: "Experimentarium",
    details: "Buy on the day",
    status: "Pending"
  }
];

const packingItems = [
  "Passports and residence documents",
  "Travel insurance details",
  "Phone chargers",
  "Power bank",
  "Waterproof jackets",
  "Compact umbrellas",
  "Water-resistant shoes",
  "Layered clothing",
  "Medicines",
  "Child snacks",
  "Reusable water bottles",
  "Download offline Google Maps",
  "Install Skyss, Vy and Ruter",
  "Install Rejsebillet and Rejseplanen",
  "Keep tickets available in email or apps",
  "Check weather 48–72 hours before each city"
];

function updateCountdown() {

  const countdownElement =
    document.getElementById("countdown");

  const now = new Date();

  const difference =
    tripStart.getTime() - now.getTime();

  if (difference <= 0) {

    countdownElement.textContent =
      "The journey has begun";

    return;
  }

  const days =
    Math.floor(
      difference / 86400000
    );

  const hours =
    Math.floor(
      (difference % 86400000) / 3600000
    );

  const minutes =
    Math.floor(
      (difference % 3600000) / 60000
    );

  countdownElement.textContent =
    `${days} days · ${hours} hours · ${minutes} minutes`;

}

function renderItinerary() {

  const container =
    document.getElementById("itineraryList");

  container.innerHTML =
    itinerary
      .map(
        day => `
          <article class="timeline-card">

            <div class="timeline-date">
              ${day.date}
            </div>

            <div class="timeline-content">

              <h3>
                ${day.city}
              </h3>

              <ul>
                ${day.items
                  .map(
                    item => `<li>${item}</li>`
                  )
                  .join("")}
              </ul>

            </div>

          </article>
        `
      )
      .join("");

}

function renderBookings() {

  const container =
    document.getElementById("bookingList");

  container.innerHTML =
    bookings
      .map(
        booking => `
          <article class="booking-card">

            <h3>
              ${booking.name}
            </h3>

            <p>
              ${booking.details}
            </p>

            <span
              class="
                status
                ${
                  booking.status === "Paid"
                    ? "status-paid"
                    : "status-pending"
                }
              "
            >
              ${booking.status}
            </span>

          </article>
        `
      )
      .join("");

  const paidBookings =
    bookings.filter(
      booking =>
        booking.status === "Paid"
    ).length;

  const percentage =
    Math.round(
      paidBookings /
      bookings.length *
      100
    );

  document
    .getElementById("bookingProgressText")
    .textContent =
      `${percentage}% ready`;

  document
    .getElementById("bookingProgressBar")
    .style.width =
      `${percentage}%`;

}

function renderPackingList() {

  const savedItems =
    JSON.parse(
      localStorage.getItem(
        "scandinaviaPacking"
      ) || "{}"
    );

  const container =
    document.getElementById("packingList");

  container.innerHTML =
    packingItems
      .map(
        (item, index) => `
          <label
            class="
              check-item
              ${
                savedItems[index]
                  ? "completed"
                  : ""
              }
            "
          >

            <input
              type="checkbox"
              data-index="${index}"
              ${
                savedItems[index]
                  ? "checked"
                  : ""
              }
            >

            <span>
              ${item}
            </span>

          </label>
        `
      )
      .join("");

  container
    .querySelectorAll(
      'input[type="checkbox"]'
    )
    .forEach(
      checkbox => {

        checkbox.addEventListener(
          "change",
          event => {

            const latestItems =
              JSON.parse(
                localStorage.getItem(
                  "scandinaviaPacking"
                ) || "{}"
              );

            latestItems[
              event.target.dataset.index
            ] =
              event.target.checked;

            localStorage.setItem(
              "scandinaviaPacking",
              JSON.stringify(latestItems)
            );

            event.target
              .closest(".check-item")
              .classList.toggle(
                "completed",
                event.target.checked
              );

          }
        );

      }
    );

}

function setupThemeToggle() {

  const savedTheme =
    localStorage.getItem(
      "scandinaviaTheme"
    );

  if (savedTheme === "dark") {

    document.body.classList.add(
      "dark-mode"
    );

  }

  document
    .getElementById("themeToggle")
    .addEventListener(
      "click",
      () => {

        document.body.classList.toggle(
          "dark-mode"
        );

        const currentTheme =
          document.body.classList.contains(
            "dark-mode"
          )
            ? "dark"
            : "light";

        localStorage.setItem(
          "scandinaviaTheme",
          currentTheme
        );

      }
    );

}

document
  .getElementById("resetPacking")
  .addEventListener(
    "click",
    () => {

      localStorage.removeItem(
        "scandinaviaPacking"
      );

      renderPackingList();

    }
  );

renderItinerary();

renderBookings();

renderPackingList();

setupThemeToggle();

updateCountdown();

setInterval(
  updateCountdown,
  60000
);
