sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	var controller;

	return Controller.extend("scpworkshop.scpworkshop.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf scpworkshop.scpworkshop.view.View2
		 */
		onInit: function () {
			controller = this;
			
			var url = "/HANA";
			
			var request = $.get({
			async: false,
			url: url,
			// data: {
			// },
			dataType: "json",
			// beforeSend: function (xhr) {
			// 	xhr.setRequestHeader("Authorization", "Basic " + btoa(email + ":" + password));
			// },
			success: function() {
				console.log("Data Download-Request erfolgreich!");
			},
			error: function() {
				console.log("Data Download-Request fehlgeschlagen!");
			}
			});
			
			request.done(function(data){
				console.log(data);
				
				var personendatenModel = new sap.ui.model.json.JSONModel(data);
				controller.getView().setModel(personendatenModel, "personendatenModel");
				
				console.log("PersonendatenModel:", personendatenModel);
			});
		}
	});

});