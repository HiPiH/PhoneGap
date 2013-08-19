define(function (require) {

    var $ = require('jquery'),
        _ = require('underscore'),
        backbone = require('backbone'),
        api = require('app/api'),
        mask = require('jquery.maskedinput'),
        tpl = require('text!tpl/RegistrationPart2.html');
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
            "click #endregistration" : "valideForm",
            "change #name": "updateModel",
            "change #code": "updateModel"
        },
         
        updateModel:function(e) 
        { 
            this.model.set('name',this.$('#name').val());
            this.model.set('code',this.$('#code').val());

        },
            
        valideForm:function(e) {
             this.$('#error_list').empty();
            var ret = this.model.valideStep2();
            if (ret.length == 0) {
                api.ValideRegistartionCard(this.model,$('#endregistration').attr('href'));
                return false;
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