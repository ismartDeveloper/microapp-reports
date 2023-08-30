function updateViewClientId(newClientId) {
    this.currentClientId = newClientId;

    const userlistingModule = typeof userlistingModule !== 'undefined' ? userlistingModule : eToolsAdminModule;
    userlistingModule.initSelectClientErrorMsg();
}

