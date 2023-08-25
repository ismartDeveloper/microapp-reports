function getClientProductsRtn(products) {
    var productsDiv = document.getElementById("eToolsAdminModuleProducts");
    productsDiv.innerHTML = "";

    var productHtml = "<ul>";

    if (products != null) {
        products.forEach(function(product) {
            var id = product.id;
            var displayName = product.name;
            var checked = product.selected ? 'checked="checked"' : '';
            var isLifion = displayName === "Lifion";
            var isDLSA = product.isDLSA === "true";
            var disabledAttr = '';

            if (checked) {
                checked = 'checked="checked"';
            }

            if (isLifion || isDLSA) {
                disabledAttr = 'disabled="true"';
            }

            if (product.children != null) {
                productHtml += `<li>
                    <input name='eToolsProducts' id='eToolsProducts${id}' type='checkbox' ${checked} ${disabledAttr} onclick='showHideFeatures(this)'>
                    &nbsp;&nbsp;<label style='width: 150px;' for='eToolsProduct${id}'>${displayName}</label>
                </li>`;
            }
        });
    }

    productHtml += "</ul>";
    productsDiv.innerHTML = productHtml;

  
}



