// $( "difInput" )
// .keyup(function() {
//	var value = $( this ).val();
//	$( "testParagraph" ).text( value );
// })
// .keyup();


// $('#loadChart').click(function() {
//	alert($('#difInput').val())
// })


// $( "#loadChart" ).click(function() {
//	chart.load({
//	  columns: [
//	    ['Item Difficulty 90', 0.4258607051910036, 
// 0.4523482404748944, 
// 0.48047528871595174, 
// 0.5103423128217307, 
// 0.5420558011580255, 
// 0.5757286121908184, 
// 0.611480336673473, 
// 0.6494376779837481, 
// 0.6897348511939483, 
// 0.732514001428157, 
// 0.7779256420218295, 
// 0.8261291129496421, 
// 0.8772930599259386, 
// 0.9315959345066692, 
// 0.9892265154305864, 
// 1.0503844513285425, 
// 1.1152808248008743, 
// 1.1841387377115649, 
// 1.257193917371529, 
// 1.3346953430790898, 
// 1.4169058922504332, 
// 1.5041030051032, 
// 1.5965793665488979, 
// 1.694643603600767, 
// 1.7986209962091566, 
// 1.9088541989923393, 
// 2.0257039708328346, 
// 2.149549908753394, 
// 2.2807911818687696, 
// 2.419847260524925, 
// 2.5671586349827042, 
// 2.7231875171744866, 
// 2.8884185181570783, 
// 3.0633592928996336, 
// 3.2485411429804754, 
// 3.444519566621118, 
// 3.6518747442611006, 
// 3.8712119465766386, 
// 4.103161850475468, 
// 4.3483807471679015, 
// 4.607550624931943, 
// 4.881379107673924, 
// 5.170599228855575, 
// 5.47596901883904, 
// 5.798270882223592, 
// 6.138310740349222, 
// 6.496916912866407, 
// 6.874938711169996, 
// 7.273244715626795, 
// 7.692720707958851, 
// 8.134267229951792, 
// 8.598796739923163, 
// 9.087230339198728, 
// 9.600494042300454, 
// 10.139514566748078, 
// 10.705214621417717, 
// 11.298507676386018, 
// 11.92029220221176, 
// 12.571445372753606, 
// 13.252816232963255, 
// 13.965218341676014, 
// 14.709421909266446, 
// 15.48614546112978, 
// 16.296047070232174, 
// 17.13971521533435, 
// 18.017659335766986, 
// 18.930300168589817, 
// 19.877959969300697, 
// 20.8608527326045, 
// 21.879074544665137, 
// 22.932594212242822, 
// 24.021244326602424, 
// 25.144712930466262, 
// 26.30253596395174, 
// 27.49409066975761, 
// 28.71859013825026, 
// 29.975079169021424, 
// 31.262431616506873, 
// 32.57934937306941, 
// 33.9243631234183, 
// 35.2958349794196, 
// 36.69196307451676, 
// 38.110788162631856, 
// 39.55020222828881, 
// 41.00795907374461, 
// 42.48168680628477, 
// 43.9689021058422, 
// 45.46702611114799, 
// 46.97340172317585, 
// 48.48531208913145, 
// 50, 
// 51.51468791086855, 
// 53.026598276824174, 
// 54.532973888852034, 
// 56.031097894157824, 
// 57.51831319371525, 
// 58.992040926255406, 
// 60.449797771711204, 
// 61.88921183736817, 
// 63.30803692548327]
  	    
//	  ]
//	});

// });




$('a[href^="#"]').on('click', function(event) {

var target = $( $(this).attr('href') );

if( target.length ) {
event.preventDefault();
$('html, body').animate({
scrollTop: target.offset().top
}, 1000);
}

});


