function View() {
}

View.prototype.renderList = function(list, dest_list) {
    parent = $(dest_list).parent();
    $(dest_list).detach();
    ul = $("<ul>");

    $(parent).append(ul);
    if (list.length > 0) {
        for (i in list) {
            if (list[i].row_type == 'content') {
                this.renderRow(list[i], ul);
            } else if (list[i].row_type == 'header') {
                this.renderHeader(list[i].title, ul);
            }
        }
    }
    
    $(ul).listview();
}

View.prototype.reload = function() {
}

View.prototype.showEmptyResult = function(msg) {
    $('#empty_message').html(msg);
    $('#empty_result').show();
}

View.prototype.hideEmptyResult = function() {
    $('#empty_result').hide();
}

View.prototype.showProgress = function() {
    $('#progress').show();
}

View.prototype.hideProgress = function() {
    $('#progress').hide();
}

View.prototype.show = function() {
    $('#'+this.containerDiv).show();
}

View.prototype.hide = function() {
    $('#'+this.containerDiv).hide();
}