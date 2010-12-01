InstallView.prototype = new View();
function InstallView() {
    var self = this;
    self.containerDiv = 'install_body';
    self.titleString = 'New START';

    self.render = function() {
        self.setTitle(self.titleString);
        self.setLeftButton();
        self.setRightButton();
        self.show();
    }
}