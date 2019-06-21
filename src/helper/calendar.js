var Helper = {
	
	// constructor
	calendarPopup : function(id, options)
	{
		var myCalendar = new dhx.Calendar(null, {
				dateFormat:options.dateFormat || "%d/%m/%y",
				weekStart:options.weekStart || 'monday',
				css : options.css || "dhx_widget--bordered"
			});
		
		var popup = new dhx.Popup();
		popup.attach(myCalendar);
		
		var dateInput = document.getElementById(id);
		dateInput.addEventListener("click", function() { popup.show(dateInput); });	
		myCalendar.events.on("change", function() {
    		dateInput.value = myCalendar.getValue();
    		popup.hide();
		});
		
		
		return myCalendar;		
	}
	
}