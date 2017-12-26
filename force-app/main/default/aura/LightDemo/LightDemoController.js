({
    doInit: function (component, event) {
        var action = component.get("c.allContacts");
        action.setCallback(this,function(result){
            component.set("v.contacts", result.getReturnValue());
        });
        $A.enqueueAction(action);
    },

    doInitWithHelper: function (component, event, helper) {
        helper.doFetch(component, event);
    }
})
