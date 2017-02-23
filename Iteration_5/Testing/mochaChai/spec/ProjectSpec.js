/*
  References:
  http://chaijs.com/api/bdd/
  https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/
  http://dailyjs.com/2012/02/23/chai/
*/


describe("Report", function() {
  var report;
  beforeEach(function() {
    report  = new Report();
  });

  it("should be able to generate a report in string", function() {
    let output = report.generateReport();
    expect(output).to.be.a('string');
  });
});

