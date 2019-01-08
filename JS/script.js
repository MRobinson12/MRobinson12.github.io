//CD creator variables
var albumselector = 0;
var albumcover = ["Assets/album1.jpg", "Assets/album2.jpg", "Assets/album3.jpg", "Assets/album4.jpg", "Assets/album5.jpg", "Assets/album6.jpg", "Assets/album7.jpg", "Assets/album8.jpg"]
var songstorage =["Humility (feat. George Benson)","Tranz","Hollywood (feat. Snoop Dogg & Jamie Principle)","Kansas","Sorcererz","Idaho","Lake Zurich","Magic City","FireFlies","One Percent","Souk Eyes","Ascension","Strobelite","Saturnz Barz","Momentz","Submission","Charger","Adromeda","Busted and Blue","Carnival","Let Me Out","Sex Murder Party","She's My Collar","Hallelujah Money","We Got the Power","Interlude: New World","The Apprentice","Halfway to the Halfway House","Out of Body","Ticker Tape","Circle of Friendz","Orchestral Intro","Welcome to the World of the Plastic Beach","White Flag","Rhinestone Eyes","Style","Superfast Jellyfish","Empire Ants","Glitter Freeze","Some Kind of Nature","On Melancholy Hill","Broken","Plastic Beach","To Binge","Cloud of Unknowing","Pirate Jet","Phoner To Arizona","Revolving Doors","HillBilly Man","Detroit","Shy-town","Little Pink Plastic Bags","The Joplin Spider","The Parish of Space Dust","The Snake In Dallas","Amarillo","The Speak It Mountains","Aspen Forest","Bobby In Phoenix","California And the Slipping of the Sun","Seattle Yodel","68 State","People","Hongkongaton","We Are Happy Landfill","Hong Kong","Highway (Under Construction)","Rockit","Bill Murray","The Swagga","Murdoc Is God","Spitting Out The Demons","Don't Get Lost In Heaven","Stop The Damns","Intro","Last Living Souls","Kids With Guns","O Green World","Dirty Harry","Feel Good Inc.","El Manana","Every Planet We Reach Is Dead","November Has Come","All Alone","White Light","DARE","Fire Coming Out Of The Monkey's Head","Don't Get Lost In Heaven","Demon Days","Jungle Fresh","Strictly Rubbadub","Banana Baby","Monkey Racket","De-Punked","P45","Dub Ø9","Crooked","Mutant Genius","Come Again","A Fistful of Peanuts","Lil' Dub Chefin'","Re-Hash","5/4","Tomorrow Comes Today","New Genius (Brother)","Clint EastWood","Man Research","Punk","Sound Check","Double Bass","Rock the House","19-2000","Latin Simone","Starshine","Slow Country","M1 A1","Clint EastWood (Ed Case/Sweetie Irie Refix)","19-2000 - Soulchild Remix"]
var slotselection = null;
var slotcounter = 0;
var savedselectedsongs = [];
//onload functions
window.onload=function()

    {
    albumselector = 0;
    var savedalbumselector = 0;
    console.log("Ready")
    savedalbumselector = localStorage.getItem('savedcover');
    albumselector = savedalbumselector;
    $('#CustomAlbumCover').attr('src',albumcover[savedalbumselector]);
    var song1 = localStorage.getItem('savedsong1')
    $('#song1').attr('value',localStorage.getItem('savedsong1'));
    $('#song2').attr('value',localStorage.getItem('savedsong2'));
    $('#song3').attr('value',localStorage.getItem('savedsong3'));
    $('#song4').attr('value',localStorage.getItem('savedsong4'));
    $('#song5').attr('value',localStorage.getItem('savedsong5'));
    $('#song6').attr('value',localStorage.getItem('savedsong6'));
    $('#song7').attr('value',localStorage.getItem('savedsong7'));
    $('#song8').attr('value',localStorage.getItem('savedsong8'));
    $('#song9').attr('value',localStorage.getItem('savedsong9'));
    $('#song10').attr('value',localStorage.getItem('savedsong10'));
    
    var name = localStorage.getItem("name");
    $("#username").val(name);
    }

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
        albumselector++;
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
        albumselector--;
        $('#CustomAlbumCover').attr('src',albumcover[albumselector]);
        console.log("Selector is at" + albumselector);
    }
});

//Saves user settings
$('#savebutton').click(function()
    {
        localStorage.setItem("savedcover", albumselector);
        
        var name = $("#username").val();
        localStorage.setItem("name", name);
        
        localStorage.setItem("savedsong1", $('#song1').attr("value"));
        localStorage.setItem("savedsong2", $('#song2').attr("value"));
        localStorage.setItem("savedsong3", $('#song3').attr("value"));
        localStorage.setItem("savedsong4", $('#song4').attr("value"));
        localStorage.setItem("savedsong5", $('#song5').attr("value"));
        localStorage.setItem("savedsong6", $('#song6').attr("value"));
        localStorage.setItem("savedsong7", $('#song7').attr("value"));
        localStorage.setItem("savedsong8", $('#song8').attr("value"));
        localStorage.setItem("savedsong9", $('#song9').attr("value"));
        localStorage.setItem("savedsong10", $('#song10').attr("value"));

    });

//Accordion menu
jQuery(document).ready(function(){
	var accordionsMenu = $('.cd-accordion-menu');

	if( accordionsMenu.length > 0 ) {
		
		accordionsMenu.each(function(){
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on('change', 'input[type="checkbox"]', function(){
				var checkbox = $(this);
				console.log(checkbox.prop('checked'));
				( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
			});
		});
	}
});

//
$('.songselection').click(function()
{
    console.log($(this).attr('id') +" was chosen");
    $('.selected').attr('value',songstorage[$(this).attr('id')]);
});