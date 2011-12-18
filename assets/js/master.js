var modules = {
	api: {
		
	},
	login: {
		sessionID: function(sid) {
			if (window.sessionStorage.auth === undefined)
			{
				window.sessionStorage.auth = {sessionID: undefined};
			}
			if (sid !== undefined)
			{
				window.sessionStorage.auth.sessionID = sid;
			}
			return window.sessionStorage.auth.sessionID;
		},
		
		authorize: function(code, pass) {
			this.sessionID(code+pass);
		},
		
		isAuthorized: function(callback) {
			if (this.sessionID() !== undefined)
			{
				callback();
			}
		}
	},
	navigation: {
		selectMenuItem: function(item) {
			var current = $("#sidebar a.selected");
			if (current !== item)
			{
				current.removeClass("selected")
				item.addClass("selected");
			}
		}
	},
	events: {
		initializeListener: function() {
			window.onpopstate = function(pop) {}
			$("#sidebar a").click(function() { modules.navigation.selectMenuItem($(this)); });
		}
	}
};

$(document).ready(function()
{
	modules.events.initializeListener();
	modules.login.isAuthorized(function()
	{
		
	});
});