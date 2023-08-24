var refreshFunction = function() {
    console.log('Refreshing Process Status');
    console.log(clientId + correlationId);
    
    if ($('#runProcess').length > 0) {
        ProcessInterface.externalProcessStatus(adpAssocId, correlation_id, {
            callback: function(result) {
                console.log(result);
                var status = result.data["status"];
                debugger;

                if (status !== null) {
                    $('#runProcess').html((status === 'created') ? 
                        '<i class="fa fa-lock"></i>&nbsp;Process is Busy' : 'Run Process');

                    if (status === 'prevalidating') {
                        $('#runProcess').html('<i class="fa fa-lock"></i>&nbsp;Prevalidating*');
                    } else if (status === 'inprocess') {
                        $("#runProcess").after($('<div id="busyStatus"></div>').text("Process in process"));
                    } else if (status === 'complete') {
                        $('#runProcess').after($('<div id="busyStatus"></div>').text("Process completed"));
                    } else if (status === 'error') {
                        $('#runProcess').after($('<div id="busyStatus"></div>').text("Process completed with Error"));
                    } else {
                        $("#releaseProcess").css("display", "none");
                    }
                }

                clearInterval(processes.dataRefreshHandler);
                processes.dataRefreshHandler = setInterval(refreshFunction, 5000);
            },
            async: false
        });
    } else {
        console.log('Stopping Refresh');
        clearInterval(processes.dataRefreshHandler);
    }
}

