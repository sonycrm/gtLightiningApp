public with sharing class AuraContactDemo {
    public AuraContactDemo() {
    }
    // Added
    @AuraEnabled 
    public static List<Contact> allContacts(){
        return [Select ID, Name from Contact]; 
    }
}
