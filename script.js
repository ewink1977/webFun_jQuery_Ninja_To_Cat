$(`img`).click(function() {
    var flip = $(this).attr('flip-piece');
    $(this).attr(`src`, flip);
})