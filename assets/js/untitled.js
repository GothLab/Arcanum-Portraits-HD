$('.img-fluid').each(function (index) {
$(this).attr('src','./thumbs/'+index+'_tn.jpg');
$(this).parent().attr('href','./img/'+index+'.jpg')
        
});