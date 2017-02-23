class Project
{
  	constructor(name)
	{
	  	this.name         = name;
	    this.allMyEntries = [];
	}
	addEntry(entry)
	{
		this.allMyEntries.push(entry);
	}

}