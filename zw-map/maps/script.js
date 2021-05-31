var zoneStageName = "popupStageZone";
var zoneWelcomeName = "popupWelcomeZone";
var zoneBBB1Name = "popupBBB1Zone";
var zoneBBB2Name = "popupBBB2Zone";
var zoneBBB3Name = "popupBBB3Zone";
var zoneBBB4Name = "popupBBB4Zone";
var zoneBBB5Name = "popupBBB5Zone";
var zoneBBB6Name = "popupBBB6Zone";

var urlStage = "https://bbb010hz.makeutopia.de/b/and-jww-q3s-6bf";

var urlBBB1 = "https://bbb010hz.makeutopia.de/b/and-eu3-vzx-wcv";
var urlBBB2 = "https://bbb010hz.makeutopia.de/b/and-mif-xy3-av1";
var urlBBB3 = "https://bbb010hz.makeutopia.de/b/and-vqx-pox-d8t";
var urlBBB4 = "https://bbb010hz.makeutopia.de/b/and-gwx-xb1-8iy";
var urlBBB5 = "https://bbb010hz.makeutopia.de/b/and-wpa-hmu-l25";
var urlBBB6 = "https://bbb010hz.makeutopia.de/b/and-iwb-hin-d1c";

var currentPopup = undefined;

WA.onEnterZone(zoneStageName, () => {
   currentPopup =  WA.openPopup("popUpStage","Drücke 'Stage' um aufs Podium zu kommen! (Pop-up-Fenster müssen im Browser erlaubt sein) ",[
        {
            label: "Stage",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlStage;
		zoneStageName, closePopUp);
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
