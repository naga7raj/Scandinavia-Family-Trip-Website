const tripStart = new Date("2026-07-21T08:00:00+02:00");

const itinerary = [
  {
    date:"21 July", title:"Amsterdam → Bergen", transport:"Flight and Bergen local transport", stay:"Bergen accommodation",
    schedule:[
      ["Arrival","Airport transfer and check-in","Use Bergen Light Rail or airport transport depending on luggage and arrival time."],
      ["12:30–15:00","VilVite Science Centre","Interactive science museum suitable for adults and children.","VilVite+Bergen"],
      ["15:00–15:30","Travel to Bryggen","Allow time for public transport and a short snack break."],
      ["15:30–17:30","Bryggen","Explore the historic wooden buildings, narrow lanes and waterfront.","Bryggen+Bergen"],
      ["17:40–19:10","Bergenhus Fortress","Walk around the fortress grounds and waterfront area.","Bergenhus+Fortress"],
      ["19:10–20:15","Vågen Harbour","Relaxed evening walk and dinner nearby.","Vagen+Harbour+Bergen"]
    ],
    food:"Carry light snacks for the child. Plan dinner near Bryggen or Vågen.",
    optional:"Fish Market, depending on energy and weather.",
    notes:["Install the Skyss app before travelling.","Keep rain jackets easily accessible.","Avoid overloading the first day after the flight."]
  },
  {
    date:"22 July", title:"Bergen · Fjord and Mount Fløyen", transport:"Walking, public transport, cruise and funicular", stay:"Bergen accommodation",
    schedule:[
      ["08:00–09:00","Breakfast and preparation","Carry water, vegetarian sandwiches, fruit and child snacks."],
      ["09:15","Leave for the cruise departure point","Reach the pier at least 20–30 minutes before departure."],
      ["10:00–13:30","Mostraumen Fjord Cruise","Scenic fjord cruise with waterfalls, narrow channels and mountain views.","Mostraumen+Fjord+Cruise+Bergen"],
      ["13:30–14:00","Lunch and transfer","Have a quick lunch before taking the funicular."],
      ["14:00–14:30","Fløibanen Funicular","Travel from the city centre to Mount Fløyen.","Floibanen+Bergen"],
      ["14:30–18:00","Mount Fløyen","Viewpoint, playground, walking paths and Troll Forest.","Mount+Floyen+Bergen"],
      ["18:00 onwards","Return to Bergen centre","Dinner and a relaxed evening."]
    ],
    food:"Carry packed vegetarian food for the cruise because onboard options may be limited.",
    optional:"A short additional walk at Mount Fløyen if weather and energy permit.",
    notes:["Check the fjord weather the previous evening.","Bring waterproof jackets even if the morning looks clear.","Keep the child warm on the open deck."]
  },
  {
    date:"23 July", title:"Bergen → Oslo", transport:"Vy scenic train and walking", stay:"Scandic Byporten, Oslo",
    schedule:[
      ["06:30–07:15","Breakfast and final packing","Keep train tickets and food easily accessible."],
      ["07:15","Leave for Bergen station","Aim to reach the station at least 30 minutes before departure."],
      ["08:08–15:09","Vy train to Oslo","Scenic railway journey. Carry lunch, snacks, water and entertainment for the child.","Bergen+Railway+Station"],
      ["15:09–15:45","Arrive and check in","Scandic Byporten is connected to Oslo Central Station."],
      ["16:15–17:15","Oslo Opera House","Walk on the sloping roof and enjoy harbour views.","Oslo+Opera+House"],
      ["17:15–19:30","MUNCH Museum","Focus on the main galleries and family-friendly areas.","MUNCH+Museum+Oslo"],
      ["19:30 onwards","Dinner and hotel return","Choose a restaurant near Bjørvika or Oslo Central Station."]
    ],
    food:"Carry lunch for the train. Have dinner close to the hotel to avoid a long evening.",
    optional:"Harbour promenade if the family still has energy.",
    notes:["Install the Vy app and download tickets.","Keep one small day bag accessible during the train journey.","Keep essential medicines and documents with you."]
  },
  {
    date:"24 July", title:"Oslo → Copenhagen", transport:"Oslo public transport and overnight cruise", stay:"Go Nordic Cruise cabin",
    schedule:[
      ["07:30–08:15","Breakfast and check-out preparation","Leave luggage at the hotel after check-out if permitted."],
      ["08:30–10:30","Vigeland Sculpture Park","Morning visit before the park becomes busy.","Vigeland+Sculpture+Park"],
      ["10:30–12:00","Return to central Oslo","Collect luggage and have lunch."],
      ["12:00–13:30","Lunch and cruise preparation","Buy snacks or essentials needed for the overnight cruise."],
      ["13:30","Leave for cruise terminal","Allow sufficient time for public transport and luggage."],
      ["14:30","Target terminal arrival","Complete check-in and boarding procedures."],
      ["16:30","Cruise departure","Oslo to Copenhagen overnight sailing."],
      ["Evening","Explore the ship","Dinner, deck views and family relaxation."]
    ],
    food:"Have lunch before boarding. Review onboard dinner choices and any meal package.",
    optional:"Aker Brygge only if timing remains comfortable.",
    notes:["Do not plan another major Oslo attraction before the cruise.","Keep passports and cruise documents in hand luggage.","Reach the terminal early rather than risk boarding delays."]
  },
  {
    date:"25 July", title:"Arrival in Copenhagen", transport:"Cruise, local train, metro and walking", stay:"Copenhagen hotel",
    schedule:[
      ["Morning","Breakfast onboard","Pack cabin items before the ship docks."],
      ["Arrival","Disembark and travel to hotel","Leave luggage at the hotel if the room is not ready."],
      ["11:30–13:00","Nyhavn","Walk along the colourful harbour and have lunch nearby.","Nyhavn+Copenhagen"],
      ["13:30–14:30","Copenhagen Canal Cruise","See historic and modern landmarks from the water.","Canal+Tours+Copenhagen"],
      ["15:00–16:30","Amalienborg Palace","Walk around the palace square and waterfront.","Amalienborg+Palace"],
      ["16:30 onwards","Hotel or relaxed city walk","Keep the evening flexible after the overnight cruise."]
    ],
    food:"Lunch around Nyhavn. Look for vegetarian choices away from the busiest waterfront tables.",
    optional:"Little Mermaid only if convenient and the family is not tired.",
    notes:["Install Rejsebillet and Rejseplanen.","Check the canal cruise departure point carefully.","Keep the first Copenhagen day moderately paced."]
  },
  {
    date:"26 July", title:"Copenhagen · Tivoli Gardens", transport:"Public transport and walking", stay:"Copenhagen hotel",
    schedule:[
      ["Morning","Relaxed breakfast and free time","Keep the morning light because Tivoli will be a long day."],
      ["11:30–12:30","Lunch before Tivoli","Have a proper meal before entering."],
      ["13:00","Enter Tivoli Gardens","Review rides, shows and child-friendly activities first.","Tivoli+Gardens+Copenhagen"],
      ["13:00–18:00","Rides, gardens and attractions","Take regular breaks and avoid rushing between rides."],
      ["18:00–19:00","Dinner inside Tivoli","Choose vegetarian and child-friendly options."],
      ["19:00–22:00","Evening entertainment","Enjoy the lights, atmosphere and scheduled performances."]
    ],
    food:"Eat inside Tivoli. Carry only emergency snacks and water.",
    optional:"Stay until closing only if the child and adults remain comfortable.",
    notes:["Check whether ride passes are financially worthwhile.","Review child height restrictions before queuing.","Agree on a meeting point in case the group becomes separated."]
  },
  {
    date:"27 July", title:"Copenhagen → Amsterdam", transport:"Public transport and KLM flight", stay:"Return home",
    schedule:[
      ["07:30–08:30","Breakfast and check-out","Leave luggage at the hotel if needed."],
      ["08:30","Travel to Experimentarium","Check the fastest route using Rejseplanen."],
      ["09:30–13:30","Experimentarium","Interactive science centre for children and adults.","Experimentarium+Copenhagen"],
      ["13:30–14:30","Lunch","Eat before collecting luggage and travelling to the airport."],
      ["14:30–15:15","Collect luggage","Allow extra time for hotel access and local transport."],
      ["15:15","Leave for Copenhagen Airport","Target arrival well ahead of the flight."],
      ["16:15","Target airport arrival","Check-in, security and final meal or snack."],
      ["19:10","KLM flight to Amsterdam","End of the Scandinavia family trip."]
    ],
    food:"Lunch after Experimentarium. Carry airport snacks for the child.",
    optional:"No additional city sightseeing recommended on the flight day.",
    notes:["Keep passports and flight documents readily available.","Check the KLM app for gate or schedule changes.","Leave a comfortable airport buffer."]
  }
];

