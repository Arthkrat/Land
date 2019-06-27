$(function(){
$('.modalOpen').on('click', function(e){
    e.preventDefault();
$('.layer').slideDown(500, function(){
    $('.bottom').css({
        display: 'none'
    }).addClass('modal').slideDown(500);
});/*300, function(){
    $(this).on('click', ()=>$(this).hide());
});*/
});
$('.layer').on('click', ()=>{
    $('.bottom').slideUp(500, ()=>$('.layer').slideUp(500, ()=>$('.bottom').removeClass('modal').css({display: 'flex'})));//.removeClass('modal').hide(500,()=>$('.layer').hide(500));
    
    
})


});