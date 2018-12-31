//CD creator variables
var albumselector;
var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7;
var song8;
var song9;
var song10;     
var albumcover = ["Assets/album1.jpg", "Assets/album2.jpg", "Assets/album3.jpg", "Assets/album4.jpg", "Assets/album5.jpg", "Assets/album6.jpg", "Assets/album7.jpg", "Assets/album8.jpg"]
var slotselection = null;

//onload functions
window.onload=function()
    {
    albumselector = 0;
    console.log("Ready")
    savedalbumselector = localStorage.getItem("savedcover");
    albumselector = savedalbumselector;
    $('#CustomAlbumCover').attr('src',albumcover[savedalbumselector]);
    };


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

//Changes the CD cover image
$('#nextcover').click(function()
    {
    if (albumselector == 7)
    {
        albumselector = 0;
        $('#CustomAlbumCover').attr('src',albumcover[albumselector]);
        console.log("Selector is at" + albumselector);
    }
    else
    {
        albumselector = albumselector + 1;
        $('#CustomAlbumCover').attr('src',albumcover[albumselector]);
        console.log("Selector is at" + albumselector);
    }
});
$('#prevcover').click(function()
    {
    if (albumselector == 0)
    {
        albumselector = 7;
        $('#CustomAlbumCover').attr('src',albumcover[albumselector]);
        console.log("Selector is at" + albumselector);
    }
    else
    {
        albumselector = albumselector - 1;
        $('#CustomAlbumCover').attr('src',albumcover[albumselector]);
        console.log("Selector is at" + albumselector);
    }
});

//Saves user settings
$('#savebutton').click(function()
    {
        localStorage.setItem("savedcover", null);
        localStorage.setItem("savedcover", albumselector);
    });

