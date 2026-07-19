# Scandinavia Family Trip — Premium Version 5

Version 5 is the complete visual itinerary for the family trip from 21–27 July 2026.

## Main improvements

- Every scheduled activity now has a relevant photograph or visual card.
- Cruise departure, boarding, ship exploration, meals, transfers and airport activities are no longer blank.
- Bergen shows the exact booked Airbnb listing name and Fana area.
- Oslo shows the exact confirmed property: Scandic Byporten.
- Copenhagen shows the exact confirmed property: CABINN Metro.
- Each accommodation card includes check-in/check-out facts, route advice, map and official property link.
- All sightseeing locations retain descriptions, transport advice and maps.
- Daily weather, apps and Indian/South Indian options remain integrated inside each day.

## Accommodation privacy

The public site deliberately excludes:
- reservation references
- PINs and keypad details
- host phone numbers
- payment amounts
- exact private Airbnb street address

The Bergen property name and area are exact. Its displayed photograph is representative because Airbnb does not permit reliable direct embedding of the private listing image in this public package. Oslo and Copenhagen property identities and official links are exact.

## Image behaviour

Most images are remote optimized photographs so GitHub Pages remains lightweight. A graceful fallback message appears if any external image host blocks loading.

## Confirmed accommodation information used

- Bergen: Familievennlig leilighet med gode solforhold, Fana, hosted by Camilla
- Oslo: Scandic Byporten, Superior Twin Room
- Copenhagen: CABINN Metro, two Standard Rooms


Public Edition: host names, direct booking links, exact room types and exact check-in/out times have been generalized for privacy.


## Version 5.1 Visual Refresh

This edition applies the approved dashboard view:

- fixed desktop trip-route sidebar
- large image-led city and cruise cards
- right-side weather, tips and apps rail
- improved visual hierarchy and spacing
- relevant Oslo Opera House, cruise and Copenhagen imagery
- responsive fallback for tablets and phones

The Great Wall of China image has been removed from the refreshed design.


## Version 5.2 — Verified Local Images

This version removes the unreliable stock-image mapping that caused the Great Wall of China to appear under Oslo.

- Oslo, cruise and Copenhagen use local images cropped from the approved visual design.
- Bergen and all remaining sights/activities use locally stored semantic illustrations.
- Every image is stored inside the package.
- No itinerary image depends on an external stock-photo URL.
- Where an exact landmark photograph was not verified, the site intentionally uses a clearly labelled activity illustration rather than an unrelated photograph.


## Version 5.3 — Final Relevant Images

This is the upload-ready correction.

- The incorrect Great Wall image file has been physically overwritten.
- Oslo Opera House now uses the approved Oslo waterfront image.
- Mostraumen now uses a fjord, mountains and waterfall image.
- The overnight cruise uses a cruise-ship image.
- Nyhavn uses a Copenhagen waterfront image.
- All itinerary image references are local.
- No external image URLs remain.
- Cache-busting parameters were added to `style.css` and `script.js` so GitHub Pages does not continue showing the old cached version.

Upload the entire extracted folder, including `images/verified/`.


## Version 6 — Final Real Photos

All visible runtime images now use exact Wikimedia Commons destination photographs.
No Great Wall, China-related, SVG placeholder, or local `images/verified` runtime reference remains.
Generic schedule activities reuse the correct city, route, transport, cruise or attraction photograph.


## Version 6.1 — Offline Stable

This version removes all externally hosted images. Every visible image is stored locally in `images/final/`.

It therefore avoids:
- “Photo temporarily not available”
- Wikimedia hotlink failures
- browser blocking of external images
- external image changes

Upload the complete package, including `images/final/`.
