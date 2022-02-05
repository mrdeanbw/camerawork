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


app.initalize();