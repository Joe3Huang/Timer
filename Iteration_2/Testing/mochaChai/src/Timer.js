class Timer
{
	constructor()
	{
		let currentTime = new Date()
		this.startTime = currentTime.getHours() + "/" + currentTime.getMinutes() + "/" + currentTime.getSeconds();
		this.startDate = currentTime.getDate() + "/" + currentTime.getYear(); 
		this.second = 0;
		this.theClock = 0;
	}
	setClock()
	{
		this.theClock = setInterval(function(){
			$scope.$apply(function(){
				this.second  += 1;
			});
		}.bind(this),1000);
	}
	stopClock()
	{
		clearInterval(this.theClock);
	}
}