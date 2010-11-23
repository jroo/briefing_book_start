MainMenuView.prototype = new View();

function MainMenuView() {
    var self = this;
    self.containerDiv = 'main_menu_body';
    self.titleString = 'Menu';

    self.render = function() {
        self.setTitle(self.titleString);
        self.setLeftButton();
        self.setRightButton();
        self.show();
    }
    
    self.loadList = function(view_name, view_title) {
        localStorage.setItem("current_doc_list", view_name);
        localStorage.setItem("current_doc_title", view_title);
        application.loadView('doc_list');
    }
}
