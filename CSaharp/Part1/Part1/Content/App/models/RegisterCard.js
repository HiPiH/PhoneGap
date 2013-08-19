define(function (require) {

    var $ = require('jquery'),
        _ = require('underscore'),
        backbone = require('backbone');
    
    return backbone.Model.extend({
        defaults: function() {
            return {
                police: false,
                phone: '',
                name:'',
                code:''
            };
        },
        initialize: function() {
           
        },
        valideStep1: function() {
            var errors = new Array();
            if (this.get('phone') == "") {

                errors.push("Введите телефон");
            }
            if (!this.get('police')) {
                errors.push("Вы должны согласится с правилами");
            }
            return errors;
        },
        valideStep2:function() {
            var errors = new Array();
            if (this.get('name')== "") {
               
                errors.push("Введите имя");
            }
            if (this.get('code')== "" ) {
                errors.push("Введит код");
            }
            return errors;
        },
        clear: function() {
             this.destroy();
        }
    });

});