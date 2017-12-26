({
    doInit : function(component, event, helper) {
        var action = component.get("c.loadAllContacts");
        action.setCallback(this,function(result){
            component.set("v.contacts", result.getReturnValue());
            component.set("v.contacts.size", result.getReturnValue().length);
        });
        $A.enqueueAction(action);
    }
})
