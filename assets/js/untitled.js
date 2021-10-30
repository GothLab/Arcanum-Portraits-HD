$('.img-fluid').each(function (index) {
$(this).attr('src','./assets/img/thumbs/'+index+'_tn.jpg');
$(this).parent().attr('href','./assets/img/img/'+index+'.jpg')
        
});
