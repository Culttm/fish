var User = require('../../api/models/User'),
    sinon = require('sinon'),
    assert = require('assert');

describe('User Model', function () {
    describe('should not create a user', function () {
        it ('without params ', function (done) {
            User.create({}).exec(function(e, u) {
                assert.notEqual(e, null);
                done();    
            });
            
        });
    });
});