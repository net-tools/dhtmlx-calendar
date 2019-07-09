
/**
 * CalendarHelper
 */
var CalendarHelper = {
	
	/**
	 * Constructor of a calendar linked to a input field
	 *
	 * @param string id The `id` HTML attribute of the input field to link the calendar to
	 * @param Object options Object litteral with config parameters. DateFormat defaults to "%d/%m/%y", weekStart to 'monday', and css to 'dhx_widget--bordered'
	 * @return Calendar Returns a Calendar object linked to the input field
	 */ 
	popup : function(id, options)
	{
		// creating the calendar with appropriate config values ; not linked now (first parameter == null), since we want it as a popup
		var myCalendar = new dhx.Calendar(null, {
				dateFormat:options.dateFormat || "%d/%m/%y",
				weekStart:options.weekStart || 'monday',
				css : options.css || "dhx_widget--bordered"
			});
		
		
		// creating the popup frame and adding the calendar in the frame
		var popup = new dhx.Popup();
		popup.attach(myCalendar);
		
		
		// event handling (click on input field and change on calendar)
		var dateInput = document.getElementById(id);
		dateInput.addEventListener("click", function() 
								   		{ 
											// checking if field is set with a date, and if the date pattern is verified
											if ( dateInput.value != '' )
												myCalendar.setValue(dateInput.value);
											else
												myCalendar.setValue(new Date());
					

											popup.show(dateInput); 
										}
								  );	
		myCalendar.events.on("change", function() {
			// setting input field value from calendar
    		dateInput.value = myCalendar.getValue();
    		popup.hide();
		});
		
		
		return myCalendar;		
	}
	
}