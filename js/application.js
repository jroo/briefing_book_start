function Application() {
    this.title = "Briefing Book: New START Treaty";
    this.version = "0.9b";
    this.author = "Joshua Ruihley, Sunlight Foundation";
    this.copyright = "Copyright 2010, Sunlight Foundation";
    this.url = "http://newstart.briefingbook.org";

    this.apiDomain = 'briefingbook.org';
    this.ajaxTimeout = 10000;
    this.localDb = this.openDb('briefing_book', '1.0', 'Briefing Book');
    this.views = ['main_menu', 'about', 'doc_list'];

    this.aboutView = new AboutView();
    this.mainMenuView = new MainMenuView();
    this.docListView = new DocListView();
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
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('wsj','Wall Street Journal')");
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
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('usa_today','USA Today')");
            transaction.executeSql("INSERT INTO Source (id, title) VALUES ('mtp','Meet the Press')");

            
            /* Resources */
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.jbs.org/component/content/article/1009-commentary/6378-stop-the-new-start-treaty', '2010-06-30', 'Stop the New START Treaty', 'jbs', 'think_tank', 'http://www.jbs.org/component/content/article/1009-commentary/6378-stop-the-new-start-treaty')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=PolicyPapers&ContentRecord_id=050a24e1-1d09-b722-b5ca-a9a6ad31a4a9&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de', '2009-09-30', 'START: Do Time Extension Instead of a Bad Treaty', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=PolicyPapers&ContentRecord_id=050a24e1-1d09-b722-b5ca-a9a6ad31a4a9&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://dpc.senate.gov/dpcdocpr.cfm?doc_name=fs-111-2-30', '2010-03-03', 'A New START Treaty Is Critical to U.S. National Security', 'dpc', 'policy_position', 'http://dpc.senate.gov/dpcdocpr.cfm?doc_name=fs-111-2-30')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://dpc.senate.gov/dpcdoc.cfm?doc_name=fs-111-2-29', '2010-03-03', 'The Follow-on START Agreement: Responding to False Claims', 'dpc', 'policy_position', 'http://dpc.senate.gov/dpcdoc.cfm?doc_name=fs-111-2-29')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.state.gov/documents/organization/140035.pdf', '2010-04-08', 'Text of the START Treaty', 'state', 'treaty', 'http://www.state.gov/documents/organization/140035.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.state.gov/documents/organization/140047.pdf', '2010-04-08', 'Text of START Treaty Protocol', 'state', 'treaty', 'http://www.state.gov/documents/organization/140047.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.politico.com/pdf/PPM143_100408_start_treaty.pdf', '2010-04-08', 'START Treaty Briefing Book', 'state', 'policy_position', 'http://www.politico.com/pdf/PPM143_100408_start_treaty.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.whitehouse.gov/blog/2010/04/08/new-start-treaty-and-protocol', '2010-04-08', 'White House Blog Post on START Treaty', 'white_house', 'policy_position', 'http://www.whitehouse.gov/blog/2010/04/08/new-start-treaty-and-protocol')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://online.wsj.com/article/SB10001424052748703339304575240164048611360.html', '2010-05-13', 'The Case for the New START Treaty', 'wsj', 'editorial', 'http://online.wsj.com/article/SB10001424052748703339304575240164048611360.html')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://frwebgate.access.gpo.gov/cgi-bin/getdoc.cgi?dbname=111_cong_documents&docid=f:td005.111.pdf', '2010-05-13', 'Message from the President of the United States', 'senate', 'treaty', 'http://frwebgate.access.gpo.gov/cgi-bin/getdoc.cgi?dbname=111_cong_documents&docid=f:td005.111.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://dpc.senate.gov/dpcdocpr.cfm?doc_name=fs-111-2-80', '2010-05-14', 'Key Facts about the New START Treaty', 'dpc', 'policy_position', 'http://dpc.senate.gov/dpcdocpr.cfm?doc_name=fs-111-2-80')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/?a=Files.Serve&File_id=2b20c27e-4689-4656-b6d3-0a8638f24db5', '2010-05-14', 'New START Will Require Diligent Senate Consideration', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/?a=Files.Serve&File_id=2b20c27e-4689-4656-b6d3-0a8638f24db5')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=aad9fd6f-54eb-4af9-9314-ee08d8c2f3c3&ContentType_id=3d1f05d6-ed37-4dea-897e-e41bafd0e109&Group_id=0c0f43ff-17c7-4379-abf7-1490f1bf75c5&MonthDisplay=6&YearDisplay=2010', '2010-06-09', 'New START, the reset, and the last 24 hours', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=aad9fd6f-54eb-4af9-9314-ee08d8c2f3c3&ContentType_id=3d1f05d6-ed37-4dea-897e-e41bafd0e109&Group_id=0c0f43ff-17c7-4379-abf7-1490f1bf75c5&MonthDisplay=6&YearDisplay=2010')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=42ff7daf-512e-4bf0-a672-d016c40849ef&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de', '2010-06-17', 'The Missing Benefits from New START', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=42ff7daf-512e-4bf0-a672-d016c40849ef&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=5d70c259-93d8-456b-8385-28fc8932a96b&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de', '2010-08-13', 'This week in the \"Russia reset\": continued nuclear assistance to Iran, strengthening occupation of Georgia', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=5d70c259-93d8-456b-8385-28fc8932a96b&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=73d283dd-2752-480e-93b8-cd9aba720663&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de', '2010-09-09', 'A non-starter of a Resolution of Ratification', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=73d283dd-2752-480e-93b8-cd9aba720663&ContentType_id=52b58cdf-6a90-410a-b4d7-fead13c38a57&48a8eee4-33df-4bce-b6bd-710c426ab3e1&3d1f05d6-ed37-4dea-897e-e41bafd0e109&d77c912a-2c22-4843-a17b-96c2f091d607&Group_id=b0a05cea-8716-48ff-aaac-a137d28f37de')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=7ad6e0e3-f671-413f-9abf-8ae735d814eb', '2010-10-26', 'New START, Russia & Iran', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=7ad6e0e3-f671-413f-9abf-8ae735d814eb')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.whitehouse.gov/blog/2010/11/18/new-start-treaty-a-national-security-imperative', '2010-11-18', 'The New START Treaty: \"A National Security Imperative\"', 'white_house', 'policy_position', 'http://www.whitehouse.gov/blog/2010/11/18/new-start-treaty-a-national-security-imperative')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.whitehouse.gov/WeeklyAddress/2010/112010-VRNAPL/112010_WeeklyAddress.mp4', '2010-11-20', 'President\'s Weekly Address', 'white_house', 'policy_position', 'http://www.whitehouse.gov/WeeklyAddress/2010/112010-VRNAPL/112010_WeeklyAddress.mp4')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://assets.opencrs.com/rpts/98-384_20090915.pdf', '2009-09-15', 'Senate Consideration of Treaties ', 'crs', 'resource', 'http://assets.opencrs.com/rpts/98-384_20090915.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://online.wsj.com/article/SB10001424052748704293604575343360850107760.html', '2010-07-08', 'The New Start Treaty: Time for a Careful Look', 'wsj', 'editorial', 'http://online.wsj.com/article/SB10001424052748704293604575343360850107760.html')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.economist.com/node/17093475', '2010-09-23', 'Just do it: The case for early ratification of the New START treaty', 'economist', 'editorial', 'http://www.economist.com/node/17093475')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.washingtonpost.com/wp-dyn/content/article/2010/11/14/AR2010111403884.html', '2010-11-15', 'Clinton and Gates: Why the Senate should ratify New START', 'wp', 'editorial', 'http://www.washingtonpost.com/wp-dyn/content/article/2010/11/14/AR2010111403884.html')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.csmonitor.com/Commentary/the-monitors-view/2010/1115/Senate-must-ratify-new-START-agreement-on-nuclear-arms', '2010-11-15', 'Senate must ratify new START agreement on nuclear arms', 'csm', 'editorial', 'http://www.csmonitor.com/Commentary/the-monitors-view/2010/1115/Senate-must-ratify-new-START-agreement-on-nuclear-arms')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.nytimes.com/2010/11/18/opinion/18thu1.html?scp=1&sq=national%20security%20start&st=cse', '2010-11-17', 'The Party of National Security?', 'nyt', 'editorial', 'http://www.nytimes.com/2010/11/18/opinion/18thu1.html?scp=1&sq=national%20security%20start&st=cse')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.washingtontimes.com/news/2010/nov/17/why-start-now/', '2010-11-17', 'Why START now?', 'washtimes', 'editorial', 'http://www.washingtontimes.com/news/2010/nov/17/why-start-now/')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://online.wsj.com/article/SB10001424052748704207504575129481334456778.html?mod=googlenews_wsj', '2010-11-23', 'The Nuclear Treaty Rush', 'wsj', 'editorial', 'http://online.wsj.com/article/SB10001424052748704207504575129481334456778.html?mod=googlenews_wsj')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.washingtonpost.com/wp-dyn/content/article/2010/11/19/AR2010111906562.html', '2010-11-19', 'The New START pact should be passed, not politicized', 'wp', 'editorial', 'http://www.washingtonpost.com/wp-dyn/content/article/2010/11/19/AR2010111906562.html')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.nationalreview.com/articles/253760/poor-start-rich-lowry', '2010-11-23', 'A Poor START', 'nro', 'editorial', 'http://www.nationalreview.com/articles/253760/poor-start-rich-lowry')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://assets.opencrs.com/rpts/R41219_20100920.pdf', '2010-09-20', 'The New START Treaty: Central Limits and Key Provisions', 'crs', 'resource', 'http://assets.opencrs.com/rpts/R41219_20100920.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://blogs.wsj.com/washwire/2010/11/21/start-treaty-recalling-reagan/', '2010-11-21', 'START Treaty: Recalling Reagan', 'wsj', 'editorial', 'http://blogs.wsj.com/washwire/2010/11/21/start-treaty-recalling-reagan/')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://thf_media.s3.amazonaws.com/2010/pdf/bg2466.pdf', '2010-09-16', 'Twelve Flaws of New START That Will Be Difficult to Fix', 'heritage', 'think_tank', 'http://thf_media.s3.amazonaws.com/2010/pdf/bg2466.pdf')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.cfr.org/publication/22684/debating_the_new_start_treaty.html', '2010-07-22', 'Debating the New START Treaty', 'cfr', 'think_tank', 'http://www.cfr.org/publication/22684/debating_the_new_start_treaty.html')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=9927eb6b-5ea2-4758-947f-2df3eb2a87ed', '2010-11-23', 'Reagan Would Have Never Limited US Missile Defenses', 'rpc', 'policy_position', 'http://rpc.senate.gov/public/index.cfm?p=Blog&ContentRecord_id=9927eb6b-5ea2-4758-947f-2df3eb2a87ed')", [], nullDataHandler, errorHandler);           
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.usatoday.com/news/opinion/editorials/2010-11-30-editorial30_ST1_N.htm', '2010-11-29', 'Kit Bond: Dangerously one-sided', 'usa_today', 'editorial', 'http://www.usatoday.com/news/opinion/editorials/2010-11-30-editorial30_ST1_N.htm')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.usatoday.com/news/opinion/editorials/2010-11-30-editorial30_ST_N.htm', '2010-11-29', 'Stop playing politics and ratify the New START arms treaty', 'usa_today', 'editorial', 'http://www.usatoday.com/news/opinion/editorials/2010-11-30-editorial30_ST_N.htm')", [], nullDataHandler, errorHandler);
            transaction.executeSql("INSERT INTO Resource (id, timestamp, title, source, type, url) VALUES('http://www.msnbc.msn.com/id/40392979/ns/meet_the_press-transcripts', '2010-11-28', 'Senators Kyl and Durbin Discuss Treaty', 'mtp', 'editorial', 'http://www.msnbc.msn.com/id/40392979/ns/meet_the_press-transcripts')", [], nullDataHandler, errorHandler);
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
                transaction.executeSql("DROP TABLE Resource");
                transaction.executeSql("DROP TABLE ResourceType");
                transaction.executeSql("DROP TABLE Source");
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
        case 'doc_list':
            this.docListView.render();
            break;
        case 'main_menu':
            this.mainMenuView.render();
            break;
    }
}

$(document).ready(function() { 
    application = new Application();
    application.startOver();
    application.initializeDb();
    application.populateDb();
    application.dbPurgeOld();
    alert(navigator.userAgent);
});