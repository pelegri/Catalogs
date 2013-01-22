// add new widget called repeatHeaders 
$.tablesorter.addWidget({ 
    // give the widget a id 
    id: "repeatHeaders", 
    // format is called when the on init and when a sorting has finished 
    format: function(table) { 

	// This should be changed to cache the headers based on the table object
	// because we are sorting multiple tables.
	// Invalidating the cache will work for now

	// invalidate the cache
	this.headers = null;
	
	// cache and collect all TH headers 
	if(!this.headers) { 
	    var h = this.headers = [];  
	    $("thead th",table).each(function() { 
		h.push( 
		    "<th>" + $(this).text() + "</th>" 
		); 
		
	    }); 
	} 
	
	// remove appended headers by classname. 
	$("tr.repeated-header",table).remove(); 
	
	// loop all tr elements and insert a copy of the "headers"     
	for(var i=0; i < table.tBodies[0].rows.length; i++) { 
	    // insert a copy of the table head every 20th row 
	    if((i%20) == 19) { 
		$("tbody tr:eq(" + i + ")",table).before( 
		    $("<tr></tr>").addClass("repeated-header").html(this.headers.join(""))
		    
		);     
	    } 
	} 
    } 
}); 

/*
 * parseComponentData()
 *
 * data - from JASON parse
 * type - type to include
 *
 * Should rewrite as generic function with callback funtions on columns and tags
 */

function parseComponentData(data, type) {

    var items = [];
    
    /* total hack on the overlap; need to fix */
    items.push('<thead>' +
	       '<tr>' +
	       '<th>Repository</th>' + 
	       '<th>Description</th>' +
	       // '<th>Type</th>' +
	       '</tr>' +
	       '</thead>')

    $.each(data, function(key, val) {
	/* The "_comment_" record is used to document the JSON format */
	if ( key === "_comment_" ) {
	    return true; /* skip this item */
	}

	if (! (val.type === type) ) {
	    return true; /* skip this item */
	}

	items.push('<tr>' +
		   /* Start Row */

		   /* Repository */
		   '<td><span style="white-space: nowrap;"><a href="' + val.url + '" target="_blank">' + key + '</a></span>' +

		   '</td>' +

		   /* Description , Note, Warning*/
		   '<td>' + val.desc +
		   ( ' <span class="question" left="yes" tip="' + val.tags.join(", ") + '">T</span>'
		   ) +
		   ( ( val.note )
		     ? ' <span class="question" tip="' + val.note + '">?</span>'
		     : ''
		   ) +
		   ( ( val.warning )
		     ? ' <span class="warning" tip="' + val.warning + '">!</span>'
		     : ''
		   ) +
		   '</td>' +

		   /* type */
		   /*
		   ( '<td class="centered">' +
		     val.type +
		     '</td>')
		     +
		   */

		   /* End of row */
		   '</tr>');
    });
    return items;
}
    

$(document).ready(function(){

    $.getJSON('/Catalogs/All_Components.json', function(data) {


	/* Stats */
	var compCount = 0;
	$.each(data, function(key, val) {
	    /* The "_comment_" record is used to document the JSON format */
	    if ( key === "_comment_" ) {
		return true; /* skip this item */
	    }
	    compCount += 1;
	});
	$("#stats-compCount").html(compCount); // Inject
	    

	/* Common actions per table */

	function injectAndSort(items, name) {
	    if (items.length > 1) {
		// Inject into page
		$('<table/>', {  
		    'id': name+'Table',
		    html: items.join('')
		}).appendTo('#'+name).addClass("tablesorter");
		
		$("#"+name+"Table").tablesorter({
		    widgets: ['zebra', 'repeatHeaders']     // Stripping looking
		});
	    }
	}


	/* Table of OnDevice Components */

	injectAndSort(parseComponentData(data, "ondevice"),
		      "onDevice");

	/* Table of Official Components */

	injectAndSort(parseComponentData(data, "official"),
		      "official");
	
	/* Table of Community Components */

	injectAndSort(parseComponentData(data, "community"),
		      "community");


	/* ============ */

	/* Add the tooltips */
	$("span.question, span.warning").hover(function() {
	    if ($(this).attr("left")=="yes") {
		$(this).append('<div class="tooltipLeft"><p>' +
			       $(this).attr("tip") +
			       '</p></div>');
	    } else {
		$(this).append('<div class="tooltip"><p>' +
			       $(this).attr("tip") +
			       '</p></div>');
	    }
	}, function () {
	    $("div.tooltip").remove();
	    $("div.tooltipLeft").remove();
	});
    });
});

