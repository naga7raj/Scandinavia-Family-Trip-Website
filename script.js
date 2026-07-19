const tripStart = new Date(
  "2026-07-21T08:00:00+02:00"
);

const itinerary = [
  {
    date: "21 July",
    title: "Amsterdam → Bergen",
    transport: "Flight from Amsterdam to Bergen",
    accommodation: "Airbnb in Bergen",
    schedule: [
      {
        time: "Arrival",
        activity: "Travel from Bergen Airport to the accommodation",
        note: "Use Bergen Light Rail or airport transport depending on luggage and arrival time."
      },
      {
        time: "12:30–15:00",
        activity: "VilVite Science Centre",
        note: "Interactive science museum suitable for both adults and children.",
        map: "https://www.google.com/maps/search/?api=1&query=VilVite+Bergen"
      },
      {
        time: "15:00–15:30",
        activity: "Travel to Bryggen",
        note: "Allow time for public transport and a short snack break."
      },
      {
        time: "15:30–17:30",
        activity: "Bryggen",
        note: "Explore the historic wooden buildings, narrow lanes and waterfront.",
        map: "https://www.google.com/maps/search/?api=1&query=Bryggen+Bergen"
      },
      {
        time: "17:40–19:10",
        activity: "Bergenhus Fortress",
        note: "Walk around the fortress grounds and waterfront area.",
        map: "https://www.google.com/maps/search/?api=1&query=Bergenhus+Fortress"
      },
      {
        time: "19:10–20:15",
        activity: "Vågen Harbour",
        note: "Relaxed evening walk and dinner nearby.",
        map: "https://www.google.com/maps/search/?api=1&query=Vagen+Harbour+Bergen"
      }
    ],
    food: "Carry light snacks for the child. Plan dinner near Bryggen or Vågen.",
    optional: "Fish Market, depending on energy and weather.",
    notes: [
      "Install the Skyss app before travelling.",
      "Keep rain jackets easily accessible.",
      "Avoid overloading the first day after the flight."
    ]
  },
  {
    date: "22 July",
    title: "Bergen – Fjord and Mount Fløyen",
    transport: "Walking, local public transport and fjord cruise",
    accommodation: "Airbnb in Bergen",
    schedule: [
      {
        time: "08:00–09:00",
        activity: "Breakfast and preparation",
        note: "Carry water, vegetarian sandwiches, fruit and child snacks."
      },
      {
        time: "09:15",
        activity: "Leave for the Mostraumen departure point",
        note: "Reach the pier at least 20–30 minutes before departure."
      },
      {
        time: "10:00–13:30",
        activity: "Mostraumen Fjord Cruise",
        note: "Scenic fjord cruise with waterfalls, narrow channels and mountain views.",
        map: "https://www.google.com/maps/search/?api=1&query=Mostraumen+Fjord+Cruise+Bergen"
      },
      {
        time: "13:30–14:00",
        activity: "Lunch and transfer to Fløibanen",
        note: "Have a quick lunch before taking the funicular."
      },
      {
        time: "14:00–14:30",
        activity: "Fløibanen Funicular",
        note: "Travel from the city centre to Mount Fløyen.",
        map: "https://www.google.com/maps/search/?api=1&query=Floibanen+Bergen"
      },
      {
        time: "14:30–18:00",
        activity: "Mount Fløyen",
        note: "Viewpoint, playground, walking paths and Troll Forest.",
        map: "https://www.google.com/maps/search/?api=1&query=Mount+Floyen+Bergen"
      },
      {
        time: "18:00 onwards",
        activity: "Return to Bergen centre",
        note: "Dinner and relaxed evening."
      }
    ],
    food: "Carry packed vegetarian food for the cruise. Food options on board may be limited.",
    optional: "Short additional walk at Mount Fløyen if weather and energy permit.",
    notes: [
      "Check the fjord cruise weather forecast the previous evening.",
      "Bring waterproof jackets even if the morning looks clear.",
      "Keep the child warm on the open deck."
    ]
  },
  {
    date: "23 July",
    title: "Bergen → Oslo",
    transport: "Vy scenic train",
    accommodation: "Scandic Byporten, Oslo",
    schedule: [
      {
        time: "06:30–07:15",
        activity: "Breakfast and final packing",
        note: "Keep train tickets and food easily accessible."
      },
      {
        time: "07:15",
        activity: "Leave for Bergen station",
        note: "Aim to reach the station at least 30 minutes before departure."
      },
      {
        time: "08:08–15:09",
        activity: "Vy train from Bergen to Oslo",
        note: "Scenic railway journey. Carry lunch, snacks, water and entertainment for the child.",
        map: "https://www.google.com/maps/search/?api=1&query=Bergen+Railway+Station"
      },
      {
        time: "15:09–15:45",
        activity: "Arrive in Oslo and check in",
        note: "Scandic Byporten is connected to Oslo Central Station."
      },
      {
        time: "16:15–17:15",
        activity: "Oslo Opera House",
        note: "Walk on the sloping roof and enjoy harbour views.",
        map: "https://www.google.com/maps/search/?api=1&query=Oslo+Opera+House"
      },
      {
        time: "17:15–19:30",
        activity: "MUNCH Museum",
        note: "Focus on the main galleries and family-friendly areas.",
        map: "https://www.google.com/maps/search/?api=1&query=MUNCH+Museum+Oslo"
      },
      {
        time: "19:30 onwards",
        activity: "Dinner and return to hotel",
        note: "Choose a restaurant near Bjørvika or Oslo Central Station."
      }
    ],
    food: "Carry lunch for the train. Have dinner close to the hotel to avoid a long evening.",
    optional: "Harbour promenade if the family still has energy.",
    notes: [
      "Install the Vy app and download tickets in advance.",
      "Keep one small day bag accessible during the train journey.",
      "Avoid checking in large luggage if possible."
    ]
  },
  {
    date: "24 July",
    title: "Oslo → Copenhagen",
    transport: "Oslo public transport and overnight cruise",
    accommodation: "Overnight cabin on Go Nordic Cruise",
    schedule: [
      {
        time: "07:30–08:15",
        activity: "Breakfast and check-out preparation",
        note: "Leave luggage at the hotel after check-out if permitted."
      },
      {
        time: "08:30–10:30",
        activity: "Vigeland Sculpture Park",
        note: "Morning visit before the park becomes busy.",
        map: "https://www.google.com/maps/search/?api=1&query=Vigeland+Sculpture+Park"
      },
      {
        time: "10:30–12:00",
        activity: "Return to central Oslo",
        note: "Collect luggage and have lunch."
      },
      {
        time: "12:00–13:30",
        activity: "Lunch and cruise preparation",
        note: "Buy any snacks or essentials needed for the overnight cruise."
      },
      {
        time: "13:30",
        activity: "Leave for the cruise terminal",
        note: "Allow sufficient time for public transport and luggage."
      },
      {
        time: "14:30",
        activity: "Target arrival at cruise terminal",
        note: "Complete check-in and boarding procedures."
      },
      {
        time: "16:30",
        activity: "Go Nordic Cruise departure",
        note: "Oslo to Copenhagen overnight sailing."
      },
      {
        time: "Evening",
        activity: "Explore the ship",
        note: "Dinner, deck views and family relaxation."
      }
    ],
    food: "Have lunch before boarding. Compare onboard dinner options with any pre-booked meal package.",
    optional: "Short visit to Aker Brygge only if timing remains comfortable.",
    notes: [
      "Do not plan another major Oslo attraction before the cruise.",
      "Keep passports and cruise documents in hand luggage.",
      "Reach the terminal early rather than taking risks with boarding time."
    ]
  },
  {
    date: "25 July",
    title: "Arrival in Copenhagen",
    transport: "Cruise arrival, local train, metro and walking",
    accommodation: "Hotel in Copenhagen",
    schedule: [
      {
        time: "Morning",
        activity: "Breakfast onboard and arrival preparation",
        note: "Pack cabin items before the ship docks."
      },
      {
        time: "Arrival",
        activity: "Disembark and travel to hotel",
        note: "Leave luggage at the hotel if the room is not ready."
      },
      {
        time: "11:30–13:00",
        activity: "Nyhavn",
        note: "Walk along the colourful harbour and have lunch nearby.",
        map: "https://www.google.com/maps/search/?api=1&query=Nyhavn+Copenhagen"
      },
      {
        time: "13:30–14:30",
        activity: "Copenhagen Canal Cruise",
        note: "See the city from the water, including historic and modern landmarks.",
        map: "https://www.google.com/maps/search/?api=1&query=Canal+Tours+Copenhagen"
      },
      {
        time: "15:00–16:30",
        activity: "Amalienborg Palace",
        note: "Walk around the palace square and waterfront.",
        map: "https://www.google.com/maps/search/?api=1&query=Amalienborg+Palace"
      },
      {
        time: "16:30 onwards",
        activity: "Return to hotel or relaxed city walk",
        note: "Keep the evening flexible after the overnight cruise."
      }
    ],
    food: "Lunch around Nyhavn. Look for vegetarian restaurants away from the most tourist-heavy waterfront tables.",
    optional: "Little Mermaid, only if convenient and the family is not tired.",
    notes: [
      "Install Rejsebillet and Rejseplanen.",
      "Check canal cruise departure location carefully.",
      "Keep the first Copenhagen day moderately paced."
    ]
  },
  {
    date: "26 July",
    title: "Copenhagen – Tivoli Gardens",
    transport: "Public transport and walking",
    accommodation: "Hotel in Copenhagen",
    schedule: [
      {
        time: "Morning",
        activity: "Relaxed breakfast and free time",
        note: "Keep the morning light because Tivoli will be a long day."
      },
      {
        time: "11:30–12:30",
        activity: "Lunch before Tivoli",
        note: "Have a proper meal before entering."
      },
      {
        time: "13:00",
        activity: "Enter Tivoli Gardens",
        note: "Review rides, shows and child-friendly activities first.",
        map: "https://www.google.com/maps/search/?api=1&query=Tivoli+Gardens+Copenhagen"
      },
      {
        time: "13:00–18:00",
        activity: "Rides, gardens and attractions",
        note: "Take regular breaks and avoid rushing between rides."
      },
      {
        time: "18:00–19:00",
        activity: "Dinner inside Tivoli",
        note: "Choose a restaurant with suitable vegetarian and child-friendly options."
      },
      {
        time: "19:00–22:00",
        activity: "Evening entertainment",
        note: "Enjoy the lights, atmosphere and any scheduled performances."
      }
    ],
    food: "Eat inside Tivoli. Carry only emergency snacks and water.",
    optional: "Stay until closing only if the child and adults remain comfortable.",
    notes: [
      "Check whether ride passes are financially worthwhile.",
      "Identify child height restrictions before queuing.",
      "Keep a meeting point in case the group becomes separated."
    ]
  },
  {
    date: "27 July",
    title: "Copenhagen → Amsterdam",
    transport: "Public transport and KLM flight",
    accommodation: "Return home",
    schedule: [
      {
        time: "07:30–08:30",
        activity: "Breakfast and hotel check-out",
        note: "Leave luggage at the hotel if needed."
      },
      {
        time: "08:30",
        activity: "Travel to Experimentarium",
        note: "Check the fastest route using Rejseplanen."
      },
      {
        time: "09:30–13:30",
        activity: "Experimentarium",
        note: "Interactive science centre with several activities for children and adults.",
        map: "https://www.google.com/maps/search/?api=1&query=Experimentarium+Copenhagen"
      },
      {
        time: "13:30–14:30",
        activity: "Lunch",
        note: "Eat before collecting luggage and travelling to the airport."
      },
      {
        time: "14:30–15:15",
        activity: "Collect luggage",
        note: "Allow extra time for hotel access and local transport."
      },
      {
        time: "15:15",
        activity: "Leave for Copenhagen Airport",
        note: "Target arrival well ahead of the flight."
      },
      {
        time: "16:15",
        activity: "Target airport arrival",
        note: "Check in, security and final meal or snack."
      },
      {
        time: "19:10",
        activity: "KLM flight to Amsterdam",
        note: "End of the Scandinavia family trip."
      }
    ],
    food: "Lunch after Experimentarium. Carry airport snacks for the child.",
    optional: "No additional city sightseeing recommended on the flight day.",
    notes: [
      "Keep passports and flight documents readily available.",
      "Check KLM app for gate or schedule changes.",
      "Leave enough buffer for airport travel."
    ]
  }
];

