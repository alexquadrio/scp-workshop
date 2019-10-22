sap.ui.jsview("scpworkshop.scpworkshop.view.View2", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf scpworkshop.scpworkshop.view.View2
	 */
	getControllerName: function () {
		return "scpworkshop.scpworkshop.controller.View2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf scpworkshop.scpworkshop.view.View2
	 */
	createContent: function (oController) {
		var table = new sap.m.Table(this.createId("dataTable"), {
			growing: true,
			growingThreshold: 1500,
			width: "100%",
			columns: [
				new sap.m.Column({header: new sap.m.Label({text: "Personen_ID"})}),
				new sap.m.Column({header: new sap.m.Label({text: "Vorname"})}),
				new sap.m.Column({header: new sap.m.Label({text: "Nachname"})}),
				new sap.m.Column({header: new sap.m.Label({text: "Strasse"})}),
				new sap.m.Column({header: new sap.m.Label({text: "Postleitzahl"})}),
				new sap.m.Column({header: new sap.m.Label({text: "Ort"})})
				],
			items: {
				path: "personendatenModel>/",
				template: new sap.m.ColumnListItem({
					type: "Inactive",
					// press: [oController.protocolTableItemPress, oController],
					cells:[
						new sap.m.Text({
							text: "{personendatenModel>PERSONEN_ID}"
						}),
						new sap.m.Text({
							text: "{personendatenModel>VORNAME}"
						}),
						new sap.m.Text({
							text: "{personendatenModel>NACHNAME}"
						}),
						new sap.m.Text({
							text: "{personendatenModel>STRASSE}"
						}),
						new sap.m.Text({
							text: "{personendatenModel>PLZ}"
						}),
						new sap.m.Text({
							text: "{personendatenModel>ORT}"
						})
					]
				})}
		});
		
		var oPage = new sap.m.Page({
			title: "Einträge der HANA Datenbank",
			id: "page",
			content: [table]
		});

		var app = new sap.m.App(this.createId("app"), {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});