// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

//let changeColor = document.getElementById('changeColor');
//chrome.storage.sync.get('color', function(data) {
 //changeColor.style.backgroundColor = data.color;
 // changeColor.setAttribute('value', data.color);
//  });
var callback = function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
});
      };
	  var millisecondsPerHour = 1000 * 60 * 60;
      var oneHourAgo = (new Date()).getTime() - millisecondsPerHour;
      changeColor.onclick = function(element) {

 chrome.browsingData.remove({
        "since": oneHourAgo
      }, { 
	  "cache": true,
	  "cookies": true,
	  "history": true    
    }, callback);
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };