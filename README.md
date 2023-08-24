const refreshFunction = async () => {
    console.log('Refreshing Process Status');
    
    if ($('#runProcess').length === 0) {
        console.log('Stopping Refresh');
        clearInterval(processes.dataRefreshHandler);
        return;
    }
    
    try {
        const result = await ProcessInterface.externalProcessStatus(adpAssocId, correlation_id);
        console.log(result);
        
        const status = result.data["status"];
        const runProcess = $('#runProcess');
        
        // Clear any existing status text
        $('#busyStatus').remove();
        
        if (status !== null) {
            if (status === 'created') {
                runProcess.html('<i class="fa fa-lock"></i>&nbsp;Process is Busy');
            } else if (status === 'prevalidating') {
                runProcess.html('<i class="fa fa-lock"></i>&nbsp;Prevalidating*');
            } else if (status === 'inprocess') {
                runProcess.after($('<div id="busyStatus"></div>').text('Process in process'));
            } else if (status === 'complete') {
                runProcess.after($('<div id="busyStatus"></div>').text('Process completed'));
            } else if (status === 'error') {
                runProcess.after($('<div id="busyStatus"></div>').text('Process completed with Error'));
            } else {
                $("#releaseProcess").css("display", "none");
            }
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        clearInterval(processes.dataRefreshHandler);
        processes.dataRefreshHandler = setInterval(refreshFunction, 5000);
    }
};
