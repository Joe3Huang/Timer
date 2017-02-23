class Entry
{
	constructor(phase,project)
	{
		this.theTimer      = new Timer();
		this.project       = project;
		this.phase         = phase;
		this.startDate     = this.theTimer.startDate;
		this.startTime     = this.theTimer.startTime;
		this.interruptTime = 0;
		this.stopTime      = 0;
		this.deltaTime     = 0;
	} 
	saveStopTime(time)
	{
		this.stopTime = time;
	}
	saveDeltaTime(time)
	{
		this.deltaTime = time;
	}
	svaeInterruptTime(time)
	{
		this.interruptTime = time;
	}
}