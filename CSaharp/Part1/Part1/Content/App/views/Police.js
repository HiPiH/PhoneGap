define(function (require) {

    var $ = require('jquery'),
        _ = require('underscore'),
        backbone = require('backbone'),
        tpl = require('text!tpl/Police.html');
        var template = _.template(tpl);
    
    return backbone.View.extend({
        initialize: function () {
            
            $(document.body).append(this.$el.attr({ 'data-role': 'page' ,'id':'page'+(new Date()).getTime()}));
            this.listenTo(this.model,'change', this.setData);
            this.render();
        },
        
        setData:function(init) {
            
            this.$('#police').prop("checked", (this.model.get('police'))).checkboxradio("refresh");
        },
        events : {
            "change #police": "updateModel"
        },
        
        updateModel:function(e) {
        
            this.model.set('police',this.$('#police').is(':checked'));
           
        },
     
        render: function () {
            this.$el.append($(template()));
            this.$el.trigger('create');
            return this;
        }

    });

});