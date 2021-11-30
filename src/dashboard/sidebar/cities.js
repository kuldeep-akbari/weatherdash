const Cities = [
    {
        "label": "New York", 
        "growth_from_2000_to_2013": "4.8%", 
        "latitude": 40.7127837, 
        "longitude": -74.0059413, 
        "population": "8405837", 
        "value": "1", 
        "state": "New York"
    }, 
    {
        "label": "Los Angeles", 
        "growth_from_2000_to_2013": "4.8%", 
        "latitude": 34.0522342, 
        "longitude": -118.2436849, 
        "population": "3884307", 
        "value": "2", 
        "state": "California"
    }, 
    {
        "label": "Chicago", 
        "growth_from_2000_to_2013": "-6.1%", 
        "latitude": 41.8781136, 
        "longitude": -87.6297982, 
        "population": "2718782", 
        "value": "3", 
        "state": "Illinois"
    }, 
    {
        "label": "Houston", 
        "growth_from_2000_to_2013": "11.0%", 
        "latitude": 29.7604267, 
        "longitude": -95.3698028, 
        "population": "2195914", 
        "value": "4", 
        "state": "Texas"
    }, 
    {
        "label": "Philadelphia", 
        "growth_from_2000_to_2013": "2.6%", 
        "latitude": 39.9525839, 
        "longitude": -75.1652215, 
        "population": "1553165", 
        "value": "5", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Phoenix", 
        "growth_from_2000_to_2013": "14.0%", 
        "latitude": 33.4483771, 
        "longitude": -112.0740373, 
        "population": "1513367", 
        "value": "6", 
        "state": "Arizona"
    }, 
    {
        "label": "San Antonio", 
        "growth_from_2000_to_2013": "21.0%", 
        "latitude": 29.4241219, 
        "longitude": -98.49362819999999, 
        "population": "1409019", 
        "value": "7", 
        "state": "Texas"
    }, 
    {
        "label": "San Diego", 
        "growth_from_2000_to_2013": "10.5%", 
        "latitude": 32.715738, 
        "longitude": -117.1610838, 
        "population": "1355896", 
        "value": "8", 
        "state": "California"
    }, 
    {
        "label": "Dallas", 
        "growth_from_2000_to_2013": "5.6%", 
        "latitude": 32.7766642, 
        "longitude": -96.79698789999999, 
        "population": "1257676", 
        "value": "9", 
        "state": "Texas"
    }, 
    {
        "label": "San Jose", 
        "growth_from_2000_to_2013": "10.5%", 
        "latitude": 37.3382082, 
        "longitude": -121.8863286, 
        "population": "998537", 
        "value": "10", 
        "state": "California"
    }, 
    {
        "label": "Austin", 
        "growth_from_2000_to_2013": "31.7%", 
        "latitude": 30.267153, 
        "longitude": -97.7430608, 
        "population": "885400", 
        "value": "11", 
        "state": "Texas"
    }, 
    {
        "label": "Indianapolis", 
        "growth_from_2000_to_2013": "7.8%", 
        "latitude": 39.768403, 
        "longitude": -86.158068, 
        "population": "843393", 
        "value": "12", 
        "state": "Indiana"
    }, 
    {
        "label": "Jacksonville", 
        "growth_from_2000_to_2013": "14.3%", 
        "latitude": 30.3321838, 
        "longitude": -81.65565099999999, 
        "population": "842583", 
        "value": "13", 
        "state": "Florida"
    }, 
    {
        "label": "San Francisco", 
        "growth_from_2000_to_2013": "7.7%", 
        "latitude": 37.7749295, 
        "longitude": -122.4194155, 
        "population": "837442", 
        "value": "14", 
        "state": "California"
    }, 
    {
        "label": "Columbus", 
        "growth_from_2000_to_2013": "14.8%", 
        "latitude": 39.9611755, 
        "longitude": -82.99879419999999, 
        "population": "822553", 
        "value": "15", 
        "state": "Ohio"
    }, 
    {
        "label": "Charlotte", 
        "growth_from_2000_to_2013": "39.1%", 
        "latitude": 35.2270869, 
        "longitude": -80.8431267, 
        "population": "792862", 
        "value": "16", 
        "state": "North Carolina"
    }, 
    {
        "label": "Fort Worth", 
        "growth_from_2000_to_2013": "45.1%", 
        "latitude": 32.7554883, 
        "longitude": -97.3307658, 
        "population": "792727", 
        "value": "17", 
        "state": "Texas"
    }, 
    {
        "label": "Detroit", 
        "growth_from_2000_to_2013": "-27.1%", 
        "latitude": 42.331427, 
        "longitude": -83.0457538, 
        "population": "688701", 
        "value": "18", 
        "state": "Michigan"
    }, 
    {
        "label": "El Paso", 
        "growth_from_2000_to_2013": "19.4%", 
        "latitude": 31.7775757, 
        "longitude": -106.4424559, 
        "population": "674433", 
        "value": "19", 
        "state": "Texas"
    }, 
    {
        "label": "Memphis", 
        "growth_from_2000_to_2013": "-5.3%", 
        "latitude": 35.1495343, 
        "longitude": -90.0489801, 
        "population": "653450", 
        "value": "20", 
        "state": "Tennessee"
    }, 
    {
        "label": "Seattle", 
        "growth_from_2000_to_2013": "15.6%", 
        "latitude": 47.6062095, 
        "longitude": -122.3320708, 
        "population": "652405", 
        "value": "21", 
        "state": "Washington"
    }, 
    {
        "label": "Denver", 
        "growth_from_2000_to_2013": "16.7%", 
        "latitude": 39.7392358, 
        "longitude": -104.990251, 
        "population": "649495", 
        "value": "22", 
        "state": "Colorado"
    }, 
    {
        "label": "Washington", 
        "growth_from_2000_to_2013": "13.0%", 
        "latitude": 38.9071923, 
        "longitude": -77.0368707, 
        "population": "646449", 
        "value": "23", 
        "state": "District of Columbia"
    }, 
    {
        "label": "Boston", 
        "growth_from_2000_to_2013": "9.4%", 
        "latitude": 42.3600825, 
        "longitude": -71.0588801, 
        "population": "645966", 
        "value": "24", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Nashville-Davidson", 
        "growth_from_2000_to_2013": "16.2%", 
        "latitude": 36.1626638, 
        "longitude": -86.7816016, 
        "population": "634464", 
        "value": "25", 
        "state": "Tennessee"
    }, 
    {
        "label": "Baltimore", 
        "growth_from_2000_to_2013": "-4.0%", 
        "latitude": 39.2903848, 
        "longitude": -76.6121893, 
        "population": "622104", 
        "value": "26", 
        "state": "Maryland"
    }, 
    {
        "label": "Oklahoma label", 
        "growth_from_2000_to_2013": "20.2%", 
        "latitude": 35.4675602, 
        "longitude": -97.5164276, 
        "population": "610613", 
        "value": "27", 
        "state": "Oklahoma"
    }, 
    {
        "label": "Louisville/Jefferson County", 
        "growth_from_2000_to_2013": "10.0%", 
        "latitude": 38.2526647, 
        "longitude": -85.7584557, 
        "population": "609893", 
        "value": "28", 
        "state": "Kentucky"
    }, 
    {
        "label": "Portland", 
        "growth_from_2000_to_2013": "15.0%", 
        "latitude": 45.5230622, 
        "longitude": -122.6764816, 
        "population": "609456", 
        "value": "29", 
        "state": "Oregon"
    }, 
    {
        "label": "Las Vegas", 
        "growth_from_2000_to_2013": "24.5%", 
        "latitude": 36.1699412, 
        "longitude": -115.1398296, 
        "population": "603488", 
        "value": "30", 
        "state": "Nevada"
    }, 
    {
        "label": "Milwaukee", 
        "growth_from_2000_to_2013": "0.3%", 
        "latitude": 43.0389025, 
        "longitude": -87.9064736, 
        "population": "599164", 
        "value": "31", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Albuquerque", 
        "growth_from_2000_to_2013": "23.5%", 
        "latitude": 35.0853336, 
        "longitude": -106.6055534, 
        "population": "556495", 
        "value": "32", 
        "state": "New Mexico"
    }, 
    {
        "label": "Tucson", 
        "growth_from_2000_to_2013": "7.5%", 
        "latitude": 32.2217429, 
        "longitude": -110.926479, 
        "population": "526116", 
        "value": "33", 
        "state": "Arizona"
    }, 
    {
        "label": "Fresno", 
        "growth_from_2000_to_2013": "18.3%", 
        "latitude": 36.7468422, 
        "longitude": -119.7725868, 
        "population": "509924", 
        "value": "34", 
        "state": "California"
    }, 
    {
        "label": "Sacramento", 
        "growth_from_2000_to_2013": "17.2%", 
        "latitude": 38.5815719, 
        "longitude": -121.4943996, 
        "population": "479686", 
        "value": "35", 
        "state": "California"
    }, 
    {
        "label": "Long Beach", 
        "growth_from_2000_to_2013": "1.5%", 
        "latitude": 33.7700504, 
        "longitude": -118.1937395, 
        "population": "469428", 
        "value": "36", 
        "state": "California"
    }, 
    {
        "label": "Kansas label", 
        "growth_from_2000_to_2013": "5.5%", 
        "latitude": 39.0997265, 
        "longitude": -94.5785667, 
        "population": "467007", 
        "value": "37", 
        "state": "Missouri"
    }, 
    {
        "label": "Mesa", 
        "growth_from_2000_to_2013": "13.5%", 
        "latitude": 33.4151843, 
        "longitude": -111.8314724, 
        "population": "457587", 
        "value": "38", 
        "state": "Arizona"
    }, 
    {
        "label": "Virginia Beach", 
        "growth_from_2000_to_2013": "5.1%", 
        "latitude": 36.8529263, 
        "longitude": -75.97798499999999, 
        "population": "448479", 
        "value": "39", 
        "state": "Virginia"
    }, 
    {
        "label": "Atlanta", 
        "growth_from_2000_to_2013": "6.2%", 
        "latitude": 33.7489954, 
        "longitude": -84.3879824, 
        "population": "447841", 
        "value": "40", 
        "state": "Georgia"
    }, 
    {
        "label": "Colorado Springs", 
        "growth_from_2000_to_2013": "21.4%", 
        "latitude": 38.8338816, 
        "longitude": -104.8213634, 
        "population": "439886", 
        "value": "41", 
        "state": "Colorado"
    }, 
    {
        "label": "Omaha", 
        "growth_from_2000_to_2013": "5.9%", 
        "latitude": 41.2523634, 
        "longitude": -95.99798829999999, 
        "population": "434353", 
        "value": "42", 
        "state": "Nebraska"
    }, 
    {
        "label": "Raleigh", 
        "growth_from_2000_to_2013": "48.7%", 
        "latitude": 35.7795897, 
        "longitude": -78.6381787, 
        "population": "431746", 
        "value": "43", 
        "state": "North Carolina"
    }, 
    {
        "label": "Miami", 
        "growth_from_2000_to_2013": "14.9%", 
        "latitude": 25.7616798, 
        "longitude": -80.1917902, 
        "population": "417650", 
        "value": "44", 
        "state": "Florida"
    }, 
    {
        "label": "Oakland", 
        "growth_from_2000_to_2013": "1.3%", 
        "latitude": 37.8043637, 
        "longitude": -122.2711137, 
        "population": "406253", 
        "value": "45", 
        "state": "California"
    }, 
    {
        "label": "Minneapolis", 
        "growth_from_2000_to_2013": "4.5%", 
        "latitude": 44.977753, 
        "longitude": -93.2650108, 
        "population": "400070", 
        "value": "46", 
        "state": "Minnesota"
    }, 
    {
        "label": "Tulsa", 
        "growth_from_2000_to_2013": "1.3%", 
        "latitude": 36.1539816, 
        "longitude": -95.99277500000001, 
        "population": "398121", 
        "value": "47", 
        "state": "Oklahoma"
    }, 
    {
        "label": "Cleveland", 
        "growth_from_2000_to_2013": "-18.1%", 
        "latitude": 41.49932, 
        "longitude": -81.6943605, 
        "population": "390113", 
        "value": "48", 
        "state": "Ohio"
    }, 
    {
        "label": "Wichita", 
        "growth_from_2000_to_2013": "9.7%", 
        "latitude": 37.688889, 
        "longitude": -97.336111, 
        "population": "386552", 
        "value": "49", 
        "state": "Kansas"
    }, 
    {
        "label": "Arlington", 
        "growth_from_2000_to_2013": "13.3%", 
        "latitude": 32.735687, 
        "longitude": -97.10806559999999, 
        "population": "379577", 
        "value": "50", 
        "state": "Texas"
    }, 
    {
        "label": "New Orleans", 
        "growth_from_2000_to_2013": "-21.6%", 
        "latitude": 29.95106579999999, 
        "longitude": -90.0715323, 
        "population": "378715", 
        "value": "51", 
        "state": "Louisiana"
    }, 
    {
        "label": "Bakersfield", 
        "growth_from_2000_to_2013": "48.4%", 
        "latitude": 35.3732921, 
        "longitude": -119.0187125, 
        "population": "363630", 
        "value": "52", 
        "state": "California"
    }, 
    {
        "label": "Tampa", 
        "growth_from_2000_to_2013": "16.0%", 
        "latitude": 27.950575, 
        "longitude": -82.4571776, 
        "population": "352957", 
        "value": "53", 
        "state": "Florida"
    }, 
    {
        "label": "Honolulu", 
        "growth_from_2000_to_2013": "-6.2%", 
        "latitude": 21.3069444, 
        "longitude": -157.8583333, 
        "population": "347884", 
        "value": "54", 
        "state": "Hawaii"
    }, 
    {
        "label": "Aurora", 
        "growth_from_2000_to_2013": "24.4%", 
        "latitude": 39.7294319, 
        "longitude": -104.8319195, 
        "population": "345803", 
        "value": "55", 
        "state": "Colorado"
    }, 
    {
        "label": "Anaheim", 
        "growth_from_2000_to_2013": "4.7%", 
        "latitude": 33.8352932, 
        "longitude": -117.9145036, 
        "population": "345012", 
        "value": "56", 
        "state": "California"
    }, 
    {
        "label": "Santa Ana", 
        "growth_from_2000_to_2013": "-1.2%", 
        "latitude": 33.7455731, 
        "longitude": -117.8678338, 
        "population": "334227", 
        "value": "57", 
        "state": "California"
    }, 
    {
        "label": "St. Louis", 
        "growth_from_2000_to_2013": "-8.2%", 
        "latitude": 38.6270025, 
        "longitude": -90.19940419999999, 
        "population": "318416", 
        "value": "58", 
        "state": "Missouri"
    }, 
    {
        "label": "Riverside", 
        "growth_from_2000_to_2013": "22.5%", 
        "latitude": 33.9533487, 
        "longitude": -117.3961564, 
        "population": "316619", 
        "value": "59", 
        "state": "California"
    }, 
    {
        "label": "Corpus Christi", 
        "growth_from_2000_to_2013": "14.1%", 
        "latitude": 27.8005828, 
        "longitude": -97.39638099999999, 
        "population": "316381", 
        "value": "60", 
        "state": "Texas"
    }, 
    {
        "label": "Lexington-Fayette", 
        "growth_from_2000_to_2013": "18.0%", 
        "latitude": 38.0405837, 
        "longitude": -84.5037164, 
        "population": "308428", 
        "value": "61", 
        "state": "Kentucky"
    }, 
    {
        "label": "Pittsburgh", 
        "growth_from_2000_to_2013": "-8.3%", 
        "latitude": 40.44062479999999, 
        "longitude": -79.9958864, 
        "population": "305841", 
        "value": "62", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Anchorage", 
        "growth_from_2000_to_2013": "15.4%", 
        "latitude": 61.2180556, 
        "longitude": -149.9002778, 
        "population": "300950", 
        "value": "63", 
        "state": "Alaska"
    }, 
    {
        "label": "Stockton", 
        "growth_from_2000_to_2013": "21.8%", 
        "latitude": 37.9577016, 
        "longitude": -121.2907796, 
        "population": "298118", 
        "value": "64", 
        "state": "California"
    }, 
    {
        "label": "Cincinnati", 
        "growth_from_2000_to_2013": "-10.1%", 
        "latitude": 39.1031182, 
        "longitude": -84.5120196, 
        "population": "297517", 
        "value": "65", 
        "state": "Ohio"
    }, 
    {
        "label": "St. Paul", 
        "growth_from_2000_to_2013": "2.8%", 
        "latitude": 44.9537029, 
        "longitude": -93.0899578, 
        "population": "294873", 
        "value": "66", 
        "state": "Minnesota"
    }, 
    {
        "label": "Toledo", 
        "growth_from_2000_to_2013": "-10.0%", 
        "latitude": 41.6639383, 
        "longitude": -83.55521200000001, 
        "population": "282313", 
        "value": "67", 
        "state": "Ohio"
    }, 
    {
        "label": "Greensboro", 
        "growth_from_2000_to_2013": "22.3%", 
        "latitude": 36.0726354, 
        "longitude": -79.7919754, 
        "population": "279639", 
        "value": "68", 
        "state": "North Carolina"
    }, 
    {
        "label": "Newark", 
        "growth_from_2000_to_2013": "2.1%", 
        "latitude": 40.735657, 
        "longitude": -74.1723667, 
        "population": "278427", 
        "value": "69", 
        "state": "New Jersey"
    }, 
    {
        "label": "Plano", 
        "growth_from_2000_to_2013": "22.4%", 
        "latitude": 33.0198431, 
        "longitude": -96.6988856, 
        "population": "274409", 
        "value": "70", 
        "state": "Texas"
    }, 
    {
        "label": "Henderson", 
        "growth_from_2000_to_2013": "51.0%", 
        "latitude": 36.0395247, 
        "longitude": -114.9817213, 
        "population": "270811", 
        "value": "71", 
        "state": "Nevada"
    }, 
    {
        "label": "Lincoln", 
        "growth_from_2000_to_2013": "18.0%", 
        "latitude": 40.8257625, 
        "longitude": -96.6851982, 
        "population": "268738", 
        "value": "72", 
        "state": "Nebraska"
    }, 
    {
        "label": "Buffalo", 
        "growth_from_2000_to_2013": "-11.3%", 
        "latitude": 42.88644679999999, 
        "longitude": -78.8783689, 
        "population": "258959", 
        "value": "73", 
        "state": "New York"
    }, 
    {
        "label": "Jersey label", 
        "growth_from_2000_to_2013": "7.2%", 
        "latitude": 40.72815749999999, 
        "longitude": -74.0776417, 
        "population": "257342", 
        "value": "74", 
        "state": "New Jersey"
    }, 
    {
        "label": "Chula Vista", 
        "growth_from_2000_to_2013": "46.2%", 
        "latitude": 32.6400541, 
        "longitude": -117.0841955, 
        "population": "256780", 
        "value": "75", 
        "state": "California"
    }, 
    {
        "label": "Fort Wayne", 
        "growth_from_2000_to_2013": "1.0%", 
        "latitude": 41.079273, 
        "longitude": -85.1393513, 
        "population": "256496", 
        "value": "76", 
        "state": "Indiana"
    }, 
    {
        "label": "Orlando", 
        "growth_from_2000_to_2013": "31.2%", 
        "latitude": 28.5383355, 
        "longitude": -81.3792365, 
        "population": "255483", 
        "value": "77", 
        "state": "Florida"
    }, 
    {
        "label": "St. Petersburg", 
        "growth_from_2000_to_2013": "0.3%", 
        "latitude": 27.773056, 
        "longitude": -82.64, 
        "population": "249688", 
        "value": "78", 
        "state": "Florida"
    }, 
    {
        "label": "Chandler", 
        "growth_from_2000_to_2013": "38.7%", 
        "latitude": 33.3061605, 
        "longitude": -111.8412502, 
        "population": "249146", 
        "value": "79", 
        "state": "Arizona"
    }, 
    {
        "label": "Laredo", 
        "growth_from_2000_to_2013": "38.2%", 
        "latitude": 27.5305671, 
        "longitude": -99.48032409999999, 
        "population": "248142", 
        "value": "80", 
        "state": "Texas"
    }, 
    {
        "label": "Norfolk", 
        "growth_from_2000_to_2013": "5.0%", 
        "latitude": 36.8507689, 
        "longitude": -76.28587259999999, 
        "population": "246139", 
        "value": "81", 
        "state": "Virginia"
    }, 
    {
        "label": "Durham", 
        "growth_from_2000_to_2013": "29.9%", 
        "latitude": 35.9940329, 
        "longitude": -78.898619, 
        "population": "245475", 
        "value": "82", 
        "state": "North Carolina"
    }, 
    {
        "label": "Madison", 
        "growth_from_2000_to_2013": "15.8%", 
        "latitude": 43.0730517, 
        "longitude": -89.4012302, 
        "population": "243344", 
        "value": "83", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Lubbock", 
        "growth_from_2000_to_2013": "19.6%", 
        "latitude": 33.5778631, 
        "longitude": -101.8551665, 
        "population": "239538", 
        "value": "84", 
        "state": "Texas"
    }, 
    {
        "label": "Irvine", 
        "growth_from_2000_to_2013": "61.3%", 
        "latitude": 33.6839473, 
        "longitude": -117.7946942, 
        "population": "236716", 
        "value": "85", 
        "state": "California"
    }, 
    {
        "label": "Winston-Salem", 
        "growth_from_2000_to_2013": "16.9%", 
        "latitude": 36.09985959999999, 
        "longitude": -80.244216, 
        "population": "236441", 
        "value": "86", 
        "state": "North Carolina"
    }, 
    {
        "label": "Glendale", 
        "growth_from_2000_to_2013": "5.7%", 
        "latitude": 33.5386523, 
        "longitude": -112.1859866, 
        "population": "234632", 
        "value": "87", 
        "state": "Arizona"
    }, 
    {
        "label": "Garland", 
        "growth_from_2000_to_2013": "8.5%", 
        "latitude": 32.912624, 
        "longitude": -96.63888329999999, 
        "population": "234566", 
        "value": "88", 
        "state": "Texas"
    }, 
    {
        "label": "Hialeah", 
        "growth_from_2000_to_2013": "3.2%", 
        "latitude": 25.8575963, 
        "longitude": -80.2781057, 
        "population": "233394", 
        "value": "89", 
        "state": "Florida"
    }, 
    {
        "label": "Reno", 
        "growth_from_2000_to_2013": "26.8%", 
        "latitude": 39.5296329, 
        "longitude": -119.8138027, 
        "population": "233294", 
        "value": "90", 
        "state": "Nevada"
    }, 
    {
        "label": "Chesapeake", 
        "growth_from_2000_to_2013": "15.1%", 
        "latitude": 36.7682088, 
        "longitude": -76.2874927, 
        "population": "230571", 
        "value": "91", 
        "state": "Virginia"
    }, 
    {
        "label": "Gilbert", 
        "growth_from_2000_to_2013": "96.0%", 
        "latitude": 33.3528264, 
        "longitude": -111.789027, 
        "population": "229972", 
        "value": "92", 
        "state": "Arizona"
    }, 
    {
        "label": "Baton Rouge", 
        "growth_from_2000_to_2013": "0.4%", 
        "latitude": 30.4582829, 
        "longitude": -91.1403196, 
        "population": "229426", 
        "value": "93", 
        "state": "Louisiana"
    }, 
    {
        "label": "Irving", 
        "growth_from_2000_to_2013": "19.1%", 
        "latitude": 32.8140177, 
        "longitude": -96.9488945, 
        "population": "228653", 
        "value": "94", 
        "state": "Texas"
    }, 
    {
        "label": "Scottsdale", 
        "growth_from_2000_to_2013": "11.0%", 
        "latitude": 33.4941704, 
        "longitude": -111.9260519, 
        "population": "226918", 
        "value": "95", 
        "state": "Arizona"
    }, 
    {
        "label": "North Las Vegas", 
        "growth_from_2000_to_2013": "92.2%", 
        "latitude": 36.1988592, 
        "longitude": -115.1175013, 
        "population": "226877", 
        "value": "96", 
        "state": "Nevada"
    }, 
    {
        "label": "Fremont", 
        "growth_from_2000_to_2013": "10.0%", 
        "latitude": 37.5482697, 
        "longitude": -121.9885719, 
        "population": "224922", 
        "value": "97", 
        "state": "California"
    }, 
    {
        "label": "Boise label", 
        "growth_from_2000_to_2013": "9.5%", 
        "latitude": 43.6187102, 
        "longitude": -116.2146068, 
        "population": "214237", 
        "value": "98", 
        "state": "Idaho"
    }, 
    {
        "label": "Richmond", 
        "growth_from_2000_to_2013": "8.2%", 
        "latitude": 37.5407246, 
        "longitude": -77.4360481, 
        "population": "214114", 
        "value": "99", 
        "state": "Virginia"
    }, 
    {
        "label": "San Bernardino", 
        "growth_from_2000_to_2013": "13.0%", 
        "latitude": 34.1083449, 
        "longitude": -117.2897652, 
        "population": "213708", 
        "value": "100", 
        "state": "California"
    }, 
    {
        "label": "Birmingham", 
        "growth_from_2000_to_2013": "-12.3%", 
        "latitude": 33.5206608, 
        "longitude": -86.80248999999999, 
        "population": "212113", 
        "value": "101", 
        "state": "Alabama"
    }, 
    {
        "label": "Spokane", 
        "growth_from_2000_to_2013": "7.0%", 
        "latitude": 47.6587802, 
        "longitude": -117.4260466, 
        "population": "210721", 
        "value": "102", 
        "state": "Washington"
    }, 
    {
        "label": "Rochester", 
        "growth_from_2000_to_2013": "-4.1%", 
        "latitude": 43.16103, 
        "longitude": -77.6109219, 
        "population": "210358", 
        "value": "103", 
        "state": "New York"
    }, 
    {
        "label": "Des Moines", 
        "growth_from_2000_to_2013": "3.9%", 
        "latitude": 41.6005448, 
        "longitude": -93.6091064, 
        "population": "207510", 
        "value": "104", 
        "state": "Iowa"
    }, 
    {
        "label": "Modesto", 
        "growth_from_2000_to_2013": "7.7%", 
        "latitude": 37.63909719999999, 
        "longitude": -120.9968782, 
        "population": "204933", 
        "value": "105", 
        "state": "California"
    }, 
    {
        "label": "Fayetteville", 
        "growth_from_2000_to_2013": "2.4%", 
        "latitude": 35.0526641, 
        "longitude": -78.87835849999999, 
        "population": "204408", 
        "value": "106", 
        "state": "North Carolina"
    }, 
    {
        "label": "Tacoma", 
        "growth_from_2000_to_2013": "4.9%", 
        "latitude": 47.2528768, 
        "longitude": -122.4442906, 
        "population": "203446", 
        "value": "107", 
        "state": "Washington"
    }, 
    {
        "label": "Oxnard", 
        "growth_from_2000_to_2013": "18.2%", 
        "latitude": 34.1975048, 
        "longitude": -119.1770516, 
        "population": "203007", 
        "value": "108", 
        "state": "California"
    }, 
    {
        "label": "Fontana", 
        "growth_from_2000_to_2013": "38.3%", 
        "latitude": 34.0922335, 
        "longitude": -117.435048, 
        "population": "203003", 
        "value": "109", 
        "state": "California"
    }, 
    {
        "label": "Columbus", 
        "growth_from_2000_to_2013": "8.7%", 
        "latitude": 32.4609764, 
        "longitude": -84.9877094, 
        "population": "202824", 
        "value": "110", 
        "state": "Georgia"
    }, 
    {
        "label": "Montgomery", 
        "growth_from_2000_to_2013": "-0.1%", 
        "latitude": 32.3668052, 
        "longitude": -86.2999689, 
        "population": "201332", 
        "value": "111", 
        "state": "Alabama"
    }, 
    {
        "label": "Moreno Valley", 
        "growth_from_2000_to_2013": "40.4%", 
        "latitude": 33.9424658, 
        "longitude": -117.2296717, 
        "population": "201175", 
        "value": "112", 
        "state": "California"
    }, 
    {
        "label": "Shreveport", 
        "growth_from_2000_to_2013": "-0.1%", 
        "latitude": 32.5251516, 
        "longitude": -93.7501789, 
        "population": "200327", 
        "value": "113", 
        "state": "Louisiana"
    }, 
    {
        "label": "Aurora", 
        "growth_from_2000_to_2013": "38.4%", 
        "latitude": 41.7605849, 
        "longitude": -88.32007150000001, 
        "population": "199963", 
        "value": "114", 
        "state": "Illinois"
    }, 
    {
        "label": "Yonkers", 
        "growth_from_2000_to_2013": "1.8%", 
        "latitude": 40.9312099, 
        "longitude": -73.89874689999999, 
        "population": "199766", 
        "value": "115", 
        "state": "New York"
    }, 
    {
        "label": "Akron", 
        "growth_from_2000_to_2013": "-8.6%", 
        "latitude": 41.0814447, 
        "longitude": -81.51900529999999, 
        "population": "198100", 
        "value": "116", 
        "state": "Ohio"
    }, 
    {
        "label": "Huntington Beach", 
        "growth_from_2000_to_2013": "3.9%", 
        "latitude": 33.660297, 
        "longitude": -117.9992265, 
        "population": "197575", 
        "value": "117", 
        "state": "California"
    }, 
    {
        "label": "Little Rock", 
        "growth_from_2000_to_2013": "7.6%", 
        "latitude": 34.7464809, 
        "longitude": -92.28959479999999, 
        "population": "197357", 
        "value": "118", 
        "state": "Arkansas"
    }, 
    {
        "label": "Augusta-Richmond County", 
        "growth_from_2000_to_2013": "1.1%", 
        "latitude": 33.4734978, 
        "longitude": -82.0105148, 
        "population": "197350", 
        "value": "119", 
        "state": "Georgia"
    }, 
    {
        "label": "Amarillo", 
        "growth_from_2000_to_2013": "12.8%", 
        "latitude": 35.2219971, 
        "longitude": -101.8312969, 
        "population": "196429", 
        "value": "120", 
        "state": "Texas"
    }, 
    {
        "label": "Glendale", 
        "growth_from_2000_to_2013": "0.3%", 
        "latitude": 34.1425078, 
        "longitude": -118.255075, 
        "population": "196021", 
        "value": "121", 
        "state": "California"
    }, 
    {
        "label": "Mobile", 
        "growth_from_2000_to_2013": "-1.9%", 
        "latitude": 30.6953657, 
        "longitude": -88.0398912, 
        "population": "194899", 
        "value": "122", 
        "state": "Alabama"
    }, 
    {
        "label": "Grand Rapids", 
        "growth_from_2000_to_2013": "-2.8%", 
        "latitude": 42.9633599, 
        "longitude": -85.6680863, 
        "population": "192294", 
        "value": "123", 
        "state": "Michigan"
    }, 
    {
        "label": "Salt Lake label", 
        "growth_from_2000_to_2013": "5.1%", 
        "latitude": 40.7607793, 
        "longitude": -111.8910474, 
        "population": "191180", 
        "value": "124", 
        "state": "Utah"
    }, 
    {
        "label": "Tallahassee", 
        "growth_from_2000_to_2013": "21.8%", 
        "latitude": 30.4382559, 
        "longitude": -84.28073289999999, 
        "population": "186411", 
        "value": "125", 
        "state": "Florida"
    }, 
    {
        "label": "Huntsville", 
        "growth_from_2000_to_2013": "16.3%", 
        "latitude": 34.7303688, 
        "longitude": -86.5861037, 
        "population": "186254", 
        "value": "126", 
        "state": "Alabama"
    }, 
    {
        "label": "Grand Prairie", 
        "growth_from_2000_to_2013": "43.1%", 
        "latitude": 32.7459645, 
        "longitude": -96.99778459999999, 
        "population": "183372", 
        "value": "127", 
        "state": "Texas"
    }, 
    {
        "label": "Knoxville", 
        "growth_from_2000_to_2013": "3.9%", 
        "latitude": 35.9606384, 
        "longitude": -83.9207392, 
        "population": "183270", 
        "value": "128", 
        "state": "Tennessee"
    }, 
    {
        "label": "Worcester", 
        "growth_from_2000_to_2013": "5.8%", 
        "latitude": 42.2625932, 
        "longitude": -71.8022934, 
        "population": "182544", 
        "value": "129", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Newport News", 
        "growth_from_2000_to_2013": "0.9%", 
        "latitude": 37.0870821, 
        "longitude": -76.4730122, 
        "population": "182020", 
        "value": "130", 
        "state": "Virginia"
    }, 
    {
        "label": "Brownsville", 
        "growth_from_2000_to_2013": "26.8%", 
        "latitude": 25.9017472, 
        "longitude": -97.4974838, 
        "population": "181860", 
        "value": "131", 
        "state": "Texas"
    }, 
    {
        "label": "Overland Park", 
        "growth_from_2000_to_2013": "19.4%", 
        "latitude": 38.9822282, 
        "longitude": -94.6707917, 
        "population": "181260", 
        "value": "132", 
        "state": "Kansas"
    }, 
    {
        "label": "Santa Clarita", 
        "growth_from_2000_to_2013": "15.3%", 
        "latitude": 34.3916641, 
        "longitude": -118.542586, 
        "population": "179590", 
        "value": "133", 
        "state": "California"
    }, 
    {
        "label": "Providence", 
        "growth_from_2000_to_2013": "2.3%", 
        "latitude": 41.8239891, 
        "longitude": -71.4128343, 
        "population": "177994", 
        "value": "134", 
        "state": "Rhode Island"
    }, 
    {
        "label": "Garden Grove", 
        "growth_from_2000_to_2013": "5.8%", 
        "latitude": 33.7739053, 
        "longitude": -117.9414477, 
        "population": "175140", 
        "value": "135", 
        "state": "California"
    }, 
    {
        "label": "Chattanooga", 
        "growth_from_2000_to_2013": "10.5%", 
        "latitude": 35.0456297, 
        "longitude": -85.3096801, 
        "population": "173366", 
        "value": "136", 
        "state": "Tennessee"
    }, 
    {
        "label": "Oceanside", 
        "growth_from_2000_to_2013": "6.6%", 
        "latitude": 33.1958696, 
        "longitude": -117.3794834, 
        "population": "172794", 
        "value": "137", 
        "state": "California"
    }, 
    {
        "label": "Jackson", 
        "growth_from_2000_to_2013": "-6.8%", 
        "latitude": 32.2987573, 
        "longitude": -90.1848103, 
        "population": "172638", 
        "value": "138", 
        "state": "Mississippi"
    }, 
    {
        "label": "Fort Lauderdale", 
        "growth_from_2000_to_2013": "0.7%", 
        "latitude": 26.1224386, 
        "longitude": -80.13731740000001, 
        "population": "172389", 
        "value": "139", 
        "state": "Florida"
    }, 
    {
        "label": "Santa Rosa", 
        "growth_from_2000_to_2013": "15.2%", 
        "latitude": 38.440429, 
        "longitude": -122.7140548, 
        "population": "171990", 
        "value": "140", 
        "state": "California"
    }, 
    {
        "label": "Rancho Cucamonga", 
        "growth_from_2000_to_2013": "32.7%", 
        "latitude": 34.10639889999999, 
        "longitude": -117.5931084, 
        "population": "171386", 
        "value": "141", 
        "state": "California"
    }, 
    {
        "label": "Port St. Lucie", 
        "growth_from_2000_to_2013": "91.7%", 
        "latitude": 27.2730492, 
        "longitude": -80.3582261, 
        "population": "171016", 
        "value": "142", 
        "state": "Florida"
    }, 
    {
        "label": "Tempe", 
        "growth_from_2000_to_2013": "5.8%", 
        "latitude": 33.4255104, 
        "longitude": -111.9400054, 
        "population": "168228", 
        "value": "143", 
        "state": "Arizona"
    }, 
    {
        "label": "Ontario", 
        "growth_from_2000_to_2013": "5.5%", 
        "latitude": 34.0633443, 
        "longitude": -117.6508876, 
        "population": "167500", 
        "value": "144", 
        "state": "California"
    }, 
    {
        "label": "Vancouver", 
        "growth_from_2000_to_2013": "14.2%", 
        "latitude": 45.6387281, 
        "longitude": -122.6614861, 
        "population": "167405", 
        "value": "145", 
        "state": "Washington"
    }, 
    {
        "label": "Cape Coral", 
        "growth_from_2000_to_2013": "60.4%", 
        "latitude": 26.5628537, 
        "longitude": -81.9495331, 
        "population": "165831", 
        "value": "146", 
        "state": "Florida"
    }, 
    {
        "label": "Sioux Falls", 
        "growth_from_2000_to_2013": "31.1%", 
        "latitude": 43.5445959, 
        "longitude": -96.73110340000001, 
        "population": "164676", 
        "value": "147", 
        "state": "South Dakota"
    }, 
    {
        "label": "Springfield", 
        "growth_from_2000_to_2013": "7.8%", 
        "latitude": 37.2089572, 
        "longitude": -93.29229889999999, 
        "population": "164122", 
        "value": "148", 
        "state": "Missouri"
    }, 
    {
        "label": "Peoria", 
        "growth_from_2000_to_2013": "46.5%", 
        "latitude": 33.5805955, 
        "longitude": -112.2373779, 
        "population": "162592", 
        "value": "149", 
        "state": "Arizona"
    }, 
    {
        "label": "Pembroke Pines", 
        "growth_from_2000_to_2013": "17.4%", 
        "latitude": 26.007765, 
        "longitude": -80.2962555, 
        "population": "162329", 
        "value": "150", 
        "state": "Florida"
    }, 
    {
        "label": "Elk Grove", 
        "growth_from_2000_to_2013": "97.1%", 
        "latitude": 38.4087993, 
        "longitude": -121.3716178, 
        "population": "161007", 
        "value": "151", 
        "state": "California"
    }, 
    {
        "label": "Salem", 
        "growth_from_2000_to_2013": "16.4%", 
        "latitude": 44.9428975, 
        "longitude": -123.0350963, 
        "population": "160614", 
        "value": "152", 
        "state": "Oregon"
    }, 
    {
        "label": "Lancaster", 
        "growth_from_2000_to_2013": "33.8%", 
        "latitude": 34.6867846, 
        "longitude": -118.1541632, 
        "population": "159523", 
        "value": "153", 
        "state": "California"
    }, 
    {
        "label": "Corona", 
        "growth_from_2000_to_2013": "23.6%", 
        "latitude": 33.8752935, 
        "longitude": -117.5664384, 
        "population": "159503", 
        "value": "154", 
        "state": "California"
    }, 
    {
        "label": "Eugene", 
        "growth_from_2000_to_2013": "14.4%", 
        "latitude": 44.0520691, 
        "longitude": -123.0867536, 
        "population": "159190", 
        "value": "155", 
        "state": "Oregon"
    }, 
    {
        "label": "Palmdale", 
        "growth_from_2000_to_2013": "33.7%", 
        "latitude": 34.5794343, 
        "longitude": -118.1164613, 
        "population": "157161", 
        "value": "156", 
        "state": "California"
    }, 
    {
        "label": "Salinas", 
        "growth_from_2000_to_2013": "8.4%", 
        "latitude": 36.6777372, 
        "longitude": -121.6555013, 
        "population": "155662", 
        "value": "157", 
        "state": "California"
    }, 
    {
        "label": "Springfield", 
        "growth_from_2000_to_2013": "1.1%", 
        "latitude": 42.1014831, 
        "longitude": -72.589811, 
        "population": "153703", 
        "value": "158", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Pasadena", 
        "growth_from_2000_to_2013": "7.5%", 
        "latitude": 29.6910625, 
        "longitude": -95.2091006, 
        "population": "152735", 
        "value": "159", 
        "state": "Texas"
    }, 
    {
        "label": "Fort Collins", 
        "growth_from_2000_to_2013": "26.6%", 
        "latitude": 40.5852602, 
        "longitude": -105.084423, 
        "population": "152061", 
        "value": "160", 
        "state": "Colorado"
    }, 
    {
        "label": "Hayward", 
        "growth_from_2000_to_2013": "7.5%", 
        "latitude": 37.6688205, 
        "longitude": -122.0807964, 
        "population": "151574", 
        "value": "161", 
        "state": "California"
    }, 
    {
        "label": "Pomona", 
        "growth_from_2000_to_2013": "2.1%", 
        "latitude": 34.055103, 
        "longitude": -117.7499909, 
        "population": "151348", 
        "value": "162", 
        "state": "California"
    }, 
    {
        "label": "Cary", 
        "growth_from_2000_to_2013": "55.1%", 
        "latitude": 35.79154, 
        "longitude": -78.7811169, 
        "population": "151088", 
        "value": "163", 
        "state": "North Carolina"
    }, 
    {
        "label": "Rockford", 
        "growth_from_2000_to_2013": "-1.0%", 
        "latitude": 42.2711311, 
        "longitude": -89.0939952, 
        "population": "150251", 
        "value": "164", 
        "state": "Illinois"
    }, 
    {
        "label": "Alexandria", 
        "growth_from_2000_to_2013": "15.0%", 
        "latitude": 38.8048355, 
        "longitude": -77.0469214, 
        "population": "148892", 
        "value": "165", 
        "state": "Virginia"
    }, 
    {
        "label": "Escondido", 
        "growth_from_2000_to_2013": "10.7%", 
        "latitude": 33.1192068, 
        "longitude": -117.086421, 
        "population": "148738", 
        "value": "166", 
        "state": "California"
    }, 
    {
        "label": "McKinney", 
        "growth_from_2000_to_2013": "165.3%", 
        "latitude": 33.1972465, 
        "longitude": -96.6397822, 
        "population": "148559", 
        "value": "167", 
        "state": "Texas"
    }, 
    {
        "label": "Kansas label", 
        "growth_from_2000_to_2013": "1.1%", 
        "latitude": 39.114053, 
        "longitude": -94.6274636, 
        "population": "148483", 
        "value": "168", 
        "state": "Kansas"
    }, 
    {
        "label": "Joliet", 
        "growth_from_2000_to_2013": "36.5%", 
        "latitude": 41.525031, 
        "longitude": -88.0817251, 
        "population": "147806", 
        "value": "169", 
        "state": "Illinois"
    }, 
    {
        "label": "Sunnyvale", 
        "growth_from_2000_to_2013": "11.9%", 
        "latitude": 37.36883, 
        "longitude": -122.0363496, 
        "population": "147559", 
        "value": "170", 
        "state": "California"
    }, 
    {
        "label": "Torrance", 
        "growth_from_2000_to_2013": "6.6%", 
        "latitude": 33.8358492, 
        "longitude": -118.3406288, 
        "population": "147478", 
        "value": "171", 
        "state": "California"
    }, 
    {
        "label": "Bridgeport", 
        "growth_from_2000_to_2013": "5.4%", 
        "latitude": 41.1865478, 
        "longitude": -73.19517669999999, 
        "population": "147216", 
        "value": "172", 
        "state": "Connecticut"
    }, 
    {
        "label": "Lakewood", 
        "growth_from_2000_to_2013": "1.9%", 
        "latitude": 39.7047095, 
        "longitude": -105.0813734, 
        "population": "147214", 
        "value": "173", 
        "state": "Colorado"
    }, 
    {
        "label": "Hollywood", 
        "growth_from_2000_to_2013": "4.8%", 
        "latitude": 26.0112014, 
        "longitude": -80.1494901, 
        "population": "146526", 
        "value": "174", 
        "state": "Florida"
    }, 
    {
        "label": "Paterson", 
        "growth_from_2000_to_2013": "-2.2%", 
        "latitude": 40.9167654, 
        "longitude": -74.17181099999999, 
        "population": "145948", 
        "value": "175", 
        "state": "New Jersey"
    }, 
    {
        "label": "Naperville", 
        "growth_from_2000_to_2013": "12.0%", 
        "latitude": 41.7508391, 
        "longitude": -88.1535352, 
        "population": "144864", 
        "value": "176", 
        "state": "Illinois"
    }, 
    {
        "label": "Syracuse", 
        "growth_from_2000_to_2013": "-0.9%", 
        "latitude": 43.0481221, 
        "longitude": -76.14742439999999, 
        "population": "144669", 
        "value": "177", 
        "state": "New York"
    }, 
    {
        "label": "Mesquite", 
        "growth_from_2000_to_2013": "14.7%", 
        "latitude": 32.76679550000001, 
        "longitude": -96.5991593, 
        "population": "143484", 
        "value": "178", 
        "state": "Texas"
    }, 
    {
        "label": "Dayton", 
        "growth_from_2000_to_2013": "-13.5%", 
        "latitude": 39.7589478, 
        "longitude": -84.1916069, 
        "population": "143355", 
        "value": "179", 
        "state": "Ohio"
    }, 
    {
        "label": "Savannah", 
        "growth_from_2000_to_2013": "7.5%", 
        "latitude": 32.0835407, 
        "longitude": -81.09983419999999, 
        "population": "142772", 
        "value": "180", 
        "state": "Georgia"
    }, 
    {
        "label": "Clarksville", 
        "growth_from_2000_to_2013": "36.9%", 
        "latitude": 36.5297706, 
        "longitude": -87.3594528, 
        "population": "142357", 
        "value": "181", 
        "state": "Tennessee"
    }, 
    {
        "label": "Orange", 
        "growth_from_2000_to_2013": "7.7%", 
        "latitude": 33.7877944, 
        "longitude": -117.8531119, 
        "population": "139969", 
        "value": "182", 
        "state": "California"
    }, 
    {
        "label": "Pasadena", 
        "growth_from_2000_to_2013": "3.8%", 
        "latitude": 34.1477849, 
        "longitude": -118.1445155, 
        "population": "139731", 
        "value": "183", 
        "state": "California"
    }, 
    {
        "label": "Fullerton", 
        "growth_from_2000_to_2013": "9.8%", 
        "latitude": 33.8703596, 
        "longitude": -117.9242966, 
        "population": "138981", 
        "value": "184", 
        "state": "California"
    }, 
    {
        "label": "Killeen", 
        "growth_from_2000_to_2013": "52.1%", 
        "latitude": 31.1171194, 
        "longitude": -97.72779589999999, 
        "population": "137147", 
        "value": "185", 
        "state": "Texas"
    }, 
    {
        "label": "Frisco", 
        "growth_from_2000_to_2013": "287.7%", 
        "latitude": 33.1506744, 
        "longitude": -96.82361159999999, 
        "population": "136791", 
        "value": "186", 
        "state": "Texas"
    }, 
    {
        "label": "Hampton", 
        "growth_from_2000_to_2013": "-6.6%", 
        "latitude": 37.0298687, 
        "longitude": -76.34522179999999, 
        "population": "136699", 
        "value": "187", 
        "state": "Virginia"
    }, 
    {
        "label": "McAllen", 
        "growth_from_2000_to_2013": "27.6%", 
        "latitude": 26.2034071, 
        "longitude": -98.23001239999999, 
        "population": "136639", 
        "value": "188", 
        "state": "Texas"
    }, 
    {
        "label": "Warren", 
        "growth_from_2000_to_2013": "-2.3%", 
        "latitude": 42.5144566, 
        "longitude": -83.01465259999999, 
        "population": "134873", 
        "value": "189", 
        "state": "Michigan"
    }, 
    {
        "label": "Bellevue", 
        "growth_from_2000_to_2013": "19.1%", 
        "latitude": 47.610377, 
        "longitude": -122.2006786, 
        "population": "133992", 
        "value": "190", 
        "state": "Washington"
    }, 
    {
        "label": "West Valley label", 
        "growth_from_2000_to_2013": "22.2%", 
        "latitude": 40.6916132, 
        "longitude": -112.0010501, 
        "population": "133579", 
        "value": "191", 
        "state": "Utah"
    }, 
    {
        "label": "Columbia", 
        "growth_from_2000_to_2013": "11.7%", 
        "latitude": 34.0007104, 
        "longitude": -81.0348144, 
        "population": "133358", 
        "value": "192", 
        "state": "South Carolina"
    }, 
    {
        "label": "Olathe", 
        "growth_from_2000_to_2013": "40.4%", 
        "latitude": 38.8813958, 
        "longitude": -94.81912849999999, 
        "population": "131885", 
        "value": "193", 
        "state": "Kansas"
    }, 
    {
        "label": "Sterling Heights", 
        "growth_from_2000_to_2013": "5.2%", 
        "latitude": 42.5803122, 
        "longitude": -83.0302033, 
        "population": "131224", 
        "value": "194", 
        "state": "Michigan"
    }, 
    {
        "label": "New Haven", 
        "growth_from_2000_to_2013": "5.5%", 
        "latitude": 41.308274, 
        "longitude": -72.9278835, 
        "population": "130660", 
        "value": "195", 
        "state": "Connecticut"
    }, 
    {
        "label": "Miramar", 
        "growth_from_2000_to_2013": "74.7%", 
        "latitude": 25.9860762, 
        "longitude": -80.30356019999999, 
        "population": "130288", 
        "value": "196", 
        "state": "Florida"
    }, 
    {
        "label": "Waco", 
        "growth_from_2000_to_2013": "12.5%", 
        "latitude": 31.549333, 
        "longitude": -97.1466695, 
        "population": "129030", 
        "value": "197", 
        "state": "Texas"
    }, 
    {
        "label": "Thousand Oaks", 
        "growth_from_2000_to_2013": "9.5%", 
        "latitude": 34.1705609, 
        "longitude": -118.8375937, 
        "population": "128731", 
        "value": "198", 
        "state": "California"
    }, 
    {
        "label": "Cedar Rapids", 
        "growth_from_2000_to_2013": "5.4%", 
        "latitude": 41.9778795, 
        "longitude": -91.6656232, 
        "population": "128429", 
        "value": "199", 
        "state": "Iowa"
    }, 
    {
        "label": "Charleston", 
        "growth_from_2000_to_2013": "29.2%", 
        "latitude": 32.7764749, 
        "longitude": -79.93105120000001, 
        "population": "127999", 
        "value": "200", 
        "state": "South Carolina"
    }, 
    {
        "label": "Visalia", 
        "growth_from_2000_to_2013": "33.6%", 
        "latitude": 36.3302284, 
        "longitude": -119.2920585, 
        "population": "127763", 
        "value": "201", 
        "state": "California"
    }, 
    {
        "label": "Topeka", 
        "growth_from_2000_to_2013": "3.4%", 
        "latitude": 39.0558235, 
        "longitude": -95.68901849999999, 
        "population": "127679", 
        "value": "202", 
        "state": "Kansas"
    }, 
    {
        "label": "Elizabeth", 
        "growth_from_2000_to_2013": "5.5%", 
        "latitude": 40.6639916, 
        "longitude": -74.2107006, 
        "population": "127558", 
        "value": "203", 
        "state": "New Jersey"
    }, 
    {
        "label": "Gainesville", 
        "growth_from_2000_to_2013": "12.8%", 
        "latitude": 29.6516344, 
        "longitude": -82.32482619999999, 
        "population": "127488", 
        "value": "204", 
        "state": "Florida"
    }, 
    {
        "label": "Thornton", 
        "growth_from_2000_to_2013": "52.9%", 
        "latitude": 39.8680412, 
        "longitude": -104.9719243, 
        "population": "127359", 
        "value": "205", 
        "state": "Colorado"
    }, 
    {
        "label": "Roseville", 
        "growth_from_2000_to_2013": "56.2%", 
        "latitude": 38.7521235, 
        "longitude": -121.2880059, 
        "population": "127035", 
        "value": "206", 
        "state": "California"
    }, 
    {
        "label": "Carrollton", 
        "growth_from_2000_to_2013": "14.9%", 
        "latitude": 32.9756415, 
        "longitude": -96.8899636, 
        "population": "126700", 
        "value": "207", 
        "state": "Texas"
    }, 
    {
        "label": "Coral Springs", 
        "growth_from_2000_to_2013": "5.7%", 
        "latitude": 26.271192, 
        "longitude": -80.2706044, 
        "population": "126604", 
        "value": "208", 
        "state": "Florida"
    }, 
    {
        "label": "Stamford", 
        "growth_from_2000_to_2013": "7.6%", 
        "latitude": 41.0534302, 
        "longitude": -73.5387341, 
        "population": "126456", 
        "value": "209", 
        "state": "Connecticut"
    }, 
    {
        "label": "Simi Valley", 
        "growth_from_2000_to_2013": "12.6%", 
        "latitude": 34.2694474, 
        "longitude": -118.781482, 
        "population": "126181", 
        "value": "210", 
        "state": "California"
    }, 
    {
        "label": "Concord", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 37.9779776, 
        "longitude": -122.0310733, 
        "population": "125880", 
        "value": "211", 
        "state": "California"
    }, 
    {
        "label": "Hartford", 
        "growth_from_2000_to_2013": "0.6%", 
        "latitude": 41.76371109999999, 
        "longitude": -72.6850932, 
        "population": "125017", 
        "value": "212", 
        "state": "Connecticut"
    }, 
    {
        "label": "Kent", 
        "growth_from_2000_to_2013": "54.3%", 
        "latitude": 47.3809335, 
        "longitude": -122.2348431, 
        "population": "124435", 
        "value": "213", 
        "state": "Washington"
    }, 
    {
        "label": "Lafayette", 
        "growth_from_2000_to_2013": "11.0%", 
        "latitude": 30.2240897, 
        "longitude": -92.0198427, 
        "population": "124276", 
        "value": "214", 
        "state": "Louisiana"
    }, 
    {
        "label": "Midland", 
        "growth_from_2000_to_2013": "30.4%", 
        "latitude": 31.9973456, 
        "longitude": -102.0779146, 
        "population": "123933", 
        "value": "215", 
        "state": "Texas"
    }, 
    {
        "label": "Surprise", 
        "growth_from_2000_to_2013": "281.9%", 
        "latitude": 33.6292337, 
        "longitude": -112.3679279, 
        "population": "123546", 
        "value": "216", 
        "state": "Arizona"
    }, 
    {
        "label": "Denton", 
        "growth_from_2000_to_2013": "47.1%", 
        "latitude": 33.2148412, 
        "longitude": -97.13306829999999, 
        "population": "123099", 
        "value": "217", 
        "state": "Texas"
    }, 
    {
        "label": "Victorville", 
        "growth_from_2000_to_2013": "87.6%", 
        "latitude": 34.5362184, 
        "longitude": -117.2927641, 
        "population": "121096", 
        "value": "218", 
        "state": "California"
    }, 
    {
        "label": "Evansville", 
        "growth_from_2000_to_2013": "-0.8%", 
        "latitude": 37.9715592, 
        "longitude": -87.5710898, 
        "population": "120310", 
        "value": "219", 
        "state": "Indiana"
    }, 
    {
        "label": "Santa Clara", 
        "growth_from_2000_to_2013": "17.4%", 
        "latitude": 37.3541079, 
        "longitude": -121.9552356, 
        "population": "120245", 
        "value": "220", 
        "state": "California"
    }, 
    {
        "label": "Abilene", 
        "growth_from_2000_to_2013": "3.6%", 
        "latitude": 32.4487364, 
        "longitude": -99.73314390000002, 
        "population": "120099", 
        "value": "221", 
        "state": "Texas"
    }, 
    {
        "label": "Athens-Clarke County", 
        "growth_from_2000_to_2013": "19.0%", 
        "latitude": 33.9519347, 
        "longitude": -83.357567, 
        "population": "119980", 
        "value": "222", 
        "state": "Georgia"
    }, 
    {
        "label": "Vallejo", 
        "growth_from_2000_to_2013": "1.2%", 
        "latitude": 38.1040864, 
        "longitude": -122.2566367, 
        "population": "118837", 
        "value": "223", 
        "state": "California"
    }, 
    {
        "label": "Allentown", 
        "growth_from_2000_to_2013": "11.2%", 
        "latitude": 40.6084305, 
        "longitude": -75.4901833, 
        "population": "118577", 
        "value": "224", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Norman", 
        "growth_from_2000_to_2013": "22.0%", 
        "latitude": 35.2225668, 
        "longitude": -97.4394777, 
        "population": "118197", 
        "value": "225", 
        "state": "Oklahoma"
    }, 
    {
        "label": "Beaumont", 
        "growth_from_2000_to_2013": "3.7%", 
        "latitude": 30.080174, 
        "longitude": -94.1265562, 
        "population": "117796", 
        "value": "226", 
        "state": "Texas"
    }, 
    {
        "label": "Independence", 
        "growth_from_2000_to_2013": "3.2%", 
        "latitude": 39.0911161, 
        "longitude": -94.41550679999999, 
        "population": "117240", 
        "value": "227", 
        "state": "Missouri"
    }, 
    {
        "label": "Murfreesboro", 
        "growth_from_2000_to_2013": "65.1%", 
        "latitude": 35.8456213, 
        "longitude": -86.39027, 
        "population": "117044", 
        "value": "228", 
        "state": "Tennessee"
    }, 
    {
        "label": "Ann Arbor", 
        "growth_from_2000_to_2013": "2.0%", 
        "latitude": 42.2808256, 
        "longitude": -83.7430378, 
        "population": "117025", 
        "value": "229", 
        "state": "Michigan"
    }, 
    {
        "label": "Springfield", 
        "growth_from_2000_to_2013": "4.2%", 
        "latitude": 39.78172130000001, 
        "longitude": -89.6501481, 
        "population": "117006", 
        "value": "230", 
        "state": "Illinois"
    }, 
    {
        "label": "Berkeley", 
        "growth_from_2000_to_2013": "13.3%", 
        "latitude": 37.8715926, 
        "longitude": -122.272747, 
        "population": "116768", 
        "value": "231", 
        "state": "California"
    }, 
    {
        "label": "Peoria", 
        "growth_from_2000_to_2013": "3.0%", 
        "latitude": 40.6936488, 
        "longitude": -89.5889864, 
        "population": "116513", 
        "value": "232", 
        "state": "Illinois"
    }, 
    {
        "label": "Provo", 
        "growth_from_2000_to_2013": "10.0%", 
        "latitude": 40.2338438, 
        "longitude": -111.6585337, 
        "population": "116288", 
        "value": "233", 
        "state": "Utah"
    }, 
    {
        "label": "El Monte", 
        "growth_from_2000_to_2013": "-0.4%", 
        "latitude": 34.0686206, 
        "longitude": -118.0275667, 
        "population": "115708", 
        "value": "234", 
        "state": "California"
    }, 
    {
        "label": "Columbia", 
        "growth_from_2000_to_2013": "34.0%", 
        "latitude": 38.9517053, 
        "longitude": -92.3340724, 
        "population": "115276", 
        "value": "235", 
        "state": "Missouri"
    }, 
    {
        "label": "Lansing", 
        "growth_from_2000_to_2013": "-4.4%", 
        "latitude": 42.732535, 
        "longitude": -84.5555347, 
        "population": "113972", 
        "value": "236", 
        "state": "Michigan"
    }, 
    {
        "label": "Fargo", 
        "growth_from_2000_to_2013": "24.9%", 
        "latitude": 46.8771863, 
        "longitude": -96.7898034, 
        "population": "113658", 
        "value": "237", 
        "state": "North Dakota"
    }, 
    {
        "label": "Downey", 
        "growth_from_2000_to_2013": "5.3%", 
        "latitude": 33.9401088, 
        "longitude": -118.1331593, 
        "population": "113242", 
        "value": "238", 
        "state": "California"
    }, 
    {
        "label": "Costa Mesa", 
        "growth_from_2000_to_2013": "2.4%", 
        "latitude": 33.6411316, 
        "longitude": -117.9186689, 
        "population": "112174", 
        "value": "239", 
        "state": "California"
    }, 
    {
        "label": "Wilmington", 
        "growth_from_2000_to_2013": "24.8%", 
        "latitude": 34.2257255, 
        "longitude": -77.9447102, 
        "population": "112067", 
        "value": "240", 
        "state": "North Carolina"
    }, 
    {
        "label": "Arvada", 
        "growth_from_2000_to_2013": "9.2%", 
        "latitude": 39.8027644, 
        "longitude": -105.0874842, 
        "population": "111707", 
        "value": "241", 
        "state": "Colorado"
    }, 
    {
        "label": "Inglewood", 
        "growth_from_2000_to_2013": "-1.0%", 
        "latitude": 33.9616801, 
        "longitude": -118.3531311, 
        "population": "111542", 
        "value": "242", 
        "state": "California"
    }, 
    {
        "label": "Miami Gardens", 
        "growth_from_2000_to_2013": "10.5%", 
        "latitude": 25.9420377, 
        "longitude": -80.2456045, 
        "population": "111378", 
        "value": "243", 
        "state": "Florida"
    }, 
    {
        "label": "Carlsbad", 
        "growth_from_2000_to_2013": "39.7%", 
        "latitude": 33.1580933, 
        "longitude": -117.3505939, 
        "population": "110972", 
        "value": "244", 
        "state": "California"
    }, 
    {
        "label": "Westminster", 
        "growth_from_2000_to_2013": "9.4%", 
        "latitude": 39.8366528, 
        "longitude": -105.0372046, 
        "population": "110945", 
        "value": "245", 
        "state": "Colorado"
    }, 
    {
        "label": "Rochester", 
        "growth_from_2000_to_2013": "23.9%", 
        "latitude": 44.0121221, 
        "longitude": -92.4801989, 
        "population": "110742", 
        "value": "246", 
        "state": "Minnesota"
    }, 
    {
        "label": "Odessa", 
        "growth_from_2000_to_2013": "22.3%", 
        "latitude": 31.8456816, 
        "longitude": -102.3676431, 
        "population": "110720", 
        "value": "247", 
        "state": "Texas"
    }, 
    {
        "label": "Manchester", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 42.9956397, 
        "longitude": -71.4547891, 
        "population": "110378", 
        "value": "248", 
        "state": "New Hampshire"
    }, 
    {
        "label": "Elgin", 
        "growth_from_2000_to_2013": "16.0%", 
        "latitude": 42.0354084, 
        "longitude": -88.2825668, 
        "population": "110145", 
        "value": "249", 
        "state": "Illinois"
    }, 
    {
        "label": "West Jordan", 
        "growth_from_2000_to_2013": "38.4%", 
        "latitude": 40.6096698, 
        "longitude": -111.9391031, 
        "population": "110077", 
        "value": "250", 
        "state": "Utah"
    }, 
    {
        "label": "Round Rock", 
        "growth_from_2000_to_2013": "81.0%", 
        "latitude": 30.5082551, 
        "longitude": -97.678896, 
        "population": "109821", 
        "value": "251", 
        "state": "Texas"
    }, 
    {
        "label": "Clearwater", 
        "growth_from_2000_to_2013": "0.1%", 
        "latitude": 27.9658533, 
        "longitude": -82.8001026, 
        "population": "109703", 
        "value": "252", 
        "state": "Florida"
    }, 
    {
        "label": "Waterbury", 
        "growth_from_2000_to_2013": "2.2%", 
        "latitude": 41.5581525, 
        "longitude": -73.0514965, 
        "population": "109676", 
        "value": "253", 
        "state": "Connecticut"
    }, 
    {
        "label": "Gresham", 
        "growth_from_2000_to_2013": "20.7%", 
        "latitude": 45.5001357, 
        "longitude": -122.4302013, 
        "population": "109397", 
        "value": "254", 
        "state": "Oregon"
    }, 
    {
        "label": "Fairfield", 
        "growth_from_2000_to_2013": "12.8%", 
        "latitude": 38.24935809999999, 
        "longitude": -122.0399663, 
        "population": "109320", 
        "value": "255", 
        "state": "California"
    }, 
    {
        "label": "Billings", 
        "growth_from_2000_to_2013": "18.6%", 
        "latitude": 45.7832856, 
        "longitude": -108.5006904, 
        "population": "109059", 
        "value": "256", 
        "state": "Montana"
    }, 
    {
        "label": "Lowell", 
        "growth_from_2000_to_2013": "3.4%", 
        "latitude": 42.6334247, 
        "longitude": -71.31617179999999, 
        "population": "108861", 
        "value": "257", 
        "state": "Massachusetts"
    }, 
    {
        "label": "San Buenaventura (Ventura)", 
        "growth_from_2000_to_2013": "7.4%", 
        "latitude": 34.274646, 
        "longitude": -119.2290316, 
        "population": "108817", 
        "value": "258", 
        "state": "California"
    }, 
    {
        "label": "Pueblo", 
        "growth_from_2000_to_2013": "5.9%", 
        "latitude": 38.2544472, 
        "longitude": -104.6091409, 
        "population": "108249", 
        "value": "259", 
        "state": "Colorado"
    }, 
    {
        "label": "High Point", 
        "growth_from_2000_to_2013": "24.3%", 
        "latitude": 35.9556923, 
        "longitude": -80.0053176, 
        "population": "107741", 
        "value": "260", 
        "state": "North Carolina"
    }, 
    {
        "label": "West Covina", 
        "growth_from_2000_to_2013": "2.3%", 
        "latitude": 34.0686208, 
        "longitude": -117.9389526, 
        "population": "107740", 
        "value": "261", 
        "state": "California"
    }, 
    {
        "label": "Richmond", 
        "growth_from_2000_to_2013": "7.9%", 
        "latitude": 37.9357576, 
        "longitude": -122.3477486, 
        "population": "107571", 
        "value": "262", 
        "state": "California"
    }, 
    {
        "label": "Murrieta", 
        "growth_from_2000_to_2013": "107.4%", 
        "latitude": 33.5539143, 
        "longitude": -117.2139232, 
        "population": "107479", 
        "value": "263", 
        "state": "California"
    }, 
    {
        "label": "Cambridge", 
        "growth_from_2000_to_2013": "5.5%", 
        "latitude": 42.3736158, 
        "longitude": -71.10973349999999, 
        "population": "107289", 
        "value": "264", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Antioch", 
        "growth_from_2000_to_2013": "16.9%", 
        "latitude": 38.0049214, 
        "longitude": -121.805789, 
        "population": "107100", 
        "value": "265", 
        "state": "California"
    }, 
    {
        "label": "Temecula", 
        "growth_from_2000_to_2013": "55.4%", 
        "latitude": 33.4936391, 
        "longitude": -117.1483648, 
        "population": "106780", 
        "value": "266", 
        "state": "California"
    }, 
    {
        "label": "Norwalk", 
        "growth_from_2000_to_2013": "1.9%", 
        "latitude": 33.9022367, 
        "longitude": -118.081733, 
        "population": "106589", 
        "value": "267", 
        "state": "California"
    }, 
    {
        "label": "Centennial", 
        "growth_from_2000_to_2013": "3.5%", 
        "latitude": 39.5807452, 
        "longitude": -104.8771726, 
        "population": "106114", 
        "value": "268", 
        "state": "Colorado"
    }, 
    {
        "label": "Everett", 
        "growth_from_2000_to_2013": "9.4%", 
        "latitude": 47.9789848, 
        "longitude": -122.2020794, 
        "population": "105370", 
        "value": "269", 
        "state": "Washington"
    }, 
    {
        "label": "Palm Bay", 
        "growth_from_2000_to_2013": "31.7%", 
        "latitude": 28.0344621, 
        "longitude": -80.5886646, 
        "population": "104898", 
        "value": "270", 
        "state": "Florida"
    }, 
    {
        "label": "Wichita Falls", 
        "growth_from_2000_to_2013": "0.7%", 
        "latitude": 33.9137085, 
        "longitude": -98.4933873, 
        "population": "104898", 
        "value": "271", 
        "state": "Texas"
    }, 
    {
        "label": "Green Bay", 
        "growth_from_2000_to_2013": "1.9%", 
        "latitude": 44.51915899999999, 
        "longitude": -88.019826, 
        "population": "104779", 
        "value": "272", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Daly label", 
        "growth_from_2000_to_2013": "1.0%", 
        "latitude": 37.6879241, 
        "longitude": -122.4702079, 
        "population": "104739", 
        "value": "273", 
        "state": "California"
    }, 
    {
        "label": "Burbank", 
        "growth_from_2000_to_2013": "4.2%", 
        "latitude": 34.1808392, 
        "longitude": -118.3089661, 
        "population": "104709", 
        "value": "274", 
        "state": "California"
    }, 
    {
        "label": "Richardson", 
        "growth_from_2000_to_2013": "13.2%", 
        "latitude": 32.9483335, 
        "longitude": -96.7298519, 
        "population": "104475", 
        "value": "275", 
        "state": "Texas"
    }, 
    {
        "label": "Pompano Beach", 
        "growth_from_2000_to_2013": "4.0%", 
        "latitude": 26.2378597, 
        "longitude": -80.1247667, 
        "population": "104410", 
        "value": "276", 
        "state": "Florida"
    }, 
    {
        "label": "North Charleston", 
        "growth_from_2000_to_2013": "27.4%", 
        "latitude": 32.8546197, 
        "longitude": -79.9748103, 
        "population": "104054", 
        "value": "277", 
        "state": "South Carolina"
    }, 
    {
        "label": "Broken Arrow", 
        "growth_from_2000_to_2013": "28.2%", 
        "latitude": 36.060949, 
        "longitude": -95.7974526, 
        "population": "103500", 
        "value": "278", 
        "state": "Oklahoma"
    }, 
    {
        "label": "Boulder", 
        "growth_from_2000_to_2013": "9.0%", 
        "latitude": 40.0149856, 
        "longitude": -105.2705456, 
        "population": "103166", 
        "value": "279", 
        "state": "Colorado"
    }, 
    {
        "label": "West Palm Beach", 
        "growth_from_2000_to_2013": "23.5%", 
        "latitude": 26.7153424, 
        "longitude": -80.0533746, 
        "population": "102436", 
        "value": "280", 
        "state": "Florida"
    }, 
    {
        "label": "Santa Maria", 
        "growth_from_2000_to_2013": "30.9%", 
        "latitude": 34.9530337, 
        "longitude": -120.4357191, 
        "population": "102216", 
        "value": "281", 
        "state": "California"
    }, 
    {
        "label": "El Cajon", 
        "growth_from_2000_to_2013": "7.4%", 
        "latitude": 32.7947731, 
        "longitude": -116.9625269, 
        "population": "102211", 
        "value": "282", 
        "state": "California"
    }, 
    {
        "label": "Davenport", 
        "growth_from_2000_to_2013": "3.9%", 
        "latitude": 41.5236437, 
        "longitude": -90.5776367, 
        "population": "102157", 
        "value": "283", 
        "state": "Iowa"
    }, 
    {
        "label": "Rialto", 
        "growth_from_2000_to_2013": "9.8%", 
        "latitude": 34.1064001, 
        "longitude": -117.3703235, 
        "population": "101910", 
        "value": "284", 
        "state": "California"
    }, 
    {
        "label": "Las Cruces", 
        "growth_from_2000_to_2013": "37.6%", 
        "latitude": 32.3199396, 
        "longitude": -106.7636538, 
        "population": "101324", 
        "value": "285", 
        "state": "New Mexico"
    }, 
    {
        "label": "San Mateo", 
        "growth_from_2000_to_2013": "9.0%", 
        "latitude": 37.5629917, 
        "longitude": -122.3255254, 
        "population": "101128", 
        "value": "286", 
        "state": "California"
    }, 
    {
        "label": "Lewisville", 
        "growth_from_2000_to_2013": "28.9%", 
        "latitude": 33.046233, 
        "longitude": -96.994174, 
        "population": "101074", 
        "value": "287", 
        "state": "Texas"
    }, 
    {
        "label": "South Bend", 
        "growth_from_2000_to_2013": "-6.8%", 
        "latitude": 41.6763545, 
        "longitude": -86.25198979999999, 
        "population": "100886", 
        "value": "288", 
        "state": "Indiana"
    }, 
    {
        "label": "Lakeland", 
        "growth_from_2000_to_2013": "18.3%", 
        "latitude": 28.0394654, 
        "longitude": -81.9498042, 
        "population": "100710", 
        "value": "289", 
        "state": "Florida"
    }, 
    {
        "label": "Erie", 
        "growth_from_2000_to_2013": "-2.8%", 
        "latitude": 42.12922409999999, 
        "longitude": -80.085059, 
        "population": "100671", 
        "value": "290", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Tyler", 
        "growth_from_2000_to_2013": "18.6%", 
        "latitude": 32.3512601, 
        "longitude": -95.30106239999999, 
        "population": "100223", 
        "value": "291", 
        "state": "Texas"
    }, 
    {
        "label": "Pearland", 
        "growth_from_2000_to_2013": "117.2%", 
        "latitude": 29.5635666, 
        "longitude": -95.2860474, 
        "population": "100065", 
        "value": "292", 
        "state": "Texas"
    }, 
    {
        "label": "College Station", 
        "growth_from_2000_to_2013": "45.2%", 
        "latitude": 30.627977, 
        "longitude": -96.3344068, 
        "population": "100050", 
        "value": "293", 
        "state": "Texas"
    }, 
    {
        "label": "Kenosha", 
        "growth_from_2000_to_2013": "9.5%", 
        "latitude": 42.5847425, 
        "longitude": -87.82118539999999, 
        "population": "99889", 
        "value": "294", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Sandy Springs", 
        "growth_from_2000_to_2013": "17.4%", 
        "latitude": 33.9304352, 
        "longitude": -84.3733147, 
        "population": "99770", 
        "value": "295", 
        "state": "Georgia"
    }, 
    {
        "label": "Clovis", 
        "growth_from_2000_to_2013": "42.6%", 
        "latitude": 36.8252277, 
        "longitude": -119.7029194, 
        "population": "99769", 
        "value": "296", 
        "state": "California"
    }, 
    {
        "label": "Flint", 
        "growth_from_2000_to_2013": "-20.0%", 
        "latitude": 43.0125274, 
        "longitude": -83.6874562, 
        "population": "99763", 
        "value": "297", 
        "state": "Michigan"
    }, 
    {
        "label": "Roanoke", 
        "growth_from_2000_to_2013": "3.8%", 
        "latitude": 37.2709704, 
        "longitude": -79.9414266, 
        "population": "98465", 
        "value": "298", 
        "state": "Virginia"
    }, 
    {
        "label": "Albany", 
        "growth_from_2000_to_2013": "4.1%", 
        "latitude": 42.6525793, 
        "longitude": -73.7562317, 
        "population": "98424", 
        "value": "299", 
        "state": "New York"
    }, 
    {
        "label": "Jurupa Valley", 
        "growth_from_2000_to_2013": "", 
        "latitude": 33.9971974, 
        "longitude": -117.4854802, 
        "population": "98030", 
        "value": "300", 
        "state": "California"
    }, 
    {
        "label": "Compton", 
        "growth_from_2000_to_2013": "4.5%", 
        "latitude": 33.8958492, 
        "longitude": -118.2200712, 
        "population": "97877", 
        "value": "301", 
        "state": "California"
    }, 
    {
        "label": "San Angelo", 
        "growth_from_2000_to_2013": "10.2%", 
        "latitude": 31.4637723, 
        "longitude": -100.4370375, 
        "population": "97492", 
        "value": "302", 
        "state": "Texas"
    }, 
    {
        "label": "Hillsboro", 
        "growth_from_2000_to_2013": "36.4%", 
        "latitude": 45.5228939, 
        "longitude": -122.989827, 
        "population": "97368", 
        "value": "303", 
        "state": "Oregon"
    }, 
    {
        "label": "Lawton", 
        "growth_from_2000_to_2013": "4.9%", 
        "latitude": 34.6035669, 
        "longitude": -98.39592909999999, 
        "population": "97151", 
        "value": "304", 
        "state": "Oklahoma"
    }, 
    {
        "label": "Renton", 
        "growth_from_2000_to_2013": "88.4%", 
        "latitude": 47.48287759999999, 
        "longitude": -122.2170661, 
        "population": "97003", 
        "value": "305", 
        "state": "Washington"
    }, 
    {
        "label": "Vista", 
        "growth_from_2000_to_2013": "7.7%", 
        "latitude": 33.2000368, 
        "longitude": -117.2425355, 
        "population": "96929", 
        "value": "306", 
        "state": "California"
    }, 
    {
        "label": "Davie", 
        "growth_from_2000_to_2013": "17.7%", 
        "latitude": 26.0764783, 
        "longitude": -80.25211569999999, 
        "population": "96830", 
        "value": "307", 
        "state": "Florida"
    }, 
    {
        "label": "Greeley", 
        "growth_from_2000_to_2013": "23.1%", 
        "latitude": 40.4233142, 
        "longitude": -104.7091322, 
        "population": "96539", 
        "value": "308", 
        "state": "Colorado"
    }, 
    {
        "label": "Mission Viejo", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 33.6000232, 
        "longitude": -117.6719953, 
        "population": "96346", 
        "value": "309", 
        "state": "California"
    }, 
    {
        "label": "Portsmouth", 
        "growth_from_2000_to_2013": "-4.2%", 
        "latitude": 36.8354258, 
        "longitude": -76.2982742, 
        "population": "96205", 
        "value": "310", 
        "state": "Virginia"
    }, 
    {
        "label": "Dearborn", 
        "growth_from_2000_to_2013": "-2.0%", 
        "latitude": 42.3222599, 
        "longitude": -83.17631449999999, 
        "population": "95884", 
        "value": "311", 
        "state": "Michigan"
    }, 
    {
        "label": "South Gate", 
        "growth_from_2000_to_2013": "-0.8%", 
        "latitude": 33.954737, 
        "longitude": -118.2120161, 
        "population": "95677", 
        "value": "312", 
        "state": "California"
    }, 
    {
        "label": "Tuscaloosa", 
        "growth_from_2000_to_2013": "21.1%", 
        "latitude": 33.2098407, 
        "longitude": -87.56917349999999, 
        "population": "95334", 
        "value": "313", 
        "state": "Alabama"
    }, 
    {
        "label": "Livonia", 
        "growth_from_2000_to_2013": "-5.4%", 
        "latitude": 42.36837, 
        "longitude": -83.35270969999999, 
        "population": "95208", 
        "value": "314", 
        "state": "Michigan"
    }, 
    {
        "label": "New Bedford", 
        "growth_from_2000_to_2013": "1.2%", 
        "latitude": 41.6362152, 
        "longitude": -70.93420499999999, 
        "population": "95078", 
        "value": "315", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Vacaville", 
        "growth_from_2000_to_2013": "5.4%", 
        "latitude": 38.3565773, 
        "longitude": -121.9877444, 
        "population": "94275", 
        "value": "316", 
        "state": "California"
    }, 
    {
        "label": "Brockton", 
        "growth_from_2000_to_2013": "-0.3%", 
        "latitude": 42.0834335, 
        "longitude": -71.0183787, 
        "population": "94089", 
        "value": "317", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Roswell", 
        "growth_from_2000_to_2013": "15.2%", 
        "latitude": 34.0232431, 
        "longitude": -84.3615555, 
        "population": "94034", 
        "value": "318", 
        "state": "Georgia"
    }, 
    {
        "label": "Beaverton", 
        "growth_from_2000_to_2013": "17.0%", 
        "latitude": 45.48706199999999, 
        "longitude": -122.8037102, 
        "population": "93542", 
        "value": "319", 
        "state": "Oregon"
    }, 
    {
        "label": "Quincy", 
        "growth_from_2000_to_2013": "5.8%", 
        "latitude": 42.2528772, 
        "longitude": -71.0022705, 
        "population": "93494", 
        "value": "320", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Sparks", 
        "growth_from_2000_to_2013": "39.4%", 
        "latitude": 39.5349112, 
        "longitude": -119.7526886, 
        "population": "93282", 
        "value": "321", 
        "state": "Nevada"
    }, 
    {
        "label": "Yakima", 
        "growth_from_2000_to_2013": "11.7%", 
        "latitude": 46.6020711, 
        "longitude": -120.5058987, 
        "population": "93257", 
        "value": "322", 
        "state": "Washington"
    }, 
    {
        "label": "Lee's Summit", 
        "growth_from_2000_to_2013": "31.2%", 
        "latitude": 38.9108408, 
        "longitude": -94.3821724, 
        "population": "93184", 
        "value": "323", 
        "state": "Missouri"
    }, 
    {
        "label": "Federal Way", 
        "growth_from_2000_to_2013": "8.8%", 
        "latitude": 47.3223221, 
        "longitude": -122.3126222, 
        "population": "92734", 
        "value": "324", 
        "state": "Washington"
    }, 
    {
        "label": "Carson", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 33.8316745, 
        "longitude": -118.281693, 
        "population": "92599", 
        "value": "325", 
        "state": "California"
    }, 
    {
        "label": "Santa Monica", 
        "growth_from_2000_to_2013": "9.6%", 
        "latitude": 34.0194543, 
        "longitude": -118.4911912, 
        "population": "92472", 
        "value": "326", 
        "state": "California"
    }, 
    {
        "label": "Hesperia", 
        "growth_from_2000_to_2013": "46.1%", 
        "latitude": 34.4263886, 
        "longitude": -117.3008784, 
        "population": "92147", 
        "value": "327", 
        "state": "California"
    }, 
    {
        "label": "Allen", 
        "growth_from_2000_to_2013": "104.0%", 
        "latitude": 33.1031744, 
        "longitude": -96.67055030000002, 
        "population": "92020", 
        "value": "328", 
        "state": "Texas"
    }, 
    {
        "label": "Rio Rancho", 
        "growth_from_2000_to_2013": "74.4%", 
        "latitude": 35.2327544, 
        "longitude": -106.6630437, 
        "population": "91956", 
        "value": "329", 
        "state": "New Mexico"
    }, 
    {
        "label": "Yuma", 
        "growth_from_2000_to_2013": "16.2%", 
        "latitude": 32.6926512, 
        "longitude": -114.6276916, 
        "population": "91923", 
        "value": "330", 
        "state": "Arizona"
    }, 
    {
        "label": "Westminster", 
        "growth_from_2000_to_2013": "3.9%", 
        "latitude": 33.7513419, 
        "longitude": -117.9939921, 
        "population": "91739", 
        "value": "331", 
        "state": "California"
    }, 
    {
        "label": "Orem", 
        "growth_from_2000_to_2013": "8.5%", 
        "latitude": 40.2968979, 
        "longitude": -111.6946475, 
        "population": "91648", 
        "value": "332", 
        "state": "Utah"
    }, 
    {
        "label": "Lynn", 
        "growth_from_2000_to_2013": "2.6%", 
        "latitude": 42.46676300000001, 
        "longitude": -70.9494938, 
        "population": "91589", 
        "value": "333", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Redding", 
        "growth_from_2000_to_2013": "11.9%", 
        "latitude": 40.5865396, 
        "longitude": -122.3916754, 
        "population": "91119", 
        "value": "334", 
        "state": "California"
    }, 
    {
        "label": "Spokane Valley", 
        "growth_from_2000_to_2013": "12.6%", 
        "latitude": 47.6732281, 
        "longitude": -117.2393748, 
        "population": "91113", 
        "value": "335", 
        "state": "Washington"
    }, 
    {
        "label": "Miami Beach", 
        "growth_from_2000_to_2013": "3.3%", 
        "latitude": 25.790654, 
        "longitude": -80.1300455, 
        "population": "91026", 
        "value": "336", 
        "state": "Florida"
    }, 
    {
        "label": "League label", 
        "growth_from_2000_to_2013": "98.3%", 
        "latitude": 29.5074538, 
        "longitude": -95.0949303, 
        "population": "90983", 
        "value": "337", 
        "state": "Texas"
    }, 
    {
        "label": "Lawrence", 
        "growth_from_2000_to_2013": "12.7%", 
        "latitude": 38.9716689, 
        "longitude": -95.2352501, 
        "population": "90811", 
        "value": "338", 
        "state": "Kansas"
    }, 
    {
        "label": "Santa Barbara", 
        "growth_from_2000_to_2013": "0.9%", 
        "latitude": 34.4208305, 
        "longitude": -119.6981901, 
        "population": "90412", 
        "value": "339", 
        "state": "California"
    }, 
    {
        "label": "Plantation", 
        "growth_from_2000_to_2013": "8.6%", 
        "latitude": 26.1275862, 
        "longitude": -80.23310359999999, 
        "population": "90268", 
        "value": "340", 
        "state": "Florida"
    }, 
    {
        "label": "Sandy", 
        "growth_from_2000_to_2013": "1.3%", 
        "latitude": 40.5649781, 
        "longitude": -111.8389726, 
        "population": "90231", 
        "value": "341", 
        "state": "Utah"
    }, 
    {
        "label": "Sunrise", 
        "growth_from_2000_to_2013": "4.6%", 
        "latitude": 26.1669711, 
        "longitude": -80.25659499999999, 
        "population": "90116", 
        "value": "342", 
        "state": "Florida"
    }, 
    {
        "label": "Macon", 
        "growth_from_2000_to_2013": "-7.3%", 
        "latitude": 32.8406946, 
        "longitude": -83.6324022, 
        "population": "89981", 
        "value": "343", 
        "state": "Georgia"
    }, 
    {
        "label": "Longmont", 
        "growth_from_2000_to_2013": "24.4%", 
        "latitude": 40.1672068, 
        "longitude": -105.1019275, 
        "population": "89919", 
        "value": "344", 
        "state": "Colorado"
    }, 
    {
        "label": "Boca Raton", 
        "growth_from_2000_to_2013": "7.5%", 
        "latitude": 26.3683064, 
        "longitude": -80.1289321, 
        "population": "89407", 
        "value": "345", 
        "state": "Florida"
    }, 
    {
        "label": "San Marcos", 
        "growth_from_2000_to_2013": "60.0%", 
        "latitude": 33.1433723, 
        "longitude": -117.1661449, 
        "population": "89387", 
        "value": "346", 
        "state": "California"
    }, 
    {
        "label": "Greenville", 
        "growth_from_2000_to_2013": "41.9%", 
        "latitude": 35.612661, 
        "longitude": -77.3663538, 
        "population": "89130", 
        "value": "347", 
        "state": "North Carolina"
    }, 
    {
        "label": "Waukegan", 
        "growth_from_2000_to_2013": "0.5%", 
        "latitude": 42.3636331, 
        "longitude": -87.84479379999999, 
        "population": "88826", 
        "value": "348", 
        "state": "Illinois"
    }, 
    {
        "label": "Fall River", 
        "growth_from_2000_to_2013": "-3.7%", 
        "latitude": 41.7014912, 
        "longitude": -71.1550451, 
        "population": "88697", 
        "value": "349", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Chico", 
        "growth_from_2000_to_2013": "14.2%", 
        "latitude": 39.7284944, 
        "longitude": -121.8374777, 
        "population": "88077", 
        "value": "350", 
        "state": "California"
    }, 
    {
        "label": "Newton", 
        "growth_from_2000_to_2013": "4.9%", 
        "latitude": 42.3370413, 
        "longitude": -71.20922139999999, 
        "population": "87971", 
        "value": "351", 
        "state": "Massachusetts"
    }, 
    {
        "label": "San Leandro", 
        "growth_from_2000_to_2013": "10.3%", 
        "latitude": 37.7249296, 
        "longitude": -122.1560768, 
        "population": "87965", 
        "value": "352", 
        "state": "California"
    }, 
    {
        "label": "Reading", 
        "growth_from_2000_to_2013": "8.0%", 
        "latitude": 40.3356483, 
        "longitude": -75.9268747, 
        "population": "87893", 
        "value": "353", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Norwalk", 
        "growth_from_2000_to_2013": "5.6%", 
        "latitude": 41.11774399999999, 
        "longitude": -73.4081575, 
        "population": "87776", 
        "value": "354", 
        "state": "Connecticut"
    }, 
    {
        "label": "Fort Smith", 
        "growth_from_2000_to_2013": "8.6%", 
        "latitude": 35.3859242, 
        "longitude": -94.39854749999999, 
        "population": "87650", 
        "value": "355", 
        "state": "Arkansas"
    }, 
    {
        "label": "Newport Beach", 
        "growth_from_2000_to_2013": "10.4%", 
        "latitude": 33.6189101, 
        "longitude": -117.9289469, 
        "population": "87273", 
        "value": "356", 
        "state": "California"
    }, 
    {
        "label": "Asheville", 
        "growth_from_2000_to_2013": "19.6%", 
        "latitude": 35.5950581, 
        "longitude": -82.5514869, 
        "population": "87236", 
        "value": "357", 
        "state": "North Carolina"
    }, 
    {
        "label": "Nashua", 
        "growth_from_2000_to_2013": "0.4%", 
        "latitude": 42.7653662, 
        "longitude": -71.46756599999999, 
        "population": "87137", 
        "value": "358", 
        "state": "New Hampshire"
    }, 
    {
        "label": "Edmond", 
        "growth_from_2000_to_2013": "26.9%", 
        "latitude": 35.6528323, 
        "longitude": -97.47809540000002, 
        "population": "87004", 
        "value": "359", 
        "state": "Oklahoma"
    }, 
    {
        "label": "Whittier", 
        "growth_from_2000_to_2013": "3.3%", 
        "latitude": 33.9791793, 
        "longitude": -118.032844, 
        "population": "86635", 
        "value": "360", 
        "state": "California"
    }, 
    {
        "label": "Nampa", 
        "growth_from_2000_to_2013": "57.9%", 
        "latitude": 43.5407172, 
        "longitude": -116.5634624, 
        "population": "86518", 
        "value": "361", 
        "state": "Idaho"
    }, 
    {
        "label": "Bloomington", 
        "growth_from_2000_to_2013": "1.3%", 
        "latitude": 44.840798, 
        "longitude": -93.2982799, 
        "population": "86319", 
        "value": "362", 
        "state": "Minnesota"
    }, 
    {
        "label": "Deltona", 
        "growth_from_2000_to_2013": "23.1%", 
        "latitude": 28.9005446, 
        "longitude": -81.26367379999999, 
        "population": "86290", 
        "value": "363", 
        "state": "Florida"
    }, 
    {
        "label": "Hawthorne", 
        "growth_from_2000_to_2013": "2.3%", 
        "latitude": 33.9164032, 
        "longitude": -118.3525748, 
        "population": "86199", 
        "value": "364", 
        "state": "California"
    }, 
    {
        "label": "Duluth", 
        "growth_from_2000_to_2013": "-0.1%", 
        "latitude": 46.78667189999999, 
        "longitude": -92.1004852, 
        "population": "86128", 
        "value": "365", 
        "state": "Minnesota"
    }, 
    {
        "label": "Carmel", 
        "growth_from_2000_to_2013": "60.4%", 
        "latitude": 39.978371, 
        "longitude": -86.1180435, 
        "population": "85927", 
        "value": "366", 
        "state": "Indiana"
    }, 
    {
        "label": "Suffolk", 
        "growth_from_2000_to_2013": "33.5%", 
        "latitude": 36.7282054, 
        "longitude": -76.5835621, 
        "population": "85728", 
        "value": "367", 
        "state": "Virginia"
    }, 
    {
        "label": "Clifton", 
        "growth_from_2000_to_2013": "7.9%", 
        "latitude": 40.8584328, 
        "longitude": -74.16375529999999, 
        "population": "85390", 
        "value": "368", 
        "state": "New Jersey"
    }, 
    {
        "label": "Citrus Heights", 
        "growth_from_2000_to_2013": "-0.1%", 
        "latitude": 38.7071247, 
        "longitude": -121.2810611, 
        "population": "85285", 
        "value": "369", 
        "state": "California"
    }, 
    {
        "label": "Livermore", 
        "growth_from_2000_to_2013": "15.1%", 
        "latitude": 37.6818745, 
        "longitude": -121.7680088, 
        "population": "85156", 
        "value": "370", 
        "state": "California"
    }, 
    {
        "label": "Tracy", 
        "growth_from_2000_to_2013": "45.9%", 
        "latitude": 37.7396513, 
        "longitude": -121.4252227, 
        "population": "84691", 
        "value": "371", 
        "state": "California"
    }, 
    {
        "label": "Alhambra", 
        "growth_from_2000_to_2013": "-0.7%", 
        "latitude": 34.095287, 
        "longitude": -118.1270146, 
        "population": "84577", 
        "value": "372", 
        "state": "California"
    }, 
    {
        "label": "Kirkland", 
        "growth_from_2000_to_2013": "87.5%", 
        "latitude": 47.6814875, 
        "longitude": -122.2087353, 
        "population": "84430", 
        "value": "373", 
        "state": "Washington"
    }, 
    {
        "label": "Trenton", 
        "growth_from_2000_to_2013": "-1.2%", 
        "latitude": 40.2170534, 
        "longitude": -74.7429384, 
        "population": "84349", 
        "value": "374", 
        "state": "New Jersey"
    }, 
    {
        "label": "Ogden", 
        "growth_from_2000_to_2013": "8.6%", 
        "latitude": 41.223, 
        "longitude": -111.9738304, 
        "population": "84249", 
        "value": "375", 
        "state": "Utah"
    }, 
    {
        "label": "Hoover", 
        "growth_from_2000_to_2013": "32.7%", 
        "latitude": 33.4053867, 
        "longitude": -86.8113781, 
        "population": "84126", 
        "value": "376", 
        "state": "Alabama"
    }, 
    {
        "label": "Cicero", 
        "growth_from_2000_to_2013": "-1.6%", 
        "latitude": 41.8455877, 
        "longitude": -87.7539448, 
        "population": "84103", 
        "value": "377", 
        "state": "Illinois"
    }, 
    {
        "label": "Fishers", 
        "growth_from_2000_to_2013": "114.8%", 
        "latitude": 39.9567548, 
        "longitude": -86.01335, 
        "population": "83891", 
        "value": "378", 
        "state": "Indiana"
    }, 
    {
        "label": "Sugar Land", 
        "growth_from_2000_to_2013": "29.1%", 
        "latitude": 29.6196787, 
        "longitude": -95.6349463, 
        "population": "83860", 
        "value": "379", 
        "state": "Texas"
    }, 
    {
        "label": "Danbury", 
        "growth_from_2000_to_2013": "11.4%", 
        "latitude": 41.394817, 
        "longitude": -73.4540111, 
        "population": "83684", 
        "value": "380", 
        "state": "Connecticut"
    }, 
    {
        "label": "Meridian", 
        "growth_from_2000_to_2013": "127.6%", 
        "latitude": 43.6121087, 
        "longitude": -116.3915131, 
        "population": "83596", 
        "value": "381", 
        "state": "Idaho"
    }, 
    {
        "label": "Indio", 
        "growth_from_2000_to_2013": "66.0%", 
        "latitude": 33.7205771, 
        "longitude": -116.2155619, 
        "population": "83539", 
        "value": "382", 
        "state": "California"
    }, 
    {
        "label": "Concord", 
        "growth_from_2000_to_2013": "47.4%", 
        "latitude": 35.4087517, 
        "longitude": -80.579511, 
        "population": "83506", 
        "value": "383", 
        "state": "North Carolina"
    }, 
    {
        "label": "Menifee", 
        "growth_from_2000_to_2013": "95.0%", 
        "latitude": 33.6971468, 
        "longitude": -117.185294, 
        "population": "83447", 
        "value": "384", 
        "state": "California"
    }, 
    {
        "label": "Champaign", 
        "growth_from_2000_to_2013": "18.3%", 
        "latitude": 40.1164204, 
        "longitude": -88.2433829, 
        "population": "83424", 
        "value": "385", 
        "state": "Illinois"
    }, 
    {
        "label": "Buena Park", 
        "growth_from_2000_to_2013": "6.1%", 
        "latitude": 33.8675143, 
        "longitude": -117.9981181, 
        "population": "82882", 
        "value": "386", 
        "state": "California"
    }, 
    {
        "label": "Troy", 
        "growth_from_2000_to_2013": "2.2%", 
        "latitude": 42.6064095, 
        "longitude": -83.1497751, 
        "population": "82821", 
        "value": "387", 
        "state": "Michigan"
    }, 
    {
        "label": "O'Fallon", 
        "growth_from_2000_to_2013": "62.6%", 
        "latitude": 38.8106075, 
        "longitude": -90.69984769999999, 
        "population": "82809", 
        "value": "388", 
        "state": "Missouri"
    }, 
    {
        "label": "Johns Creek", 
        "growth_from_2000_to_2013": "36.5%", 
        "latitude": 34.0289259, 
        "longitude": -84.198579, 
        "population": "82788", 
        "value": "389", 
        "state": "Georgia"
    }, 
    {
        "label": "Bellingham", 
        "growth_from_2000_to_2013": "21.8%", 
        "latitude": 48.74908, 
        "longitude": -122.4781473, 
        "population": "82631", 
        "value": "390", 
        "state": "Washington"
    }, 
    {
        "label": "Westland", 
        "growth_from_2000_to_2013": "-4.7%", 
        "latitude": 42.32420399999999, 
        "longitude": -83.400211, 
        "population": "82578", 
        "value": "391", 
        "state": "Michigan"
    }, 
    {
        "label": "Bloomington", 
        "growth_from_2000_to_2013": "16.1%", 
        "latitude": 39.165325, 
        "longitude": -86.52638569999999, 
        "population": "82575", 
        "value": "392", 
        "state": "Indiana"
    }, 
    {
        "label": "Sioux label", 
        "growth_from_2000_to_2013": "-2.9%", 
        "latitude": 42.4999942, 
        "longitude": -96.40030689999999, 
        "population": "82459", 
        "value": "393", 
        "state": "Iowa"
    }, 
    {
        "label": "Warwick", 
        "growth_from_2000_to_2013": "-4.6%", 
        "latitude": 41.7001009, 
        "longitude": -71.4161671, 
        "population": "81971", 
        "value": "394", 
        "state": "Rhode Island"
    }, 
    {
        "label": "Hemet", 
        "growth_from_2000_to_2013": "37.6%", 
        "latitude": 33.7475203, 
        "longitude": -116.9719684, 
        "population": "81750", 
        "value": "395", 
        "state": "California"
    }, 
    {
        "label": "Longview", 
        "growth_from_2000_to_2013": "11.6%", 
        "latitude": 32.5007037, 
        "longitude": -94.74048909999999, 
        "population": "81443", 
        "value": "396", 
        "state": "Texas"
    }, 
    {
        "label": "Farmington Hills", 
        "growth_from_2000_to_2013": "-0.9%", 
        "latitude": 42.4989936, 
        "longitude": -83.3677168, 
        "population": "81295", 
        "value": "397", 
        "state": "Michigan"
    }, 
    {
        "label": "Bend", 
        "growth_from_2000_to_2013": "54.3%", 
        "latitude": 44.0581728, 
        "longitude": -121.3153096, 
        "population": "81236", 
        "value": "398", 
        "state": "Oregon"
    }, 
    {
        "label": "Lakewood", 
        "growth_from_2000_to_2013": "2.1%", 
        "latitude": 33.8536269, 
        "longitude": -118.1339563, 
        "population": "81121", 
        "value": "399", 
        "state": "California"
    }, 
    {
        "label": "Merced", 
        "growth_from_2000_to_2013": "25.4%", 
        "latitude": 37.3021632, 
        "longitude": -120.4829677, 
        "population": "81102", 
        "value": "400", 
        "state": "California"
    }, 
    {
        "label": "Mission", 
        "growth_from_2000_to_2013": "74.5%", 
        "latitude": 26.2159066, 
        "longitude": -98.32529319999999, 
        "population": "81050", 
        "value": "401", 
        "state": "Texas"
    }, 
    {
        "label": "Chino", 
        "growth_from_2000_to_2013": "15.6%", 
        "latitude": 34.0122346, 
        "longitude": -117.688944, 
        "population": "80988", 
        "value": "402", 
        "state": "California"
    }, 
    {
        "label": "Redwood label", 
        "growth_from_2000_to_2013": "7.1%", 
        "latitude": 37.48521520000001, 
        "longitude": -122.2363548, 
        "population": "80872", 
        "value": "403", 
        "state": "California"
    }, 
    {
        "label": "Edinburg", 
        "growth_from_2000_to_2013": "65.1%", 
        "latitude": 26.3017374, 
        "longitude": -98.1633432, 
        "population": "80836", 
        "value": "404", 
        "state": "Texas"
    }, 
    {
        "label": "Cranston", 
        "growth_from_2000_to_2013": "1.4%", 
        "latitude": 41.7798226, 
        "longitude": -71.4372796, 
        "population": "80566", 
        "value": "405", 
        "state": "Rhode Island"
    }, 
    {
        "label": "Parma", 
        "growth_from_2000_to_2013": "-5.9%", 
        "latitude": 41.4047742, 
        "longitude": -81.7229086, 
        "population": "80429", 
        "value": "406", 
        "state": "Ohio"
    }, 
    {
        "label": "New Rochelle", 
        "growth_from_2000_to_2013": "9.9%", 
        "latitude": 40.9114882, 
        "longitude": -73.7823549, 
        "population": "79446", 
        "value": "407", 
        "state": "New York"
    }, 
    {
        "label": "Lake Forest", 
        "growth_from_2000_to_2013": "4.2%", 
        "latitude": 33.6469661, 
        "longitude": -117.689218, 
        "population": "79312", 
        "value": "408", 
        "state": "California"
    }, 
    {
        "label": "Napa", 
        "growth_from_2000_to_2013": "8.4%", 
        "latitude": 38.2975381, 
        "longitude": -122.286865, 
        "population": "79068", 
        "value": "409", 
        "state": "California"
    }, 
    {
        "label": "Hammond", 
        "growth_from_2000_to_2013": "-4.6%", 
        "latitude": 41.5833688, 
        "longitude": -87.5000412, 
        "population": "78967", 
        "value": "410", 
        "state": "Indiana"
    }, 
    {
        "label": "Fayetteville", 
        "growth_from_2000_to_2013": "32.9%", 
        "latitude": 36.0625795, 
        "longitude": -94.1574263, 
        "population": "78960", 
        "value": "411", 
        "state": "Arkansas"
    }, 
    {
        "label": "Bloomington", 
        "growth_from_2000_to_2013": "20.1%", 
        "latitude": 40.4842027, 
        "longitude": -88.99368729999999, 
        "population": "78902", 
        "value": "412", 
        "state": "Illinois"
    }, 
    {
        "label": "Avondale", 
        "growth_from_2000_to_2013": "111.5%", 
        "latitude": 33.4355977, 
        "longitude": -112.3496021, 
        "population": "78822", 
        "value": "413", 
        "state": "Arizona"
    }, 
    {
        "label": "Somerville", 
        "growth_from_2000_to_2013": "1.6%", 
        "latitude": 42.3875968, 
        "longitude": -71.0994968, 
        "population": "78804", 
        "value": "414", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Palm Coast", 
        "growth_from_2000_to_2013": "137.2%", 
        "latitude": 29.5844524, 
        "longitude": -81.20786989999999, 
        "population": "78740", 
        "value": "415", 
        "state": "Florida"
    }, 
    {
        "label": "Bryan", 
        "growth_from_2000_to_2013": "19.3%", 
        "latitude": 30.6743643, 
        "longitude": -96.3699632, 
        "population": "78709", 
        "value": "416", 
        "state": "Texas"
    }, 
    {
        "label": "Gary", 
        "growth_from_2000_to_2013": "-23.4%", 
        "latitude": 41.5933696, 
        "longitude": -87.3464271, 
        "population": "78450", 
        "value": "417", 
        "state": "Indiana"
    }, 
    {
        "label": "Largo", 
        "growth_from_2000_to_2013": "5.1%", 
        "latitude": 27.9094665, 
        "longitude": -82.7873244, 
        "population": "78409", 
        "value": "418", 
        "state": "Florida"
    }, 
    {
        "label": "Brooklyn Park", 
        "growth_from_2000_to_2013": "16.0%", 
        "latitude": 45.0941315, 
        "longitude": -93.3563405, 
        "population": "78373", 
        "value": "419", 
        "state": "Minnesota"
    }, 
    {
        "label": "Tustin", 
        "growth_from_2000_to_2013": "15.6%", 
        "latitude": 33.7458511, 
        "longitude": -117.826166, 
        "population": "78327", 
        "value": "420", 
        "state": "California"
    }, 
    {
        "label": "Racine", 
        "growth_from_2000_to_2013": "-4.4%", 
        "latitude": 42.7261309, 
        "longitude": -87.78285230000002, 
        "population": "78199", 
        "value": "421", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Deerfield Beach", 
        "growth_from_2000_to_2013": "4.8%", 
        "latitude": 26.3184123, 
        "longitude": -80.09976569999999, 
        "population": "78041", 
        "value": "422", 
        "state": "Florida"
    }, 
    {
        "label": "Lynchburg", 
        "growth_from_2000_to_2013": "19.5%", 
        "latitude": 37.4137536, 
        "longitude": -79.14224639999999, 
        "population": "78014", 
        "value": "423", 
        "state": "Virginia"
    }, 
    {
        "label": "Mountain View", 
        "growth_from_2000_to_2013": "10.1%", 
        "latitude": 37.3860517, 
        "longitude": -122.0838511, 
        "population": "77846", 
        "value": "424", 
        "state": "California"
    }, 
    {
        "label": "Medford", 
        "growth_from_2000_to_2013": "17.1%", 
        "latitude": 42.3265152, 
        "longitude": -122.8755949, 
        "population": "77677", 
        "value": "425", 
        "state": "Oregon"
    }, 
    {
        "label": "Lawrence", 
        "growth_from_2000_to_2013": "7.5%", 
        "latitude": 42.7070354, 
        "longitude": -71.1631137, 
        "population": "77657", 
        "value": "426", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Bellflower", 
        "growth_from_2000_to_2013": "6.3%", 
        "latitude": 33.8816818, 
        "longitude": -118.1170117, 
        "population": "77593", 
        "value": "427", 
        "state": "California"
    }, 
    {
        "label": "Melbourne", 
        "growth_from_2000_to_2013": "5.9%", 
        "latitude": 28.0836269, 
        "longitude": -80.60810889999999, 
        "population": "77508", 
        "value": "428", 
        "state": "Florida"
    }, 
    {
        "label": "St. Joseph", 
        "growth_from_2000_to_2013": "4.1%", 
        "latitude": 39.7674578, 
        "longitude": -94.84668099999999, 
        "population": "77147", 
        "value": "429", 
        "state": "Missouri"
    }, 
    {
        "label": "Camden", 
        "growth_from_2000_to_2013": "-3.6%", 
        "latitude": 39.9259463, 
        "longitude": -75.1196199, 
        "population": "76903", 
        "value": "430", 
        "state": "New Jersey"
    }, 
    {
        "label": "St. George", 
        "growth_from_2000_to_2013": "53.1%", 
        "latitude": 37.0965278, 
        "longitude": -113.5684164, 
        "population": "76817", 
        "value": "431", 
        "state": "Utah"
    }, 
    {
        "label": "Kennewick", 
        "growth_from_2000_to_2013": "29.1%", 
        "latitude": 46.2112458, 
        "longitude": -119.1372338, 
        "population": "76762", 
        "value": "432", 
        "state": "Washington"
    }, 
    {
        "label": "Baldwin Park", 
        "growth_from_2000_to_2013": "0.8%", 
        "latitude": 34.0852868, 
        "longitude": -117.9608978, 
        "population": "76635", 
        "value": "433", 
        "state": "California"
    }, 
    {
        "label": "Chino Hills", 
        "growth_from_2000_to_2013": "13.6%", 
        "latitude": 33.9898188, 
        "longitude": -117.7325848, 
        "population": "76572", 
        "value": "434", 
        "state": "California"
    }, 
    {
        "label": "Alameda", 
        "growth_from_2000_to_2013": "5.4%", 
        "latitude": 37.7652065, 
        "longitude": -122.2416355, 
        "population": "76419", 
        "value": "435", 
        "state": "California"
    }, 
    {
        "label": "Albany", 
        "growth_from_2000_to_2013": "-0.6%", 
        "latitude": 31.5785074, 
        "longitude": -84.15574099999999, 
        "population": "76185", 
        "value": "436", 
        "state": "Georgia"
    }, 
    {
        "label": "Arlington Heights", 
        "growth_from_2000_to_2013": "-0.6%", 
        "latitude": 42.0883603, 
        "longitude": -87.98062650000001, 
        "population": "75994", 
        "value": "437", 
        "state": "Illinois"
    }, 
    {
        "label": "Scranton", 
        "growth_from_2000_to_2013": "0.0%", 
        "latitude": 41.408969, 
        "longitude": -75.66241219999999, 
        "population": "75806", 
        "value": "438", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Evanston", 
        "growth_from_2000_to_2013": "1.9%", 
        "latitude": 42.0450722, 
        "longitude": -87.68769689999999, 
        "population": "75570", 
        "value": "439", 
        "state": "Illinois"
    }, 
    {
        "label": "Kalamazoo", 
        "growth_from_2000_to_2013": "-1.9%", 
        "latitude": 42.2917069, 
        "longitude": -85.5872286, 
        "population": "75548", 
        "value": "440", 
        "state": "Michigan"
    }, 
    {
        "label": "Baytown", 
        "growth_from_2000_to_2013": "13.1%", 
        "latitude": 29.7355047, 
        "longitude": -94.97742740000001, 
        "population": "75418", 
        "value": "441", 
        "state": "Texas"
    }, 
    {
        "label": "Upland", 
        "growth_from_2000_to_2013": "9.5%", 
        "latitude": 34.09751, 
        "longitude": -117.6483876, 
        "population": "75413", 
        "value": "442", 
        "state": "California"
    }, 
    {
        "label": "Springdale", 
        "growth_from_2000_to_2013": "57.1%", 
        "latitude": 36.18674420000001, 
        "longitude": -94.1288141, 
        "population": "75229", 
        "value": "443", 
        "state": "Arkansas"
    }, 
    {
        "label": "Bethlehem", 
        "growth_from_2000_to_2013": "5.2%", 
        "latitude": 40.6259316, 
        "longitude": -75.37045789999999, 
        "population": "75018", 
        "value": "444", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Schaumburg", 
        "growth_from_2000_to_2013": "-0.5%", 
        "latitude": 42.0333607, 
        "longitude": -88.0834059, 
        "population": "74907", 
        "value": "445", 
        "state": "Illinois"
    }, 
    {
        "label": "Mount Pleasant", 
        "growth_from_2000_to_2013": "53.2%", 
        "latitude": 32.8323225, 
        "longitude": -79.82842579999999, 
        "population": "74885", 
        "value": "446", 
        "state": "South Carolina"
    }, 
    {
        "label": "Auburn", 
        "growth_from_2000_to_2013": "34.9%", 
        "latitude": 47.30732279999999, 
        "longitude": -122.2284532, 
        "population": "74860", 
        "value": "447", 
        "state": "Washington"
    }, 
    {
        "label": "Decatur", 
        "growth_from_2000_to_2013": "-8.7%", 
        "latitude": 39.8403147, 
        "longitude": -88.9548001, 
        "population": "74710", 
        "value": "448", 
        "state": "Illinois"
    }, 
    {
        "label": "San Ramon", 
        "growth_from_2000_to_2013": "65.8%", 
        "latitude": 37.7799273, 
        "longitude": -121.9780153, 
        "population": "74513", 
        "value": "449", 
        "state": "California"
    }, 
    {
        "label": "Pleasanton", 
        "growth_from_2000_to_2013": "15.2%", 
        "latitude": 37.6624312, 
        "longitude": -121.8746789, 
        "population": "74110", 
        "value": "450", 
        "state": "California"
    }, 
    {
        "label": "Wyoming", 
        "growth_from_2000_to_2013": "6.5%", 
        "latitude": 42.9133602, 
        "longitude": -85.7053085, 
        "population": "74100", 
        "value": "451", 
        "state": "Michigan"
    }, 
    {
        "label": "Lake Charles", 
        "growth_from_2000_to_2013": "3.0%", 
        "latitude": 30.2265949, 
        "longitude": -93.2173758, 
        "population": "74024", 
        "value": "452", 
        "state": "Louisiana"
    }, 
    {
        "label": "Plymouth", 
        "growth_from_2000_to_2013": "12.0%", 
        "latitude": 45.0105194, 
        "longitude": -93.4555093, 
        "population": "73987", 
        "value": "453", 
        "state": "Minnesota"
    }, 
    {
        "label": "Bolingbrook", 
        "growth_from_2000_to_2013": "29.7%", 
        "latitude": 41.69864159999999, 
        "longitude": -88.0683955, 
        "population": "73936", 
        "value": "454", 
        "state": "Illinois"
    }, 
    {
        "label": "Pharr", 
        "growth_from_2000_to_2013": "55.7%", 
        "latitude": 26.1947962, 
        "longitude": -98.1836216, 
        "population": "73790", 
        "value": "455", 
        "state": "Texas"
    }, 
    {
        "label": "Appleton", 
        "growth_from_2000_to_2013": "4.5%", 
        "latitude": 44.2619309, 
        "longitude": -88.41538469999999, 
        "population": "73596", 
        "value": "456", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Gastonia", 
        "growth_from_2000_to_2013": "8.2%", 
        "latitude": 35.262082, 
        "longitude": -81.18730049999999, 
        "population": "73209", 
        "value": "457", 
        "state": "North Carolina"
    }, 
    {
        "label": "Folsom", 
        "growth_from_2000_to_2013": "38.6%", 
        "latitude": 38.6779591, 
        "longitude": -121.1760583, 
        "population": "73098", 
        "value": "458", 
        "state": "California"
    }, 
    {
        "label": "Southfield", 
        "growth_from_2000_to_2013": "-6.7%", 
        "latitude": 42.4733688, 
        "longitude": -83.2218731, 
        "population": "73006", 
        "value": "459", 
        "state": "Michigan"
    }, 
    {
        "label": "Rochester Hills", 
        "growth_from_2000_to_2013": "5.7%", 
        "latitude": 42.65836609999999, 
        "longitude": -83.1499322, 
        "population": "72952", 
        "value": "460", 
        "state": "Michigan"
    }, 
    {
        "label": "New Britain", 
        "growth_from_2000_to_2013": "1.9%", 
        "latitude": 41.6612104, 
        "longitude": -72.7795419, 
        "population": "72939", 
        "value": "461", 
        "state": "Connecticut"
    }, 
    {
        "label": "Goodyear", 
        "growth_from_2000_to_2013": "271.0%", 
        "latitude": 33.4353394, 
        "longitude": -112.3576567, 
        "population": "72864", 
        "value": "462", 
        "state": "Arizona"
    }, 
    {
        "label": "Canton", 
        "growth_from_2000_to_2013": "-10.3%", 
        "latitude": 40.79894729999999, 
        "longitude": -81.378447, 
        "population": "72535", 
        "value": "463", 
        "state": "Ohio"
    }, 
    {
        "label": "Warner Robins", 
        "growth_from_2000_to_2013": "45.7%", 
        "latitude": 32.6130007, 
        "longitude": -83.624201, 
        "population": "72531", 
        "value": "464", 
        "state": "Georgia"
    }, 
    {
        "label": "Union label", 
        "growth_from_2000_to_2013": "7.4%", 
        "latitude": 37.5933918, 
        "longitude": -122.0438298, 
        "population": "72528", 
        "value": "465", 
        "state": "California"
    }, 
    {
        "label": "Perris", 
        "growth_from_2000_to_2013": "98.7%", 
        "latitude": 33.7825194, 
        "longitude": -117.2286478, 
        "population": "72326", 
        "value": "466", 
        "state": "California"
    }, 
    {
        "label": "Manteca", 
        "growth_from_2000_to_2013": "42.7%", 
        "latitude": 37.7974273, 
        "longitude": -121.2160526, 
        "population": "71948", 
        "value": "467", 
        "state": "California"
    }, 
    {
        "label": "Iowa label", 
        "growth_from_2000_to_2013": "13.8%", 
        "latitude": 41.6611277, 
        "longitude": -91.5301683, 
        "population": "71591", 
        "value": "468", 
        "state": "Iowa"
    }, 
    {
        "label": "Jonesboro", 
        "growth_from_2000_to_2013": "28.3%", 
        "latitude": 35.84229670000001, 
        "longitude": -90.704279, 
        "population": "71551", 
        "value": "469", 
        "state": "Arkansas"
    }, 
    {
        "label": "Wilmington", 
        "growth_from_2000_to_2013": "-1.6%", 
        "latitude": 39.7390721, 
        "longitude": -75.5397878, 
        "population": "71525", 
        "value": "470", 
        "state": "Delaware"
    }, 
    {
        "label": "Lynwood", 
        "growth_from_2000_to_2013": "2.0%", 
        "latitude": 33.930293, 
        "longitude": -118.2114603, 
        "population": "71371", 
        "value": "471", 
        "state": "California"
    }, 
    {
        "label": "Loveland", 
        "growth_from_2000_to_2013": "37.4%", 
        "latitude": 40.3977612, 
        "longitude": -105.0749801, 
        "population": "71334", 
        "value": "472", 
        "state": "Colorado"
    }, 
    {
        "label": "Pawtucket", 
        "growth_from_2000_to_2013": "-2.5%", 
        "latitude": 41.878711, 
        "longitude": -71.38255579999999, 
        "population": "71172", 
        "value": "473", 
        "state": "Rhode Island"
    }, 
    {
        "label": "Boynton Beach", 
        "growth_from_2000_to_2013": "17.3%", 
        "latitude": 26.5317866, 
        "longitude": -80.0905465, 
        "population": "71097", 
        "value": "474", 
        "state": "Florida"
    }, 
    {
        "label": "Waukesha", 
        "growth_from_2000_to_2013": "8.0%", 
        "latitude": 43.0116784, 
        "longitude": -88.2314813, 
        "population": "71016", 
        "value": "475", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Gulfport", 
        "growth_from_2000_to_2013": "-0.6%", 
        "latitude": 30.3674198, 
        "longitude": -89.0928155, 
        "population": "71012", 
        "value": "476", 
        "state": "Mississippi"
    }, 
    {
        "label": "Apple Valley", 
        "growth_from_2000_to_2013": "29.9%", 
        "latitude": 34.5008311, 
        "longitude": -117.1858759, 
        "population": "70924", 
        "value": "477", 
        "state": "California"
    }, 
    {
        "label": "Passaic", 
        "growth_from_2000_to_2013": "4.3%", 
        "latitude": 40.8567662, 
        "longitude": -74.1284764, 
        "population": "70868", 
        "value": "478", 
        "state": "New Jersey"
    }, 
    {
        "label": "Rapid label", 
        "growth_from_2000_to_2013": "17.9%", 
        "latitude": 44.0805434, 
        "longitude": -103.2310149, 
        "population": "70812", 
        "value": "479", 
        "state": "South Dakota"
    }, 
    {
        "label": "Layton", 
        "growth_from_2000_to_2013": "20.2%", 
        "latitude": 41.0602216, 
        "longitude": -111.9710529, 
        "population": "70790", 
        "value": "480", 
        "state": "Utah"
    }, 
    {
        "label": "Lafayette", 
        "growth_from_2000_to_2013": "14.5%", 
        "latitude": 40.4167022, 
        "longitude": -86.87528689999999, 
        "population": "70373", 
        "value": "481", 
        "state": "Indiana"
    }, 
    {
        "label": "Turlock", 
        "growth_from_2000_to_2013": "23.5%", 
        "latitude": 37.4946568, 
        "longitude": -120.8465941, 
        "population": "70365", 
        "value": "482", 
        "state": "California"
    }, 
    {
        "label": "Muncie", 
        "growth_from_2000_to_2013": "-0.7%", 
        "latitude": 40.1933767, 
        "longitude": -85.3863599, 
        "population": "70316", 
        "value": "483", 
        "state": "Indiana"
    }, 
    {
        "label": "Temple", 
        "growth_from_2000_to_2013": "27.1%", 
        "latitude": 31.0982344, 
        "longitude": -97.342782, 
        "population": "70190", 
        "value": "484", 
        "state": "Texas"
    }, 
    {
        "label": "Missouri label", 
        "growth_from_2000_to_2013": "31.1%", 
        "latitude": 29.6185669, 
        "longitude": -95.5377215, 
        "population": "70185", 
        "value": "485", 
        "state": "Texas"
    }, 
    {
        "label": "Redlands", 
        "growth_from_2000_to_2013": "9.4%", 
        "latitude": 34.0555693, 
        "longitude": -117.1825381, 
        "population": "69999", 
        "value": "486", 
        "state": "California"
    }, 
    {
        "label": "Santa Fe", 
        "growth_from_2000_to_2013": "10.5%", 
        "latitude": 35.6869752, 
        "longitude": -105.937799, 
        "population": "69976", 
        "value": "487", 
        "state": "New Mexico"
    }, 
    {
        "label": "Lauderhill", 
        "growth_from_2000_to_2013": "4.2%", 
        "latitude": 26.1403635, 
        "longitude": -80.2133808, 
        "population": "69813", 
        "value": "488", 
        "state": "Florida"
    }, 
    {
        "label": "Milpitas", 
        "growth_from_2000_to_2013": "11.0%", 
        "latitude": 37.4323341, 
        "longitude": -121.8995741, 
        "population": "69783", 
        "value": "489", 
        "state": "California"
    }, 
    {
        "label": "Palatine", 
        "growth_from_2000_to_2013": "4.5%", 
        "latitude": 42.1103041, 
        "longitude": -88.03424000000001, 
        "population": "69350", 
        "value": "490", 
        "state": "Illinois"
    }, 
    {
        "label": "Missoula", 
        "growth_from_2000_to_2013": "19.7%", 
        "latitude": 46.87871759999999, 
        "longitude": -113.996586, 
        "population": "69122", 
        "value": "491", 
        "state": "Montana"
    }, 
    {
        "label": "Rock Hill", 
        "growth_from_2000_to_2013": "36.0%", 
        "latitude": 34.9248667, 
        "longitude": -81.02507840000001, 
        "population": "69103", 
        "value": "492", 
        "state": "South Carolina"
    }, 
    {
        "label": "Jacksonville", 
        "growth_from_2000_to_2013": "5.0%", 
        "latitude": 34.7540524, 
        "longitude": -77.4302414, 
        "population": "69079", 
        "value": "493", 
        "state": "North Carolina"
    }, 
    {
        "label": "Fvaluelin", 
        "growth_from_2000_to_2013": "48.5%", 
        "latitude": 35.9250637, 
        "longitude": -86.8688899, 
        "population": "68886", 
        "value": "494", 
        "state": "Tennessee"
    }, 
    {
        "label": "Flagstaff", 
        "growth_from_2000_to_2013": "29.3%", 
        "latitude": 35.1982836, 
        "longitude": -111.651302, 
        "population": "68667", 
        "value": "495", 
        "state": "Arizona"
    }, 
    {
        "label": "Flower Mound", 
        "growth_from_2000_to_2013": "32.5%", 
        "latitude": 33.0145673, 
        "longitude": -97.0969552, 
        "population": "68609", 
        "value": "496", 
        "state": "Texas"
    }, 
    {
        "label": "Weston", 
        "growth_from_2000_to_2013": "34.5%", 
        "latitude": 26.1003654, 
        "longitude": -80.3997748, 
        "population": "68388", 
        "value": "497", 
        "state": "Florida"
    }, 
    {
        "label": "Waterloo", 
        "growth_from_2000_to_2013": "-0.5%", 
        "latitude": 42.492786, 
        "longitude": -92.34257749999999, 
        "population": "68366", 
        "value": "498", 
        "state": "Iowa"
    }, 
    {
        "label": "Union label", 
        "growth_from_2000_to_2013": "1.7%", 
        "latitude": 40.6975898, 
        "longitude": -74.26316349999999, 
        "population": "68247", 
        "value": "499", 
        "state": "New Jersey"
    }, 
    {
        "label": "Mount Vernon", 
        "growth_from_2000_to_2013": "-0.2%", 
        "latitude": 40.9125992, 
        "longitude": -73.8370786, 
        "population": "68224", 
        "value": "500", 
        "state": "New York"
    }, 
    {
        "label": "Fort Myers", 
        "growth_from_2000_to_2013": "31.2%", 
        "latitude": 26.640628, 
        "longitude": -81.8723084, 
        "population": "68190", 
        "value": "501", 
        "state": "Florida"
    }, 
    {
        "label": "Dothan", 
        "growth_from_2000_to_2013": "16.6%", 
        "latitude": 31.2232313, 
        "longitude": -85.3904888, 
        "population": "68001", 
        "value": "502", 
        "state": "Alabama"
    }, 
    {
        "label": "Rancho Cordova", 
        "growth_from_2000_to_2013": "26.4%", 
        "latitude": 38.5890723, 
        "longitude": -121.302728, 
        "population": "67911", 
        "value": "503", 
        "state": "California"
    }, 
    {
        "label": "Redondo Beach", 
        "growth_from_2000_to_2013": "6.7%", 
        "latitude": 33.8491816, 
        "longitude": -118.3884078, 
        "population": "67815", 
        "value": "504", 
        "state": "California"
    }, 
    {
        "label": "Jackson", 
        "growth_from_2000_to_2013": "12.9%", 
        "latitude": 35.6145169, 
        "longitude": -88.81394689999999, 
        "population": "67685", 
        "value": "505", 
        "state": "Tennessee"
    }, 
    {
        "label": "Pasco", 
        "growth_from_2000_to_2013": "98.5%", 
        "latitude": 46.2395793, 
        "longitude": -119.1005657, 
        "population": "67599", 
        "value": "506", 
        "state": "Washington"
    }, 
    {
        "label": "St. Charles", 
        "growth_from_2000_to_2013": "11.3%", 
        "latitude": 38.7881062, 
        "longitude": -90.4974359, 
        "population": "67569", 
        "value": "507", 
        "state": "Missouri"
    }, 
    {
        "label": "Eau Claire", 
        "growth_from_2000_to_2013": "8.7%", 
        "latitude": 44.811349, 
        "longitude": -91.4984941, 
        "population": "67545", 
        "value": "508", 
        "state": "Wisconsin"
    }, 
    {
        "label": "North Richland Hills", 
        "growth_from_2000_to_2013": "20.2%", 
        "latitude": 32.8342952, 
        "longitude": -97.2289029, 
        "population": "67317", 
        "value": "509", 
        "state": "Texas"
    }, 
    {
        "label": "Bismarck", 
        "growth_from_2000_to_2013": "20.1%", 
        "latitude": 46.8083268, 
        "longitude": -100.7837392, 
        "population": "67034", 
        "value": "510", 
        "state": "North Dakota"
    }, 
    {
        "label": "Yorba Linda", 
        "growth_from_2000_to_2013": "13.4%", 
        "latitude": 33.8886259, 
        "longitude": -117.8131125, 
        "population": "67032", 
        "value": "511", 
        "state": "California"
    }, 
    {
        "label": "Kenner", 
        "growth_from_2000_to_2013": "-4.8%", 
        "latitude": 29.9940924, 
        "longitude": -90.2417434, 
        "population": "66975", 
        "value": "512", 
        "state": "Louisiana"
    }, 
    {
        "label": "Walnut Creek", 
        "growth_from_2000_to_2013": "3.5%", 
        "latitude": 37.9100783, 
        "longitude": -122.0651819, 
        "population": "66900", 
        "value": "513", 
        "state": "California"
    }, 
    {
        "label": "Frederick", 
        "growth_from_2000_to_2013": "25.9%", 
        "latitude": 39.41426879999999, 
        "longitude": -77.4105409, 
        "population": "66893", 
        "value": "514", 
        "state": "Maryland"
    }, 
    {
        "label": "Oshkosh", 
        "growth_from_2000_to_2013": "5.3%", 
        "latitude": 44.0247062, 
        "longitude": -88.5426136, 
        "population": "66778", 
        "value": "515", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Pittsburg", 
        "growth_from_2000_to_2013": "16.6%", 
        "latitude": 38.0279762, 
        "longitude": -121.8846806, 
        "population": "66695", 
        "value": "516", 
        "state": "California"
    }, 
    {
        "label": "Palo Alto", 
        "growth_from_2000_to_2013": "13.7%", 
        "latitude": 37.4418834, 
        "longitude": -122.1430195, 
        "population": "66642", 
        "value": "517", 
        "state": "California"
    }, 
    {
        "label": "Bossier label", 
        "growth_from_2000_to_2013": "17.4%", 
        "latitude": 32.5159852, 
        "longitude": -93.7321228, 
        "population": "66333", 
        "value": "518", 
        "state": "Louisiana"
    }, 
    {
        "label": "Portland", 
        "growth_from_2000_to_2013": "3.2%", 
        "latitude": 43.66147100000001, 
        "longitude": -70.2553259, 
        "population": "66318", 
        "value": "519", 
        "state": "Maine"
    }, 
    {
        "label": "St. Cloud", 
        "growth_from_2000_to_2013": "10.9%", 
        "latitude": 45.5579451, 
        "longitude": -94.16324039999999, 
        "population": "66297", 
        "value": "520", 
        "state": "Minnesota"
    }, 
    {
        "label": "Davis", 
        "growth_from_2000_to_2013": "11.9%", 
        "latitude": 38.5449065, 
        "longitude": -121.7405167, 
        "population": "66205", 
        "value": "521", 
        "state": "California"
    }, 
    {
        "label": "South San Francisco", 
        "growth_from_2000_to_2013": "9.1%", 
        "latitude": 37.654656, 
        "longitude": -122.4077498, 
        "population": "66174", 
        "value": "522", 
        "state": "California"
    }, 
    {
        "label": "Camarillo", 
        "growth_from_2000_to_2013": "14.9%", 
        "latitude": 34.2163937, 
        "longitude": -119.0376023, 
        "population": "66086", 
        "value": "523", 
        "state": "California"
    }, 
    {
        "label": "North Little Rock", 
        "growth_from_2000_to_2013": "9.0%", 
        "latitude": 34.769536, 
        "longitude": -92.2670941, 
        "population": "66075", 
        "value": "524", 
        "state": "Arkansas"
    }, 
    {
        "label": "Schenectady", 
        "growth_from_2000_to_2013": "6.7%", 
        "latitude": 42.8142432, 
        "longitude": -73.9395687, 
        "population": "65902", 
        "value": "525", 
        "state": "New York"
    }, 
    {
        "label": "Gaithersburg", 
        "growth_from_2000_to_2013": "24.2%", 
        "latitude": 39.1434406, 
        "longitude": -77.2013705, 
        "population": "65690", 
        "value": "526", 
        "state": "Maryland"
    }, 
    {
        "label": "Harlingen", 
        "growth_from_2000_to_2013": "11.6%", 
        "latitude": 26.1906306, 
        "longitude": -97.69610259999999, 
        "population": "65665", 
        "value": "527", 
        "state": "Texas"
    }, 
    {
        "label": "Woodbury", 
        "growth_from_2000_to_2013": "39.8%", 
        "latitude": 44.9238552, 
        "longitude": -92.9593797, 
        "population": "65656", 
        "value": "528", 
        "state": "Minnesota"
    }, 
    {
        "label": "Eagan", 
        "growth_from_2000_to_2013": "2.6%", 
        "latitude": 44.8041322, 
        "longitude": -93.1668858, 
        "population": "65453", 
        "value": "529", 
        "state": "Minnesota"
    }, 
    {
        "label": "Yuba label", 
        "growth_from_2000_to_2013": "27.9%", 
        "latitude": 39.1404477, 
        "longitude": -121.6169108, 
        "population": "65416", 
        "value": "530", 
        "state": "California"
    }, 
    {
        "label": "Maple Grove", 
        "growth_from_2000_to_2013": "27.3%", 
        "latitude": 45.0724642, 
        "longitude": -93.4557877, 
        "population": "65415", 
        "value": "531", 
        "state": "Minnesota"
    }, 
    {
        "label": "Youngstown", 
        "growth_from_2000_to_2013": "-20.2%", 
        "latitude": 41.0997803, 
        "longitude": -80.6495194, 
        "population": "65184", 
        "value": "532", 
        "state": "Ohio"
    }, 
    {
        "label": "Skokie", 
        "growth_from_2000_to_2013": "2.8%", 
        "latitude": 42.0324025, 
        "longitude": -87.7416246, 
        "population": "65176", 
        "value": "533", 
        "state": "Illinois"
    }, 
    {
        "label": "Kissimmee", 
        "growth_from_2000_to_2013": "32.6%", 
        "latitude": 28.2919557, 
        "longitude": -81.40757099999999, 
        "population": "65173", 
        "value": "534", 
        "state": "Florida"
    }, 
    {
        "label": "Johnson label", 
        "growth_from_2000_to_2013": "16.2%", 
        "latitude": 36.3134397, 
        "longitude": -82.3534727, 
        "population": "65123", 
        "value": "535", 
        "state": "Tennessee"
    }, 
    {
        "label": "Victoria", 
        "growth_from_2000_to_2013": "7.5%", 
        "latitude": 28.8052674, 
        "longitude": -97.0035982, 
        "population": "65098", 
        "value": "536", 
        "state": "Texas"
    }, 
    {
        "label": "San Clemente", 
        "growth_from_2000_to_2013": "28.6%", 
        "latitude": 33.4269728, 
        "longitude": -117.6119925, 
        "population": "65040", 
        "value": "537", 
        "state": "California"
    }, 
    {
        "label": "Bayonne", 
        "growth_from_2000_to_2013": "5.1%", 
        "latitude": 40.6687141, 
        "longitude": -74.1143091, 
        "population": "65028", 
        "value": "538", 
        "state": "New Jersey"
    }, 
    {
        "label": "Laguna Niguel", 
        "growth_from_2000_to_2013": "2.8%", 
        "latitude": 33.5225261, 
        "longitude": -117.7075526, 
        "population": "64652", 
        "value": "539", 
        "state": "California"
    }, 
    {
        "label": "East Orange", 
        "growth_from_2000_to_2013": "-7.4%", 
        "latitude": 40.767323, 
        "longitude": -74.2048677, 
        "population": "64544", 
        "value": "540", 
        "state": "New Jersey"
    }, 
    {
        "label": "Shawnee", 
        "growth_from_2000_to_2013": "32.2%", 
        "latitude": 39.02284849999999, 
        "longitude": -94.7151865, 
        "population": "64323", 
        "value": "541", 
        "state": "Kansas"
    }, 
    {
        "label": "Homestead", 
        "growth_from_2000_to_2013": "100.7%", 
        "latitude": 25.4687224, 
        "longitude": -80.4775569, 
        "population": "64079", 
        "value": "542", 
        "state": "Florida"
    }, 
    {
        "label": "Rockville", 
        "growth_from_2000_to_2013": "34.0%", 
        "latitude": 39.0839973, 
        "longitude": -77.1527578, 
        "population": "64072", 
        "value": "544", 
        "state": "Maryland"
    }, 
    {
        "label": "Delray Beach", 
        "growth_from_2000_to_2013": "6.1%", 
        "latitude": 26.4614625, 
        "longitude": -80.0728201, 
        "population": "64072", 
        "value": "543", 
        "state": "Florida"
    }, 
    {
        "label": "Janesville", 
        "growth_from_2000_to_2013": "5.6%", 
        "latitude": 42.6827885, 
        "longitude": -89.0187222, 
        "population": "63820", 
        "value": "545", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Conway", 
        "growth_from_2000_to_2013": "46.1%", 
        "latitude": 35.0886963, 
        "longitude": -92.4421011, 
        "population": "63816", 
        "value": "546", 
        "state": "Arkansas"
    }, 
    {
        "label": "Pico Rivera", 
        "growth_from_2000_to_2013": "0.4%", 
        "latitude": 33.9830688, 
        "longitude": -118.096735, 
        "population": "63771", 
        "value": "547", 
        "state": "California"
    }, 
    {
        "label": "Lorain", 
        "growth_from_2000_to_2013": "-7.2%", 
        "latitude": 41.452819, 
        "longitude": -82.1823746, 
        "population": "63710", 
        "value": "548", 
        "state": "Ohio"
    }, 
    {
        "label": "Montebello", 
        "growth_from_2000_to_2013": "2.0%", 
        "latitude": 34.0165053, 
        "longitude": -118.1137535, 
        "population": "63495", 
        "value": "549", 
        "state": "California"
    }, 
    {
        "label": "Lodi", 
        "growth_from_2000_to_2013": "10.1%", 
        "latitude": 38.1341477, 
        "longitude": -121.2722194, 
        "population": "63338", 
        "value": "550", 
        "state": "California"
    }, 
    {
        "label": "New Braunfels", 
        "growth_from_2000_to_2013": "64.0%", 
        "latitude": 29.7030024, 
        "longitude": -98.1244531, 
        "population": "63279", 
        "value": "551", 
        "state": "Texas"
    }, 
    {
        "label": "Marysville", 
        "growth_from_2000_to_2013": "115.7%", 
        "latitude": 48.0517637, 
        "longitude": -122.1770818, 
        "population": "63269", 
        "value": "552", 
        "state": "Washington"
    }, 
    {
        "label": "Tamarac", 
        "growth_from_2000_to_2013": "12.9%", 
        "latitude": 26.2128609, 
        "longitude": -80.2497707, 
        "population": "63155", 
        "value": "553", 
        "state": "Florida"
    }, 
    {
        "label": "Madera", 
        "growth_from_2000_to_2013": "44.4%", 
        "latitude": 36.9613356, 
        "longitude": -120.0607176, 
        "population": "63105", 
        "value": "554", 
        "state": "California"
    }, 
    {
        "label": "Conroe", 
        "growth_from_2000_to_2013": "61.9%", 
        "latitude": 30.3118769, 
        "longitude": -95.45605119999999, 
        "population": "63032", 
        "value": "555", 
        "state": "Texas"
    }, 
    {
        "label": "Santa Cruz", 
        "growth_from_2000_to_2013": "12.5%", 
        "latitude": 36.9741171, 
        "longitude": -122.0307963, 
        "population": "62864", 
        "value": "556", 
        "state": "California"
    }, 
    {
        "label": "Eden Prairie", 
        "growth_from_2000_to_2013": "13.3%", 
        "latitude": 44.8546856, 
        "longitude": -93.47078599999999, 
        "population": "62603", 
        "value": "557", 
        "state": "Minnesota"
    }, 
    {
        "label": "Cheyenne", 
        "growth_from_2000_to_2013": "16.9%", 
        "latitude": 41.1399814, 
        "longitude": -104.8202462, 
        "population": "62448", 
        "value": "558", 
        "state": "Wyoming"
    }, 
    {
        "label": "Daytona Beach", 
        "growth_from_2000_to_2013": "-2.3%", 
        "latitude": 29.2108147, 
        "longitude": -81.0228331, 
        "population": "62316", 
        "value": "559", 
        "state": "Florida"
    }, 
    {
        "label": "Alpharetta", 
        "growth_from_2000_to_2013": "33.6%", 
        "latitude": 34.0753762, 
        "longitude": -84.2940899, 
        "population": "62298", 
        "value": "560", 
        "state": "Georgia"
    }, 
    {
        "label": "Hamilton", 
        "growth_from_2000_to_2013": "2.7%", 
        "latitude": 39.3995008, 
        "longitude": -84.5613355, 
        "population": "62258", 
        "value": "561", 
        "state": "Ohio"
    }, 
    {
        "label": "Waltham", 
        "growth_from_2000_to_2013": "5.0%", 
        "latitude": 42.3764852, 
        "longitude": -71.2356113, 
        "population": "62227", 
        "value": "562", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Coon Rapids", 
        "growth_from_2000_to_2013": "0.6%", 
        "latitude": 45.1732394, 
        "longitude": -93.30300629999999, 
        "population": "62103", 
        "value": "563", 
        "state": "Minnesota"
    }, 
    {
        "label": "Haverhill", 
        "growth_from_2000_to_2013": "5.0%", 
        "latitude": 42.7762015, 
        "longitude": -71.0772796, 
        "population": "62088", 
        "value": "564", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Council Bluffs", 
        "growth_from_2000_to_2013": "6.2%", 
        "latitude": 41.2619444, 
        "longitude": -95.8608333, 
        "population": "61969", 
        "value": "565", 
        "state": "Iowa"
    }, 
    {
        "label": "Taylor", 
        "growth_from_2000_to_2013": "-6.3%", 
        "latitude": 42.240872, 
        "longitude": -83.2696509, 
        "population": "61817", 
        "value": "566", 
        "state": "Michigan"
    }, 
    {
        "label": "Utica", 
        "growth_from_2000_to_2013": "2.2%", 
        "latitude": 43.100903, 
        "longitude": -75.232664, 
        "population": "61808", 
        "value": "567", 
        "state": "New York"
    }, 
    {
        "label": "Ames", 
        "growth_from_2000_to_2013": "21.3%", 
        "latitude": 42.034722, 
        "longitude": -93.61999999999999, 
        "population": "61792", 
        "value": "568", 
        "state": "Iowa"
    }, 
    {
        "label": "La Habra", 
        "growth_from_2000_to_2013": "3.6%", 
        "latitude": 33.9319578, 
        "longitude": -117.9461734, 
        "population": "61653", 
        "value": "569", 
        "state": "California"
    }, 
    {
        "label": "Encinitas", 
        "growth_from_2000_to_2013": "5.8%", 
        "latitude": 33.0369867, 
        "longitude": -117.2919818, 
        "population": "61588", 
        "value": "570", 
        "state": "California"
    }, 
    {
        "label": "Bowling Green", 
        "growth_from_2000_to_2013": "24.1%", 
        "latitude": 36.9685219, 
        "longitude": -86.4808043, 
        "population": "61488", 
        "value": "571", 
        "state": "Kentucky"
    }, 
    {
        "label": "Burnsville", 
        "growth_from_2000_to_2013": "1.9%", 
        "latitude": 44.7677424, 
        "longitude": -93.27772259999999, 
        "population": "61434", 
        "value": "572", 
        "state": "Minnesota"
    }, 
    {
        "label": "Greenville", 
        "growth_from_2000_to_2013": "8.2%", 
        "latitude": 34.85261759999999, 
        "longitude": -82.3940104, 
        "population": "61397", 
        "value": "573", 
        "state": "South Carolina"
    }, 
    {
        "label": "West Des Moines", 
        "growth_from_2000_to_2013": "29.8%", 
        "latitude": 41.5772115, 
        "longitude": -93.711332, 
        "population": "61255", 
        "value": "574", 
        "state": "Iowa"
    }, 
    {
        "label": "Cedar Park", 
        "growth_from_2000_to_2013": "134.3%", 
        "latitude": 30.505198, 
        "longitude": -97.8202888, 
        "population": "61238", 
        "value": "575", 
        "state": "Texas"
    }, 
    {
        "label": "Tulare", 
        "growth_from_2000_to_2013": "33.3%", 
        "latitude": 36.2077288, 
        "longitude": -119.3473379, 
        "population": "61170", 
        "value": "576", 
        "state": "California"
    }, 
    {
        "label": "Monterey Park", 
        "growth_from_2000_to_2013": "1.5%", 
        "latitude": 34.0625106, 
        "longitude": -118.1228476, 
        "population": "61085", 
        "value": "577", 
        "state": "California"
    }, 
    {
        "label": "Vineland", 
        "growth_from_2000_to_2013": "9.3%", 
        "latitude": 39.4863773, 
        "longitude": -75.02596369999999, 
        "population": "61050", 
        "value": "578", 
        "state": "New Jersey"
    }, 
    {
        "label": "Terre Haute", 
        "growth_from_2000_to_2013": "2.5%", 
        "latitude": 39.4667034, 
        "longitude": -87.41390919999999, 
        "population": "61025", 
        "value": "579", 
        "state": "Indiana"
    }, 
    {
        "label": "North Miami", 
        "growth_from_2000_to_2013": "2.0%", 
        "latitude": 25.8900949, 
        "longitude": -80.1867138, 
        "population": "61007", 
        "value": "580", 
        "state": "Florida"
    }, 
    {
        "label": "Mansfield", 
        "growth_from_2000_to_2013": "114.2%", 
        "latitude": 32.5631924, 
        "longitude": -97.1416768, 
        "population": "60872", 
        "value": "581", 
        "state": "Texas"
    }, 
    {
        "label": "West Allis", 
        "growth_from_2000_to_2013": "-0.6%", 
        "latitude": 43.0166806, 
        "longitude": -88.0070315, 
        "population": "60697", 
        "value": "582", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Bristol", 
        "growth_from_2000_to_2013": "0.4%", 
        "latitude": 41.67176480000001, 
        "longitude": -72.9492703, 
        "population": "60568", 
        "value": "583", 
        "state": "Connecticut"
    }, 
    {
        "label": "Taylorsville", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 40.66772479999999, 
        "longitude": -111.9388258, 
        "population": "60519", 
        "value": "584", 
        "state": "Utah"
    }, 
    {
        "label": "Malden", 
        "growth_from_2000_to_2013": "7.4%", 
        "latitude": 42.4250964, 
        "longitude": -71.066163, 
        "population": "60509", 
        "value": "585", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Meriden", 
        "growth_from_2000_to_2013": "3.7%", 
        "latitude": 41.5381535, 
        "longitude": -72.80704349999999, 
        "population": "60456", 
        "value": "586", 
        "state": "Connecticut"
    }, 
    {
        "label": "Blaine", 
        "growth_from_2000_to_2013": "32.8%", 
        "latitude": 45.1607987, 
        "longitude": -93.23494889999999, 
        "population": "60407", 
        "value": "587", 
        "state": "Minnesota"
    }, 
    {
        "label": "Wellington", 
        "growth_from_2000_to_2013": "55.0%", 
        "latitude": 26.6617635, 
        "longitude": -80.2683571, 
        "population": "60202", 
        "value": "588", 
        "state": "Florida"
    }, 
    {
        "label": "Cupertino", 
        "growth_from_2000_to_2013": "14.3%", 
        "latitude": 37.3229978, 
        "longitude": -122.0321823, 
        "population": "60189", 
        "value": "589", 
        "state": "California"
    }, 
    {
        "label": "Springfield", 
        "growth_from_2000_to_2013": "12.4%", 
        "latitude": 44.0462362, 
        "longitude": -123.0220289, 
        "population": "60177", 
        "value": "590", 
        "state": "Oregon"
    }, 
    {
        "label": "Rogers", 
        "growth_from_2000_to_2013": "50.6%", 
        "latitude": 36.3320196, 
        "longitude": -94.1185366, 
        "population": "60112", 
        "value": "591", 
        "state": "Arkansas"
    }, 
    {
        "label": "St. Clair Shores", 
        "growth_from_2000_to_2013": "-4.6%", 
        "latitude": 42.4974085, 
        "longitude": -82.89636039999999, 
        "population": "60070", 
        "value": "592", 
        "state": "Michigan"
    }, 
    {
        "label": "Gardena", 
        "growth_from_2000_to_2013": "3.4%", 
        "latitude": 33.8883487, 
        "longitude": -118.3089624, 
        "population": "59957", 
        "value": "593", 
        "state": "California"
    }, 
    {
        "label": "Pontiac", 
        "growth_from_2000_to_2013": "-11.4%", 
        "latitude": 42.6389216, 
        "longitude": -83.29104679999999, 
        "population": "59887", 
        "value": "594", 
        "state": "Michigan"
    }, 
    {
        "label": "National label", 
        "growth_from_2000_to_2013": "10.1%", 
        "latitude": 32.6781085, 
        "longitude": -117.0991967, 
        "population": "59834", 
        "value": "595", 
        "state": "California"
    }, 
    {
        "label": "Grand Junction", 
        "growth_from_2000_to_2013": "30.9%", 
        "latitude": 39.0638705, 
        "longitude": -108.5506486, 
        "population": "59778", 
        "value": "596", 
        "state": "Colorado"
    }, 
    {
        "label": "Rocklin", 
        "growth_from_2000_to_2013": "60.3%", 
        "latitude": 38.7907339, 
        "longitude": -121.2357828, 
        "population": "59738", 
        "value": "597", 
        "state": "California"
    }, 
    {
        "label": "Chapel Hill", 
        "growth_from_2000_to_2013": "24.1%", 
        "latitude": 35.9131996, 
        "longitude": -79.0558445, 
        "population": "59635", 
        "value": "598", 
        "state": "North Carolina"
    }, 
    {
        "label": "Casper", 
        "growth_from_2000_to_2013": "19.9%", 
        "latitude": 42.866632, 
        "longitude": -106.313081, 
        "population": "59628", 
        "value": "599", 
        "state": "Wyoming"
    }, 
    {
        "label": "Broomfield", 
        "growth_from_2000_to_2013": "50.3%", 
        "latitude": 39.9205411, 
        "longitude": -105.0866504, 
        "population": "59471", 
        "value": "600", 
        "state": "Colorado"
    }, 
    {
        "label": "Petaluma", 
        "growth_from_2000_to_2013": "8.4%", 
        "latitude": 38.232417, 
        "longitude": -122.6366524, 
        "population": "59440", 
        "value": "601", 
        "state": "California"
    }, 
    {
        "label": "South Jordan", 
        "growth_from_2000_to_2013": "100.1%", 
        "latitude": 40.5621704, 
        "longitude": -111.929658, 
        "population": "59366", 
        "value": "602", 
        "state": "Utah"
    }, 
    {
        "label": "Springfield", 
        "growth_from_2000_to_2013": "-9.8%", 
        "latitude": 39.9242266, 
        "longitude": -83.8088171, 
        "population": "59357", 
        "value": "603", 
        "state": "Ohio"
    }, 
    {
        "label": "Great Falls", 
        "growth_from_2000_to_2013": "3.9%", 
        "latitude": 47.4941836, 
        "longitude": -111.2833449, 
        "population": "59351", 
        "value": "604", 
        "state": "Montana"
    }, 
    {
        "label": "Lancaster", 
        "growth_from_2000_to_2013": "4.5%", 
        "latitude": 40.0378755, 
        "longitude": -76.3055144, 
        "population": "59325", 
        "value": "605", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "North Port", 
        "growth_from_2000_to_2013": "154.6%", 
        "latitude": 27.044224, 
        "longitude": -82.2359254, 
        "population": "59212", 
        "value": "606", 
        "state": "Florida"
    }, 
    {
        "label": "Lakewood", 
        "growth_from_2000_to_2013": "1.1%", 
        "latitude": 47.1717649, 
        "longitude": -122.518458, 
        "population": "59097", 
        "value": "607", 
        "state": "Washington"
    }, 
    {
        "label": "Marietta", 
        "growth_from_2000_to_2013": "-3.8%", 
        "latitude": 33.95260200000001, 
        "longitude": -84.5499327, 
        "population": "59089", 
        "value": "608", 
        "state": "Georgia"
    }, 
    {
        "label": "San Rafael", 
        "growth_from_2000_to_2013": "5.0%", 
        "latitude": 37.9735346, 
        "longitude": -122.5310874, 
        "population": "58994", 
        "value": "609", 
        "state": "California"
    }, 
    {
        "label": "Royal Oak", 
        "growth_from_2000_to_2013": "-1.7%", 
        "latitude": 42.4894801, 
        "longitude": -83.1446485, 
        "population": "58946", 
        "value": "610", 
        "state": "Michigan"
    }, 
    {
        "label": "Des Plaines", 
        "growth_from_2000_to_2013": "3.2%", 
        "latitude": 42.0333623, 
        "longitude": -87.88339909999999, 
        "population": "58918", 
        "value": "611", 
        "state": "Illinois"
    }, 
    {
        "label": "Huntington Park", 
        "growth_from_2000_to_2013": "-4.1%", 
        "latitude": 33.9816812, 
        "longitude": -118.2250725, 
        "population": "58879", 
        "value": "612", 
        "state": "California"
    }, 
    {
        "label": "La Mesa", 
        "growth_from_2000_to_2013": "6.9%", 
        "latitude": 32.7678287, 
        "longitude": -117.0230839, 
        "population": "58642", 
        "value": "613", 
        "state": "California"
    }, 
    {
        "label": "Orland Park", 
        "growth_from_2000_to_2013": "13.9%", 
        "latitude": 41.6303103, 
        "longitude": -87.85394250000002, 
        "population": "58590", 
        "value": "614", 
        "state": "Illinois"
    }, 
    {
        "label": "Auburn", 
        "growth_from_2000_to_2013": "26.4%", 
        "latitude": 32.6098566, 
        "longitude": -85.48078249999999, 
        "population": "58582", 
        "value": "615", 
        "state": "Alabama"
    }, 
    {
        "label": "Lakeville", 
        "growth_from_2000_to_2013": "34.3%", 
        "latitude": 44.6496868, 
        "longitude": -93.24271999999999, 
        "population": "58562", 
        "value": "616", 
        "state": "Minnesota"
    }, 
    {
        "label": "Owensboro", 
        "growth_from_2000_to_2013": "7.7%", 
        "latitude": 37.7719074, 
        "longitude": -87.1111676, 
        "population": "58416", 
        "value": "617", 
        "state": "Kentucky"
    }, 
    {
        "label": "Moore", 
        "growth_from_2000_to_2013": "41.5%", 
        "latitude": 35.3395079, 
        "longitude": -97.48670279999999, 
        "population": "58414", 
        "value": "618", 
        "state": "Oklahoma"
    }, 
    {
        "label": "Jupiter", 
        "growth_from_2000_to_2013": "46.2%", 
        "latitude": 26.9342246, 
        "longitude": -80.0942087, 
        "population": "58298", 
        "value": "619", 
        "state": "Florida"
    }, 
    {
        "label": "Idaho Falls", 
        "growth_from_2000_to_2013": "14.0%", 
        "latitude": 43.49165139999999, 
        "longitude": -112.0339645, 
        "population": "58292", 
        "value": "620", 
        "state": "Idaho"
    }, 
    {
        "label": "Dubuque", 
        "growth_from_2000_to_2013": "0.9%", 
        "latitude": 42.5005583, 
        "longitude": -90.66457179999999, 
        "population": "58253", 
        "value": "621", 
        "state": "Iowa"
    }, 
    {
        "label": "Bartlett", 
        "growth_from_2000_to_2013": "31.7%", 
        "latitude": 35.2045328, 
        "longitude": -89.8739753, 
        "population": "58226", 
        "value": "622", 
        "state": "Tennessee"
    }, 
    {
        "label": "Rowlett", 
        "growth_from_2000_to_2013": "28.6%", 
        "latitude": 32.9029017, 
        "longitude": -96.56388, 
        "population": "58043", 
        "value": "623", 
        "state": "Texas"
    }, 
    {
        "label": "Novi", 
        "growth_from_2000_to_2013": "22.0%", 
        "latitude": 42.48059, 
        "longitude": -83.4754913, 
        "population": "57960", 
        "value": "624", 
        "state": "Michigan"
    }, 
    {
        "label": "White Plains", 
        "growth_from_2000_to_2013": "8.5%", 
        "latitude": 41.03398620000001, 
        "longitude": -73.7629097, 
        "population": "57866", 
        "value": "625", 
        "state": "New York"
    }, 
    {
        "label": "Arcadia", 
        "growth_from_2000_to_2013": "8.3%", 
        "latitude": 34.1397292, 
        "longitude": -118.0353449, 
        "population": "57639", 
        "value": "626", 
        "state": "California"
    }, 
    {
        "label": "Redmond", 
        "growth_from_2000_to_2013": "26.0%", 
        "latitude": 47.6739881, 
        "longitude": -122.121512, 
        "population": "57530", 
        "value": "627", 
        "state": "Washington"
    }, 
    {
        "label": "Lake Elsinore", 
        "growth_from_2000_to_2013": "96.5%", 
        "latitude": 33.6680772, 
        "longitude": -117.3272615, 
        "population": "57525", 
        "value": "628", 
        "state": "California"
    }, 
    {
        "label": "Ocala", 
        "growth_from_2000_to_2013": "20.8%", 
        "latitude": 29.1871986, 
        "longitude": -82.14009229999999, 
        "population": "57468", 
        "value": "629", 
        "state": "Florida"
    }, 
    {
        "label": "Tinley Park", 
        "growth_from_2000_to_2013": "16.3%", 
        "latitude": 41.5731442, 
        "longitude": -87.7932939, 
        "population": "57282", 
        "value": "630", 
        "state": "Illinois"
    }, 
    {
        "label": "Port Orange", 
        "growth_from_2000_to_2013": "22.8%", 
        "latitude": 29.1383165, 
        "longitude": -80.9956105, 
        "population": "57203", 
        "value": "631", 
        "state": "Florida"
    }, 
    {
        "label": "Medford", 
        "growth_from_2000_to_2013": "2.7%", 
        "latitude": 42.4184296, 
        "longitude": -71.1061639, 
        "population": "57170", 
        "value": "632", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Oak Lawn", 
        "growth_from_2000_to_2013": "3.3%", 
        "latitude": 41.719978, 
        "longitude": -87.7479528, 
        "population": "57073", 
        "value": "633", 
        "state": "Illinois"
    }, 
    {
        "label": "Rocky Mount", 
        "growth_from_2000_to_2013": "-3.1%", 
        "latitude": 35.9382103, 
        "longitude": -77.7905339, 
        "population": "56954", 
        "value": "634", 
        "state": "North Carolina"
    }, 
    {
        "label": "Kokomo", 
        "growth_from_2000_to_2013": "21.3%", 
        "latitude": 40.486427, 
        "longitude": -86.13360329999999, 
        "population": "56895", 
        "value": "635", 
        "state": "Indiana"
    }, 
    {
        "label": "Coconut Creek", 
        "growth_from_2000_to_2013": "28.4%", 
        "latitude": 26.2517482, 
        "longitude": -80.17893509999999, 
        "population": "56792", 
        "value": "636", 
        "state": "Florida"
    }, 
    {
        "label": "Bowie", 
        "growth_from_2000_to_2013": "8.6%", 
        "latitude": 39.0067768, 
        "longitude": -76.77913649999999, 
        "population": "56759", 
        "value": "637", 
        "state": "Maryland"
    }, 
    {
        "label": "Berwyn", 
        "growth_from_2000_to_2013": "5.1%", 
        "latitude": 41.85058739999999, 
        "longitude": -87.7936685, 
        "population": "56758", 
        "value": "638", 
        "state": "Illinois"
    }, 
    {
        "label": "Midwest label", 
        "growth_from_2000_to_2013": "4.5%", 
        "latitude": 35.4495065, 
        "longitude": -97.3967019, 
        "population": "56756", 
        "value": "639", 
        "state": "Oklahoma"
    }, 
    {
        "label": "Fountain Valley", 
        "growth_from_2000_to_2013": "3.0%", 
        "latitude": 33.7091847, 
        "longitude": -117.9536697, 
        "population": "56707", 
        "value": "640", 
        "state": "California"
    }, 
    {
        "label": "Buckeye", 
        "growth_from_2000_to_2013": "480.9%", 
        "latitude": 33.3703197, 
        "longitude": -112.5837766, 
        "population": "56683", 
        "value": "641", 
        "state": "Arizona"
    }, 
    {
        "label": "Dearborn Heights", 
        "growth_from_2000_to_2013": "-3.0%", 
        "latitude": 42.3369816, 
        "longitude": -83.27326269999999, 
        "population": "56620", 
        "value": "642", 
        "state": "Michigan"
    }, 
    {
        "label": "Woodland", 
        "growth_from_2000_to_2013": "13.8%", 
        "latitude": 38.67851570000001, 
        "longitude": -121.7732971, 
        "population": "56590", 
        "value": "643", 
        "state": "California"
    }, 
    {
        "label": "Noblesville", 
        "growth_from_2000_to_2013": "88.1%", 
        "latitude": 40.0455917, 
        "longitude": -86.0085955, 
        "population": "56540", 
        "value": "644", 
        "state": "Indiana"
    }, 
    {
        "label": "Valdosta", 
        "growth_from_2000_to_2013": "22.3%", 
        "latitude": 30.8327022, 
        "longitude": -83.2784851, 
        "population": "56481", 
        "value": "645", 
        "state": "Georgia"
    }, 
    {
        "label": "Diamond Bar", 
        "growth_from_2000_to_2013": "0.1%", 
        "latitude": 34.0286226, 
        "longitude": -117.8103367, 
        "population": "56449", 
        "value": "646", 
        "state": "California"
    }, 
    {
        "label": "Manhattan", 
        "growth_from_2000_to_2013": "22.8%", 
        "latitude": 39.18360819999999, 
        "longitude": -96.57166939999999, 
        "population": "56143", 
        "value": "647", 
        "state": "Kansas"
    }, 
    {
        "label": "Santee", 
        "growth_from_2000_to_2013": "5.7%", 
        "latitude": 32.8383828, 
        "longitude": -116.9739167, 
        "population": "56105", 
        "value": "648", 
        "state": "California"
    }, 
    {
        "label": "Taunton", 
        "growth_from_2000_to_2013": "0.0%", 
        "latitude": 41.900101, 
        "longitude": -71.0897674, 
        "population": "56069", 
        "value": "649", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Sanford", 
        "growth_from_2000_to_2013": "42.8%", 
        "latitude": 28.8028612, 
        "longitude": -81.269453, 
        "population": "56002", 
        "value": "650", 
        "state": "Florida"
    }, 
    {
        "label": "Kettering", 
        "growth_from_2000_to_2013": "-3.1%", 
        "latitude": 39.68950359999999, 
        "longitude": -84.1688274, 
        "population": "55870", 
        "value": "651", 
        "state": "Ohio"
    }, 
    {
        "label": "New Brunswick", 
        "growth_from_2000_to_2013": "15.5%", 
        "latitude": 40.4862157, 
        "longitude": -74.4518188, 
        "population": "55831", 
        "value": "652", 
        "state": "New Jersey"
    }, 
    {
        "label": "Decatur", 
        "growth_from_2000_to_2013": "3.1%", 
        "latitude": 34.6059253, 
        "longitude": -86.9833417, 
        "population": "55816", 
        "value": "653", 
        "state": "Alabama"
    }, 
    {
        "label": "Chicopee", 
        "growth_from_2000_to_2013": "1.7%", 
        "latitude": 42.1487043, 
        "longitude": -72.6078672, 
        "population": "55717", 
        "value": "654", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Anderson", 
        "growth_from_2000_to_2013": "-6.6%", 
        "latitude": 40.1053196, 
        "longitude": -85.6802541, 
        "population": "55670", 
        "value": "655", 
        "state": "Indiana"
    }, 
    {
        "label": "Margate", 
        "growth_from_2000_to_2013": "2.7%", 
        "latitude": 26.2445263, 
        "longitude": -80.206436, 
        "population": "55456", 
        "value": "656", 
        "state": "Florida"
    }, 
    {
        "label": "Weymouth Town", 
        "growth_from_2000_to_2013": "", 
        "latitude": 42.2180724, 
        "longitude": -70.94103559999999, 
        "population": "55419", 
        "value": "657", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Hempstead", 
        "growth_from_2000_to_2013": "4.0%", 
        "latitude": 40.7062128, 
        "longitude": -73.6187397, 
        "population": "55361", 
        "value": "658", 
        "state": "New York"
    }, 
    {
        "label": "Corvallis", 
        "growth_from_2000_to_2013": "11.8%", 
        "latitude": 44.5645659, 
        "longitude": -123.2620435, 
        "population": "55298", 
        "value": "659", 
        "state": "Oregon"
    }, 
    {
        "label": "Eastvale", 
        "growth_from_2000_to_2013": "", 
        "latitude": 33.952463, 
        "longitude": -117.5848025, 
        "population": "55191", 
        "value": "660", 
        "state": "California"
    }, 
    {
        "label": "Porterville", 
        "growth_from_2000_to_2013": "20.1%", 
        "latitude": 36.06523, 
        "longitude": -119.0167679, 
        "population": "55174", 
        "value": "661", 
        "state": "California"
    }, 
    {
        "label": "West Haven", 
        "growth_from_2000_to_2013": "5.1%", 
        "latitude": 41.2705484, 
        "longitude": -72.9469711, 
        "population": "55046", 
        "value": "662", 
        "state": "Connecticut"
    }, 
    {
        "label": "Brentwood", 
        "growth_from_2000_to_2013": "122.3%", 
        "latitude": 37.931868, 
        "longitude": -121.6957863, 
        "population": "55000", 
        "value": "663", 
        "state": "California"
    }, 
    {
        "label": "Paramount", 
        "growth_from_2000_to_2013": "-0.7%", 
        "latitude": 33.8894598, 
        "longitude": -118.1597911, 
        "population": "54980", 
        "value": "664", 
        "state": "California"
    }, 
    {
        "label": "Grand Forks", 
        "growth_from_2000_to_2013": "11.5%", 
        "latitude": 47.9252568, 
        "longitude": -97.0328547, 
        "population": "54932", 
        "value": "665", 
        "state": "North Dakota"
    }, 
    {
        "label": "Georgetown", 
        "growth_from_2000_to_2013": "91.9%", 
        "latitude": 30.6332618, 
        "longitude": -97.6779842, 
        "population": "54898", 
        "value": "666", 
        "state": "Texas"
    }, 
    {
        "label": "St. Peters", 
        "growth_from_2000_to_2013": "6.5%", 
        "latitude": 38.7874699, 
        "longitude": -90.6298922, 
        "population": "54842", 
        "value": "667", 
        "state": "Missouri"
    }, 
    {
        "label": "Shoreline", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 47.7556531, 
        "longitude": -122.3415178, 
        "population": "54790", 
        "value": "668", 
        "state": "Washington"
    }, 
    {
        "label": "Mount Prospect", 
        "growth_from_2000_to_2013": "-2.5%", 
        "latitude": 42.0664167, 
        "longitude": -87.9372908, 
        "population": "54771", 
        "value": "669", 
        "state": "Illinois"
    }, 
    {
        "label": "Hanford", 
        "growth_from_2000_to_2013": "30.3%", 
        "latitude": 36.3274502, 
        "longitude": -119.6456844, 
        "population": "54686", 
        "value": "670", 
        "state": "California"
    }, 
    {
        "label": "Normal", 
        "growth_from_2000_to_2013": "19.7%", 
        "latitude": 40.5142026, 
        "longitude": -88.9906312, 
        "population": "54664", 
        "value": "671", 
        "state": "Illinois"
    }, 
    {
        "label": "Rosemead", 
        "growth_from_2000_to_2013": "1.7%", 
        "latitude": 34.0805651, 
        "longitude": -118.072846, 
        "population": "54561", 
        "value": "672", 
        "state": "California"
    }, 
    {
        "label": "Lehi", 
        "growth_from_2000_to_2013": "176.3%", 
        "latitude": 40.3916172, 
        "longitude": -111.8507662, 
        "population": "54382", 
        "value": "673", 
        "state": "Utah"
    }, 
    {
        "label": "Pocatello", 
        "growth_from_2000_to_2013": "5.4%", 
        "latitude": 42.8713032, 
        "longitude": -112.4455344, 
        "population": "54350", 
        "value": "674", 
        "state": "Idaho"
    }, 
    {
        "label": "Highland", 
        "growth_from_2000_to_2013": "21.0%", 
        "latitude": 34.1283442, 
        "longitude": -117.2086513, 
        "population": "54291", 
        "value": "675", 
        "state": "California"
    }, 
    {
        "label": "Novato", 
        "growth_from_2000_to_2013": "13.3%", 
        "latitude": 38.1074198, 
        "longitude": -122.5697032, 
        "population": "54194", 
        "value": "676", 
        "state": "California"
    }, 
    {
        "label": "Port Arthur", 
        "growth_from_2000_to_2013": "-6.0%", 
        "latitude": 29.8849504, 
        "longitude": -93.93994699999999, 
        "population": "54135", 
        "value": "677", 
        "state": "Texas"
    }, 
    {
        "label": "Carson label", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 39.1637984, 
        "longitude": -119.7674034, 
        "population": "54080", 
        "value": "678", 
        "state": "Nevada"
    }, 
    {
        "label": "San Marcos", 
        "growth_from_2000_to_2013": "48.5%", 
        "latitude": 29.8832749, 
        "longitude": -97.9413941, 
        "population": "54076", 
        "value": "679", 
        "state": "Texas"
    }, 
    {
        "label": "Hendersonville", 
        "growth_from_2000_to_2013": "31.7%", 
        "latitude": 36.3047735, 
        "longitude": -86.6199957, 
        "population": "54068", 
        "value": "680", 
        "state": "Tennessee"
    }, 
    {
        "label": "Elyria", 
        "growth_from_2000_to_2013": "-3.7%", 
        "latitude": 41.3683798, 
        "longitude": -82.10764859999999, 
        "population": "53956", 
        "value": "681", 
        "state": "Ohio"
    }, 
    {
        "label": "Revere", 
        "growth_from_2000_to_2013": "13.4%", 
        "latitude": 42.4084302, 
        "longitude": -71.0119948, 
        "population": "53756", 
        "value": "682", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Pflugerville", 
        "growth_from_2000_to_2013": "123.4%", 
        "latitude": 30.4393696, 
        "longitude": -97.62000429999999, 
        "population": "53752", 
        "value": "683", 
        "state": "Texas"
    }, 
    {
        "label": "Greenwood", 
        "growth_from_2000_to_2013": "46.0%", 
        "latitude": 39.6136578, 
        "longitude": -86.10665259999999, 
        "population": "53665", 
        "value": "684", 
        "state": "Indiana"
    }, 
    {
        "label": "Bellevue", 
        "growth_from_2000_to_2013": "20.5%", 
        "latitude": 41.1543623, 
        "longitude": -95.9145568, 
        "population": "53663", 
        "value": "685", 
        "state": "Nebraska"
    }, 
    {
        "label": "Wheaton", 
        "growth_from_2000_to_2013": "-3.4%", 
        "latitude": 41.8661403, 
        "longitude": -88.1070127, 
        "population": "53648", 
        "value": "686", 
        "state": "Illinois"
    }, 
    {
        "label": "Smyrna", 
        "growth_from_2000_to_2013": "20.0%", 
        "latitude": 33.8839926, 
        "longitude": -84.51437609999999, 
        "population": "53438", 
        "value": "687", 
        "state": "Georgia"
    }, 
    {
        "label": "Sarasota", 
        "growth_from_2000_to_2013": "1.4%", 
        "latitude": 27.3364347, 
        "longitude": -82.53065269999999, 
        "population": "53326", 
        "value": "688", 
        "state": "Florida"
    }, 
    {
        "label": "Blue Springs", 
        "growth_from_2000_to_2013": "9.9%", 
        "latitude": 39.0169509, 
        "longitude": -94.2816148, 
        "population": "53294", 
        "value": "689", 
        "state": "Missouri"
    }, 
    {
        "label": "Colton", 
        "growth_from_2000_to_2013": "10.8%", 
        "latitude": 34.0739016, 
        "longitude": -117.3136547, 
        "population": "53243", 
        "value": "690", 
        "state": "California"
    }, 
    {
        "label": "Euless", 
        "growth_from_2000_to_2013": "15.1%", 
        "latitude": 32.8370727, 
        "longitude": -97.08195409999999, 
        "population": "53224", 
        "value": "691", 
        "state": "Texas"
    }, 
    {
        "label": "Castle Rock", 
        "growth_from_2000_to_2013": "153.5%", 
        "latitude": 39.3722121, 
        "longitude": -104.8560902, 
        "population": "53063", 
        "value": "692", 
        "state": "Colorado"
    }, 
    {
        "label": "Cathedral label", 
        "growth_from_2000_to_2013": "23.2%", 
        "latitude": 33.7805388, 
        "longitude": -116.4668036, 
        "population": "52977", 
        "value": "693", 
        "state": "California"
    }, 
    {
        "label": "Kingsport", 
        "growth_from_2000_to_2013": "16.7%", 
        "latitude": 36.548434, 
        "longitude": -82.5618186, 
        "population": "52962", 
        "value": "694", 
        "state": "Tennessee"
    }, 
    {
        "label": "Lake Havasu label", 
        "growth_from_2000_to_2013": "24.6%", 
        "latitude": 34.483901, 
        "longitude": -114.3224548, 
        "population": "52844", 
        "value": "695", 
        "state": "Arizona"
    }, 
    {
        "label": "Pensacola", 
        "growth_from_2000_to_2013": "-6.0%", 
        "latitude": 30.42130899999999, 
        "longitude": -87.2169149, 
        "population": "52703", 
        "value": "696", 
        "state": "Florida"
    }, 
    {
        "label": "Hoboken", 
        "growth_from_2000_to_2013": "35.8%", 
        "latitude": 40.7439905, 
        "longitude": -74.0323626, 
        "population": "52575", 
        "value": "697", 
        "state": "New Jersey"
    }, 
    {
        "label": "Yucaipa", 
        "growth_from_2000_to_2013": "26.8%", 
        "latitude": 34.033625, 
        "longitude": -117.0430865, 
        "population": "52536", 
        "value": "698", 
        "state": "California"
    }, 
    {
        "label": "Watsonville", 
        "growth_from_2000_to_2013": "12.7%", 
        "latitude": 36.910231, 
        "longitude": -121.7568946, 
        "population": "52477", 
        "value": "699", 
        "state": "California"
    }, 
    {
        "label": "Richland", 
        "growth_from_2000_to_2013": "34.6%", 
        "latitude": 46.2856907, 
        "longitude": -119.2844621, 
        "population": "52413", 
        "value": "700", 
        "state": "Washington"
    }, 
    {
        "label": "Delano", 
        "growth_from_2000_to_2013": "31.8%", 
        "latitude": 35.7688425, 
        "longitude": -119.2470536, 
        "population": "52403", 
        "value": "701", 
        "state": "California"
    }, 
    {
        "label": "Hoffman Estates", 
        "growth_from_2000_to_2013": "5.4%", 
        "latitude": 42.0629915, 
        "longitude": -88.12271989999999, 
        "population": "52398", 
        "value": "702", 
        "state": "Illinois"
    }, 
    {
        "label": "Florissant", 
        "growth_from_2000_to_2013": "-2.8%", 
        "latitude": 38.789217, 
        "longitude": -90.322614, 
        "population": "52363", 
        "value": "703", 
        "state": "Missouri"
    }, 
    {
        "label": "Placentia", 
        "growth_from_2000_to_2013": "11.8%", 
        "latitude": 33.8722371, 
        "longitude": -117.8703363, 
        "population": "52206", 
        "value": "704", 
        "state": "California"
    }, 
    {
        "label": "West New York", 
        "growth_from_2000_to_2013": "13.3%", 
        "latitude": 40.7878788, 
        "longitude": -74.0143064, 
        "population": "52122", 
        "value": "705", 
        "state": "New Jersey"
    }, 
    {
        "label": "Dublin", 
        "growth_from_2000_to_2013": "70.0%", 
        "latitude": 37.7021521, 
        "longitude": -121.9357918, 
        "population": "52105", 
        "value": "706", 
        "state": "California"
    }, 
    {
        "label": "Oak Park", 
        "growth_from_2000_to_2013": "-0.8%", 
        "latitude": 41.8850317, 
        "longitude": -87.7845025, 
        "population": "52066", 
        "value": "707", 
        "state": "Illinois"
    }, 
    {
        "label": "Peabody", 
        "growth_from_2000_to_2013": "7.5%", 
        "latitude": 42.5278731, 
        "longitude": -70.9286609, 
        "population": "52044", 
        "value": "708", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Perth Amboy", 
        "growth_from_2000_to_2013": "9.7%", 
        "latitude": 40.5067723, 
        "longitude": -74.2654234, 
        "population": "51982", 
        "value": "709", 
        "state": "New Jersey"
    }, 
    {
        "label": "Battle Creek", 
        "growth_from_2000_to_2013": "-2.8%", 
        "latitude": 42.3211522, 
        "longitude": -85.17971419999999, 
        "population": "51848", 
        "value": "710", 
        "state": "Michigan"
    }, 
    {
        "label": "Bradenton", 
        "growth_from_2000_to_2013": "3.4%", 
        "latitude": 27.4989278, 
        "longitude": -82.5748194, 
        "population": "51763", 
        "value": "711", 
        "state": "Florida"
    }, 
    {
        "label": "Gilroy", 
        "growth_from_2000_to_2013": "23.9%", 
        "latitude": 37.0057816, 
        "longitude": -121.5682751, 
        "population": "51701", 
        "value": "712", 
        "state": "California"
    }, 
    {
        "label": "Milford", 
        "growth_from_2000_to_2013": "1.8%", 
        "latitude": 41.2306979, 
        "longitude": -73.064036, 
        "population": "51644", 
        "value": "713", 
        "state": "Connecticut"
    }, 
    {
        "label": "Albany", 
        "growth_from_2000_to_2013": "25.5%", 
        "latitude": 44.6365107, 
        "longitude": -123.1059282, 
        "population": "51583", 
        "value": "714", 
        "state": "Oregon"
    }, 
    {
        "label": "Ankeny", 
        "growth_from_2000_to_2013": "86.9%", 
        "latitude": 41.7317884, 
        "longitude": -93.6001278, 
        "population": "51567", 
        "value": "715", 
        "state": "Iowa"
    }, 
    {
        "label": "La Crosse", 
        "growth_from_2000_to_2013": "-0.8%", 
        "latitude": 43.8013556, 
        "longitude": -91.23958069999999, 
        "population": "51522", 
        "value": "716", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Burlington", 
        "growth_from_2000_to_2013": "12.1%", 
        "latitude": 36.0956918, 
        "longitude": -79.43779909999999, 
        "population": "51510", 
        "value": "717", 
        "state": "North Carolina"
    }, 
    {
        "label": "DeSoto", 
        "growth_from_2000_to_2013": "36.0%", 
        "latitude": 32.5896998, 
        "longitude": -96.8570738, 
        "population": "51483", 
        "value": "718", 
        "state": "Texas"
    }, 
    {
        "label": "Harrisonburg", 
        "growth_from_2000_to_2013": "27.1%", 
        "latitude": 38.4495688, 
        "longitude": -78.8689155, 
        "population": "51395", 
        "value": "719", 
        "state": "Virginia"
    }, 
    {
        "label": "Minnetonka", 
        "growth_from_2000_to_2013": "0.4%", 
        "latitude": 44.9211836, 
        "longitude": -93.4687489, 
        "population": "51368", 
        "value": "720", 
        "state": "Minnesota"
    }, 
    {
        "label": "Elkhart", 
        "growth_from_2000_to_2013": "-2.5%", 
        "latitude": 41.6819935, 
        "longitude": -85.9766671, 
        "population": "51265", 
        "value": "721", 
        "state": "Indiana"
    }, 
    {
        "label": "Lakewood", 
        "growth_from_2000_to_2013": "-9.4%", 
        "latitude": 41.4819932, 
        "longitude": -81.7981908, 
        "population": "51143", 
        "value": "722", 
        "state": "Ohio"
    }, 
    {
        "label": "Glendora", 
        "growth_from_2000_to_2013": "3.1%", 
        "latitude": 34.1361187, 
        "longitude": -117.865339, 
        "population": "51074", 
        "value": "723", 
        "state": "California"
    }, 
    {
        "label": "Southaven", 
        "growth_from_2000_to_2013": "72.8%", 
        "latitude": 34.9889818, 
        "longitude": -90.0125913, 
        "population": "50997", 
        "value": "724", 
        "state": "Mississippi"
    }, 
    {
        "label": "Charleston", 
        "growth_from_2000_to_2013": "-4.7%", 
        "latitude": 38.3498195, 
        "longitude": -81.6326234, 
        "population": "50821", 
        "value": "725", 
        "state": "West Virginia"
    }, 
    {
        "label": "Joplin", 
        "growth_from_2000_to_2013": "11.2%", 
        "latitude": 37.08422710000001, 
        "longitude": -94.51328099999999, 
        "population": "50789", 
        "value": "726", 
        "state": "Missouri"
    }, 
    {
        "label": "Enid", 
        "growth_from_2000_to_2013": "8.1%", 
        "latitude": 36.3955891, 
        "longitude": -97.8783911, 
        "population": "50725", 
        "value": "727", 
        "state": "Oklahoma"
    }, 
    {
        "label": "Palm Beach Gardens", 
        "growth_from_2000_to_2013": "39.6%", 
        "latitude": 26.8233946, 
        "longitude": -80.13865469999999, 
        "population": "50699", 
        "value": "728", 
        "state": "Florida"
    }, 
    {
        "label": "Brookhaven", 
        "growth_from_2000_to_2013": "", 
        "latitude": 33.8651033, 
        "longitude": -84.3365917, 
        "population": "50603", 
        "value": "729", 
        "state": "Georgia"
    }, 
    {
        "label": "Plainfield", 
        "growth_from_2000_to_2013": "5.7%", 
        "latitude": 40.6337136, 
        "longitude": -74.4073736, 
        "population": "50588", 
        "value": "730", 
        "state": "New Jersey"
    }, 
    {
        "label": "Grand Island", 
        "growth_from_2000_to_2013": "16.0%", 
        "latitude": 40.9263957, 
        "longitude": -98.3420118, 
        "population": "50550", 
        "value": "731", 
        "state": "Nebraska"
    }, 
    {
        "label": "Palm Desert", 
        "growth_from_2000_to_2013": "13.2%", 
        "latitude": 33.7222445, 
        "longitude": -116.3744556, 
        "population": "50508", 
        "value": "732", 
        "state": "California"
    }, 
    {
        "label": "Huntersville", 
        "growth_from_2000_to_2013": "92.9%", 
        "latitude": 35.410694, 
        "longitude": -80.84285040000002, 
        "population": "50458", 
        "value": "733", 
        "state": "North Carolina"
    }, 
    {
        "label": "Tigard", 
        "growth_from_2000_to_2013": "17.8%", 
        "latitude": 45.4312294, 
        "longitude": -122.7714861, 
        "population": "50444", 
        "value": "734", 
        "state": "Oregon"
    }, 
    {
        "label": "Lenexa", 
        "growth_from_2000_to_2013": "24.6%", 
        "latitude": 38.9536174, 
        "longitude": -94.73357089999999, 
        "population": "50344", 
        "value": "735", 
        "state": "Kansas"
    }, 
    {
        "label": "Saginaw", 
        "growth_from_2000_to_2013": "-18.2%", 
        "latitude": 43.4194699, 
        "longitude": -83.9508068, 
        "population": "50303", 
        "value": "736", 
        "state": "Michigan"
    }, 
    {
        "label": "Kentwood", 
        "growth_from_2000_to_2013": "10.5%", 
        "latitude": 42.8694731, 
        "longitude": -85.64474919999999, 
        "population": "50233", 
        "value": "737", 
        "state": "Michigan"
    }, 
    {
        "label": "Doral", 
        "growth_from_2000_to_2013": "137.6%", 
        "latitude": 25.8195424, 
        "longitude": -80.3553302, 
        "population": "50213", 
        "value": "738", 
        "state": "Florida"
    }, 
    {
        "label": "Apple Valley", 
        "growth_from_2000_to_2013": "9.2%", 
        "latitude": 44.7319094, 
        "longitude": -93.21772000000001, 
        "population": "50201", 
        "value": "739", 
        "state": "Minnesota"
    }, 
    {
        "label": "Grapevine", 
        "growth_from_2000_to_2013": "17.6%", 
        "latitude": 32.9342919, 
        "longitude": -97.0780654, 
        "population": "50195", 
        "value": "740", 
        "state": "Texas"
    }, 
    {
        "label": "Aliso Viejo", 
        "growth_from_2000_to_2013": "25.4%", 
        "latitude": 33.5676842, 
        "longitude": -117.7256083, 
        "population": "50175", 
        "value": "741", 
        "state": "California"
    }, 
    {
        "label": "Sammamish", 
        "growth_from_2000_to_2013": "44.1%", 
        "latitude": 47.61626829999999, 
        "longitude": -122.0355736, 
        "population": "50169", 
        "value": "742", 
        "state": "Washington"
    }, 
    {
        "label": "Casa Grande", 
        "growth_from_2000_to_2013": "86.0%", 
        "latitude": 32.8795022, 
        "longitude": -111.7573521, 
        "population": "50111", 
        "value": "743", 
        "state": "Arizona"
    }, 
    {
        "label": "Pinellas Park", 
        "growth_from_2000_to_2013": "5.9%", 
        "latitude": 27.8428025, 
        "longitude": -82.6995443, 
        "population": "49998", 
        "value": "744", 
        "state": "Florida"
    }, 
    {
        "label": "Troy", 
        "growth_from_2000_to_2013": "1.5%", 
        "latitude": 42.7284117, 
        "longitude": -73.69178509999999, 
        "population": "49974", 
        "value": "745", 
        "state": "New York"
    }, 
    {
        "label": "West Sacramento", 
        "growth_from_2000_to_2013": "55.6%", 
        "latitude": 38.5804609, 
        "longitude": -121.530234, 
        "population": "49891", 
        "value": "746", 
        "state": "California"
    }, 
    {
        "label": "Burien", 
        "growth_from_2000_to_2013": "56.7%", 
        "latitude": 47.4703767, 
        "longitude": -122.3467918, 
        "population": "49858", 
        "value": "747", 
        "state": "Washington"
    }, 
    {
        "label": "Commerce label", 
        "growth_from_2000_to_2013": "135.4%", 
        "latitude": 39.8083196, 
        "longitude": -104.9338675, 
        "population": "49799", 
        "value": "748", 
        "state": "Colorado"
    }, 
    {
        "label": "Monroe", 
        "growth_from_2000_to_2013": "-6.1%", 
        "latitude": 32.5093109, 
        "longitude": -92.1193012, 
        "population": "49761", 
        "value": "749", 
        "state": "Louisiana"
    }, 
    {
        "label": "Cerritos", 
        "growth_from_2000_to_2013": "-3.6%", 
        "latitude": 33.8583483, 
        "longitude": -118.0647871, 
        "population": "49707", 
        "value": "750", 
        "state": "California"
    }, 
    {
        "label": "Downers Grove", 
        "growth_from_2000_to_2013": "0.0%", 
        "latitude": 41.8089191, 
        "longitude": -88.01117459999999, 
        "population": "49670", 
        "value": "751", 
        "state": "Illinois"
    }, 
    {
        "label": "Coral Gables", 
        "growth_from_2000_to_2013": "16.1%", 
        "latitude": 25.72149, 
        "longitude": -80.2683838, 
        "population": "49631", 
        "value": "752", 
        "state": "Florida"
    }, 
    {
        "label": "Wilson", 
        "growth_from_2000_to_2013": "10.1%", 
        "latitude": 35.7212689, 
        "longitude": -77.9155395, 
        "population": "49628", 
        "value": "753", 
        "state": "North Carolina"
    }, 
    {
        "label": "Niagara Falls", 
        "growth_from_2000_to_2013": "-10.8%", 
        "latitude": 43.0962143, 
        "longitude": -79.0377388, 
        "population": "49468", 
        "value": "754", 
        "state": "New York"
    }, 
    {
        "label": "Poway", 
        "growth_from_2000_to_2013": "2.4%", 
        "latitude": 32.9628232, 
        "longitude": -117.0358646, 
        "population": "49417", 
        "value": "755", 
        "state": "California"
    }, 
    {
        "label": "Edina", 
        "growth_from_2000_to_2013": "4.1%", 
        "latitude": 44.8896866, 
        "longitude": -93.3499489, 
        "population": "49376", 
        "value": "756", 
        "state": "Minnesota"
    }, 
    {
        "label": "Cuyahoga Falls", 
        "growth_from_2000_to_2013": "-0.2%", 
        "latitude": 41.1339449, 
        "longitude": -81.48455849999999, 
        "population": "49267", 
        "value": "757", 
        "state": "Ohio"
    }, 
    {
        "label": "Rancho Santa Margarita", 
        "growth_from_2000_to_2013": "4.6%", 
        "latitude": 33.640855, 
        "longitude": -117.603104, 
        "population": "49228", 
        "value": "758", 
        "state": "California"
    }, 
    {
        "label": "Harrisburg", 
        "growth_from_2000_to_2013": "0.6%", 
        "latitude": 40.2731911, 
        "longitude": -76.8867008, 
        "population": "49188", 
        "value": "759", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Huntington", 
        "growth_from_2000_to_2013": "-5.0%", 
        "latitude": 38.4192496, 
        "longitude": -82.44515400000002, 
        "population": "49177", 
        "value": "760", 
        "state": "West Virginia"
    }, 
    {
        "label": "La Mirada", 
        "growth_from_2000_to_2013": "4.6%", 
        "latitude": 33.9172357, 
        "longitude": -118.0120086, 
        "population": "49133", 
        "value": "761", 
        "state": "California"
    }, 
    {
        "label": "Cypress", 
        "growth_from_2000_to_2013": "5.3%", 
        "latitude": 33.8169599, 
        "longitude": -118.0372852, 
        "population": "49087", 
        "value": "762", 
        "state": "California"
    }, 
    {
        "label": "Caldwell", 
        "growth_from_2000_to_2013": "77.1%", 
        "latitude": 43.66293839999999, 
        "longitude": -116.6873596, 
        "population": "48957", 
        "value": "763", 
        "state": "Idaho"
    }, 
    {
        "label": "Logan", 
        "growth_from_2000_to_2013": "14.5%", 
        "latitude": 41.7369803, 
        "longitude": -111.8338359, 
        "population": "48913", 
        "value": "764", 
        "state": "Utah"
    }, 
    {
        "label": "Galveston", 
        "growth_from_2000_to_2013": "-15.2%", 
        "latitude": 29.3013479, 
        "longitude": -94.7976958, 
        "population": "48733", 
        "value": "765", 
        "state": "Texas"
    }, 
    {
        "label": "Sheboygan", 
        "growth_from_2000_to_2013": "-3.9%", 
        "latitude": 43.7508284, 
        "longitude": -87.71453, 
        "population": "48725", 
        "value": "766", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Middletown", 
        "growth_from_2000_to_2013": "-5.7%", 
        "latitude": 39.5150576, 
        "longitude": -84.39827629999999, 
        "population": "48630", 
        "value": "767", 
        "state": "Ohio"
    }, 
    {
        "label": "Murray", 
        "growth_from_2000_to_2013": "6.6%", 
        "latitude": 40.6668916, 
        "longitude": -111.8879909, 
        "population": "48612", 
        "value": "768", 
        "state": "Utah"
    }, 
    {
        "label": "Roswell", 
        "growth_from_2000_to_2013": "7.5%", 
        "latitude": 33.3942655, 
        "longitude": -104.5230242, 
        "population": "48611", 
        "value": "769", 
        "state": "New Mexico"
    }, 
    {
        "label": "Parker", 
        "growth_from_2000_to_2013": "96.4%", 
        "latitude": 39.5186002, 
        "longitude": -104.7613633, 
        "population": "48608", 
        "value": "770", 
        "state": "Colorado"
    }, 
    {
        "label": "Bedford", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 32.844017, 
        "longitude": -97.1430671, 
        "population": "48592", 
        "value": "771", 
        "state": "Texas"
    }, 
    {
        "label": "East Lansing", 
        "growth_from_2000_to_2013": "4.2%", 
        "latitude": 42.7369792, 
        "longitude": -84.48386540000001, 
        "population": "48554", 
        "value": "772", 
        "state": "Michigan"
    }, 
    {
        "label": "Methuen", 
        "growth_from_2000_to_2013": "10.3%", 
        "latitude": 42.7262016, 
        "longitude": -71.1908924, 
        "population": "48514", 
        "value": "773", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Covina", 
        "growth_from_2000_to_2013": "3.3%", 
        "latitude": 34.0900091, 
        "longitude": -117.8903397, 
        "population": "48508", 
        "value": "774", 
        "state": "California"
    }, 
    {
        "label": "Alexandria", 
        "growth_from_2000_to_2013": "4.1%", 
        "latitude": 31.3112936, 
        "longitude": -92.4451371, 
        "population": "48426", 
        "value": "775", 
        "state": "Louisiana"
    }, 
    {
        "label": "Olympia", 
        "growth_from_2000_to_2013": "12.1%", 
        "latitude": 47.0378741, 
        "longitude": -122.9006951, 
        "population": "48338", 
        "value": "776", 
        "state": "Washington"
    }, 
    {
        "label": "Euclid", 
        "growth_from_2000_to_2013": "-8.4%", 
        "latitude": 41.5931049, 
        "longitude": -81.5267873, 
        "population": "48139", 
        "value": "777", 
        "state": "Ohio"
    }, 
    {
        "label": "Mishawaka", 
        "growth_from_2000_to_2013": "2.0%", 
        "latitude": 41.6619927, 
        "longitude": -86.15861559999999, 
        "population": "47989", 
        "value": "778", 
        "state": "Indiana"
    }, 
    {
        "label": "Salina", 
        "growth_from_2000_to_2013": "4.5%", 
        "latitude": 38.8402805, 
        "longitude": -97.61142369999999, 
        "population": "47846", 
        "value": "779", 
        "state": "Kansas"
    }, 
    {
        "label": "Azusa", 
        "growth_from_2000_to_2013": "6.7%", 
        "latitude": 34.1336186, 
        "longitude": -117.9075627, 
        "population": "47842", 
        "value": "780", 
        "state": "California"
    }, 
    {
        "label": "Newark", 
        "growth_from_2000_to_2013": "3.1%", 
        "latitude": 40.0581205, 
        "longitude": -82.4012642, 
        "population": "47777", 
        "value": "781", 
        "state": "Ohio"
    }, 
    {
        "label": "Chesterfield", 
        "growth_from_2000_to_2013": "1.9%", 
        "latitude": 38.6631083, 
        "longitude": -90.5770675, 
        "population": "47749", 
        "value": "782", 
        "state": "Missouri"
    }, 
    {
        "label": "Leesburg", 
        "growth_from_2000_to_2013": "66.0%", 
        "latitude": 39.1156615, 
        "longitude": -77.56360149999999, 
        "population": "47673", 
        "value": "783", 
        "state": "Virginia"
    }, 
    {
        "label": "Dunwoody", 
        "growth_from_2000_to_2013": "", 
        "latitude": 33.9462125, 
        "longitude": -84.3346473, 
        "population": "47591", 
        "value": "784", 
        "state": "Georgia"
    }, 
    {
        "label": "Hattiesburg", 
        "growth_from_2000_to_2013": "3.1%", 
        "latitude": 31.3271189, 
        "longitude": -89.29033919999999, 
        "population": "47556", 
        "value": "785", 
        "state": "Mississippi"
    }, 
    {
        "label": "Roseville", 
        "growth_from_2000_to_2013": "-1.0%", 
        "latitude": 42.4972583, 
        "longitude": -82.9371409, 
        "population": "47555", 
        "value": "786", 
        "state": "Michigan"
    }, 
    {
        "label": "Bonita Springs", 
        "growth_from_2000_to_2013": "43.8%", 
        "latitude": 26.339806, 
        "longitude": -81.7786972, 
        "population": "47547", 
        "value": "787", 
        "state": "Florida"
    }, 
    {
        "label": "Portage", 
        "growth_from_2000_to_2013": "5.7%", 
        "latitude": 42.2011538, 
        "longitude": -85.5800022, 
        "population": "47523", 
        "value": "788", 
        "state": "Michigan"
    }, 
    {
        "label": "St. Louis Park", 
        "growth_from_2000_to_2013": "7.3%", 
        "latitude": 44.9597376, 
        "longitude": -93.3702186, 
        "population": "47411", 
        "value": "789", 
        "state": "Minnesota"
    }, 
    {
        "label": "Collierville", 
        "growth_from_2000_to_2013": "43.4%", 
        "latitude": 35.042036, 
        "longitude": -89.6645266, 
        "population": "47333", 
        "value": "790", 
        "state": "Tennessee"
    }, 
    {
        "label": "Middletown", 
        "growth_from_2000_to_2013": "3.6%", 
        "latitude": 41.5623209, 
        "longitude": -72.6506488, 
        "population": "47333", 
        "value": "791", 
        "state": "Connecticut"
    }, 
    {
        "label": "Stillwater", 
        "growth_from_2000_to_2013": "20.1%", 
        "latitude": 36.1156071, 
        "longitude": -97.0583681, 
        "population": "47186", 
        "value": "792", 
        "state": "Oklahoma"
    }, 
    {
        "label": "East Providence", 
        "growth_from_2000_to_2013": "-3.3%", 
        "latitude": 41.8137116, 
        "longitude": -71.3700545, 
        "population": "47149", 
        "value": "793", 
        "state": "Rhode Island"
    }, 
    {
        "label": "Lawrence", 
        "growth_from_2000_to_2013": "20.5%", 
        "latitude": 39.8386516, 
        "longitude": -86.0252612, 
        "population": "47135", 
        "value": "794", 
        "state": "Indiana"
    }, 
    {
        "label": "Wauwatosa", 
        "growth_from_2000_to_2013": "0.0%", 
        "latitude": 43.0494572, 
        "longitude": -88.0075875, 
        "population": "47134", 
        "value": "795", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Mentor", 
        "growth_from_2000_to_2013": "-6.6%", 
        "latitude": 41.6661573, 
        "longitude": -81.339552, 
        "population": "46979", 
        "value": "796", 
        "state": "Ohio"
    }, 
    {
        "label": "Ceres", 
        "growth_from_2000_to_2013": "34.0%", 
        "latitude": 37.5949316, 
        "longitude": -120.9577098, 
        "population": "46714", 
        "value": "797", 
        "state": "California"
    }, 
    {
        "label": "Cedar Hill", 
        "growth_from_2000_to_2013": "42.4%", 
        "latitude": 32.5884689, 
        "longitude": -96.9561152, 
        "population": "46663", 
        "value": "798", 
        "state": "Texas"
    }, 
    {
        "label": "Mansfield", 
        "growth_from_2000_to_2013": "-10.1%", 
        "latitude": 40.75839, 
        "longitude": -82.5154471, 
        "population": "46454", 
        "value": "799", 
        "state": "Ohio"
    }, 
    {
        "label": "Binghamton", 
        "growth_from_2000_to_2013": "-1.7%", 
        "latitude": 42.09868669999999, 
        "longitude": -75.91797380000001, 
        "population": "46444", 
        "value": "800", 
        "state": "New York"
    }, 
    {
        "label": "Coeur d'Alene", 
        "growth_from_2000_to_2013": "32.8%", 
        "latitude": 47.6776832, 
        "longitude": -116.7804664, 
        "population": "46402", 
        "value": "801", 
        "state": "Idaho"
    }, 
    {
        "label": "San Luis Obispo", 
        "growth_from_2000_to_2013": "4.4%", 
        "latitude": 35.2827524, 
        "longitude": -120.6596156, 
        "population": "46377", 
        "value": "802", 
        "state": "California"
    }, 
    {
        "label": "Minot", 
        "growth_from_2000_to_2013": "26.6%", 
        "latitude": 48.2329668, 
        "longitude": -101.2922906, 
        "population": "46321", 
        "value": "803", 
        "state": "North Dakota"
    }, 
    {
        "label": "Palm Springs", 
        "growth_from_2000_to_2013": "7.7%", 
        "latitude": 33.8302961, 
        "longitude": -116.5452921, 
        "population": "46281", 
        "value": "804", 
        "state": "California"
    }, 
    {
        "label": "Pine Bluff", 
        "growth_from_2000_to_2013": "-16.2%", 
        "latitude": 34.2284312, 
        "longitude": -92.00319549999999, 
        "population": "46094", 
        "value": "805", 
        "state": "Arkansas"
    }, 
    {
        "label": "Texas label", 
        "growth_from_2000_to_2013": "10.3%", 
        "latitude": 29.383845, 
        "longitude": -94.9027002, 
        "population": "46081", 
        "value": "806", 
        "state": "Texas"
    }, 
    {
        "label": "Summerville", 
        "growth_from_2000_to_2013": "62.9%", 
        "latitude": 33.0185039, 
        "longitude": -80.17564809999999, 
        "population": "46074", 
        "value": "807", 
        "state": "South Carolina"
    }, 
    {
        "label": "Twin Falls", 
        "growth_from_2000_to_2013": "31.5%", 
        "latitude": 42.5629668, 
        "longitude": -114.4608711, 
        "population": "45981", 
        "value": "808", 
        "state": "Idaho"
    }, 
    {
        "label": "Jeffersonville", 
        "growth_from_2000_to_2013": "53.3%", 
        "latitude": 38.2775702, 
        "longitude": -85.7371847, 
        "population": "45929", 
        "value": "809", 
        "state": "Indiana"
    }, 
    {
        "label": "San Jacinto", 
        "growth_from_2000_to_2013": "91.8%", 
        "latitude": 33.7839084, 
        "longitude": -116.958635, 
        "population": "45851", 
        "value": "810", 
        "state": "California"
    }, 
    {
        "label": "Madison", 
        "growth_from_2000_to_2013": "53.7%", 
        "latitude": 34.6992579, 
        "longitude": -86.74833180000002, 
        "population": "45799", 
        "value": "811", 
        "state": "Alabama"
    }, 
    {
        "label": "Altoona", 
        "growth_from_2000_to_2013": "-7.3%", 
        "latitude": 40.5186809, 
        "longitude": -78.3947359, 
        "population": "45796", 
        "value": "812", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Columbus", 
        "growth_from_2000_to_2013": "16.4%", 
        "latitude": 39.2014404, 
        "longitude": -85.9213796, 
        "population": "45775", 
        "value": "813", 
        "state": "Indiana"
    }, 
    {
        "label": "Beavercreek", 
        "growth_from_2000_to_2013": "19.0%", 
        "latitude": 39.7092262, 
        "longitude": -84.06326849999999, 
        "population": "45712", 
        "value": "814", 
        "state": "Ohio"
    }, 
    {
        "label": "Apopka", 
        "growth_from_2000_to_2013": "63.9%", 
        "latitude": 28.6934076, 
        "longitude": -81.5322149, 
        "population": "45587", 
        "value": "815", 
        "state": "Florida"
    }, 
    {
        "label": "Elmhurst", 
        "growth_from_2000_to_2013": "5.7%", 
        "latitude": 41.8994744, 
        "longitude": -87.9403418, 
        "population": "45556", 
        "value": "816", 
        "state": "Illinois"
    }, 
    {
        "label": "Maricopa", 
        "growth_from_2000_to_2013": "2503.4%", 
        "latitude": 33.0581063, 
        "longitude": -112.0476423, 
        "population": "45508", 
        "value": "817", 
        "state": "Arizona"
    }, 
    {
        "label": "Farmington", 
        "growth_from_2000_to_2013": "18.1%", 
        "latitude": 36.72805830000001, 
        "longitude": -108.2186856, 
        "population": "45426", 
        "value": "818", 
        "state": "New Mexico"
    }, 
    {
        "label": "Glenview", 
        "growth_from_2000_to_2013": "5.2%", 
        "latitude": 42.0697509, 
        "longitude": -87.7878408, 
        "population": "45417", 
        "value": "819", 
        "state": "Illinois"
    }, 
    {
        "label": "Cleveland Heights", 
        "growth_from_2000_to_2013": "-10.3%", 
        "latitude": 41.5200518, 
        "longitude": -81.556235, 
        "population": "45394", 
        "value": "820", 
        "state": "Ohio"
    }, 
    {
        "label": "Draper", 
        "growth_from_2000_to_2013": "77.4%", 
        "latitude": 40.5246711, 
        "longitude": -111.8638226, 
        "population": "45285", 
        "value": "821", 
        "state": "Utah"
    }, 
    {
        "label": "Lincoln", 
        "growth_from_2000_to_2013": "285.2%", 
        "latitude": 38.891565, 
        "longitude": -121.2930079, 
        "population": "45237", 
        "value": "822", 
        "state": "California"
    }, 
    {
        "label": "Sierra Vista", 
        "growth_from_2000_to_2013": "19.3%", 
        "latitude": 31.5455001, 
        "longitude": -110.2772856, 
        "population": "45129", 
        "value": "823", 
        "state": "Arizona"
    }, 
    {
        "label": "Lacey", 
        "growth_from_2000_to_2013": "41.7%", 
        "latitude": 47.03426289999999, 
        "longitude": -122.8231915, 
        "population": "44919", 
        "value": "824", 
        "state": "Washington"
    }, 
    {
        "label": "Biloxi", 
        "growth_from_2000_to_2013": "-11.5%", 
        "latitude": 30.3960318, 
        "longitude": -88.88530779999999, 
        "population": "44820", 
        "value": "825", 
        "state": "Mississippi"
    }, 
    {
        "label": "Strongsville", 
        "growth_from_2000_to_2013": "1.9%", 
        "latitude": 41.3144966, 
        "longitude": -81.83569, 
        "population": "44730", 
        "value": "826", 
        "state": "Ohio"
    }, 
    {
        "label": "Barnstable Town", 
        "growth_from_2000_to_2013": "-7.1%", 
        "latitude": 41.7003208, 
        "longitude": -70.3002024, 
        "population": "44641", 
        "value": "827", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Wylie", 
        "growth_from_2000_to_2013": "185.2%", 
        "latitude": 33.0151201, 
        "longitude": -96.5388789, 
        "population": "44575", 
        "value": "828", 
        "state": "Texas"
    }, 
    {
        "label": "Sayreville", 
        "growth_from_2000_to_2013": "9.6%", 
        "latitude": 40.45940210000001, 
        "longitude": -74.360846, 
        "population": "44412", 
        "value": "829", 
        "state": "New Jersey"
    }, 
    {
        "label": "Kannapolis", 
        "growth_from_2000_to_2013": "18.6%", 
        "latitude": 35.4873613, 
        "longitude": -80.6217341, 
        "population": "44359", 
        "value": "830", 
        "state": "North Carolina"
    }, 
    {
        "label": "Charlottesville", 
        "growth_from_2000_to_2013": "10.5%", 
        "latitude": 38.0293059, 
        "longitude": -78.47667810000002, 
        "population": "44349", 
        "value": "831", 
        "state": "Virginia"
    }, 
    {
        "label": "Littleton", 
        "growth_from_2000_to_2013": "9.4%", 
        "latitude": 39.613321, 
        "longitude": -105.0166498, 
        "population": "44275", 
        "value": "832", 
        "state": "Colorado"
    }, 
    {
        "label": "Titusville", 
        "growth_from_2000_to_2013": "7.8%", 
        "latitude": 28.6122187, 
        "longitude": -80.8075537, 
        "population": "44206", 
        "value": "833", 
        "state": "Florida"
    }, 
    {
        "label": "Hackensack", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 40.8859325, 
        "longitude": -74.0434736, 
        "population": "44113", 
        "value": "834", 
        "state": "New Jersey"
    }, 
    {
        "label": "Newark", 
        "growth_from_2000_to_2013": "3.3%", 
        "latitude": 37.5296593, 
        "longitude": -122.0402399, 
        "population": "44096", 
        "value": "835", 
        "state": "California"
    }, 
    {
        "label": "Pittsfield", 
        "growth_from_2000_to_2013": "-3.6%", 
        "latitude": 42.4500845, 
        "longitude": -73.2453824, 
        "population": "44057", 
        "value": "836", 
        "state": "Massachusetts"
    }, 
    {
        "label": "York", 
        "growth_from_2000_to_2013": "6.4%", 
        "latitude": 39.9625984, 
        "longitude": -76.727745, 
        "population": "43935", 
        "value": "837", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Lombard", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 41.8800296, 
        "longitude": -88.00784349999999, 
        "population": "43907", 
        "value": "838", 
        "state": "Illinois"
    }, 
    {
        "label": "Attleboro", 
        "growth_from_2000_to_2013": "4.6%", 
        "latitude": 41.94454409999999, 
        "longitude": -71.2856082, 
        "population": "43886", 
        "value": "839", 
        "state": "Massachusetts"
    }, 
    {
        "label": "DeKalb", 
        "growth_from_2000_to_2013": "11.8%", 
        "latitude": 41.9294736, 
        "longitude": -88.75036469999999, 
        "population": "43849", 
        "value": "840", 
        "state": "Illinois"
    }, 
    {
        "label": "Blacksburg", 
        "growth_from_2000_to_2013": "9.4%", 
        "latitude": 37.2295733, 
        "longitude": -80.4139393, 
        "population": "43609", 
        "value": "841", 
        "state": "Virginia"
    }, 
    {
        "label": "Dublin", 
        "growth_from_2000_to_2013": "37.6%", 
        "latitude": 40.0992294, 
        "longitude": -83.1140771, 
        "population": "43607", 
        "value": "842", 
        "state": "Ohio"
    }, 
    {
        "label": "Haltom label", 
        "growth_from_2000_to_2013": "11.4%", 
        "latitude": 32.7995738, 
        "longitude": -97.26918169999999, 
        "population": "43580", 
        "value": "843", 
        "state": "Texas"
    }, 
    {
        "label": "Lompoc", 
        "growth_from_2000_to_2013": "5.5%", 
        "latitude": 34.6391501, 
        "longitude": -120.4579409, 
        "population": "43509", 
        "value": "844", 
        "state": "California"
    }, 
    {
        "label": "El Centro", 
        "growth_from_2000_to_2013": "13.7%", 
        "latitude": 32.792, 
        "longitude": -115.5630514, 
        "population": "43363", 
        "value": "845", 
        "state": "California"
    }, 
    {
        "label": "Danville", 
        "growth_from_2000_to_2013": "3.7%", 
        "latitude": 37.8215929, 
        "longitude": -121.9999606, 
        "population": "43341", 
        "value": "846", 
        "state": "California"
    }, 
    {
        "label": "Jefferson label", 
        "growth_from_2000_to_2013": "6.7%", 
        "latitude": 38.57670170000001, 
        "longitude": -92.1735164, 
        "population": "43330", 
        "value": "847", 
        "state": "Missouri"
    }, 
    {
        "label": "Cutler Bay", 
        "growth_from_2000_to_2013": "42.9%", 
        "latitude": 25.5808323, 
        "longitude": -80.34685929999999, 
        "population": "43328", 
        "value": "848", 
        "state": "Florida"
    }, 
    {
        "label": "Oakland Park", 
        "growth_from_2000_to_2013": "2.7%", 
        "latitude": 26.1723065, 
        "longitude": -80.1319893, 
        "population": "43286", 
        "value": "849", 
        "state": "Florida"
    }, 
    {
        "label": "North Miami Beach", 
        "growth_from_2000_to_2013": "3.6%", 
        "latitude": 25.9331488, 
        "longitude": -80.1625463, 
        "population": "43250", 
        "value": "850", 
        "state": "Florida"
    }, 
    {
        "label": "Freeport", 
        "growth_from_2000_to_2013": "-1.4%", 
        "latitude": 40.6576022, 
        "longitude": -73.58318349999999, 
        "population": "43167", 
        "value": "851", 
        "state": "New York"
    }, 
    {
        "label": "Moline", 
        "growth_from_2000_to_2013": "-1.9%", 
        "latitude": 41.5067003, 
        "longitude": -90.51513419999999, 
        "population": "43116", 
        "value": "852", 
        "state": "Illinois"
    }, 
    {
        "label": "Coachella", 
        "growth_from_2000_to_2013": "88.4%", 
        "latitude": 33.6803003, 
        "longitude": -116.173894, 
        "population": "43092", 
        "value": "853", 
        "state": "California"
    }, 
    {
        "label": "Fort Pierce", 
        "growth_from_2000_to_2013": "6.9%", 
        "latitude": 27.4467056, 
        "longitude": -80.3256056, 
        "population": "43074", 
        "value": "854", 
        "state": "Florida"
    }, 
    {
        "label": "Smyrna", 
        "growth_from_2000_to_2013": "54.9%", 
        "latitude": 35.9828412, 
        "longitude": -86.5186045, 
        "population": "43060", 
        "value": "855", 
        "state": "Tennessee"
    }, 
    {
        "label": "Bountiful", 
        "growth_from_2000_to_2013": "3.9%", 
        "latitude": 40.8893895, 
        "longitude": -111.880771, 
        "population": "43023", 
        "value": "856", 
        "state": "Utah"
    }, 
    {
        "label": "Fond du Lac", 
        "growth_from_2000_to_2013": "1.7%", 
        "latitude": 43.7730448, 
        "longitude": -88.4470508, 
        "population": "42970", 
        "value": "857", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Everett", 
        "growth_from_2000_to_2013": "12.1%", 
        "latitude": 42.40843, 
        "longitude": -71.0536625, 
        "population": "42935", 
        "value": "858", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Danville", 
        "growth_from_2000_to_2013": "-11.0%", 
        "latitude": 36.5859718, 
        "longitude": -79.39502279999999, 
        "population": "42907", 
        "value": "859", 
        "state": "Virginia"
    }, 
    {
        "label": "Keller", 
        "growth_from_2000_to_2013": "53.3%", 
        "latitude": 32.9341893, 
        "longitude": -97.229298, 
        "population": "42907", 
        "value": "860", 
        "state": "Texas"
    }, 
    {
        "label": "Belleville", 
        "growth_from_2000_to_2013": "1.2%", 
        "latitude": 38.5200504, 
        "longitude": -89.9839935, 
        "population": "42895", 
        "value": "861", 
        "state": "Illinois"
    }, 
    {
        "label": "Bell Gardens", 
        "growth_from_2000_to_2013": "-2.7%", 
        "latitude": 33.9652918, 
        "longitude": -118.1514588, 
        "population": "42889", 
        "value": "862", 
        "state": "California"
    }, 
    {
        "label": "Cleveland", 
        "growth_from_2000_to_2013": "14.1%", 
        "latitude": 35.1595182, 
        "longitude": -84.8766115, 
        "population": "42774", 
        "value": "863", 
        "state": "Tennessee"
    }, 
    {
        "label": "North Lauderdale", 
        "growth_from_2000_to_2013": "10.8%", 
        "latitude": 26.217305, 
        "longitude": -80.2258811, 
        "population": "42757", 
        "value": "864", 
        "state": "Florida"
    }, 
    {
        "label": "Fairfield", 
        "growth_from_2000_to_2013": "1.2%", 
        "latitude": 39.3454673, 
        "longitude": -84.5603187, 
        "population": "42635", 
        "value": "865", 
        "state": "Ohio"
    }, 
    {
        "label": "Salem", 
        "growth_from_2000_to_2013": "5.1%", 
        "latitude": 42.51954, 
        "longitude": -70.8967155, 
        "population": "42544", 
        "value": "866", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Rancho Palos Verdes", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 33.7444613, 
        "longitude": -118.3870173, 
        "population": "42448", 
        "value": "867", 
        "state": "California"
    }, 
    {
        "label": "San Bruno", 
        "growth_from_2000_to_2013": "5.6%", 
        "latitude": 37.6304904, 
        "longitude": -122.4110835, 
        "population": "42443", 
        "value": "868", 
        "state": "California"
    }, 
    {
        "label": "Concord", 
        "growth_from_2000_to_2013": "4.1%", 
        "latitude": 43.2081366, 
        "longitude": -71.5375718, 
        "population": "42419", 
        "value": "869", 
        "state": "New Hampshire"
    }, 
    {
        "label": "Burlington", 
        "growth_from_2000_to_2013": "6.1%", 
        "latitude": 44.4758825, 
        "longitude": -73.21207199999999, 
        "population": "42284", 
        "value": "870", 
        "state": "Vermont"
    }, 
    {
        "label": "Apex", 
        "growth_from_2000_to_2013": "98.8%", 
        "latitude": 35.732652, 
        "longitude": -78.85028559999999, 
        "population": "42214", 
        "value": "871", 
        "state": "North Carolina"
    }, 
    {
        "label": "Midland", 
        "growth_from_2000_to_2013": "0.9%", 
        "latitude": 43.6155825, 
        "longitude": -84.2472116, 
        "population": "42181", 
        "value": "872", 
        "state": "Michigan"
    }, 
    {
        "label": "Altamonte Springs", 
        "growth_from_2000_to_2013": "2.0%", 
        "latitude": 28.6611089, 
        "longitude": -81.3656242, 
        "population": "42150", 
        "value": "873", 
        "state": "Florida"
    }, 
    {
        "label": "Hutchinson", 
        "growth_from_2000_to_2013": "0.1%", 
        "latitude": 38.0608445, 
        "longitude": -97.92977429999999, 
        "population": "41889", 
        "value": "874", 
        "state": "Kansas"
    }, 
    {
        "label": "Buffalo Grove", 
        "growth_from_2000_to_2013": "-3.4%", 
        "latitude": 42.1662831, 
        "longitude": -87.9631308, 
        "population": "41778", 
        "value": "875", 
        "state": "Illinois"
    }, 
    {
        "label": "Urbandale", 
        "growth_from_2000_to_2013": "41.5%", 
        "latitude": 41.6266555, 
        "longitude": -93.71216559999999, 
        "population": "41776", 
        "value": "876", 
        "state": "Iowa"
    }, 
    {
        "label": "State College", 
        "growth_from_2000_to_2013": "8.7%", 
        "latitude": 40.7933949, 
        "longitude": -77.8600012, 
        "population": "41757", 
        "value": "877", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Urbana", 
        "growth_from_2000_to_2013": "10.3%", 
        "latitude": 40.1105875, 
        "longitude": -88.2072697, 
        "population": "41752", 
        "value": "878", 
        "state": "Illinois"
    }, 
    {
        "label": "Plainfield", 
        "growth_from_2000_to_2013": "203.6%", 
        "latitude": 41.632223, 
        "longitude": -88.2120315, 
        "population": "41734", 
        "value": "879", 
        "state": "Illinois"
    }, 
    {
        "label": "Manassas", 
        "growth_from_2000_to_2013": "19.5%", 
        "latitude": 38.7509488, 
        "longitude": -77.47526669999999, 
        "population": "41705", 
        "value": "880", 
        "state": "Virginia"
    }, 
    {
        "label": "Bartlett", 
        "growth_from_2000_to_2013": "13.1%", 
        "latitude": 41.9950276, 
        "longitude": -88.1856301, 
        "population": "41679", 
        "value": "881", 
        "state": "Illinois"
    }, 
    {
        "label": "Kearny", 
        "growth_from_2000_to_2013": "2.8%", 
        "latitude": 40.7684342, 
        "longitude": -74.1454214, 
        "population": "41664", 
        "value": "882", 
        "state": "New Jersey"
    }, 
    {
        "label": "Oro Valley", 
        "growth_from_2000_to_2013": "27.0%", 
        "latitude": 32.3909071, 
        "longitude": -110.966488, 
        "population": "41627", 
        "value": "883", 
        "state": "Arizona"
    }, 
    {
        "label": "Findlay", 
        "growth_from_2000_to_2013": "5.8%", 
        "latitude": 41.04422, 
        "longitude": -83.6499321, 
        "population": "41512", 
        "value": "884", 
        "state": "Ohio"
    }, 
    {
        "label": "Rohnert Park", 
        "growth_from_2000_to_2013": "0.0%", 
        "latitude": 38.3396367, 
        "longitude": -122.7010984, 
        "population": "41398", 
        "value": "885", 
        "state": "California"
    }, 
    {
        "label": "Westfield", 
        "growth_from_2000_to_2013": "3.0%", 
        "latitude": 42.1250929, 
        "longitude": -72.749538, 
        "population": "41301", 
        "value": "887", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Linden", 
        "growth_from_2000_to_2013": "4.7%", 
        "latitude": 40.6220478, 
        "longitude": -74.24459019999999, 
        "population": "41301", 
        "value": "886", 
        "state": "New Jersey"
    }, 
    {
        "label": "Sumter", 
        "growth_from_2000_to_2013": "1.3%", 
        "latitude": 33.9204354, 
        "longitude": -80.3414693, 
        "population": "41190", 
        "value": "888", 
        "state": "South Carolina"
    }, 
    {
        "label": "Wilkes-Barre", 
        "growth_from_2000_to_2013": "-4.3%", 
        "latitude": 41.2459149, 
        "longitude": -75.88130749999999, 
        "population": "41108", 
        "value": "889", 
        "state": "Pennsylvania"
    }, 
    {
        "label": "Woonsocket", 
        "growth_from_2000_to_2013": "-5.2%", 
        "latitude": 42.00287609999999, 
        "longitude": -71.51478390000001, 
        "population": "41026", 
        "value": "890", 
        "state": "Rhode Island"
    }, 
    {
        "label": "Leominster", 
        "growth_from_2000_to_2013": "-1.1%", 
        "latitude": 42.5250906, 
        "longitude": -71.759794, 
        "population": "41002", 
        "value": "891", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Shelton", 
        "growth_from_2000_to_2013": "7.3%", 
        "latitude": 41.3164856, 
        "longitude": -73.0931641, 
        "population": "40999", 
        "value": "892", 
        "state": "Connecticut"
    }, 
    {
        "label": "Brea", 
        "growth_from_2000_to_2013": "15.2%", 
        "latitude": 33.9166805, 
        "longitude": -117.9000604, 
        "population": "40963", 
        "value": "893", 
        "state": "California"
    }, 
    {
        "label": "Covington", 
        "growth_from_2000_to_2013": "-4.7%", 
        "latitude": 39.0836712, 
        "longitude": -84.5085536, 
        "population": "40956", 
        "value": "894", 
        "state": "Kentucky"
    }, 
    {
        "label": "Rockwall", 
        "growth_from_2000_to_2013": "117.2%", 
        "latitude": 32.93123360000001, 
        "longitude": -96.4597089, 
        "population": "40922", 
        "value": "895", 
        "state": "Texas"
    }, 
    {
        "label": "Meridian", 
        "growth_from_2000_to_2013": "-0.9%", 
        "latitude": 32.3643098, 
        "longitude": -88.703656, 
        "population": "40921", 
        "value": "896", 
        "state": "Mississippi"
    }, 
    {
        "label": "Riverton", 
        "growth_from_2000_to_2013": "61.6%", 
        "latitude": 40.521893, 
        "longitude": -111.9391023, 
        "population": "40921", 
        "value": "897", 
        "state": "Utah"
    }, 
    {
        "label": "St. Cloud", 
        "growth_from_2000_to_2013": "86.2%", 
        "latitude": 28.2489016, 
        "longitude": -81.2811801, 
        "population": "40918", 
        "value": "898", 
        "state": "Florida"
    }, 
    {
        "label": "Quincy", 
        "growth_from_2000_to_2013": "0.5%", 
        "latitude": 39.9356016, 
        "longitude": -91.4098726, 
        "population": "40915", 
        "value": "899", 
        "state": "Illinois"
    }, 
    {
        "label": "Morgan Hill", 
        "growth_from_2000_to_2013": "19.5%", 
        "latitude": 37.1305012, 
        "longitude": -121.6543901, 
        "population": "40836", 
        "value": "900", 
        "state": "California"
    }, 
    {
        "label": "Warren", 
        "growth_from_2000_to_2013": "-15.2%", 
        "latitude": 41.2375569, 
        "longitude": -80.81841659999999, 
        "population": "40768", 
        "value": "901", 
        "state": "Ohio"
    }, 
    {
        "label": "Edmonds", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 47.8106521, 
        "longitude": -122.3773552, 
        "population": "40727", 
        "value": "902", 
        "state": "Washington"
    }, 
    {
        "label": "Burleson", 
        "growth_from_2000_to_2013": "85.3%", 
        "latitude": 32.5420821, 
        "longitude": -97.3208492, 
        "population": "40714", 
        "value": "903", 
        "state": "Texas"
    }, 
    {
        "label": "Beverly", 
        "growth_from_2000_to_2013": "2.0%", 
        "latitude": 42.5584283, 
        "longitude": -70.880049, 
        "population": "40664", 
        "value": "904", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Mankato", 
        "growth_from_2000_to_2013": "24.7%", 
        "latitude": 44.1635775, 
        "longitude": -93.99939959999999, 
        "population": "40641", 
        "value": "905", 
        "state": "Minnesota"
    }, 
    {
        "label": "Hagerstown", 
        "growth_from_2000_to_2013": "10.4%", 
        "latitude": 39.6417629, 
        "longitude": -77.71999319999999, 
        "population": "40612", 
        "value": "906", 
        "state": "Maryland"
    }, 
    {
        "label": "Prescott", 
        "growth_from_2000_to_2013": "18.1%", 
        "latitude": 34.5400242, 
        "longitude": -112.4685025, 
        "population": "40590", 
        "value": "907", 
        "state": "Arizona"
    }, 
    {
        "label": "Campbell", 
        "growth_from_2000_to_2013": "4.2%", 
        "latitude": 37.2871651, 
        "longitude": -121.9499568, 
        "population": "40584", 
        "value": "908", 
        "state": "California"
    }, 
    {
        "label": "Cedar Falls", 
        "growth_from_2000_to_2013": "12.0%", 
        "latitude": 42.5348993, 
        "longitude": -92.4453161, 
        "population": "40566", 
        "value": "909", 
        "state": "Iowa"
    }, 
    {
        "label": "Beaumont", 
        "growth_from_2000_to_2013": "254.5%", 
        "latitude": 33.9294606, 
        "longitude": -116.977248, 
        "population": "40481", 
        "value": "910", 
        "state": "California"
    }, 
    {
        "label": "La Puente", 
        "growth_from_2000_to_2013": "-1.6%", 
        "latitude": 34.0200114, 
        "longitude": -117.9495083, 
        "population": "40435", 
        "value": "911", 
        "state": "California"
    }, 
    {
        "label": "Crystal Lake", 
        "growth_from_2000_to_2013": "5.3%", 
        "latitude": 42.2411344, 
        "longitude": -88.31619649999999, 
        "population": "40388", 
        "value": "912", 
        "state": "Illinois"
    }, 
    {
        "label": "Fitchburg", 
        "growth_from_2000_to_2013": "3.5%", 
        "latitude": 42.5834228, 
        "longitude": -71.8022955, 
        "population": "40383", 
        "value": "913", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Carol Stream", 
        "growth_from_2000_to_2013": "-0.2%", 
        "latitude": 41.91252859999999, 
        "longitude": -88.13479269999999, 
        "population": "40379", 
        "value": "914", 
        "state": "Illinois"
    }, 
    {
        "label": "Hickory", 
        "growth_from_2000_to_2013": "7.0%", 
        "latitude": 35.7344538, 
        "longitude": -81.3444573, 
        "population": "40361", 
        "value": "915", 
        "state": "North Carolina"
    }, 
    {
        "label": "Streamwood", 
        "growth_from_2000_to_2013": "10.1%", 
        "latitude": 42.0255827, 
        "longitude": -88.17840849999999, 
        "population": "40351", 
        "value": "916", 
        "state": "Illinois"
    }, 
    {
        "label": "Norwich", 
        "growth_from_2000_to_2013": "11.6%", 
        "latitude": 41.5242649, 
        "longitude": -72.07591049999999, 
        "population": "40347", 
        "value": "917", 
        "state": "Connecticut"
    }, 
    {
        "label": "Coppell", 
        "growth_from_2000_to_2013": "10.3%", 
        "latitude": 32.9545687, 
        "longitude": -97.01500779999999, 
        "population": "40342", 
        "value": "918", 
        "state": "Texas"
    }, 
    {
        "label": "San Gabriel", 
        "growth_from_2000_to_2013": "0.9%", 
        "latitude": 34.09611110000001, 
        "longitude": -118.1058333, 
        "population": "40275", 
        "value": "919", 
        "state": "California"
    }, 
    {
        "label": "Holyoke", 
        "growth_from_2000_to_2013": "0.9%", 
        "latitude": 42.2042586, 
        "longitude": -72.6162009, 
        "population": "40249", 
        "value": "920", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Bentonville", 
        "growth_from_2000_to_2013": "97.7%", 
        "latitude": 36.3728538, 
        "longitude": -94.2088172, 
        "population": "40167", 
        "value": "921", 
        "state": "Arkansas"
    }, 
    {
        "label": "Florence", 
        "growth_from_2000_to_2013": "10.2%", 
        "latitude": 34.79981, 
        "longitude": -87.677251, 
        "population": "40059", 
        "value": "922", 
        "state": "Alabama"
    }, 
    {
        "label": "Peachtree Corners", 
        "growth_from_2000_to_2013": "", 
        "latitude": 33.9698929, 
        "longitude": -84.2214551, 
        "population": "40059", 
        "value": "923", 
        "state": "Georgia"
    }, 
    {
        "label": "Brentwood", 
        "growth_from_2000_to_2013": "51.9%", 
        "latitude": 36.0331164, 
        "longitude": -86.78277720000001, 
        "population": "40021", 
        "value": "924", 
        "state": "Tennessee"
    }, 
    {
        "label": "Bozeman", 
        "growth_from_2000_to_2013": "41.9%", 
        "latitude": 45.6769979, 
        "longitude": -111.0429339, 
        "population": "39860", 
        "value": "925", 
        "state": "Montana"
    }, 
    {
        "label": "New Berlin", 
        "growth_from_2000_to_2013": "3.6%", 
        "latitude": 42.9764027, 
        "longitude": -88.1084224, 
        "population": "39834", 
        "value": "926", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Goose Creek", 
        "growth_from_2000_to_2013": "26.1%", 
        "latitude": 32.9810059, 
        "longitude": -80.03258670000001, 
        "population": "39823", 
        "value": "927", 
        "state": "South Carolina"
    }, 
    {
        "label": "Huntsville", 
        "growth_from_2000_to_2013": "13.2%", 
        "latitude": 30.7235263, 
        "longitude": -95.55077709999999, 
        "population": "39795", 
        "value": "928", 
        "state": "Texas"
    }, 
    {
        "label": "Prescott Valley", 
        "growth_from_2000_to_2013": "62.9%", 
        "latitude": 34.6100243, 
        "longitude": -112.315721, 
        "population": "39791", 
        "value": "929", 
        "state": "Arizona"
    }, 
    {
        "label": "Maplewood", 
        "growth_from_2000_to_2013": "12.3%", 
        "latitude": 44.9530215, 
        "longitude": -92.9952153, 
        "population": "39765", 
        "value": "930", 
        "state": "Minnesota"
    }, 
    {
        "label": "Romeoville", 
        "growth_from_2000_to_2013": "79.5%", 
        "latitude": 41.6475306, 
        "longitude": -88.0895061, 
        "population": "39650", 
        "value": "931", 
        "state": "Illinois"
    }, 
    {
        "label": "Duncanville", 
        "growth_from_2000_to_2013": "9.7%", 
        "latitude": 32.6518004, 
        "longitude": -96.9083366, 
        "population": "39605", 
        "value": "932", 
        "state": "Texas"
    }, 
    {
        "label": "Atlantic label", 
        "growth_from_2000_to_2013": "-2.2%", 
        "latitude": 39.3642834, 
        "longitude": -74.4229266, 
        "population": "39551", 
        "value": "933", 
        "state": "New Jersey"
    }, 
    {
        "label": "Clovis", 
        "growth_from_2000_to_2013": "21.3%", 
        "latitude": 34.4047987, 
        "longitude": -103.2052272, 
        "population": "39508", 
        "value": "934", 
        "state": "New Mexico"
    }, 
    {
        "label": "The Colony", 
        "growth_from_2000_to_2013": "45.7%", 
        "latitude": 33.0806083, 
        "longitude": -96.89283089999999, 
        "population": "39458", 
        "value": "935", 
        "state": "Texas"
    }, 
    {
        "label": "Culver label", 
        "growth_from_2000_to_2013": "1.3%", 
        "latitude": 34.0211224, 
        "longitude": -118.3964665, 
        "population": "39428", 
        "value": "936", 
        "state": "California"
    }, 
    {
        "label": "Marlborough", 
        "growth_from_2000_to_2013": "7.6%", 
        "latitude": 42.3459271, 
        "longitude": -71.5522874, 
        "population": "39414", 
        "value": "937", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Hilton Head Island", 
        "growth_from_2000_to_2013": "16.0%", 
        "latitude": 32.216316, 
        "longitude": -80.752608, 
        "population": "39412", 
        "value": "938", 
        "state": "South Carolina"
    }, 
    {
        "label": "Moorhead", 
        "growth_from_2000_to_2013": "21.3%", 
        "latitude": 46.8737648, 
        "longitude": -96.76780389999999, 
        "population": "39398", 
        "value": "939", 
        "state": "Minnesota"
    }, 
    {
        "label": "Calexico", 
        "growth_from_2000_to_2013": "44.0%", 
        "latitude": 32.6789476, 
        "longitude": -115.4988834, 
        "population": "39389", 
        "value": "940", 
        "state": "California"
    }, 
    {
        "label": "Bullhead label", 
        "growth_from_2000_to_2013": "15.9%", 
        "latitude": 35.1359386, 
        "longitude": -114.5285981, 
        "population": "39383", 
        "value": "941", 
        "state": "Arizona"
    }, 
    {
        "label": "Germantown", 
        "growth_from_2000_to_2013": "4.1%", 
        "latitude": 35.0867577, 
        "longitude": -89.8100858, 
        "population": "39375", 
        "value": "942", 
        "state": "Tennessee"
    }, 
    {
        "label": "La Quinta", 
        "growth_from_2000_to_2013": "59.9%", 
        "latitude": 33.6633573, 
        "longitude": -116.3100095, 
        "population": "39331", 
        "value": "943", 
        "state": "California"
    }, 
    {
        "label": "Lancaster", 
        "growth_from_2000_to_2013": "10.7%", 
        "latitude": 39.7136754, 
        "longitude": -82.5993294, 
        "population": "39325", 
        "value": "944", 
        "state": "Ohio"
    }, 
    {
        "label": "Wausau", 
        "growth_from_2000_to_2013": "1.7%", 
        "latitude": 44.9591352, 
        "longitude": -89.6301221, 
        "population": "39309", 
        "value": "945", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Sherman", 
        "growth_from_2000_to_2013": "11.6%", 
        "latitude": 33.6356618, 
        "longitude": -96.6088805, 
        "population": "39296", 
        "value": "946", 
        "state": "Texas"
    }, 
    {
        "label": "Ocoee", 
        "growth_from_2000_to_2013": "57.9%", 
        "latitude": 28.5691677, 
        "longitude": -81.5439619, 
        "population": "39172", 
        "value": "947", 
        "state": "Florida"
    }, 
    {
        "label": "Shakopee", 
        "growth_from_2000_to_2013": "85.7%", 
        "latitude": 44.7973962, 
        "longitude": -93.5272861, 
        "population": "39167", 
        "value": "948", 
        "state": "Minnesota"
    }, 
    {
        "label": "Woburn", 
        "growth_from_2000_to_2013": "4.4%", 
        "latitude": 42.4792618, 
        "longitude": -71.1522765, 
        "population": "39083", 
        "value": "949", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Bremerton", 
        "growth_from_2000_to_2013": "4.9%", 
        "latitude": 47.5673202, 
        "longitude": -122.6329356, 
        "population": "39056", 
        "value": "950", 
        "state": "Washington"
    }, 
    {
        "label": "Rock Island", 
        "growth_from_2000_to_2013": "-1.9%", 
        "latitude": 41.5094771, 
        "longitude": -90.5787476, 
        "population": "38877", 
        "value": "951", 
        "state": "Illinois"
    }, 
    {
        "label": "Muskogee", 
        "growth_from_2000_to_2013": "-0.7%", 
        "latitude": 35.7478769, 
        "longitude": -95.3696909, 
        "population": "38863", 
        "value": "952", 
        "state": "Oklahoma"
    }, 
    {
        "label": "Cape Girardeau", 
        "growth_from_2000_to_2013": "9.4%", 
        "latitude": 37.3058839, 
        "longitude": -89.51814759999999, 
        "population": "38816", 
        "value": "953", 
        "state": "Missouri"
    }, 
    {
        "label": "Annapolis", 
        "growth_from_2000_to_2013": "7.6%", 
        "latitude": 38.9784453, 
        "longitude": -76.4921829, 
        "population": "38722", 
        "value": "954", 
        "state": "Maryland"
    }, 
    {
        "label": "Greenacres", 
        "growth_from_2000_to_2013": "35.5%", 
        "latitude": 26.6276276, 
        "longitude": -80.1353896, 
        "population": "38696", 
        "value": "955", 
        "state": "Florida"
    }, 
    {
        "label": "Ormond Beach", 
        "growth_from_2000_to_2013": "5.8%", 
        "latitude": 29.2858129, 
        "longitude": -81.0558894, 
        "population": "38661", 
        "value": "956", 
        "state": "Florida"
    }, 
    {
        "label": "Hallandale Beach", 
        "growth_from_2000_to_2013": "12.4%", 
        "latitude": 25.9812024, 
        "longitude": -80.14837899999999, 
        "population": "38632", 
        "value": "957", 
        "state": "Florida"
    }, 
    {
        "label": "Stanton", 
        "growth_from_2000_to_2013": "2.8%", 
        "latitude": 33.8025155, 
        "longitude": -117.9931165, 
        "population": "38623", 
        "value": "958", 
        "state": "California"
    }, 
    {
        "label": "Puyallup", 
        "growth_from_2000_to_2013": "11.8%", 
        "latitude": 47.1853785, 
        "longitude": -122.2928974, 
        "population": "38609", 
        "value": "959", 
        "state": "Washington"
    }, 
    {
        "label": "Pacifica", 
        "growth_from_2000_to_2013": "0.5%", 
        "latitude": 37.6138253, 
        "longitude": -122.4869194, 
        "population": "38606", 
        "value": "960", 
        "state": "California"
    }, 
    {
        "label": "Hanover Park", 
        "growth_from_2000_to_2013": "0.6%", 
        "latitude": 41.9994722, 
        "longitude": -88.1450735, 
        "population": "38510", 
        "value": "961", 
        "state": "Illinois"
    }, 
    {
        "label": "Hurst", 
        "growth_from_2000_to_2013": "5.8%", 
        "latitude": 32.8234621, 
        "longitude": -97.1705678, 
        "population": "38448", 
        "value": "962", 
        "state": "Texas"
    }, 
    {
        "label": "Lima", 
        "growth_from_2000_to_2013": "-8.1%", 
        "latitude": 40.742551, 
        "longitude": -84.1052256, 
        "population": "38355", 
        "value": "963", 
        "state": "Ohio"
    }, 
    {
        "label": "Marana", 
        "growth_from_2000_to_2013": "166.2%", 
        "latitude": 32.436381, 
        "longitude": -111.2224422, 
        "population": "38290", 
        "value": "964", 
        "state": "Arizona"
    }, 
    {
        "label": "Carpentersville", 
        "growth_from_2000_to_2013": "22.8%", 
        "latitude": 42.1211364, 
        "longitude": -88.2578582, 
        "population": "38241", 
        "value": "965", 
        "state": "Illinois"
    }, 
    {
        "label": "Oakley", 
        "growth_from_2000_to_2013": "47.7%", 
        "latitude": 37.9974219, 
        "longitude": -121.7124536, 
        "population": "38194", 
        "value": "966", 
        "state": "California"
    }, 
    {
        "label": "Huber Heights", 
        "growth_from_2000_to_2013": "-0.2%", 
        "latitude": 39.843947, 
        "longitude": -84.12466080000002, 
        "population": "38142", 
        "value": "967", 
        "state": "Ohio"
    }, 
    {
        "label": "Lancaster", 
        "growth_from_2000_to_2013": "46.4%", 
        "latitude": 32.5920798, 
        "longitude": -96.7561082, 
        "population": "38071", 
        "value": "968", 
        "state": "Texas"
    }, 
    {
        "label": "Montclair", 
        "growth_from_2000_to_2013": "12.1%", 
        "latitude": 34.0775104, 
        "longitude": -117.6897776, 
        "population": "38027", 
        "value": "969", 
        "state": "California"
    }, 
    {
        "label": "Wheeling", 
        "growth_from_2000_to_2013": "4.8%", 
        "latitude": 42.1391927, 
        "longitude": -87.9289591, 
        "population": "38015", 
        "value": "970", 
        "state": "Illinois"
    }, 
    {
        "label": "Brookfield", 
        "growth_from_2000_to_2013": "-1.9%", 
        "latitude": 43.0605671, 
        "longitude": -88.1064787, 
        "population": "37999", 
        "value": "971", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Park Ridge", 
        "growth_from_2000_to_2013": "0.1%", 
        "latitude": 42.0111412, 
        "longitude": -87.84061919999999, 
        "population": "37839", 
        "value": "972", 
        "state": "Illinois"
    }, 
    {
        "label": "Florence", 
        "growth_from_2000_to_2013": "19.8%", 
        "latitude": 34.1954331, 
        "longitude": -79.7625625, 
        "population": "37792", 
        "value": "973", 
        "state": "South Carolina"
    }, 
    {
        "label": "Roy", 
        "growth_from_2000_to_2013": "13.3%", 
        "latitude": 41.1616108, 
        "longitude": -112.0263313, 
        "population": "37733", 
        "value": "974", 
        "state": "Utah"
    }, 
    {
        "label": "Winter Garden", 
        "growth_from_2000_to_2013": "142.5%", 
        "latitude": 28.5652787, 
        "longitude": -81.58618469999999, 
        "population": "37711", 
        "value": "975", 
        "state": "Florida"
    }, 
    {
        "label": "Chelsea", 
        "growth_from_2000_to_2013": "7.3%", 
        "latitude": 42.3917638, 
        "longitude": -71.0328284, 
        "population": "37670", 
        "value": "976", 
        "state": "Massachusetts"
    }, 
    {
        "label": "Valley Stream", 
        "growth_from_2000_to_2013": "3.6%", 
        "latitude": 40.6642699, 
        "longitude": -73.70846449999999, 
        "population": "37659", 
        "value": "977", 
        "state": "New York"
    }, 
    {
        "label": "Spartanburg", 
        "growth_from_2000_to_2013": "-6.2%", 
        "latitude": 34.9495672, 
        "longitude": -81.9320482, 
        "population": "37647", 
        "value": "978", 
        "state": "South Carolina"
    }, 
    {
        "label": "Lake Oswego", 
        "growth_from_2000_to_2013": "5.3%", 
        "latitude": 45.42067489999999, 
        "longitude": -122.6706498, 
        "population": "37610", 
        "value": "979", 
        "state": "Oregon"
    }, 
    {
        "label": "Friendswood", 
        "growth_from_2000_to_2013": "28.6%", 
        "latitude": 29.5293998, 
        "longitude": -95.2010447, 
        "population": "37587", 
        "value": "980", 
        "state": "Texas"
    }, 
    {
        "label": "Westerville", 
        "growth_from_2000_to_2013": "5.7%", 
        "latitude": 40.1261743, 
        "longitude": -82.92906959999999, 
        "population": "37530", 
        "value": "981", 
        "state": "Ohio"
    }, 
    {
        "label": "Northglenn", 
        "growth_from_2000_to_2013": "15.5%", 
        "latitude": 39.8961821, 
        "longitude": -104.9811468, 
        "population": "37499", 
        "value": "982", 
        "state": "Colorado"
    }, 
    {
        "label": "Phenix label", 
        "growth_from_2000_to_2013": "31.9%", 
        "latitude": 32.4709761, 
        "longitude": -85.0007653, 
        "population": "37498", 
        "value": "983", 
        "state": "Alabama"
    }, 
    {
        "label": "Grove label", 
        "growth_from_2000_to_2013": "35.6%", 
        "latitude": 39.88145189999999, 
        "longitude": -83.0929644, 
        "population": "37490", 
        "value": "984", 
        "state": "Ohio"
    }, 
    {
        "label": "Texarkana", 
        "growth_from_2000_to_2013": "7.4%", 
        "latitude": 33.425125, 
        "longitude": -94.04768820000001, 
        "population": "37442", 
        "value": "985", 
        "state": "Texas"
    }, 
    {
        "label": "Addison", 
        "growth_from_2000_to_2013": "2.6%", 
        "latitude": 41.931696, 
        "longitude": -87.9889556, 
        "population": "37385", 
        "value": "986", 
        "state": "Illinois"
    }, 
    {
        "label": "Dover", 
        "growth_from_2000_to_2013": "16.0%", 
        "latitude": 39.158168, 
        "longitude": -75.5243682, 
        "population": "37366", 
        "value": "987", 
        "state": "Delaware"
    }, 
    {
        "label": "Lincoln Park", 
        "growth_from_2000_to_2013": "-6.7%", 
        "latitude": 42.2505943, 
        "longitude": -83.1785361, 
        "population": "37313", 
        "value": "988", 
        "state": "Michigan"
    }, 
    {
        "label": "Calumet label", 
        "growth_from_2000_to_2013": "-4.5%", 
        "latitude": 41.6155909, 
        "longitude": -87.5294871, 
        "population": "37240", 
        "value": "989", 
        "state": "Illinois"
    }, 
    {
        "label": "Muskegon", 
        "growth_from_2000_to_2013": "-7.1%", 
        "latitude": 43.2341813, 
        "longitude": -86.24839209999999, 
        "population": "37213", 
        "value": "990", 
        "state": "Michigan"
    }, 
    {
        "label": "Aventura", 
        "growth_from_2000_to_2013": "47.2%", 
        "latitude": 25.9564812, 
        "longitude": -80.1392121, 
        "population": "37199", 
        "value": "991", 
        "state": "Florida"
    }, 
    {
        "label": "Martinez", 
        "growth_from_2000_to_2013": "3.4%", 
        "latitude": 38.0193657, 
        "longitude": -122.1341321, 
        "population": "37165", 
        "value": "992", 
        "state": "California"
    }, 
    {
        "label": "Greenfield", 
        "growth_from_2000_to_2013": "4.8%", 
        "latitude": 42.9614039, 
        "longitude": -88.0125865, 
        "population": "37159", 
        "value": "993", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Apache Junction", 
        "growth_from_2000_to_2013": "15.7%", 
        "latitude": 33.4150485, 
        "longitude": -111.5495777, 
        "population": "37130", 
        "value": "994", 
        "state": "Arizona"
    }, 
    {
        "label": "Monrovia", 
        "growth_from_2000_to_2013": "0.2%", 
        "latitude": 34.1442616, 
        "longitude": -118.0019482, 
        "population": "37101", 
        "value": "995", 
        "state": "California"
    }, 
    {
        "label": "Weslaco", 
        "growth_from_2000_to_2013": "28.8%", 
        "latitude": 26.1595194, 
        "longitude": -97.9908366, 
        "population": "37093", 
        "value": "996", 
        "state": "Texas"
    }, 
    {
        "label": "Keizer", 
        "growth_from_2000_to_2013": "14.4%", 
        "latitude": 44.9901194, 
        "longitude": -123.0262077, 
        "population": "37064", 
        "value": "997", 
        "state": "Oregon"
    }, 
    {
        "label": "Spanish Fork", 
        "growth_from_2000_to_2013": "78.1%", 
        "latitude": 40.114955, 
        "longitude": -111.654923, 
        "population": "36956", 
        "value": "998", 
        "state": "Utah"
    }, 
    {
        "label": "Beloit", 
        "growth_from_2000_to_2013": "2.9%", 
        "latitude": 42.5083482, 
        "longitude": -89.03177649999999, 
        "population": "36888", 
        "value": "999", 
        "state": "Wisconsin"
    }, 
    {
        "label": "Panama label", 
        "growth_from_2000_to_2013": "0.1%", 
        "latitude": 30.1588129, 
        "longitude": -85.6602058, 
        "population": "36877", 
        "value": "1000", 
        "state": "Florida"
    }
]

export {Cities}