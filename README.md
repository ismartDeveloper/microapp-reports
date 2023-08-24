var productsDiv = document.getElementById("eToolsAdminModuleProducts");
debugger;

var productHtml = "";

products.forEach(function(product) {
    var id = product.id;
    var displayName = product.name;
    var checked = product.selected ? 'checked="checked"' : '';
    var isLifion = displayName === "Lifion";
    var isDLSA = product.isDLSA === "true";

    var productItemHtml = '<li>' +
        '<input name="eToolsProducts" ' +
        'id="eToolsProducts' + id + '" ' +
        'type="checkbox" ' +
        checked +
        ' onclick="showSlideFeatures(this)" ' +
        (isLifion ? 'disabled="true"' : '') +
        (isDLSA ? 'disabled="true"' : '') +
        '>' +
        '<label style="width: 158px;">' +
        displayName +
        '</label>' +
        '</li>';

    productHtml += productItemHtml;

    if (product.children !== null) {
        // Handle children here if needed
    }
});

productsDiv.innerHTML = productHtml;

