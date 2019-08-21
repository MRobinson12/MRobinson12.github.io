//onload functions
window.onload=function()
    {
        console.log("Ready")
    }

//Highlights on mouseover lr
$('.showcasetextlr').mouseover(function()
    {
        $('.showcasetextlr').removeClass('lrhighlighted');
        $(this).addClass('lrhighlighted');
        console.log("area has been highlighted");

    });

$('.showcasetextlr').mouseout(function()
    {
    $('.lrhighlighted').removeClass('lrhighlighted');   
    console.log("area has been unhighlighted"); 
    });
    
//Highlights on mouseover rl
$('.showcasetextrl').mouseover(function()
    {
        $('.showcasetextrl').removeClass('rlhighlighted');
        $(this).addClass('rlhighlighted');
        console.log("area has been highlighted");
    });
    
$('.showcasetextrl').mouseout(function()
    {
    $('.rlhighlighted').removeClass('rlhighlighted');   
    console.log("area has been unhighlighted"); 
    });