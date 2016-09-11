require('steal-jasmine');

var defaults = {
    useSandbox: true,
    useClock: true
};

module.exports = function(options) {
    var config = can.extend({}, defaults, options);

    if(config.useClock) {
        jasmine.clock().install();
    }

    if(config.useSandbox) {
        setFixtures(sandbox());
    }


    // cleanup function
    return function() {

        if(config.useClock) {
            jasmine.clock().uninstall();
        }
    };

};
