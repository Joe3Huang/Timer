class Project
{
  	constructor(name)
	{
	  	this.name         = name;
	    this.allMyEntries = [];
	}
	addNewEntry(theEntry)
	{
		this.allMyEntries.push(theEntry);
	}
	removeEntry(theEntry)
	{
		//console.log("projectRemove");
		//console.log(this.allMyEntries.indexOf(theEntry));
		this.allMyEntries.splice(this.allMyEntries.indexOf(theEntry),1);
		//this.allMyEntries.(theEntry);
	}
}