const bookings = [
  ["Flights","Amsterdam–Bergen and Copenhagen–Amsterdam","Paid"],
  ["Accommodation","Bergen, Oslo and Copenhagen","Paid"],
  ["Bergen–Oslo train","23 July · 08:08–15:09","Paid"],
  ["Oslo–Copenhagen cruise","24 July · 16:30","Paid"],
  ["Mostraumen Fjord Cruise","22 July · planned 10:00 departure","Pending"],
  ["MUNCH Museum","Book approximately 3–5 days before","Pending"],
  ["Copenhagen Canal Cruise","Book 1–2 days before for a preferred slot","Pending"],
  ["Tivoli Gardens","Book shortly before the visit","Pending"],
  ["Experimentarium","Buy close to or on the day","Pending"]
];

const packingItems = [
  "Passports and residence documents","Travel insurance details","Flight, train and cruise tickets",
  "Phone chargers","Power bank","Waterproof jackets","Compact umbrellas","Water-resistant shoes",
  "Layered clothing","Medicines","Child snacks","Reusable water bottles",
  "Vegetarian sandwiches for cruise and train","Download offline Google Maps","Install Skyss app",
  "Install Vy app","Install Ruter app","Install Rejsebillet app","Install Rejseplanen app",
  "Install KLM app","Check weather 48–72 hours before each city","Keep tickets available offline",
  "Carry a small day bag","Keep emergency EUR reserve"
];

