sap.ui.define(
	['sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel'],
    function(Controller, JSONModel) {
    	
    	return Controller.extend("ui5.apps.controller.Main",{
    		
    		
    		
    		onInit: function (){
    			
    			var oModel = new JSONModel();
    			
    			oModel.loadData("model/data/mockData.json");
    			
    			sap.ui.getCore().setModel(oModel);
    			
    		},
    		
    		onAdd: function(){
    			
    			var oModel = sap.ui.getCore().getModel();
    			
    			var empStr = oModel.getProperty("/empStr");
    			
    			var itab = oModel.getProperty("/empTab");
    			
    			itab.push(empStr);
    			
    			oModel.setProperty("/empTab", itab);
    			
    			
    			
    		}
    		
    	});
		
	});