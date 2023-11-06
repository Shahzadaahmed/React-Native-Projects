/*
    AUTHOR: QASIM ZUBAIR
   SUMMARY: HANDLES TIME AND DATE RELATED QUERIES AND FUNCTIONS. TO PUT TIME AND DATE RELATED FUNCTION INTO
            ONE PLACE SO THEY CAN BE REUSED IN THE APP.
*/

// PASS THE DATE OBJECT AND THIS FUNCTION WILL CONVERT THE TIME INTO AM/PM FORMAT.
export const formatAMPM = (date: any) =>
{
	// IF A VALID VALUE IS PROVIDED THEN FORMAT THE TIME OTHERWISE DO NOTHING.
	if (date)
	{
		let hours = date.getHours(); // GET HOUR FROM THE DATE.
		let minutes = date.getMinutes(); // GET MINUTES FROM THE GIVEN DATE TIME.
		let ampm = hours >= 12 ? 'PM': 'AM'; // SET THE TIME IN AM/PM FORMAT.
		hours = hours % 12; // DISPLAY THE TIME IN  12 HOURS FORMAT AND NOT IN 24 HOURS.
		hours = hours ? hours: 12; // THE HOUR '0' SHOULD BE '12'
		minutes = minutes < 10 ? '0' + minutes: minutes; // MAKE THE MINUTES 2 DIGITS. 9 WILL BE SHOWN AS 09.
		let strTime = hours + ':' + minutes + ' ' + ampm; // TIME STRING IN A REQUIRED FORMAT.
		return strTime; // RETURN THE TIME STRING.
	}
	else // OTHERWISE DON'T DO ANYTHING AND RETURN THE VARIABLE UNPROCESSED.
	{
		return date;
	}
}

// GET THE CURRENT TIME.
export const getCurrentTime = () =>
{
	let date = new Date(); // GET THE CURRENT DATE TIME OBJECT.
	return formatAMPM (date); // RETURN THE DATE TIME IN AM/PM FORMAT.
}