const dailyWeather={"21 July": ["Bergen", "Cloudy; light afternoon rain", "16° / 12°"], "22 July": ["Bergen", "Cloudy start, then brighter", "20° / 9°"], "23 July": ["Bergen → Oslo", "Cloudy in Bergen; warmer in Oslo", "16–23°"], "24 July": ["Oslo", "Sun and cloud mix", "25° / 12°"], "25 July": ["Copenhagen", "Clouds, sun and a few showers", "20° / 13°"], "26 July": ["Copenhagen", "Morning showers, then brighter", "22° / 14°"], "27 July": ["Copenhagen", "Cloudy; possible afternoon shower", "22° / 14°"]};
const dailyApps={"21 July": ["KLM", "Skyss", "Google Maps"], "22 July": ["Skyss", "Google Maps", "Weather app"], "23 July": ["Vy", "Ruter", "Google Maps"], "24 July": ["Ruter", "Go Nordic Cruise", "Google Maps"], "25 July": ["Rejseplanen", "Rejsebillet", "Google Maps"], "26 July": ["Rejseplanen", "Tivoli", "Google Maps"], "27 July": ["Rejseplanen", "Rejsebillet", "KLM"]};
const sightDescriptions={"VilVite Science Centre": "A hands-on science centre with interactive experiments, technology exhibits and activities for children.", "Bryggen": "Bergen’s UNESCO-listed historic wharf, known for colourful wooden buildings and narrow medieval passages.", "Bergenhus Fortress": "One of Norway’s oldest and best-preserved fortifications, set beside Bergen harbour.", "Vågen Harbour": "Bergen’s scenic inner harbour, surrounded by historic waterfront buildings and restaurants.", "Mostraumen Fjord Cruise": "A scenic journey through Osterfjord to narrow Mostraumen, passing steep mountains and waterfalls.", "Fløibanen Funicular": "A short, steep funicular ride from central Bergen to the Mount Fløyen viewpoint.", "Mount Fløyen": "A panoramic viewpoint above Bergen with family walking trails, a playground and forest areas.", "Vy train to Oslo": "One of Europe’s most scenic rail journeys, crossing mountain plateaus, valleys and lakes.", "Oslo Opera House": "A striking waterfront building whose sloping roof can be walked for broad city and fjord views.", "MUNCH Museum": "A major waterfront museum dedicated to Edvard Munch and modern art across multiple floors.", "Vigeland Sculpture Park": "A large open-air sculpture installation inside Frogner Park, featuring more than 200 works.", "Nyhavn": "Copenhagen’s iconic 17th-century harbour, lined with colourful townhouses, cafés and historic boats.", "Copenhagen Canal Cruise": "A relaxed boat tour past canals, palaces, church towers and modern waterfront architecture.", "Amalienborg Palace": "The home of Denmark’s royal family, arranged around an elegant octagonal palace square.", "Tivoli Gardens": "A historic amusement park combining rides, landscaped gardens, restaurants and evening lights.", "Experimentarium": "A large interactive science centre with water, light, energy and human-body exhibits for families."};
const routeAdvice={"VilVite Science Centre": "From central Bergen, take Bybanen light rail toward Fyllingsdalen and walk a few minutes from Florida stop.", "Bryggen": "From Bergen city centre, it is generally a comfortable 10–15 minute walk.", "Bergenhus Fortress": "Around 8–10 minutes on foot from Bryggen along the harbour.", "Vågen Harbour": "Immediately beside Bryggen and Bergenhus; best explored on foot.", "Mostraumen Fjord Cruise": "Departure is normally from the harbour area; arrive 20–30 minutes early and verify the exact pier.", "Fløibanen Funicular": "About 5–10 minutes’ walk from Bryggen to the lower station.", "Mount Fløyen": "Use Fløibanen uphill; walking down is optional and takes considerably longer.", "Oslo Opera House": "About 8–10 minutes’ walk from Oslo Central Station and Scandic Byporten.", "MUNCH Museum": "Approximately 5 minutes’ walk from the Opera House through Bjørvika.", "Vigeland Sculpture Park": "Take metro/tram from central Oslo toward Majorstuen, then walk roughly 10–15 minutes.", "Nyhavn": "Use metro to Kongens Nytorv, then walk approximately 5 minutes.", "Copenhagen Canal Cruise": "Several departures are close to Nyhavn; confirm the operator’s pier before leaving the hotel.", "Amalienborg Palace": "Roughly 10 minutes on foot from Nyhavn.", "Tivoli Gardens": "Directly beside Copenhagen Central Station; easiest by train, metro or bus to the centre.", "Experimentarium": "Take train toward Hellerup and continue by bus or a short taxi; allow around 30–40 minutes from central Copenhagen."};

