public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled
    public static List<Contact> loadAllContacts(){
        return [SELECT ID, Name,Email,Phone,AccountId,Department From Contact];
    }
    @AuraEnabled
    public static Contact loadContactById(String contId){
        Contact cont =[SELECT ID, Name,Email,Phone,AccountId,Department From Contact Where Id =:contId];
        //Contact cont =[SELECT ID, Name From Contact Where Name LIKE :contName];
        return cont;
    }
}
