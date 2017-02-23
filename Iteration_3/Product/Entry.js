class Entry
{
	constructor(phase, project, tag)
	{
		this.project = project;
		this.tag = tag;
		this.phase = phase;
		this.startTime  = new Date();
		this.startTimeShow = new Date(this.startTime.getFullYear(),this.startTime.getMonth(),this.startTime.getDate(),this.startTime.getHours(),this.startTime.getMinutes(),this.startTime.getSeconds());//this.theTimer.startTime;
		this.interruptTime = 0;
		this.stopTime  = null;
		this.stopTimeShow = null;
		this.deltaTime = 0;
	} 

	changeStartTimeHandler(time)
	{
		this.startTime.setFullYear(time.getFullYear());
		this.startTime.setMonth(time.getMonth());
		this.startTime.setDate(time.getDate());
		this.startTime.setHours(time.getHours());
		this.startTime.setMinutes(time.getMinutes());
		this.startTime.setSeconds(time.getSeconds());
	}

	changeStopTimeHandler(time)
	{
		this.stopTime.setFullYear(time.getFullYear());
		this.stopTime.setMonth(time.getMonth());
		this.stopTime.setDate(time.getDate());
		this.stopTime.setHours(time.getHours());
		this.stopTime.setMinutes(time.getMinutes());
		this.stopTime.setSeconds(time.getSeconds());
	}

	addProject(project)
	{
		this.project = project;
		project.addNewEntry(this);
	}

	changeProject(newProject)
	{
		if (this.project)
		{
			this.project.removeEntry(this);
		}
		this.addProject(newProject);
	}

	changeTag(newTag)
	{
		if (this.tag)
		{
			this.tag.removeEntry(this);
		}
		this.addTag(newTag);
	}

	addTag(theTag)
	{
		this.tag = theTag;
		this.tag.addNewEntry(this);
	}

	saveStopDate()
	{
		this.stopDate = new Date();
	} 

	saveStopTime()
	{
		this.stopTime = new Date();
		this.stopTimeShow = new Date(this.stopTime.getFullYear(),this.stopTime.getMonth(),this.stopTime.getDate(),this.stopTime.getHours(),this.stopTime.getMinutes(),this.stopTime.getSeconds());
	}

	saveInterruptTime()
	{
		let arrayDeltaData = this.deltaTime.split(":");
		let deltaSeconds = parseInt(arrayDeltaData[0])*3600 + parseInt(arrayDeltaData[1])*60 + parseInt(arrayDeltaData[2]);
		let totalSeconds = parseInt((this.stopTime.getTime() - this.startTime.getTime())/1000);
		let intTime = totalSeconds - deltaSeconds;
		this.interruptTime = parseInt(intTime/3600)+':'+ parseInt(parseInt(intTime%3600)/60)+':'+ parseInt(parseInt(intTime%3600)%60);
	}

	saveDeltaTime(time)
	{
		this.deltaTime = time;
	}  

	selfDelete()
	{
		if (this.project)
			this.project.removeEntry(this);
		if (this.tag)
			this.tag.removeEntry(this);
	}
}