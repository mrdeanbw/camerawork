/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
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
}

app.initalize();