class Project
{
  	constructor(name)
	{
	  	this.name         = name;
	    this.allMyEntries = [];
	}
	addEntry(phase)
	{
		let newEntry = new Entry(this, phase);
		this.allMyEntries.push(newEntry);
	}

}