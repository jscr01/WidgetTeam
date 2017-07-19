(function () {
    var widget = {
        id: 0,
        name: 'Tasks',
        setupWidget: function (element) {
            var openingScreen = new Tasks.Screens();
            openingScreen.boxes.push(new Tasks.Box("Product 1"), new Tasks.Box("Product 2"), new Tasks.Box("Product 3"), new Tasks.Box("Product 4"));
            $("[render]").html(openingScreen.render());
        },
        removeWidget: function (element) {
        },
        loadData: function (element) {
        },
        saveCustomisation: function (customisation) {
        },
        restoreCustomisation: function (customisation) {
        }
    };
    WidgetManager.Instance.registerWidget(widget);
})();
