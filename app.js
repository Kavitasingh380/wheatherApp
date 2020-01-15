const request = require('request')

const url = 'https://api.darksky.net/forecast/937ab59163a30b86734365762ec3212b/37.8267,-122.4233'

request({url:url ,json:true},(error,response)=>{
  if (error) {
     console.log("Unable to connect location services")
    } else if (response.body.error) {
           console.log("Unable to find location.")
    } else {
   
        console.log(response.body.daily.data[0].summary)
    }

})

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2F2aXRhMzgwIiwiYSI6ImNrMHE2cnM4czAzeHgzbnA2azA3bDRpcm8ifQ.26SvM3161jiyn1fbRYmRnw&limit=1"
request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
     console.log("Unable to connect location services")
    } else if (response.body.features.length == 0) {
           console.log("Unable to find location.Try another search!!!")
    } else {    
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }


})