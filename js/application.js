function Application() {
    this.title = "Briefing Book: START Treaty";
    this.version = "0.1b";
    this.author = "Joshua Ruihley, Sunlight Foundation";
    this.copyright = "Copyright 2010, Sunlight Foundation";
    this.url = "http://briefingbook.org";

    this.apiDomain = 'briefingbook.org';
    this.ajaxTimeout = 10000;
    this.localDb = this.openDb('briefing_book', '1.0', 'Briefing Book');
    this.views = ['main_menu', 'about'];

    this.aboutView = new AboutView();
}

Application.prototype.markViewed = function(view_name) {
    sessionStorage.setItem(view_name + '_viewed', true);
}

Application.prototype.isViewed = function(view_name) {
    return (sessionStorage.getItem(view_name + '_viewed'));
}

Application.prototype.openDb = function(short_name, version, display_name) {
    var max_size = 655360;
    var db = openDatabase(short_name, version, display_name, max_size);
    return db
}

Application.prototype.initializeDb = function() {    
    this.localDb.transaction(
        function(transaction) {
            transaction.executeSql('CREATE TABLE IF NOT EXISTS ResourceType (id TEXT PRIMARY KEY, title TEXT)');
            transaction.executeSql('CREATE TABLE IF NOT EXISTS Resource (id TEXT, title TEXT, timestamp DATETIME, source TEXT, url TEXT)');
            transaction.executeSql('CREATE TABLE IF NOT EXISTS Source (id TEXT, title TEXT)');
        }
    );
}

Application.prototype.dbPurgeOld = function () {
    this.localDb.transaction(
        function(transaction) {
        }
    );    
}

Application.prototype.startOver = function () {
    this.localDb.transaction(
        function(transaction) { 
            }
        );
}

Application.prototype.dbErrorHandler = function(transaction, error)
{
    alert('Oops.  Error was '+error.message+' (Code '+error.code+')');
}

Application.prototype.hideAll = function() {
    for (var i  in this.views) {
        $("#" + this.views[i] + "_body").hide();
    }
    $('#empty_result').hide();
}

Application.prototype.loadView = function(view_name) {
    this.hideAll();
    switch(view_name) {
        case 'about':
            this.aboutView.render();
            break;
        case 'main_menu':
            this.mainMenuView.render();
            break;
    }
}

$(document).ready(function() { 
    application = new Application();
    application.initializeDb();
    application.dbPurgeOld();
});