const bookings = [
  {
    name: "Flights",
    details: "Amsterdam–Bergen and Copenhagen–Amsterdam",
    status: "Paid"
  },
  {
    name: "Accommodation",
    details: "Bergen, Oslo and Copenhagen",
    status: "Paid"
  },
  {
    name: "Bergen–Oslo train",
    details: "Vy train on 23 July, 08:08–15:09",
    status: "Paid"
  },
  {
    name: "Oslo–Copenhagen cruise",
    details: "Go Nordic Cruise on 24 July, 16:30",
    status: "Paid"
  },
  {
    name: "Mostraumen Fjord Cruise",
    details: "22 July, planned departure at 10:00",
    status: "Pending"
  },
  {
    name: "MUNCH Museum",
    details: "Book approximately 3–5 days before",
    status: "Pending"
  },
  {
    name: "Copenhagen Canal Cruise",
    details: "Book 1–2 days before for a preferred slot",
    status: "Pending"
  },
  {
    name: "Tivoli Gardens",
    details: "Book shortly before the visit",
    status: "Pending"
  },
  {
    name: "Experimentarium",
    details: "Can be purchased close to or on the day",
    status: "Pending"
  }
];

const packingItems = [
  "Passports and residence documents",
  "Travel insurance details",
  "Flight, train and cruise tickets",
  "Phone chargers",
  "Power bank",
  "Waterproof jackets",
  "Compact umbrellas",
  "Water-resistant shoes",
  "Layered clothing",
  "Medicines",
  "Child snacks",
  "Reusable water bottles",
  "Vegetarian sandwiches for cruise and train",
  "Download offline Google Maps",
  "Install Skyss app",
  "Install Vy app",
  "Install Ruter app",
  "Install Rejsebillet app",
  "Install Rejseplanen app",
  "Install KLM app",
  "Check weather 48–72 hours before each city",
  "Keep tickets available offline",
  "Carry a small day bag",
  "Keep emergency EUR reserve"
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
    Math.floor(difference / 86400000);

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
      .map(day => {
        const scheduleRows = day.schedule
          .map(
            item => `
              <div class="schedule-row">

                <div class="schedule-time">
                  ${item.time}
                </div>

                <div class="schedule-detail">

                  <h4>${item.activity}</h4>

                  <p>${item.note}</p>

                  ${
                    item.map
                      ? `
                        <a
                          class="map-link"
                          href="${item.map}"
                          target="_blank"
                          rel="noopener"
                        >
                          Open in Google Maps ↗
                        </a>
                      `
                      : ""
                  }

                </div>

              </div>
            `
          )
          .join("");

        const practicalNotes = day.notes
          .map(note => `<li>${note}</li>`)
          .join("");

        return `
          <article class="detailed-day-card">

            <div class="day-card-header">

              <div class="day-date">
                ${day.date}
              </div>

              <div>

                <h3>${day.title}</h3>

                <p>
                  <strong>Transport:</strong>
                  ${day.transport}
                </p>

                <p>
                  <strong>Stay:</strong>
                  ${day.accommodation}
                </p>

              </div>

            </div>

            <div class="schedule-list">
              ${scheduleRows}
            </div>

            <div class="day-info-grid">

              <div class="day-note-box">

                <h4>Food plan</h4>

                <p>${day.food}</p>

              </div>

              <div class="day-note-box">

                <h4>Optional</h4>

                <p>${day.optional}</p>

              </div>

              <div class="day-note-box practical-box">

                <h4>Practical notes</h4>

                <ul>
                  ${practicalNotes}
                </ul>

              </div>

            </div>

          </article>
        `;
      })
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

            <h3>${booking.name}</h3>

            <p>${booking.details}</p>

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

            <span>${item}</span>

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
