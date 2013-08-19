define(["jquery","backbone","app/models/RegisterCard","app/views/Registration","app/views/RegistrationPart2","app/views/Police"],
    function ($,backbone,geristerCard,registrationView,registration2View,policeView) {
        var regModel = new geristerCard();
        var ret =  backbone.Router.extend({
           initialize: function() 
            {   
               


				$.mobile.linkBindingEnabled = false;
				$.mobile.hashListeningEnabled = false;
				$.mobile.pushStateEnabled = false;

                this.collectionPage = {
                    reg :    new registrationView({model:regModel}),
                    police : new policeView({model : regModel }),
                    reg2 :    new registration2View({model:regModel}),
                };
               
			    Backbone.history.start();
            },
            routes: {
                "": "index",
                "page?:name": "category"
            },
           
            index: function () {
                this.category("reg");
            },
           
            category: function(name) {
             
               var currentView = this.collectionPage[ name ];
               if (currentView != null) {
                    $.mobile.changePage(currentView.$el);
               } else {
                   this.index();
               }
            }
        });
        return ret;
        

    });