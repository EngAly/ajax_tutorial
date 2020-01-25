
// get all elements in XML file using jquery api
// it easier than AJAX core api
// please made most of your work with jquery it very abbreviated than AJAX Core

function getData() {
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "movies.xml",
            cache: false,
            dataType: "xml",
            // note that success take three params data, status, xhr
            success: function (xmlData) {
                // table is option feature for more style for handled data fron file
                var table = "<table class='table table-striped table-hover table-sm'>" +
                    "<thead  class='thead-dark'><tr><th>Names</th></tr></thead>";
                // find Title (tag in xml file)
                $(xmlData).find('Title').each(function () {
                    table += "<tr><td>" + $(this).text() + "</td></tr>";
                });

                document.getElementById('names').innerHTML = table + '</table>';
            }
        });
    });
}