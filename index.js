var app = {
    initalize: function () {
        document.getElementById("btn").addEventListener('click', app.takePhoto);

    },



    onDeviceReady: function () {
        this.receivedEvent('deviceready')
    },

    takePhoto: function () {
        console.log("button Clicked")
        navigator.camera.getPicture( app.onSuccess, app.onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        })
    },


    onSuccess: function (imageData) {
        var image = document.getElementById('photo');
        image.src = "data:image/jpeg;base64," + imageData;
    },

    onFail: function (message) {
        alert('Failed because: ' + message);
    }
};
window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
};
window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");
};
window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
};

app.initalize();