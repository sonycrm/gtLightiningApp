({
    saveNewContactComp : function(component, event) {
        var newCont = component.get("v.newContact");
        var saveAction = component.get("c.saveNewContact");
        saveAction.setParams({
            "nCont": newCont
        });
        saveAction.setCallback(this,function(result){
            var res = result.getReturnValue();
            if(result.getState()==="SUCCESS"){
                component.set("v.saveResult", res);
                $A.get("e.force:refreshView").fire();
            }
        });
        $A.enqueueAction(saveAction);
    },

    closeCompActionWindow: function (component, event, helper) {
        var closeActionPanel = $A.get("e.force:closeQuickAction");
        closeActionPanel.fire();
    }
})
