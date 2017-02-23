class Tag
{
	constructor(tagName)
	{
		this.name = tagName;
		this.allMyTags = [];
	}

	addNewEntry(theEntry)
	{
		this.allMyTags.push(theEntry);
	}

	removeEntry(theEntry)
	{
		this.allMyTags.splice(this.allMyTags.indexOf(theEntry),1);
	}
}