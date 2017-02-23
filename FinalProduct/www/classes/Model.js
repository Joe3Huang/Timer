class Model
{
	constructor()
	{
		this.allMyEntries      = [];
		this.allMyProjects     = [];
		this.allMyTags         = [];
		this.report = null;
	}

	addNewEntry(name,project,tag)
	{
		let theEntry = new Entry(name,project,tag);
		if (project)
		{
			project.addNewEntry(theEntry);
		}
		if (tag)
		{
			tag.addNewEntry(theEntry);
		}
		this.allMyEntries.push(theEntry);
		return theEntry;
	}

	addNewProject(name)
	{
		for (let i = 0;i < this.allMyProjects.length;i++) 
		{
			if (this.allMyProjects[i].name == name)
			{
				return this.allMyProjects[i];
			}
		}
		let thePro  = new Project(name);
		this.allMyProjects.push(thePro);
		return thePro;
	}

	addNewTag(name)
	{
		for (let i = 0;i < this.allMyTags.length;i++) 
		{
			if (this.allMyTags[i].name == name)
			{
				return this.allMyTags[i];
			}
		}
		let theTag = new Tag(name);
		this.allMyTags.push(theTag);
		return theTag;
	}

	getEntryByIndex(index)
	{
		index = this.allMyEntries.length - 1 - index;
		return this.allMyEntries[index];
	}

	deleteEntryByIndex(index)
	{
		index = this.allMyEntries.length - 1 - index;
		this.allMyEntries[index].selfDelete();
		this.allMyEntries.splice(index,1);
	}

	generateReport()
	{
		this.report = new Report(this.allMyEntries);
		this.report.collectEnrtiesMonthly();
		//this.report.generateReport();
	}

	saveReportFile()
	{
		let saveFile = new SaveFile();
		saveFile.doSave(this.report.generateReport());
	}

	insertDataToSystem(string)
	{
		let cArray = [];
    	let entryBuild = false;
        cArray = string.split('\r\n');
        let entry = null;
		for (let i = 0;i < cArray.length;i++) 
		{ 
			if (cArray[i].indexOf("Entry") >= 0)
			{
				entryBuild = true;
			}
			if (entryBuild)
			{
				//let entry = new Entry();
				entry = this.addNewEntry();
				entryBuild = false;
			}
			if (cArray[i].indexOf("Phase") >= 0)
			{
				let contain = cArray[i].substr(cArray[i].indexOf("= ") + 2);
				if(contain != "undefined")
				{
					entry.phase = contain;
				}
			}
			if (cArray[i].indexOf("Project") >= 0)
			{
				var contain = cArray[i].substr(cArray[i].indexOf("= ") + 2);
				if(contain != "undefined")
				{
					let addNewProject = this.addNewProject(contain);
					entry.changeProject(addNewProject);
				}
				
				//console.log(contain);
			}
			if (cArray[i].indexOf("Tag") >= 0)
			{
				let contain = cArray[i].substr(cArray[i].indexOf("= ") + 2);
				if(contain != "undefined")
				{
					let addNewTag = this.addNewTag(contain);
					entry.changeTag(addNewTag);
				}
				
			//	console.log(contain);
			}
			if (cArray[i].indexOf("Start") >= 0)
			{
				let contain = cArray[i].substr(cArray[i].indexOf("= ") + 2);
				if(contain != "undefined")
				{
					let date = new Date(contain);
					entry.startTimeShow = date;
					entry.changeStartTimeHandler(date);
					//console.log(date);
				}
			}
			if (cArray[i].indexOf("Interrupt") >= 0)
			{
				let contain = cArray[i].substr(cArray[i].indexOf("= ") + 2);
				if(contain != "undefined")
				{
					entry.interruptTime = contain;
				}
			}
			if (cArray[i].indexOf("Stop Time") >= 0)
			{
				let contain = cArray[i].substr(cArray[i].indexOf("= ") + 2);
				if(contain != "undefined")
				{
					let date = new Date(contain);
				//	console.log(date);
					entry.stopTimeShow = date;
					entry.stopTime = date;
					//entry.changeStopTimeHandler(date);
					
				}
			}
			if (cArray[i].indexOf("Delta") >= 0)
			{
				let contain = cArray[i].substr(cArray[i].indexOf("= ") + 2);
				if(contain != "undefined")
				{
					entry.saveDeltaTime(contain);
				}
			}
		}
	    
	}
}