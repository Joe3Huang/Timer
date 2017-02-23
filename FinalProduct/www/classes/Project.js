class Project
{
  	constructor(name)
	{
	  	this.name = name;
	    this.allMyEntries = [];
	}

	addNewEntry(theEntry)
	{
		this.allMyEntries.push(theEntry);
	}

	removeEntry(theEntry)
	{
		if (theEntry)
		{
			this.allMyEntries.splice(this.allMyEntries.indexOf(theEntry),1);
		}		
	}
}