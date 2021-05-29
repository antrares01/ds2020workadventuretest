var zoneStageName = "popupStageZone";
var zoneWelcomeName = "popupWelcomeZone";

var urlStage = "https://bbb010hz.makeutopia.de/b/and-jww-q3s-6bf";
var currentPopup = undefined;

WA.onEnterZone(zoneStageName, () => {
   currentPopup =  WA.openPopup("popUpStage","You can enter the Stage in a new browser tab",[
        {
            label: "Stage",
            className: "popUpElement",
            callback: (popup => {
                WA.openTab(urlPodium);
            })
        }]);
})

WA.onEnterZone(zoneWelcomeName, () => {
    currentPopup =  WA.openPopup("popUpWelcome","Welcome to IZ-Festival!",[]);
})

WA.onLeaveZone(zoneStageName, closePopUp)

WA.onLeaveZone(zoneWelcomeName, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
