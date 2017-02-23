class Entry
{
	constructor(phase,project,tag,startTime)
	{

		this.project       = project;
		this.tag           = tag;
		this.phase         = phase;
		this.startTime     = startTime;
		this.interruptTime = 0;
		this.stopTime      = 0;
		this.deltaTime     = 0;
	}
	addProject(project)
	{
		
		this.project = project;
		project.addNewEntry(this);
	}
	changeProject(newProject)
	{
		this.project.removeEntry(this);
		this.addProject(newProject);
	}
	changeTag(newTag)
	{
		this.tag.removeEntry(this);
		this.addTag(newTag);
	}
	addTag(theTag)
	{
		this.tag = theTag;
		this.tag.addNewEntry(this);
	}
	saveStopDate(date)
	{
		this.stopDate = date;
	} 
	saveStopTime(time)
	{
		this.stopTime = time;
	}
	saveInterruptTime()
	{
		let arrayDeltaData = this.deltaTime.split(":");
		console.log(arrayDeltaData);
		//let arrayStartData = this.startDate.split("/");
		let arrayStartTime = this.startTime.split(":");
		//let arrayStopData = this.stopDate.split("/");
		let arrayStopTime = this.stopTime.split(":");
		//let totalDate = [];
		let totalTime = [];
		for(let i = 0; i < arrayStartTime.length; i++ )
		{
			//totalDate[i] = parseInt(arrayStopData[i]) - parseInt(arrayStartData[i]);
			totalTime[i] = parseInt(arrayStopTime[i]) - parseInt(arrayStartTime[i]);
		}
		//let days = totalDate[0] + totalDate[1]*30 + totalDate[2]*365 - arrayDeltaData[0] ;
		let totalSeconds = totalTime[0]*3600 + totalTime[1]*60 +totalTime[2];
		let deltaSeconds = parseInt(arrayDeltaData[1])*3600 + parseInt(arrayDeltaData[2])*60 + parseInt(arrayDeltaData[3]);
		console.log(totalTime);
		console.log(totalSeconds);
		console.log(deltaSeconds);
		let intTime = totalSeconds - deltaSeconds;
		console.log(intTime);
		this.interruptTime = 'H:' + parseInt(intTime/3600)+'M:'+ parseInt(parseInt(intTime%3600)/60)+'S:'+ parseInt(parseInt(intTime%3600)%60);

	}
	saveDeltaTime(time)
	{
		this.deltaTime = time;
	}    
	selfDelete()
	{
		if(this.project)
			this.project.removeEntry(this);
		if(this.tag)
			this.tag.removeEntry(this);
	}
}