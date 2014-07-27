var app = app || {};

app.MessageView = Backbone.View.extend({
    events:{

    },
});

app.Message = Backbone.Model.extend({
    defaults: {
        type: 'message',
        data:{
            message: 'hello',
            username: 'YOU',
            timestamp: 1406439479931
        }

    }
});


$(document).ready(function() {
    $('#status').createWebSocket();
    $('#board').receiveWebSocket();

    $('#submit').on('click', function() {
        $.ajax({
                url: "http://182.50.155.56:8080/send",
                type: "GET",
                dataType: "json",
                data: {
                        m: $("#text").val(),
                        u: 'YOU',
                }
        });
    });
});
