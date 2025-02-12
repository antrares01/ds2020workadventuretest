var zoneStageName = "popupStageZone";
var zoneWelcomeName = "popupWelcomeZone";
var zoneBBB1Name = "popupBBB1Zone";
var zoneBBB2Name = "popupBBB2Zone";
var zoneBBB3Name = "popupBBB3Zone";
var zoneBBB4Name = "popupBBB4Zone";
var zoneBBB5Name = "popupBBB5Zone";
var zoneBBB6Name = "popupBBB6Zone";

var urlStage = "https://zentralwerk.de/";

var urlBBB1 = "https://zentralwerk.de/";
var urlBBB2 = "https://zentralwerk.de/";
var urlBBB3 = "https://zentralwerk.de/";
var urlBBB4 = "https://zentralwerk.de/";
var urlBBB5 = "https://zentralwerk.de/";
var urlBBB6 = "https://zentralwerk.de/";

var currentPopup = undefined;

WA.onEnterZone(zoneStageName, () => {
   currentPopup =  WA.openPopup("popUpStage","Drücke 'Stage' um aufs Podium zu kommen! (Pop-up-Fenster müssen im Browser erlaubt sein) ",[
        {
            label: "Stage",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlStage);
            })
        }]);
})

WA.onEnterZone(zoneBBB1Name, () => {
   currentPopup =  WA.openPopup("popUpBBB1","Drücke 'OPEN' um in den Raum 1 zu kommen! (Pop-up-Fenster müssen im Browser erlaubt sein) ",[
        {
            label: "OPEN",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlBBB1);
            })
        }]);
})

WA.onEnterZone(zoneBBB2Name, () => {
   currentPopup =  WA.openPopup("popUpBBB2","Drücke 'OPEN' um in den Raum 2 zu kommen! (Pop-up-Fenster müssen im Browser erlaubt sein) ",[
        {
            label: "OPEN",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlBBB2);
            })
        }]);
})

WA.onEnterZone(zoneBBB3Name, () => {
   currentPopup =  WA.openPopup("popUpBBB3","Drücke 'OPEN' um in den Raum 3 zu kommen! (Pop-up-Fenster müssen im Browser erlaubt sein) ",[
        {
            label: "OPEN",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlBBB3);
            })
        }]);
})

WA.onEnterZone(zoneBBB4Name, () => {
   currentPopup =  WA.openPopup("popUpBBB4","Drücke 'OPEN' um in den Raum 4 zu kommen! (Pop-up-Fenster müssen im Browser erlaubt sein) ",[
        {
            label: "OPEN",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlBBB4);
            })
        }]);
})

WA.onEnterZone(zoneBBB5Name, () => {
   currentPopup =  WA.openPopup("popUpBBB5","Drücke 'OPEN' um in den Raum 5 zu kommen! (Pop-up-Fenster müssen im Browser erlaubt sein) ",[
        {
            label: "OPEN",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlBBB5);
            })
        }]);
})

WA.onEnterZone(zoneBBB6Name, () => {
   currentPopup =  WA.openPopup("popUpBBB6","Drücke 'OPEN' um in den Raum 6 zu kommen! (Pop-up-Fenster müssen im Browser erlaubt sein) ",[
        {
            label: "OPEN",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlBBB6);
            })
        }]);
})

WA.onEnterZone(zoneWelcomeName, () => {
    currentPopup =  WA.openPopup("popUpWelcome","Herzlich Willkommen and Welcome!",[]);
})

WA.onLeaveZone(zoneStageName, closePopUp)
WA.onLeaveZone(zoneWelcomeName, closePopUp)
WA.onLeaveZone(zoneBBB1Name, closePopUp)
WA.onLeaveZone(zoneBBB2Name, closePopUp)
WA.onLeaveZone(zoneBBB3Name, closePopUp)
WA.onLeaveZone(zoneBBB4Name, closePopUp)
WA.onLeaveZone(zoneBBB5Name, closePopUp)
WA.onLeaveZone(zoneBBB6Name, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
