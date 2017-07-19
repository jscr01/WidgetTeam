(function () {

    let widget: WidgetComponent =
        {
            id: 0,
            name: 'Tasks',
            setupWidget: (element: Element) => {
                let openingScreen = new Tasks.Screens();
                openingScreen.boxes.push(new Tasks.Box("Product 1"), new Tasks.Box("Product 2"), new Tasks.Box("Product 3"), new Tasks.Box("Product 4"));
                $("[render]").html(openingScreen.render());

            },
            removeWidget: (element: Element) => {

            },
            loadData: (element: Element) => {
                
            },
            saveCustomisation: (customisation: { [id: string]: any }): void => {

            },
            restoreCustomisation: (customisation: { [id: string]: any }): void => {

            }
        };

    WidgetManager.Instance.registerWidget(widget);

})();