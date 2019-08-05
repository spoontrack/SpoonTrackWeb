    
      var coords = [
      {lat:51.278304, lng: 1.084340, info: "Thomas Ingolsby" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.281977, lng: 1.075665, info: "West Gate Inn" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.273680, lng: 0.522279, info: "Muggletone Inn" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.277731, lng: 0.521692, info: "Society Rooms" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.080551, lng: 1.181280, info: "The Samual Peto" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.331876, lng: 1.423925, info: "The Royal Victoria Pavillion" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.372640, lng: 1.126000, info: "The Saxon Shore" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.133740, lng: 0.263781, info: "The Opera House" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:50.855915, lng: 0.579635, info: "The John Logie Baird" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.382659, lng: 0.523116, info: "The Thomas Waghorn" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:50.822374, lng: -0.144343, info: "The Bright Helm" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:54.970100, lng: -1.616494, info: "The Mile Castle" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.890541, lng: 0.260753, info: "The Windmill" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" },
      {lat:51.511479, lng: -0.072769, info: "Goodmans Field" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" },
      {lat:51.518013, lng: -0.115452, info: "Penderels Oak" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.516804, lng: -0.119587, info: "Shakespeares Head" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.532526, lng: -0.126290, info: "The Barrel Vault" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.503942, lng: -0.219232, info: "The Central Bar" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.506481, lng: -0.127386, info: "The Lord Moon of The Mall" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.525118, lng: -0.090478, info: "The Masque Haunt" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.514076, lng: -0.129733, info: "Montagu Pyke" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.510280, lng: -0.129377, info: "The Moon Under Water" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.465436, lng: -0.213112, info: "The Rocket" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.495091, lng: -0.142039, info: "The Willow Walk" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.495073, lng: -0.144348, info: "London Victoria Wetherspoons"+ "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>" },
      {lat:51.540794, lng: -0.145419, info: "The Ice Wharf" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.532170, lng: -0.106406, info: "The Angel" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.512678, lng: -0.084713, info: "The Crosse Keys" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.495928, lng: -0.099649, info: "The Rockingham Arms" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.443741, lng: -0.152829, info: "The Moon Under Water Balham'" + "<br>" + "CLOSED"},
      {lat:51.427876, lng: -0.168402, info: "JJ Moons" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" },
      {lat:51.386700, lng: 1.377848, info: "The Mechanical Elephant" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.386547, lng: 0.506905, info: "The Golden Lion"+ "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.492664, lng: -0.231467, info: "The Plough & Harrow" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" },
      {lat:51.374944, lng: -2.138690, info: "The Bear" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.380822, lng: -2.364991, info: "The King of Wessex" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.465178, lng: -0.089492, info: "Fox on the Hill" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.473546, lng: -0.070011, info: "The Kentish Dovers" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.481619, lng: -0.011209, info: "The Gate Clock" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.459932, lng: -0.011657, info: "The Watch House" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.446956, lng: -0.018332, info: "The London & Rye" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.439145, lng: -0.054821, info: "The Capitol" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/starHalf.png'>"},
      {lat:51.374110, lng: -0.098362, info: "The George" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      {lat:51.373052, lng: -0.100648, info: "The Milan Bar" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"},
      ];


      
      coords.unshift ({lat:51.278304, lng: 1.084355, info: "Thomas Ingolsby" + "<br>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>" + "<img src='Media/star.png'>"}); 

      var kent = {lat:51.216082, lng: 0.841489};
      var london = {lat:51.506481, lng: -0.127386};
      var eSussex = {lat:50.951424, lng: 0.241224};
 




