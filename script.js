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


const sightDetails={"VilVite Science Centre": {"description": "A hands-on science centre where children and adults can explore energy, technology, the human body and practical experiments.", "transport": "From central Bergen, take Bybanen light rail toward Fyllingsdalen and get off at Florida; walk approximately 3–5 minutes.", "image": "images/verified/vilvite.svg"}, "Bryggen": {"description": "Bergen’s UNESCO-listed historic wharf, famous for colourful wooden buildings, narrow passages and its Hanseatic trading history.", "transport": "From Bergen city centre or the Fish Market, walk approximately 5–10 minutes along the harbour.", "image": "images/verified/bryggen.svg"}, "Bergenhus Fortress": {"description": "One of Norway’s oldest fortifications, with historic stone buildings, open grounds and attractive views across Bergen harbour.", "transport": "Walk approximately 8–10 minutes from Bryggen along the waterfront; no local transport is necessary.", "image": "images/verified/bergenhus.svg"}, "Vågen Harbour": {"description": "Bergen’s scenic inner harbour, framed by Bryggen, historic boats, restaurants and mountain views.", "transport": "It is directly beside Bryggen and Bergenhus Fortress; explore the harbour comfortably on foot.", "image": "images/verified/vagen-harbour.svg"}, "Mostraumen Fjord Cruise": {"description": "A scenic fjord journey through Osterfjord toward narrow Mostraumen, passing steep mountains, waterfalls and small settlements.", "transport": "Walk to the confirmed harbour departure pier and arrive 20–30 minutes early. Verify the operator’s exact boarding point the evening before.", "image": "images/verified/mostraumen-fjord.jpg"}, "Fløibanen Funicular": {"description": "A short funicular ride from Bergen centre to Mount Fløyen, offering wide views over the city and surrounding fjords.", "transport": "Walk approximately 5–10 minutes from Bryggen to the lower Fløibanen station.", "image": "images/verified/floibanen.svg"}, "Mount Fløyen": {"description": "A panoramic mountain viewpoint above Bergen with family trails, a playground, woodland and places to rest.", "transport": "Take Fløibanen uphill. Return by funicular; walking downhill is optional but takes much longer and may tire the child.", "image": "images/verified/mount-floyen.svg"}, "Vy train to Oslo": {"description": "One of Europe’s most scenic rail journeys, crossing mountain plateaus, lakes, valleys and remote Norwegian landscapes.", "transport": "Walk or use Skyss transport to Bergen station. Reach the platform at least 30 minutes before departure.", "image": "images/verified/vy-train.svg"}, "Oslo Opera House": {"description": "A striking waterfront cultural landmark whose sloping white roof can be walked for broad views over Oslo and the fjord.", "transport": "From Oslo Central Station or Scandic Byporten, walk approximately 8–10 minutes through Bjørvika.", "image": "images/verified/oslo-opera-house.jpg"}, "MUNCH Museum": {"description": "A major waterfront museum dedicated to Edvard Munch, with modern art, city views and several floors of exhibitions.", "transport": "Walk approximately 5 minutes from Oslo Opera House through the Bjørvika waterfront district.", "image": "images/verified/munch.svg"}, "Vigeland Sculpture Park": {"description": "A large open-air sculpture installation inside Frogner Park, featuring more than 200 works by Gustav Vigeland.", "transport": "From central Oslo, take metro to Majorstuen or tram toward Frogner; then walk approximately 10–15 minutes.", "image": "images/verified/vigeland.svg"}, "Nyhavn": {"description": "Copenhagen’s iconic 17th-century harbour, lined with colourful townhouses, cafés, restaurants and historic wooden boats.", "transport": "Take the metro to Kongens Nytorv and walk approximately 5 minutes to the harbour.", "image": "images/verified/copenhagen-nyhavn.jpg"}, "Copenhagen Canal Cruise": {"description": "A relaxed boat tour through Copenhagen’s canals, passing palaces, church towers, houseboats and modern waterfront architecture.", "transport": "Several cruises depart from Nyhavn or nearby Ved Stranden; check the ticket for the exact pier and walk there from Nyhavn.", "image": "images/verified/canal-cruise.svg"}, "Amalienborg Palace": {"description": "The home of Denmark’s royal family, formed by four elegant palaces around an octagonal square near the waterfront.", "transport": "Walk approximately 10 minutes from Nyhavn. The route is flat and suitable for a family.", "image": "images/verified/amalienborg.svg"}, "Tivoli Gardens": {"description": "A historic amusement park combining rides, gardens, restaurants, live entertainment and atmospheric evening lights.", "transport": "Tivoli is directly beside Copenhagen Central Station. Use train, metro or bus to the city centre and walk a few minutes.", "image": "images/verified/tivoli.svg"}, "Experimentarium": {"description": "A large interactive science centre with family exhibits about water, light, energy, movement and the human body.", "transport": "From central Copenhagen, take the S-train toward Hellerup and continue by bus or a short taxi; allow about 30–40 minutes.", "image": "images/verified/experimentarium.svg"}};
const dailyWeather={"21 July": {"city": "Bergen", "summary": "Cloudy and cooler, with a little afternoon rain", "temp": "16°C / 12°C", "advice": "Carry waterproof jackets and keep the afternoon plan flexible."}, "22 July": {"city": "Bergen", "summary": "Cloudy start, followed by sunshine", "temp": "20°C / 9°C", "advice": "Dress in layers; the open cruise deck may feel cool."}, "23 July": {"city": "Bergen → Oslo", "summary": "Cloudy in Bergen; thickening clouds in Oslo", "temp": "Bergen 16°C · Oslo 23°C", "advice": "Keep a light jacket accessible during the train journey."}, "24 July": {"city": "Oslo", "summary": "Pleasant with a mixture of sun and clouds", "temp": "25°C / 12°C", "advice": "Comfortable sightseeing weather; carry water for Vigeland Park."}, "25 July": {"city": "Copenhagen", "summary": "Clouds and sunshine with a couple of showers", "temp": "20°C / 13°C", "advice": "Carry a compact umbrella for Nyhavn and the canal cruise."}, "26 July": {"city": "Copenhagen", "summary": "A few morning showers, then sun and clouds", "temp": "22°C / 14°C", "advice": "Tivoli should improve later; keep rain protection for the morning."}, "27 July": {"city": "Copenhagen", "summary": "Considerable cloudiness with a possible afternoon shower", "temp": "22°C / 14°C", "advice": "Keep rainwear in the day bag and preserve the airport buffer."}};
const dailyApps={"21 July": ["KLM", "Skyss", "Google Maps"], "22 July": ["Skyss", "Cruise ticket app/email", "Google Maps"], "23 July": ["Vy", "Ruter", "Google Maps"], "24 July": ["Ruter", "Go Nordic Cruise", "Google Maps"], "25 July": ["Rejseplanen", "Rejsebillet", "Google Maps"], "26 July": ["Rejseplanen", "Tivoli", "Google Maps"], "27 July": ["Rejseplanen", "Rejsebillet", "KLM"]};
const accommodationDetails={"21 July": {"name": "Familievennlig leilighet med gode solforhold", "subtitle": "Private Airbnb accommodation in Fana", "type": "Airbnb check-in", "description": "Your booked entire-home apartment in Fana. The stay is family-oriented and has self check-in. The public website shows the property name and area but does not publish the keypad, reservation code, phone number or exact street address.", "transport": "From Bergen Airport, use Bybanen toward Bergen and follow the private Airbnb directions for the final connection to Fana. Keep the check-in guide available offline.", "image": "images/verified/cabinn-metro.svg", "map": "Fana+Bergen+Norway", "official": "#", "facts": ["Afternoon check-in", "Morning check-out", "Entire home", "Self check-in"]}, "23 July": {"name": "Scandic Byporten", "subtitle": "Confirmed Oslo hotel · connected to Oslo Central Station", "type": "Hotel check-in", "description": "Your confirmed Standard Hotel Room at Scandic Byporten. The hotel sits under the same roof as Byporten Shopping Centre and directly beside Oslo Central Station.", "transport": "After leaving the train, follow signs for Byporten Shopping Centre. Walk into the plaza, turn right and use the revolving-door hotel entrance.", "image": "images/verified/scandic-byporten.svg", "map": "Scandic+Byporten+Oslo", "official": "#", "facts": ["Afternoon check-in", "Morning check-out", "Standard Hotel Room", ""]}, "25 July": {"name": "CABINN Metro", "subtitle": "Confirmed Copenhagen hotel · near Ørestad and Bella Center", "type": "Hotel check-in", "description": "Your confirmed two-room stay at CABINN Metro. The hotel is a distinctive designer property near Ørestad station, Bella Center and the airport transport corridor.", "transport": "Use Rejseplanen from the cruise terminal to Ørestad. From Ørestad station, continue on foot or by local bus depending on luggage and weather.", "image": "images/verified/cabinn-metro.svg", "map": "CABINN+Metro+Copenhagen", "official": "#", "facts": ["Afternoon check-in", "Morning check-out", "2 Standard Rooms", "Breakfast available separately"]}};
const activityDetails={"Airport transfer and check-in": {"image": "images/verified/airport-arrival.svg", "label": "Arrival", "description": "Airport arrival, luggage collection and transfer to the booked Airbnb in Fana."}, "Travel to Bryggen": {"image": "images/verified/city-transfer.svg", "label": "Transfer", "description": "Travel from VilVite toward Bergen’s historic harbour district, with time for a short refreshment stop."}, "Breakfast and preparation": {"image": "images/verified/breakfast.svg", "label": "Preparation", "description": "A calm family breakfast and packing period before the fjord cruise."}, "Leave for the cruise departure point": {"image": "images/verified/harbour-transfer.svg", "label": "Cruise transfer", "description": "Travel to Bergen harbour and reach the correct pier comfortably before boarding."}, "Lunch and transfer": {"image": "images/verified/lunch-transfer.svg", "label": "Lunch break", "description": "A quick lunch and short transfer before taking the Fløibanen funicular."}, "Return to Bergen centre": {"image": "images/verified/return-city.svg", "label": "Evening return", "description": "Return from Mount Fløyen for dinner and a relaxed final Bergen evening."}, "Breakfast and final packing": {"image": "images/verified/packing-breakfast.svg", "label": "Travel preparation", "description": "Final packing and breakfast before the scenic Bergen–Oslo train journey."}, "Leave for Bergen station": {"image": "images/verified/station-transfer.svg", "label": "Station transfer", "description": "Travel to Bergen railway station with a comfortable departure buffer."}, "Dinner and hotel return": {"image": "images/verified/dinner-hotel.svg", "label": "Evening", "description": "Dinner near Bjørvika or Oslo Central Station, followed by a short return to the hotel."}, "Breakfast and check-out preparation": {"image": "images/verified/hotel-morning.svg", "label": "Hotel morning", "description": "Breakfast, luggage organisation and check-out preparation before the Oslo programme."}, "Return to central Oslo": {"image": "images/verified/oslo-transfer.svg", "label": "City transfer", "description": "Return from Frogner to central Oslo to collect luggage and prepare for the cruise."}, "Lunch and cruise preparation": {"image": "images/verified/cruise-prep.svg", "label": "Cruise preparation", "description": "Lunch and last-minute shopping for snacks or essentials needed onboard."}, "Leave for cruise terminal": {"image": "images/verified/terminal-transfer.svg", "label": "Terminal transfer", "description": "Travel from central Oslo to the cruise terminal with luggage and a generous time buffer."}, "Target terminal arrival": {"image": "images/verified/cruise-boarding.svg", "label": "Boarding", "description": "Complete passenger check-in, security and boarding formalities before departure."}, "Cruise departure": {"image": "images/verified/overnight-cruise.jpg", "label": "Overnight cruise", "description": "Sail from Oslo through Oslofjord toward Copenhagen aboard the overnight cruise."}, "Explore the ship": {"image": "images/verified/ship-evening.svg", "label": "Onboard evening", "description": "Explore the ship, enjoy dinner, walk on deck and relax with family entertainment."}, "Breakfast onboard": {"image": "images/verified/onboard-breakfast.svg", "label": "Onboard breakfast", "description": "Breakfast at sea and final cabin packing before arrival in Copenhagen."}, "Disembark and travel to hotel": {"image": "images/verified/arrival-copenhagen.svg", "label": "Arrival transfer", "description": "Disembark, collect luggage and travel to CABINN Metro for check-in or luggage storage."}, "Hotel or relaxed city walk": {"image": "images/verified/relaxed-walk.svg", "label": "Flexible evening", "description": "Keep the evening easy after the overnight cruise, with hotel rest or a short city walk."}, "Relaxed breakfast and free time": {"image": "images/verified/slow-morning.svg", "label": "Slow morning", "description": "A lighter morning so the family has energy for a long Tivoli afternoon and evening."}, "Lunch before Tivoli": {"image": "images/verified/tivoli-lunch.svg", "label": "Lunch", "description": "A proper meal before entering Tivoli Gardens."}, "Rides, gardens and attractions": {"image": "images/verified/tivoli.svg", "label": "Tivoli experience", "description": "Family rides, gardens, attractions and regular rest breaks inside Tivoli."}, "Dinner inside Tivoli": {"image": "images/verified/tivoli-dinner.svg", "label": "Tivoli dinner", "description": "Dinner inside the park with vegetarian and child-friendly choices."}, "Evening entertainment": {"image": "images/verified/tivoli-evening.svg", "label": "Evening lights", "description": "Enjoy Tivoli’s lights, atmosphere and scheduled evening entertainment."}, "Breakfast and check-out": {"image": "images/verified/departure-morning.svg", "label": "Departure morning", "description": "Breakfast, final room check and luggage arrangements before the last sightseeing stop."}, "Travel to Experimentarium": {"image": "images/verified/science-transfer.svg", "label": "Local transport", "description": "Use train and local transport to reach Experimentarium in Hellerup."}, "Lunch": {"image": "images/verified/lunch.svg", "label": "Lunch", "description": "Lunch after Experimentarium before returning to the hotel for luggage."}, "Collect luggage": {"image": "images/verified/collect-luggage.svg", "label": "Luggage collection", "description": "Return to CABINN Metro, collect luggage and prepare for the airport journey."}, "Leave for Copenhagen Airport": {"image": "images/verified/airport-transfer.svg", "label": "Airport transfer", "description": "Travel to Copenhagen Airport with a comfortable international-flight buffer."}, "Target airport arrival": {"image": "images/verified/airport-checkin.svg", "label": "Airport", "description": "Complete check-in and security, then allow time for a final meal or snack."}, "KLM flight to Amsterdam": {"image": "images/verified/flight-home.svg", "label": "Return flight", "description": "Evening flight back to Amsterdam, completing the Scandinavia family journey."}};
const dailyRestaurants={"21 July": {"name": "Leela Indian Restaurant", "type": "Indian option; confirm whether dosa or other South Indian dishes are available that day", "timing": "Best considered after Bryggen or Mount Fløyen because it is centrally located near the harbour and funicular area.", "map": "Leela+Indian+Restaurant+Bergen"}, "22 July": {"name": "India Gate Bergen", "type": "Indian restaurant near the Fish Market–Fløibanen route; ask about vegetarian and South Indian-style options", "timing": "Suitable after returning from Mount Fløyen or for an early dinner in central Bergen.", "map": "India+Gate+Bergen"}, "23 July": {"name": "The South Indian Oslo", "type": "South Indian / Chettinad-style option, commonly associated with dosa and regional dishes", "timing": "Use for dinner after MUNCH if current opening hours suit the plan; check route from Bjørvika before leaving.", "map": "The+South+Indian+Oslo"}, "24 July": {"name": "Curry & Ketchup", "type": "Indian restaurant close to Majorstuen; not exclusively South Indian", "timing": "Convenient after Vigeland Park for an early lunch, but keep enough time to collect luggage and reach the cruise terminal.", "map": "Curry+and+Ketchup+Oslo"}, "25 July": {"name": "The South Indian Vesterbro", "type": "Dedicated South Indian restaurant with dosa and Chettinad-style dishes", "timing": "Good dinner option after Nyhavn and Amalienborg; use metro or bus toward Vesterbro.", "map": "The+South+Indian+Vesterbro+Copenhagen"}, "26 July": {"name": "Dosa Bar", "type": "Vegetarian South Indian and Mumbai street food, including dosa and idli", "timing": "Use for lunch before Tivoli or dinner depending on opening hours and the day’s Tivoli plan.", "map": "Dosa+Bar+Copenhagen"}, "27 July": {"name": "The South Indian Vesterbro or airport meal", "type": "South Indian option if time permits; otherwise prioritise an on-time airport transfer", "timing": "Only use a restaurant if it does not reduce the planned airport buffer.", "map": "The+South+Indian+Vesterbro+Copenhagen"}};

