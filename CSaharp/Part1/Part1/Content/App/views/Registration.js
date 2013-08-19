define(function (require) {

    var $ = require('jquery'),
        _ = require('underscore'),
        backbone = require('backbone'),
        api = require('app/api'),
        mask = require('jquery.maskedinput'),
        tpl = require('text!tpl/Registration.html');
    var template = _.template(tpl);
        
    return backbone.View.extend(
    {
         initialize: function () {
            this.model.bind('change', this.setData, this);
            $(document.body).append(this.$el.attr({ 'data-role': 'page' ,'id':'page'+(new Date()).getTime()}));
            this.render();
        },
         
        setData:function() {
            this.$('#police').prop("checked", (this.model.get('police'))).checkboxradio("refresh");
        },
         
        events : {
            "click #to_step2" : "valideForm",
            "change #police": "updateModel",
            "change #phone": "updateModel"
        },
         
        updateModel:function(e) 
        { 
            this.model.set('police',this.$('#police').is(':checked'));
            this.model.set('phone',this.$('#phone').val());

        },
            
        valideForm:function(e) {
             this.$('#error_list').empty();
            var ret = this.model.valideStep1();
            if (ret.length == 0) {
                api.SendSms();
                return true;
            }else {
                for (var k in ret) {
                    this.$('#error_list').append($('<li/>').text(ret[k]));
                }
            }
            return false;
        },
         
        render: function () {
        
            this.$el.append($(template()));
            this.$el.trigger('create');
            this.$('#phone').mask("+7(999)999-9999");
            return this;
        }

    });

});