// PARSE THE MYSQL DATETIME STRING TO JAVASCRIPT DATE TIME OBJECT.
export const parseDateTime = (datetime: any) =>
{
	// IF NO VALID DATE WAS PROVIDED THE RETURN.
	if (!datetime || datetime == "" || typeof datetime !== "string")
	{
		return datetime; // RETURN DATE TIME.
	}
	
	// SPLIT TIMESTAMP INTO [Y, M, D, H, M, S]
	let t: any = datetime.split (/[- :]/);
	
	// APPLY EACH ELEMENT TO THE DATE FUNCTION
	return new Date (Date.UTC (t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
}

// GET THE TIME FROM THE GIVEN DATE. THIS DATE WILL BE IN MYSQL DB FORMAT.
export const getTime = (datetime: any) =>
{
	let providedDate = parseDateTime (datetime); // CONVERT THE DATE STRING TO JAVASCRIPT DATE TIME OBJECT.
	let time = formatAMPM (providedDate); // CONVERT THE TIME INTO AM/PM FORMAT
	return time; // RETURN FORMATTED TIME.
}

// GET THE TIME FROM THE GIVEN DATE. THIS DATE WILL BE IN MYSQL DB FORMAT.
export const showChatListTime = (datetime: any) =>
{
	// IF A VALID DATE TIME IS PROVIDED THEN SET IT IN PROPER FORMAT.
	if (datetime)
	{
		let providedDate = parseDateTime (datetime); // CONVERT THE DATE STRING TO JAVASCRIPT DATE TIME OBJECT.
		let time = formatAMPM (providedDate); // CONVERT THE TIME INTO AM/PM FORMAT
		return time; // RETURN TIME.
	}
	else // OTHERWISE RETURN THE SAME VARIABLE WITH OUT ANY KIND OF PROCESSING.
	{
		return datetime;
	}
}

// PARSE THE MYSQL DATETIME STRING AND CONVERT IT INTO REQUIRED FORMAT.
// SECOND PARAMETER IS FORMAT: FOR NOW THERE IS ONLY ONE FORMAT "D". IF PASSED IT WILL ONLY RETURN THE DATE BY DAY
// RELEVANT TO CURRENT DATE. FOR EXAMPLE, TODAY, YESTERDAY OR JULY 7.
export const getDateTime = (datetime: any, format?: string) =>
{
	// IF DATE TIME IS NOT PROVIDED THE RETURN EMPTY.
	if (!datetime || datetime == "")
	{
		return "";
	}
	let providedDate;
	let compDate;
	
	// IF THE TYPE IS ALREADY DATE TIME THEN JUST RETURN IT AS IT IS.
	if (typeof datetime !== "string")
	{
		providedDate = datetime;
		compDate = datetime;
	}
	else
	{
		// SPLIT TIMESTAMP INTO [Y, M, D, H, M, S]
		let t: any [] = datetime.split (/[- :]/);
		
		// APPLY EACH ELEMENT TO THE DATE FUNCTION.
		providedDate = new Date (Date.UTC (t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
		compDate = new Date (Date.UTC (t[0], t[1]-1, t[2], t[3], t[4], t[5])); // new Date(t[0],
	}
	let today = new Date();
	today.setHours (0);
	today.setMinutes (0);
	today.setSeconds (0);
	today.setMilliseconds (0);
	
	// t[1]-1, t[2]); // MONTH
	
	// - 1 BECAUSE JANUARY == 0
	compDate.setHours (0);
	compDate.setMinutes (0);
	compDate.setSeconds (0);
	compDate.setMilliseconds (0);
	let diff = today.getTime() - compDate.getTime(); // GET THE DIFFERENCE BETWEEN TODAY (AT
	// 00:00:00) AND THE DATE
	let time = formatAMPM (providedDate);
	
	// IN CASE THE DATE IS OF TODAY, THEN SHOW "TODAY".
	if (compDate.getTime() == today.getTime())
	{
		return (format == "D" ? "Today": "Today at " + time);
	}
	else if (diff <= (24 * 60 * 60 *1000))
	{
		return (format == "D" ? "Yesterday": "Yesterday at " + time);
	}
	else
	{
		const monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"]; // MONTH NAME
		let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		let day = days [providedDate.getDay()];
		let month = monthNames [providedDate.getMonth()];
		let date = providedDate.getDate();
		let year = providedDate.getFullYear();
		return (format == "D" ? date + " " +month +" "+year : (day + " | " + month +" "+date+ ", "+ year + " | " + time));
	}
}

// RETURN THE DATETIME STRING THAT CAN BE STORED IN DATABASE IN FORMAT: Y-m-d H:i:s
export const convertDateTimeToDbString = (datetime: Date) =>
{
	let providedDate = parseDateTime (datetime);
	let year = providedDate.getFullYear();
	let month = providedDate.getMonth();
	let date = providedDate.getDate();
	let hours = datetime.getHours(); // GET HOUR FROM THE DATE.
	let minutes: number = datetime.getMinutes();
	
	// MAKE THE MINUTES 2 DIGITS. 9 WILL BE SHOWN AS 09.
	let minuteString: string = minutes < 10 ? '0' + minutes: (minutes).toString();
	let seconds = datetime.getSeconds(); // GET SECONDS.
	let secondsString: string = seconds < 10 ? '0' + seconds: (seconds).toString();
	return `${year}-${month}-${date} ${hours}: ${minuteString}: ${secondsString}`;
}

// GET THE DATE STRING FROM A GIVE DATE TIME STRING. THIS DATE TIME IS MOSTLY COMING FROM MYSQL DATABASE.
export const getDate = (datetime: any) =>
{
	// IF A VALID VALUE IS PROVIDED THEN FORMAT THE TIME OTHERWISE DO NOTHING.
	if (datetime)
	{
		let providedDate = parseDateTime (datetime);
		let month = providedDate.getMonth();
		let date = providedDate.getDate();
		let year = providedDate.getFullYear();
		return `${month}-${date}-${year}`;
	}
	else
	{
		return datetime;
	}
}
