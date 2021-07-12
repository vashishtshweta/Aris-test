// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(loadCategoryList);

function onCategoryChange(ctrl)
{
    window.location.href = '?catFilter=' + ctrl.options[ctrl.selectedIndex].value;
}

function loadCategoryList() {
   
    var url = "/Home/GetCategoryList";
    $.get(url).done(showCategoryList);
}

function showCategoryList(response) {

    var sel = $("#category-filter");
   
    for (i = 0; i < response.length; i++) {
        sel.append('<option value="' + response[i] + '">' + response[i] + '</option>');
    }
}

function details(e) {
    var url =  $(e).attr('data-url')
    $.get(url).done(showResult);
}


function showResult(response) {
    alert(JSON.stringify(response));
}

