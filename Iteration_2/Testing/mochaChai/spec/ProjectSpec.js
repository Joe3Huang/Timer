/*
  References:
  http://chaijs.com/api/bdd/
  https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/
  http://dailyjs.com/2012/02/23/chai/
*/

describe("Project", function() {

  var entry;
  var project;

  beforeEach(function() {
    entry = new Entry();
    project = new Project();
  });
  
  it("should be able to add an Entry", function() {
   project.addEntry(entry);
    expect(project.allMyEntries[0]).to.equal(entry);
  });

});

describe("Entry", function() {
  var entry;
  beforeEach(function() {
    entry = new Entry();
  });

  it("should be able to read the start time and date", function() {
    expect(entry.startTime).to.be.a('string');
    expect(entry.startDate).to.be.a('string');
  });

  it("should be able to save the stop time", function() {
    entry.saveStopTime('5:46:21 PM');
    expect(entry.stopTime).to.equal('5:46:21 PM');
  });
});

describe("Clock", function() {
  var clock;
  beforeEach(function() {
    clock = new Clock();
  });

  it("should be able to counting time", function() {

    var clockCount = function()
    {
      clock.seconds++;
      if(clock.seconds >= 60)
      {
        clock.seconds = 0;
        clock.minutes ++;
      }
      if(clock.minutes >= 60)
      {
        clock.minutes = 0;
        clock.hours ++;
      }
      if(clock.hours >= 24)
      {
        clock.days ++;
      }
      if(clock.days >= 365)
      {
        clock.days = 0;
      }
    }
    expect(clockCount).to.change(clock,'seconds');

  });

  it("should be able to read the delta time", function() {
    var deltalTime = clock.getDeltaTime();
    expect(deltalTime).to.be.a('string');
  });
});
//   it("tells the current song if the user has made it a favorite", function() {
//     player.play(song);
//     player.makeFavorite();

//     expect(song.isFavorite).to.be.true;
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).to.throw(Error, /already playing/);
//     });
//   });
// });
