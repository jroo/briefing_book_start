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
    this.mainMenuView = new MainMenuView();
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
            transaction.executeSql('CREATE TABLE IF NOT EXISTS Resource (id TEXT PRIMARY KEY, title TEXT, timestamp DATETIME, source TEXT, type TEXT, url TEXT)');
            transaction.executeSql('CREATE TABLE IF NOT EXISTS Source (id TEXT, title TEXT)');
        }
    );
}

Application.prototype.populateDb = function() {
    function nullDataHandler(transaction, results) { }

    function errorHandler(error) {
    }
    
    this.localDb.transaction(
        function(transaction) {
            /* Resource Type */
            transaction.executeSql("INSERT INTO ResourceType (id, title) VALUES ('policy_position','Policy Position')");
            transaction.executeSql("INSERT INTO ResourceType (id, title) VALUES ('treaty','Treaty')");
            transaction.executeSql("INSERT INTO ResourceType (id, title) VALUES ('editorial','Editorial')");
            transaction.executeSql("INSERT INTO ResourceType (id, title) VALUES ('resource','Resource')");
            transaction.executeSql("INSERT INTO ResourceType (id, title) VALUES ('think_tank','Think Tank')");
            transaction.executeSql("INSERT INTO ResourceType (id, title) VALUES ('news','News Article')");            
            
            /* Source */
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('rpc','Republican Policy Committee')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('dpc','Democratic Policy Committee')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('jbs','John Birch Society')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('state','State Department')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('white_house','White House')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('wjs','Wall Street Journal')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('senate','U.S. Senate')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('crs','Congressional Research Service')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('economist','The Economist')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('wp','Washington Post')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('csm','Christian Science Monitor')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('nyt','New York Times')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('washtimes','Washington Times')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('nro','National Review')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('heritage','Heritage Foundation')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('cfr','Council on Foreign Relations')");
            
            /* Resources */
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.jbs.org/component/content/article/1009-commentary/6378-stop-the-new-start-treaty', '6/30/10', 'Stop the New START Treaty', 'jbs', 'policy_position', 'http://www.jbs.org/component/content/article/1009-commentary/6378-stop-the-new-start-treaty')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=PolicyPapers&ContentRecord_id=050a24e1-1d09-b722-b5ca-a9a6ad31a4a9&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de', '9/30/09', 'START: Do Time Extension Instead of a Bad Treaty', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=PolicyPapers&ContentRecord_id=050a24e1-1d09-b722-b5ca-a9a6ad31a4a9&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://dpc.senate.gov/dpcdocpr.cfm?doc_name=fs-111-2-30', '3/3/10', 'A New START Treaty Is Critical to U.S. National Security', 'dpc', 'policy_position', 'http://dpc.senate.gov/dpcdocpr.cfm?doc_name=fs-111-2-30')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://dpc.senate.gov/dpcdoc.cfm?doc_name=fs-111-2-29', '3/3/10', 'The Follow-on START Agreement: Responding to False Claims', 'dpc', 'policy_position', 'http://dpc.senate.gov/dpcdoc.cfm?doc_name=fs-111-2-29')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.state.gov/documents/organization/140035.pdf', '4/8/10', 'Text of the START Treaty', 'state', 'treaty', 'http://www.state.gov/documents/organization/140035.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.state.gov/documents/organization/140047.pdf', '4/8/10', 'Text of START Treaty Protocol', 'state', 'treaty', 'http://www.state.gov/documents/organization/140047.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.politico.com/pdf/PPM143_100408_start_treaty.pdf', '4/8/10', 'START Treaty Briefing Book', 'state', 'policy_position', 'http://www.politico.com/pdf/PPM143_100408_start_treaty.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.whitehouse.gov/blog/2010/04/08/new-start-treaty-and-protocol', '4/8/10', 'White House Blog Post on START Treaty', 'white_house', 'policy_position', 'http://www.whitehouse.gov/blog/2010/04/08/new-start-treaty-and-protocol')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://online.wsj.com/article/SB10001424052748703339304575240164048611360.html', '5/13/10', 'The Case for the New START Treaty', 'wsj', 'editorial', 'http://online.wsj.com/article/SB10001424052748703339304575240164048611360.html')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://frwebgate.access.gpo.gov/cgi-bin/getdoc.cgi?dbname=111_cong_documents&docid=f:td005.111.pdf', '5/13/10', 'Message from the President of the United States', 'senate', 'treaty', 'http://frwebgate.access.gpo.gov/cgi-bin/getdoc.cgi?dbname=111_cong_documents&docid=f:td005.111.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://dpc.senate.gov/dpcdocpr.cfm?doc_name=fs-111-2-80', '5/14/10', 'Key Facts about the New START Treaty', 'dpc', 'policy_position', 'http://dpc.senate.gov/dpcdocpr.cfm?doc_name=fs-111-2-80')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/?a=Files.Serve&File_id=2b20c27e-4689-4656-b6d3-0a8638f24db5', '5/14/10', 'New START Will Require Diligent Senate Consideration', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/?a=Files.Serve&File_id=2b20c27e-4689-4656-b6d3-0a8638f24db5')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=aad9fd6f-54eb-4af9-9314-ee08d8c2f3c3&ContentType_id=3d1f05d6-ed37-4dea-897e-e41bafd0e109&Group_id=0c0f43ff-17c7-4379-abf7-1490f1bf75c5&MonthDisplay=6&YearDisplay=2010', '6/9/10', 'New START, the reset, and the last 24 hours', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=aad9fd6f-54eb-4af9-9314-ee08d8c2f3c3&ContentType_id=3d1f05d6-ed37-4dea-897e-e41bafd0e109&Group_id=0c0f43ff-17c7-4379-abf7-1490f1bf75c5&MonthDisplay=6&YearDisplay=2010')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=42ff7daf-512e-4bf0-a672-d016c40849ef&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de', '6/17/10', 'The Missing Benefits from New START', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=42ff7daf-512e-4bf0-a672-d016c40849ef&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=5d70c259-93d8-456b-8385-28fc8932a96b&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de', '8/13/10', 'This week in the \"Russia reset\": continued nuclear assistance to Iran, strengthening occupation of Georgia', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=5d70c259-93d8-456b-8385-28fc8932a96b&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=73d283dd-2752-480e-93b8-cd9aba720663&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de', '9/9/10', 'A non-starter of a Resolution of Ratification', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=73d283dd-2752-480e-93b8-cd9aba720663&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=7ad6e0e3-f671-413f-9abf-8ae735d814eb', '10/26/10', 'New START, Russia & Iran', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=7ad6e0e3-f671-413f-9abf-8ae735d814eb')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.whitehouse.gov/blog/2010/11/18/new-start-treaty-a-national-security-imperative', '11/18/10', 'The New START Treaty: \"A National Security Imperative\"', 'white_house', 'policy_position', 'http://www.whitehouse.gov/blog/2010/11/18/new-start-treaty-a-national-security-imperative')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.whitehouse.gov/WeeklyAddress/2010/112010-VRNAPL/112010_WeeklyAddress.mp4', '11/20/10', 'President\'s Weekly Address', 'white_house', 'policy_position', 'http://www.whitehouse.gov/WeeklyAddress/2010/112010-VRNAPL/112010_WeeklyAddress.mp4')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://assets.opencrs.com/rpts/98-384_20090915.pdf', '9/15/09', 'Senate Consideration of Treaties ', 'crs', 'resource', 'http://assets.opencrs.com/rpts/98-384_20090915.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://online.wsj.com/article/SB10001424052748704293604575343360850107760.html', '7/8/10', 'The New Start Treaty: Time for a Careful Look', 'wsj', 'editorial', 'http://online.wsj.com/article/SB10001424052748704293604575343360850107760.html')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.economist.com/node/17093475', '9/23/10', 'Just do it: The case for early ratification of the New START treaty', 'economist', 'editorial', 'http://www.economist.com/node/17093475')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.washingtonpost.com/wp-dyn/content/article/2010/11/14/AR2010111403884.html', '11/15/10', 'Clinton and Gates: Why the Senate should ratify New START', 'wp', 'editorial', 'http://www.washingtonpost.com/wp-dyn/content/article/2010/11/14/AR2010111403884.html')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.csmonitor.com/Commentary/the-monitors-view/2010/1115/Senate-must-ratify-new-START-agreement-on-nuclear-arms', '11/15/10', 'Senate must ratify new START agreement on nuclear arms', 'csm', 'editorial', 'http://www.csmonitor.com/Commentary/the-monitors-view/2010/1115/Senate-must-ratify-new-START-agreement-on-nuclear-arms')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.nytimes.com/2010/11/18/opinion/18thu1.html?scp=1&sq=national%20security%20start&st=cse', '11/17/10', 'The Party of National Security?', 'nyt', 'editorial', 'http://www.nytimes.com/2010/11/18/opinion/18thu1.html?scp=1&sq=national%20security%20start&st=cse')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.washingtontimes.com/news/2010/nov/17/why-start-now/', '11/17/10', 'Why START now?', 'washtimes', 'editorial', 'http://www.washingtontimes.com/news/2010/nov/17/why-start-now/')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://online.wsj.com/article/SB10001424052748704207504575129481334456778.html?mod=googlenews_wsj', '11/23/10', 'The Nuclear Treaty Rush', 'wsj', 'editorial', 'http://online.wsj.com/article/SB10001424052748704207504575129481334456778.html?mod=googlenews_wsj')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.washingtonpost.com/wp-dyn/content/article/2010/11/19/AR2010111906562.html', '11/19/10', 'The New START pact should be passed, not politicized', 'wp', 'editorial', 'http://www.washingtonpost.com/wp-dyn/content/article/2010/11/19/AR2010111906562.html')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.nationalreview.com/articles/253760/poor-start-rich-lowry', '11/23/10', 'A Poor START', 'nro', 'editorial', 'http://www.nationalreview.com/articles/253760/poor-start-rich-lowry')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://assets.opencrs.com/rpts/R41219_20100920.pdf', '9/20/10', 'The New START Treaty: Central Limits and Key Provisions', 'crs', 'resource', 'http://assets.opencrs.com/rpts/R41219_20100920.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://blogs.wsj.com/washwire/2010/11/21/start-treaty-recalling-reagan/', '11/21/10', 'START Treaty: Recalling Reagan', 'wsj', 'editorial', 'http://blogs.wsj.com/washwire/2010/11/21/start-treaty-recalling-reagan/')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://thf_media.s3.amazonaws.com/2010/pdf/bg2466.pdf', '9/16/10', 'Twelve Flaws of New START That Will Be Difficult to Fix', 'heritage', 'think_tank', 'http://thf_media.s3.amazonaws.com/2010/pdf/bg2466.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.cfr.org/publication/22684/debating_the_new_start_treaty.html', '7/22/10', 'Debating the New START Treaty', 'cfr', 'think_tank', 'http://www.cfr.org/publication/22684/debating_the_new_start_treaty.html')", [], nullDataHandler, errorHandler);
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
    application.populateDb();
    application.dbPurgeOld();
});