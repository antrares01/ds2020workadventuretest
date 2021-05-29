var zoneStageName = "popupStageZone";
var zoneWelcomeName = "popupWelcomeZone";

var urlStage = "https://bbb010hz.makeutopia.de/b/and-jww-q3s-6bf";
var currentPopup = undefined;

WA.onEnterZone(zoneStageName, () => {
   currentPopup =  WA.openPopup("popUpStage","Drücke auf 'Stage' um aufs Podium zu kommen! ",[
        {
            label: "Stage",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlStage);
            })
        }]);
})

WA.onEnterZone(zoneWelcomeName, () => {
    currentPopup =  WA.openPopup("popUpWelcome","Herzlich Willkommen beim IZ-Festival!",[]);
})

WA.onLeaveZone(zoneStageName, closePopUp)

WA.onLeaveZone(zoneWelcomeName, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
