class Report
{
	constructor(allMyEntries)
	{
		this.allMyEntries = allMyEntries;
		this.reportArray  = [];
	}

	generateReport()
	{
    	let result = 'Monthly Report \r\n\r\n';//Phase,Project,Tag,Start Time,Interrupt,Time,Stop Time,Delta Time' + '\n';
    	for (let i = 0; i < this.reportArray.length;i ++) 
    	{
    		let entry  = this.reportArray[i];
    		//console.log(entry);
    		result += 'Entry '+ (i + 1) + '\r\n';
			if (typeof(entry.phase) !== 'undefined')
			{
				result += 'Phase = '+ entry.phase + '\r\n';
			}
			else
			{
				result += 'Phase = '+ 'undefined' + '\r\n';
			}
			if (typeof(entry.project) !== 'undefined')
			{
				result +='Project = '+ entry.project.name + '\r\n';	
			}
			else
			{
				result += 'Project = '+ 'undefined' + '\r\n';
			}
			if (typeof(entry.tag) !== 'undefined')
			{
				result +='Tag = '+ entry.tag.name + '\r\n';
			}
			else
			{
				result += 'Tag = '+ 'undefined' + '\r\n';
			}
    		result += 'Start Time = '+  entry.startTime.getFullYear() + '-' +  (entry.startTime.getMonth() + 1) + '-' +  entry.startTime.getDate() + ' ' +  entry.startTime.getHours()  + ':' +  entry.startTime.getMinutes() + ':' + entry.startTime.getSeconds() + '\r\n';
    		result += 'Interrupt Time = ' + entry.interruptTime +'\r\n';
    		result += 'Stop Time = ' + entry.stopTime.getFullYear() + '-' +  (entry.stopTime.getMonth() + 1) + '-' +  entry.stopTime.getDate() + ' ' +  entry.stopTime.getHours()  + ':' +  entry.stopTime.getMinutes() + ':' + entry.startTime.getSeconds() + '\r\n';
    		result += 'Delta Time = ' + entry.deltaTime + "\r\n"+ "\r\n";
    	}
    	return result; 
	}

	collectEnrtiesMonthly()
	{
		this.reportArray = [];
   		let month = new Date().getMonth();
    	for (let i = 0; i < this.allMyEntries.length;i ++) 
    	{
    		let entry = this.allMyEntries[i];
    		console.log(entry.startTime.getMonth());
    		if (entry.startTime.getMonth() == month)
			{
				this.reportArray.push(entry);
			}
    	} 
	}

}