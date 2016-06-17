describe('demo e2e tests', function() {
  it('should navigate to the angular.at homepage', function() {
    browser.get('http://angular.at');

    expect(element(by.css('.navbar-brand')).getText()).toEqual('Angular.at');
  });
});