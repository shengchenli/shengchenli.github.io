$(document).ready(function () {
    $(document).click(function (event) {
        var $openCollapse = $(".navbar-collapse.in");
        if (!$openCollapse.length) {
            return;
        }

        var clickover = $(event.target);
        if (clickover.hasClass("navbar-toggle") || clickover.closest(".navbar-toggle").length) {
            return;
        }

        var collapseId = $openCollapse.first().attr("id");
        if (collapseId) {
            $('button.navbar-toggle[data-target="#' + collapseId + '"]').click();
        }
    });
});
