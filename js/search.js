function contains(text_one, text_two) {
    if (text_one.indexOf(text_two) != -1)
        return true;
}

$("#filter_search").keyup(function () {
    var seacrhText = $("#filter_search").val().toLowerCase()
    $("ul li").each(function () {
        if (!contains($(this).text().toLowerCase(), seacrhText))
            $(this).hide();
        else
            $(this).show();
    });
});