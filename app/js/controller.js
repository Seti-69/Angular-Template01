// JavaScript Document
$(document).ready(function (){
    
	//AJAX service request to get the main text data from the JSON data store
    $.getJSON('./model/data.json', function(jsonObj) {		
		console.log(jsonObj);
		//Handler parses the model data into the view's div classes and ID tags
        //Get asset data 0
        $('.title_0').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[0].title + '</h2>');
		$('.subTitle_0').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[0].subTitle + '</h3>');
		$('.description_0').html('<p class ="box_text_p">' + jsonObj.pageTextData[0].description + '</p>');		
		$('#image_0').html('<img class="img-thumbnail" id="1" data-toggle="modal" data-target="#myModal" src="' + jsonObj.pageTextData[0].imageUrl + '" alt=" WIP Image 1"/>');
        
		//Get asset data 1
		$('.title_1').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[1].title + '</h2>');
		$('.subTitle_1').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[1].subTitle + '</h3>');
		$('.description_1').html('<p class ="box_text_p">' + jsonObj.pageTextData[1].description + '</p>');
        $('#image_1').html('<img class="img-thumbnail" id="1" data-toggle="modal" data-target="#myModal" src="' + jsonObj.pageTextData[1].imageUrl + '" alt=" WIP Image 2"/>');
 
 		//Get asset data 2
		$('.title_2').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[2].title + '</h2>');
		$('.subTitle_2').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[2].subTitle + '</h3>');
		$('.description_2').html('<p class ="box_text_p">' + jsonObj.pageTextData[2].description + '</p>');
        $('#image_2').html('<img class="img-thumbnail" id="1" data-toggle="modal" data-target="#myModal" src="' + jsonObj.pageTextData[2].imageUrl + '" alt=" WIP Image 3"/>');

		//Get asset data 3
 		$('.title_3').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[3].title + '</h2>');
		$('.subTitle_3').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[3].subTitle + '</h3>');
		$('.description_3').html('<p class ="box_text_p">' + jsonObj.pageTextData[3].description + '</p>');
        $('#image_3').html('<img class="img-thumbnail" id="1" data-toggle="modal" data-target="#myModal" src="' + jsonObj.pageTextData[3].imageUrl + '" alt=" WIP Image 4"/>');
		
		//Get asset data 4 — Animation
 		$('.title_4').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[4].title + '/<h2>');
		$('.subTitle_4').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[4].subTitle + '</h3>');
		$('.description_4').html('<p class ="box_text_p">' + jsonObj.pageTextData[4].description + '</p>');
        
        //Use standard video controls, etc.
        //$('#movie').html('<video width=100% poster="assets/images/poster.jpg" controls>' + '<source src="' + jsonObj.pageTextData[4].videoUrl + '"'+  ' type=' + '"video/mp4"' + '/>' + '</video> ');
        
        //Or build your own ... for some reason I have to use a class selctor .movie rather than an id selector #movie?
        $('.movie').html('<source src="' + jsonObj.pageTextData[4].videoUrl + ' " type="video/mp4"/>');
        
		//Get asset data 5 — X3DOM
		$('.title_5').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[5].title + '</h2>');
		$('.subTitle_5').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[5].subTitle + '</h3>');
		$('.description_5').html('<p class ="box_text_p">' + jsonObj.pageTextData[5].description + '</p>');
        
        //And grab any 3D media objects
		//Every time the user clicks on a X3DOM object
		var file = jsonObj.pageTextData[5].x3dUrl;
        //console.log(file);
		//Replace the x3d file hardwired in HTML5 page the (if not already loaded)
		if(file != $('#x3Url').attr('url'))
			$('#x3dUrl').attr('url', file);

		//Get asset data 6
 		$('.title_6').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[6].title + '</h2>');
		$('.subTitle_6').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[6].subTitle + '</h3>');
		$('.description_6').html('<p class ="box_text_p">' + jsonObj.pageTextData[6].description + '</p>');
        $('#image_4').html('<img class="img-thumbnail" id="1" data-toggle="modal" data-target="#myModal" src="' + jsonObj.pageTextData[6].imageUrl + '" alt=" WIP Image 5"/>');
		
		//Get asset data 7
 		$('.title_7').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[7].title + '</h2>');
		$('.subTitle_7').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[7].subTitle + '</h3>');
		$('.description_7').html('<p class ="box_text_p">' + jsonObj.pageTextData[7].description + '</p>');
        $('#image_5').html('<img class="img-thumbnail" id="1" data-toggle="modal" data-target="#myModal" src="' + jsonObj.pageTextData[7].imageUrl + '" alt=" WIP Image 6"/>');
		
		//Get asset data 8
 		$('.title_8').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[8].title + '</h2>');
		$('.subTitle_8').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[8].subTitle + '</h3>');
		$('.description_8').html('<p class ="box_text_p">' + jsonObj.pageTextData[8].description + '</p>');
        $('#image_6').html('<img class="img-thumbnail" id="1" data-toggle="modal" data-target="#myModal" src="' + jsonObj.pageTextData[8].imageUrl + '" alt=" WIP Image 7"/>');

		//Get asset data 9
 		$('.title_9').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[9].title + '</h2>');
		$('.subTitle_9').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[9].subTitle + '</h3>');
		$('.description_9').html('<p class ="box_text_p">' + jsonObj.pageTextData[9].description + '</p>');
        $('#image_7').html('<img class="img-thumbnail" id="1" data-toggle="modal" data-target="#myModal" src="' + jsonObj.pageTextData[9].imageUrl + '" alt=" WIP Image 8"/>');
		
		//Get the Assignment Part 3 data — Section 1
 		$('.title_10').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[10].title + '</h2>');
		$('.subTitle_10').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[10].subTitle + '</h3>');
		$('.description_10').html('<p class ="box_text_p">' + jsonObj.pageTextData[10].description + '</p>');

		//Get the Assignment Part 3 data — Section 1
 		$('.title_11').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[11].title + '</h2>');
		$('.subTitle_11').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[11].subTitle + '</h3>');
		$('.description_11').html('<p class ="box_text_p">' + jsonObj.pageTextData[11].description + '</p>');

		//Get the Assignment Part 3 data — Section 1
 		$('.title_12').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[12].title + '</h2>');
		$('.subTitle_12').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[12].subTitle + '</h3>');
		$('.description_12').html('<p class ="box_text_p">' + jsonObj.pageTextData[12].description + '</p>');

		//Get the Assignment Part 3 data — Section 1
 		$('.title_13').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[13].title + '</h2>');
		$('.subTitle_13').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[13].subTitle + '</h3>');
		$('.description_13').html('<p class ="box_text_p">' + jsonObj.pageTextData[13].description + '</p>');

		//Get the Assignment Part 3 data — Section 1
 		$('.title_14').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[14].title + '</h2>');
		$('.subTitle_14').html('<h3 class ="box_text_h3">' + jsonObj.pageTextData[14].subTitle + '</h3>');
		$('.description_14').html('<p class ="box_text_p">' + jsonObj.pageTextData[14].description + '</p>');

		//Get the Assignment Part 1, 2 and 3 section titles
		$('.section_1').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[15].section_1 + '</h2>');
		$('.section_2').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[15].section_2 + '</h2>');
		$('.section_3').html('<h2 class ="box_text_h2">' + jsonObj.pageTextData[15].section_3 + '</h2>');
        
        //Get the Assignment footer information, name, candidate number and statement of orginality
		$('.name').html('<p class="p.box_text_p">' + jsonObj.pageTextData[16].name + '</p>');
		$('.number').html('<p>' + jsonObj.pageTextData[16].number + '</p>');
		$('.statement').html('<p>' + jsonObj.pageTextData[16].statement + '</p>');
	});
});