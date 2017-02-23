class Clock
{
	constructor()
	{
		let currentTime = new Date()
		this.startTime = currentTime.getHours() + "/" + currentTime.getMinutes() + "/" + currentTime.getSeconds();
		this.startdDate = currentTime.getDate() + "/" + currentTime.getYear(); 
		this.seconds = 0;
		this.minutes = 0;
		this.hours = 0;
		this.days = 0;
		this.theClock = null;
	}

	setClock()
	{
		this.theClock = setInterval(function(){
				this.clockCount();
		},1000);
	}

	stopClock()
	{
		clearInterval(this.theClock);
	}

	getDeltaTime()
	{
		return this.hours + ":" + this.minutes + ":" + this.seconds;
	}

	clockCount()
	{
		this.seconds++;
		if (this.seconds >= 60)
		{
			this.seconds = 0;
			this.minutes ++;
		}
		if (this.minutes >= 60)
		{
			this.minutes = 0;
			this.hours ++;
		}
		if (this.hours >= 24)
		{
			this.days ++;
		}
		if (this.days >= 365)
		{
			this.days = 0;
		}
	}

	pauseClock()
	{		
		clearInterval(this.theClock);
	}

	stopClock()
	{
		clearInterval(this.theClock);
		this.seconds  = 0;
		this.minutes = 0;
		this.hours  = 0;
	}
}