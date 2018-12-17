window.onload=function(){console.log("Ready")};

var slotselection = null;

//Selects the song slot to change
$('.songbutton').click(function()
    {
        $('.songbutton').removeClass('selected');
        $(this).addClass('selected');
        console.log($(this).attr('id') +" has been selected");
        slotselection =  $(this).attr('id');
    });
