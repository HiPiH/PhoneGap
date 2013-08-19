define(['jquery','backbone'],function($,bone) {
    return {            
        SendSms:function() {
            
        },
        ValideRegistartionCard:function(model,url) {
            console.log(model.toJSON(),url);
            document.location.href = url;
            return true;
        }
    };
});