function getClientAttributeRtn(projectAttribute) {
    var attributessDiv = document.getElementById("eToolsAdminModuleAttributes");
    var checked = projectAttribute.selected ? 'checked="checked"' : '';

    attributessDiv.innerHTML = "";

    var attributesHtml = `
        <ul>
            <div id="eToolsAdminModuleAttributes${projectAttribute.name}">
                <li>
                    <input name="eToolsAttributes" id="eToolsAttributes${projectAttribute.name}" type="checkbox" ${checked}>
                    <label for="eToolsAttributes${projectAttribute.name}">${projectAttribute.name}</label>
                </li>
                <label style="width: 150px;">&nbsp; &nbsp;</label>
            </div>
        </ul>
    `;

    attributessDiv.innerHTML = attributesHtml;
}

