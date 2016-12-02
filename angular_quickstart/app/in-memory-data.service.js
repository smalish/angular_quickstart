"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Mr. Nice111' },
            { id: 2, name: 'Narco' },
            { id: 3, name: 'Bombasto' },
            { id: 4, name: 'Celeritas' },
            { id: 5, name: 'Magneta' },
            { id: 6, name: 'RubberMan' },
            { id: 7, name: 'Dynama' },
            { id: 8, name: 'Dr IQ' },
            { id: 9, name: 'Magma' },
            { id: 10, name: 'Tornado' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map