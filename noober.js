async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write code to loop through the rides
  for (i=0; i<json.length; i++) {
    if (json[i][0].length > 1) {
      levelOfService = 'Noober Pool'
    } else if (json[i][0].purpleRequested) {
      levelOfService = 'Noober Purple'
    } else if (json[i][0].numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
    } else {
      levelOfService = 'Noober X'
    }
    console.log(json[i][0].purpleRequested)
    console.log(json[i][0].numberOfPassengers)
    console.log(levelOfService)

    let ridesDiv = document.querySelector('.rides')
    ridesDiv.insertAdjacentHTML('beforeend', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
  </h1>
    `)

    for (j=0; j<json[i].length; j++) {
      console.log(json[i][j])

      passengerName = `${json[i][j].passengerDetails.first} ${json[i][j].passengerDetails.last}`
      passengerPhone = json[i][j].passengerDetails.phoneNumber
      passengerNumberOfPassengers = json[i][j].numberOfPassengers
      passengerPickupAddressLine1 = json[i][j].pickupLocation.address
      passengerPickupAddressLine2 = `${json[i][j].pickupLocation.city}, ${json[i][j].pickupLocation.state} ${json[i][j].pickupLocation.zip}`
      passengerDropoffAddressLine1 = json[i][j].dropoffLocation.address
      passengerDropoffAddressLine2 = `${json[i][j].dropoffLocation.city}, ${json[i][j].dropoffLocation.state} ${json[i][j].dropoffLocation.zip}`

      if (levelOfService == "Noober Purple") {

            ridesDiv.insertAdjacentHTML('beforeend', `
            <div class="border-4 border-purple-500 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupAddressLine1}</p>
                  <p>${passengerPickupAddressLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoffAddressLine1}</p>
                  <p>${passengerDropoffAddressLine2}</p>
                </div>
              </div>
            </div>
            `)
            } else {
              ridesDiv.insertAdjacentHTML('beforeend', `
              <div class="border-4 border-gray-900 p-4 my-4 text-left">
                <div class="flex">
                  <div class="w-1/2">
                    <h2 class="text-2xl py-1">${passengerName}</h2>
                    <p class="font-bold text-gray-600">${passengerPhone}</p>
                  </div>
                  <div class="w-1/2 text-right">
                    <span class="rounded-xl bg-gray-600 text-white p-2">
                    ${passengerNumberOfPassengers} passengers
                    </span>
                  </div>
                </div>
                <div class="mt-4 flex">
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">PICKUP</div>
                    <p>${passengerPickupAddressLine1}</p>
                    <p>${passengerPickupAddressLine2}</p>
                  </div>
                  <div class="w-1/2">
                    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>${passengerDropoffAddressLine1}</p>
                    <p>${passengerDropoffAddressLine2}</p>
                  </div>
                </div>
              </div>
              `)
            }


}
}
}


window.addEventListener('DOMContentLoaded', pageLoaded)