function updateCountdown(){
  const el=document.getElementById("countdown"),diff=tripStart-new Date();
  if(diff<=0){el.textContent="The journey has begun";return;}
  const d=Math.floor(diff/86400000),h=Math.floor((diff%86400000)/3600000),m=Math.floor((diff%3600000)/60000);
  el.textContent=`${d} days · ${h} hours · ${m} minutes`;
}

function renderItinerary(){
  document.getElementById("itineraryList").innerHTML=itinerary.map(day=>{
    const wx=dailyWeather[day.date]||["City","Check forecast","—"];
    const appList=dailyApps[day.date]||["Google Maps"];
    return `
    <article class="day-card">
      <div class="day-header">
        <div class="day-date">${day.date}</div>
        <div>
          <h3>${day.title}</h3>
          <p><strong>Transport:</strong> ${day.transport}</p>
          <p><strong>Stay:</strong> ${day.stay}</p>
          <div class="day-tools">${appList.map(a=>`<span class="app-chip">App: ${a}</span>`).join("")}</div>
        </div>
      </div>
      <div class="weather-strip">
        <div class="weather-pill"><span>Location</span><strong>${wx[0]}</strong></div>
        <div class="weather-pill"><span>Expected conditions</span><strong>${wx[1]}</strong></div>
        <div class="weather-pill"><span>Temperature</span><strong>${wx[2]}</strong></div>
      </div>
      <div class="schedule">
        ${day.schedule.map(item=>{
          const desc=sightDescriptions[item[1]]||"";
          const route=routeAdvice[item[1]]||"";
          return `
          <div class="schedule-row">
            <div class="schedule-time">${item[0]}</div>
            <div class="schedule-copy">
              <h4>${item[1]}</h4>
              ${desc?`<p class="sight-description">${desc}</p>`:""}
              <p>${item[2]}</p>
              ${route?`<p class="route-advice"><strong>Getting there:</strong> ${route}</p>`:""}
              ${item[3]?`<a class="map-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${item[3]}">Open in Google Maps ↗</a>`:""}
            </div>
          </div>`}).join("")}
      </div>
      <div class="day-notes">
        <div class="note-box"><h4>Food plan</h4><p>${day.food}</p></div>
        <div class="note-box"><h4>Optional</h4><p>${day.optional}</p></div>
        <div class="note-box note-wide"><h4>Practical notes</h4><ul>${day.notes.map(n=>`<li>${n}</li>`).join("")}</ul></div>
      </div>
    </article>`}).join("");
}
function renderBookings(){
  const list=document.getElementById("bookingList");
  list.innerHTML=bookings.map(b=>`<article class="booking-card"><h3>${b[0]}</h3><p>${b[1]}</p><span class="status ${b[2]==="Paid"?"status-paid":"status-pending"}">${b[2]}</span></article>`).join("");
  const paid=bookings.filter(b=>b[2]==="Paid").length,pct=Math.round(paid/bookings.length*100);
  document.getElementById("bookingProgressText").textContent=`${pct}% ready`;
  document.getElementById("bookingProgressBar").style.width=`${pct}%`;
}

