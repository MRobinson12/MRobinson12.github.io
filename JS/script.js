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

//Changes album cover when highlighted
$('.albumcover').mouseover(function()
{
    $('.albumcover').removeClass('highlighted');
    $(this).addClass('highlighted');
    console.log($(this).attr('id') +" has been highlighted");
    slotselection =  $(this).attr('id');
});

$('.albumcover').mouseout(function()
    {
    $('.albumcover').removeClass('highlighted');    
    });

//Changes Nav button when highlighted
$('.navbutton').mouseover(function()
{
    $('.navbutton').removeClass('selected');
    $(this).addClass('selected');
    console.log($(this).attr('id') +" has been highlighted");
    slotselection =  $(this).attr('id');
});

$('.navbutton').mouseout(function()
    {
    $('.navbutton').removeClass('selected');    
    });