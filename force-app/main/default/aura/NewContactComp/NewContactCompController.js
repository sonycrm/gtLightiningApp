({
    saveNewContactComp : function(component, event) {
        var newCont = component.get("v.newContact");
        var saveAction = component.get("c.saveNewContact");
        saveAction.setParams({
            "nCont": newCont
        });
        saveAction.setCallback(this,function(result){
            var res = result.getReturnValue();
            //alert("Saving object1..." + res);
            //alert("Saving object2..." + newCont);
            component.set("v.saveResult",res);
        });
        $A.enqueueAction(saveAction);
    }
})
