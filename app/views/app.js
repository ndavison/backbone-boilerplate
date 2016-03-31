/**
 * Main application View instance.
 */

var View = Backbone.View.extend({

	el: 'div#app',

	initialize: function() {
		this.render();
	},

	render: function() {
		var view = this;
		this.getTemplate('templates/app.html', {text: 'Now start coding!'}, _.template, function(compiled) {
			view.$el.html(compiled);
		});
	}

});

module.exports = View;
