var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
});
$grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
});
