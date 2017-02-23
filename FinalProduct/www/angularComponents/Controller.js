myApp.controller('myController',['$scope', '$http', function($scope, $http){
	$scope.theModel = new Model();
	$scope.report = null;
	$scope.state = 'Stop';
	$scope.seconds  = 0;
	$scope.minutes = 0;
	$scope.hours  = 0;
	$scope.days   = 0;
	$scope.entryData = [{"title":"", "project":"null", "tag":"null"}];

/***********************button & ng-check***************************/
	
	$scope.startClick = function()
	{
    	console.log($scope.state);
    	if (($scope.state == 'Stop') || ($scope.state == 'Pause'))
    	{
    		if (!$scope.theEntry)
    		{
	    		$scope.theEntry = $scope.theModel.addNewEntry($scope.entryData.title, $scope.entryData.project, $scope.entryData.tag);
	    		$scope.entryData = [{"title":"", "project":"null", "tag":"null"}];
    		}
    		clockSet();
    		$scope.state = 'Start';
    	}
	};
	$scope.pauseClick = function()
	{
    	$scope.state = 'Pause';
    	console.log("Pause");
    	pauseClock();
	};
	$scope.stopClick = function()
	{
		if ($scope.theEntry)
		{
			$scope.theEntry.saveStopTime();
			$scope.theEntry.saveDeltaTime(getDeltaTime());
			$scope.theEntry.saveInterruptTime();
			//$scope.theModel.pushEntryReportArray($scope.theEntry);
			$scope.theEntry = null
		}
    	stopClock();
    	$scope.state = 'Stop';
	};
	$scope.createProjectClick = function(name)
	{
		if (name)
		{
			$scope.entryData.project = $scope.theModel.addNewProject(name);
		}
	};
	$scope.createTagClick = function(name)
	{
		if (name)
		{
			$scope.entryData.tag = $scope.theModel.addNewTag(name);
		}
	};
    $scope.tagSelect = function(tag)
    {
    	$scope.entryData.tag = tag;
    }
    $scope.projectSelect = function(project)
    {
    	$scope.entryData.project = project;
    };
    $scope.resetEntryProject= function(indexOfEntry,project)
    {
    	let changingEntry = $scope.theModel.getEntryByIndex(indexOfEntry);
    	changingEntry.changeProject(project);
    };
    $scope.resetEntryTag= function(indexOfEntry,tag)
    {
    	let changingEntry = $scope.theModel.getEntryByIndex(indexOfEntry);
    	changingEntry.changeTag(tag);
    	console.log(changingEntry);
    };
    $scope.selfDelete = function(index)
    {
    	$scope.theModel.deleteEntryByIndex(index);
    };
    $scope.generateReport = function()
    {
    	$scope.theModel.generateReport();
    };
    $scope.save = function()
    {
    	$scope.theModel.saveReportFile();
    };
    $scope.readFile = function($fileContent)
    {
    	console.log($fileContent);
  		$scope.theModel.insertDataToSystem($fileContent);
    };

/***********************Clock********************************/
	let getDeltaTime = function()
	{
		return $scope.hours + ":" + $scope.minutes + ":" + $scope.seconds;
	};
	let clockSet = function(){
		$scope.theClock = setInterval(function(){
			$scope.$apply(function () {
				clockCount();
			});	
		},1000);
	};
	let clockCount = function()
	{
		$scope.seconds++;
		if ($scope.seconds >= 60)
		{
			$scope.seconds = 0;
			$scope.minutes++;
		}
		if ($scope.minutes >= 60)
		{
			$scope.minutes = 0;
			$scope.hours   ++;
		}
		if ($scope.hours >= 24)
		{
			//$scope.hours = 0;
			$scope.days   ++;
		}
		if ($scope.days >= 365)
		{
			$scope.days = 0;
		}
	};
	let pauseClock = function(){
		
		clearInterval($scope.theClock);
	};
	let stopClock = function(){
		
		clearInterval($scope.theClock);
		$scope.seconds  = 0;
		$scope.minutes = 0;
		$scope.hours  = 0;
	};
}]);