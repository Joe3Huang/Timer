class Model
{
	constructor()
	{
		this.allMyEntries      = [];
		this.allMyProjects     = [];
		this.allMyTags         = [];
		this.allMyEntryReports = [];
	}
	addNewEntry(name,project,tag,startDate,startTime)
	{
		let theEntry = new Entry(name,project,tag,startDate,startTime);
		if(project)
		{
			project.addNewEntry(theEntry);
		}
		if(tag)
		{
			tag.addNewEntry(theEntry);
		}
		this.allMyEntries.push(theEntry);
		return theEntry;
	}
	addNewProject(name)
	{
		let thePro = new Project(name);
		this.allMyProjects.push(thePro);
		return thePro;
	}

	addNewTag(name)
	{
		let theTag = new Tag(name);
		this.allMyTags.push(theTag);
		return theTag;
	}
	pushEntryReportArray(theEntry)
	{
		// let startTime = theEntry.startDate + '/' + theEntry.startTime;
		// let stopTime = theEntry.stopDate + '/' + theEntry.stopTime;
		// let theEntryReport = new EntryReport(theEntry.phase,theEntry.project,theEntry.tag,theEntry.startTime,theEntry.stopTime,theEntry.interruptTime,theEntry.deltaTime);
		this.allMyEntryReports.push(theEntry);
		//return theEntryReport;
	}
	getEntryByIndex(index)
	{
		return this.allMyEntries[index];
	}
	deleteEntryByIndex(index)
	{
		index = this.allMyEntries.length - 1 - index;
		this.allMyEntries[index].selfDelete();
		this.allMyEntries.splice(index,1);
		this.allMyEntryReports.splice(index,1);

		//return this.allMyEntries[index];
	}
}