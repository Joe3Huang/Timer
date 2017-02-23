class Entry
{
	constructor(project, phase)
	{
		this.theTimer = new Timer();
		this.project = project;
		this.phase = phase;
		this.date = this.theTimer.date;
		this.startTime = this.theTimer.startTime;
		this.interruptTime = 0;
		this.stopTime = 0;
		this.deltaTime = 0;
	} 
}