(function($) {

// WebSocket object
var ws;

// The Div element selected by jQuery selector
var div = this;

function onWsMessage(message) {
   var json = JSON.parse(message.data);
  //alert(JSON.stringify(json));

   if (json.type === 'message') {
     content.append('<h2>' + json.data.message + '</h2>');
   }
}

$.fn.receiveWebSocket = function () {
     content = this;

     ws.onmessage = onWsMessage;
};

$.fn.createWebSocket = function () {
  if ("WebSocket" in window)
  {
    div = this;
     // Let us open a web socket
     ws = new WebSocket("ws://182.50.155.56:8080/start", ['echo-protocol']);
     ws.onopen = function() {
       div.append("<h3>Connected.</h3>");

     };

     ws.onclose = function() { 
        // websocket is closed.
     };
     ws.onerror = function() { 
        div.html("<h1>error</h1>");
     };
  } else {
     // The browser doesn't support WebSocket
     alert("WebSocket NOT supported by your Browser!");
  }
};

})($);