function renderPacking(){
  const saved=JSON.parse(localStorage.getItem("scandiFinalPacking")||"{}"),list=document.getElementById("packingList");
  list.innerHTML=packingItems.map((item,i)=>`<label class="check-item ${saved[i]?"completed":""}"><input type="checkbox" data-index="${i}" ${saved[i]?"checked":""}><span>${item}</span></label>`).join("");
  list.querySelectorAll("input").forEach(box=>box.addEventListener("change",e=>{
    const latest=JSON.parse(localStorage.getItem("scandiFinalPacking")||"{}");
    latest[e.target.dataset.index]=e.target.checked;
    localStorage.setItem("scandiFinalPacking",JSON.stringify(latest));
    e.target.closest(".check-item").classList.toggle("completed",e.target.checked);
  }));
}

function setupTheme(){
  if(localStorage.getItem("scandiFinalTheme")==="dark")document.body.classList.add("dark");
  document.getElementById("themeToggle").addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("scandiFinalTheme",document.body.classList.contains("dark")?"dark":"light");
  });
}

document.getElementById("resetPacking").addEventListener("click",()=>{localStorage.removeItem("scandiFinalPacking");renderPacking();});
renderItinerary();renderBookings();renderPacking();setupTheme();updateCountdown();setInterval(updateCountdown,60000);