function updateCountdown(){
  const el=document.getElementById("countdown"),diff=tripStart-new Date();
  if(diff<=0){el.textContent="The journey has begun";return;}
  const d=Math.floor(diff/86400000),h=Math.floor((diff%86400000)/3600000),m=Math.floor((diff%3600000)/60000);
  el.textContent=`${d} days · ${h} hours · ${m} minutes`;
}

function slugifyDay(date){
  return "day-" + date.toLowerCase().replace(/\s+/g,"-");
}

function renderItinerary(){
  document.getElementById("itineraryList").innerHTML=itinerary.map((day,dayIndex)=>{
    const wx=dailyWeather[day.date];
    const restaurant=dailyRestaurants[day.date];
    const accommodation=accommodationDetails[day.date];
    const appList=dailyApps[day.date]||["Google Maps"];
    let sightCounter=0;

    return `
    <article class="day-card premium-day" id="${slugifyDay(day.date)}">
      <div class="day-header">
        <div class="day-number"><span>Day</span><strong>${dayIndex+1}</strong></div>
        <div class="day-date">${day.date}</div>
        <div class="day-title-block">
          <h3>${day.title}</h3>
          <p><strong>Transport:</strong> ${day.transport}</p>
          <p><strong>Stay:</strong> ${day.stay}</p>
          <div class="day-tools">${appList.map(a=>`<span class="app-chip">Use: ${a}</span>`).join("")}</div>
        </div>
      </div>

      <div class="day-weather">
        <div class="weather-icon">🌦</div>
        <div class="weather-main">
          <span>Forecast snapshot · ${wx.city}</span>
          <h4>${wx.summary}</h4>
          <p><strong>${wx.temp}</strong> · ${wx.advice}</p>
        </div>
        <div class="weather-source">Updated 19 Jul</div>
      </div>

      <div class="day-section-label">
        <span>Detailed schedule</span>
        <button class="collapse-day" type="button" aria-expanded="true">Hide details</button>
      </div>

      <div class="day-collapsible">
        <div class="schedule premium-timeline">
          ${day.schedule.map((item)=>{
            const detail=sightDetails[item[1]];
            const activity=activityDetails[item[1]];
            const isCheckIn=/check[\s-]?in|airport transfer and check-in|arrive and check in|disembark and travel to hotel/i.test(item[1]);
            const stayDetail=isCheckIn ? accommodation : null;
            if(detail) sightCounter += 1;

            const image = stayDetail?.image || detail?.image || activity?.image;
            const description = stayDetail?.description || detail?.description || activity?.description || item[2];
            const badge = stayDetail ? "Accommodation" : detail ? `Sight ${sightCounter}` : (activity?.label || "Activity");

            return `
            <div class="schedule-row ${stayDetail?'accommodation-entry':detail?'sightseeing-entry':'activity-entry'}">
              <div class="schedule-time"><span>${item[0]}</span><i></i></div>
              <div class="schedule-copy">
                ${image?`
                  <div class="image-wrap ${stayDetail?'accommodation-image-wrap':'activity-image-wrap'}">
                    <img class="sight-image ${stayDetail?'accommodation-image':''}" src="${image}" alt="${stayDetail?.name || item[1]}" loading="lazy"
                    onerror="this.closest('.image-wrap').classList.add('image-error');this.style.display='none';">
                    <span class="image-badge ${stayDetail?'accommodation-badge':''}">${badge}</span>
                    <div class="image-fallback">Photo unavailable — open the official or map link below.</div>
                  </div>`:""}

                <div class="sight-heading">
                  <h4>${stayDetail?.name || item[1]}</h4>
                  ${stayDetail?`<span class="stay-badge">${stayDetail.type}</span>`:detail?`<span class="family-badge">Family stop</span>`:`<span class="activity-badge">${activity?.label || "Activity"}</span>`}
                </div>

                ${stayDetail?.subtitle?`<p class="property-subtitle">${stayDetail.subtitle}</p>`:""}
                <p class="sight-description">${description}</p>

                ${stayDetail?`
                  <div class="property-facts">${stayDetail.facts.map(f=>`<span>${f}</span>`).join("")}</div>
                  <div class="detail-box plan-box"><strong>Check-in plan</strong><p>${item[2]}</p></div>
                  <div class="detail-box route-box"><strong>Getting there</strong><p>${stayDetail.transport}</p></div>
                  <div class="button-row">
                    <a class="map-button stay-map" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${stayDetail.map}">Open area map <span>↗</span></a>
                    <a class="map-button official-button" target="_blank" rel="noopener" href="${stayDetail.official}">Property information <span>↗</span></a>
                  </div>
                  <p class="illustrative-note">${day.date==="21 July"?"The Airbnb listing name and area are exact; the displayed photograph is a public-safe representative preview because Airbnb blocks direct reuse of the private listing photo.":"Property identity is exact. Photo availability depends on the official image host."}</p>
                `:`
                  <div class="detail-box plan-box"><strong>What we will do</strong><p>${item[2]}</p></div>
                  ${detail?`<div class="detail-box route-box"><strong>Walking / transport</strong><p>${detail.transport}</p></div>`:""}
                  ${item[3]?`<a class="map-button" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${item[3]}">Open map <span>↗</span></a>`:""}
                `}
              </div>
            </div>`}).join("")}
        </div>

        <div class="daily-restaurant premium-food">
          <div class="restaurant-icon">🍛</div>
          <div class="restaurant-content">
            <span>Indian / South Indian option integrated into this day</span>
            <h4>${restaurant.name}</h4>
            <p class="restaurant-type">${restaurant.type}</p>
            <div class="restaurant-fit"><strong>How it fits today</strong><p>${restaurant.timing}</p></div>
            <a class="map-button food-map" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${restaurant.map}">Open restaurant map <span>↗</span></a>
          </div>
        </div>

        <div class="day-notes">
          <div class="note-box"><span class="note-icon">🥪</span><h4>Food plan</h4><p>${day.food}</p></div>
          <div class="note-box"><span class="note-icon">✨</span><h4>Optional</h4><p>${day.optional}</p></div>
          <div class="note-box note-wide"><span class="note-icon">✓</span><h4>Practical notes</h4><ul>${day.notes.map(n=>`<li>${n}</li>`).join("")}</ul></div>
        </div>
      </div>
    </article>`}).join("");

  document.querySelectorAll(".collapse-day").forEach(button=>{
    button.addEventListener("click",()=>{
      const card=button.closest(".day-card");
      const content=card.querySelector(".day-collapsible");
      const expanded=button.getAttribute("aria-expanded")==="true";
      button.setAttribute("aria-expanded",String(!expanded));
      content.classList.toggle("collapsed",expanded);
      button.textContent=expanded?"Show details":"Hide details";
    });
  });
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

document.getElementById("printTrip").addEventListener("click",()=>window.print());

document.getElementById("resetPacking").addEventListener("click",()=>{localStorage.removeItem("scandiFinalPacking");renderPacking();});
renderItinerary();renderBookings();renderPacking();setupTheme();updateCountdown();setInterval(updateCountdown,60000);
