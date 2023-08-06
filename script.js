const dwmElements = document.querySelectorAll('.dwm');

const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]



function change(event) {
    dwmElements.forEach(element => {
        element.style.color = "hsl(236, 100%, 87%)";
    });
    event.target.style.color = "#fff";
    let eventValue = event.target.textContent.toLowerCase();

    //-- WORK ----------------------

    let workH = document.getElementById("workH");
    let lastWH = document.getElementById("lastWH");
    
    workH.textContent = data[0]["timeframes"][eventValue]["current"] + "hrs"
    if(eventValue=="daily"){
      lastWH.textContent = "Yesterday - " + data[0]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="weekly"){
      lastWH.textContent = "Last Week - " + data[0]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="monthly"){
      lastWH.textContent = "Last Month - " + data[0]["timeframes"][eventValue]["previous"] + "hrs";
    }
    
    //-- PLAY ----------------------

    let playH = document.getElementById("playH");
    let lastPH = document.getElementById("lastPH");

    playH.textContent = data[1]["timeframes"][eventValue]["current"] + "hrs"
    if(eventValue=="daily"){
      lastPH.textContent = "Yesterday - " + data[1]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="weekly"){
      lastPH.textContent = "Last Week - " + data[1]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="monthly"){
      lastPH.textContent = "Last Month - " + data[1]["timeframes"][eventValue]["previous"] + "hrs";
    }

    //-- STUDY ----------------------

    let studyH = document.getElementById("studyH");
    let lastSTH = document.getElementById("lastSTH");
    
    studyH.textContent = data[2]["timeframes"][eventValue]["current"] + "hrs"
    if(eventValue=="daily"){
      lastSTH.textContent = "Yesterday - " + data[2]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="weekly"){
      lastSTH.textContent = "Last Week - " + data[2]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="monthly"){
      lastSTH.textContent = "Last Month - " + data[2]["timeframes"][eventValue]["previous"] + "hrs";
    }

    //-- EXERCISE ----------------------

    let exerciseH = document.getElementById("exerciseH");
    let lastEH = document.getElementById("lastEH");
    
    exerciseH.textContent = data[3]["timeframes"][eventValue]["current"] + "hrs"
    if(eventValue=="daily"){
      lastEH.textContent = "Yesterday - " + data[3]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="weekly"){
      lastEH.textContent = "Last Week - " + data[3]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="monthly"){
      lastEH.textContent = "Last Month - " + data[3]["timeframes"][eventValue]["previous"] + "hrs";
    }

    //-- SOCIAL ----------------------

    let socialH = document.getElementById("socialH");
    let lastSOH = document.getElementById("lastSOH");
    
    socialH.textContent = data[4]["timeframes"][eventValue]["current"] + "hrs"
    if(eventValue=="daily"){
      lastSOH.textContent = "Yesterday - " + data[4]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="weekly"){
      lastSOH.textContent = "Last Week - " + data[4]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="monthly"){
      lastSOH.textContent = "Last Month - " + data[4]["timeframes"][eventValue]["previous"] + "hrs";
    }

    //-- SELF CARE ----------------------

    let selfCareH = document.getElementById("selfCareH");
    let lastSCH = document.getElementById("lastSCH");
    
    selfCareH.textContent = data[5]["timeframes"][eventValue]["current"] + "hrs"
    if(eventValue=="daily"){
      lastSCH.textContent = "Yesterday - " + data[5]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="weekly"){
      lastSCH.textContent = "Last Week - " + data[5]["timeframes"][eventValue]["previous"] + "hrs";
    }
    if(eventValue=="monthly"){
      lastSCH.textContent = "Last Month - " + data[5]["timeframes"][eventValue]["previous"] + "hrs";
    }

}

dwmElements.forEach(element => {
    element.addEventListener('click', change);
});