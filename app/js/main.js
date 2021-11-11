$(function(){
    // TOGLE MENU
    $('#hamburger').on('click', function(){
        $('#menu').toggleClass('active');
        $('#menu').slideToggle(1000);
    });
    $(document).on('click', function(e){
        let $self = $(e.target).closest("div#hamburger");
        if( !$self.hasClass('header__hamburger') &&
            $('.header__mobile_menu').hasClass('active') ){
            $('#menu').toggleClass('active');
            $('#menu').slideToggle(1000);
        }
    });
})