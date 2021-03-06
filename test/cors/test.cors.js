// Generated by CoffeeScript 2.3.1
(function() {
  var CORS_SERVER;

  CORS_SERVER = '127.0.0.1.xip.io:3000';

  mocha.setup({
    ignoreLeaks: true
  });

  describe('CORS', function() {
    it('should allow access to dynamic resource', function(done) {
      return $.get(`http://${CORS_SERVER}/`, function(data, status, xhr) {
        expect(data).to.eql('Hello world');
        return done();
      });
    });
    it('should allow PUT access to dynamic resource', function(done) {
      return $.ajax(`http://${CORS_SERVER}/`, {
        type: 'PUT'
      }).done(function(data, textStatus, jqXHR) {
        expect(data).to.eql('Hello world');
        return done();
      });
    });
    it('should allow PATCH access to dynamic resource', function(done) {
      return $.ajax(`http://${CORS_SERVER}/`, {
        type: 'PATCH'
      }).done(function(data, textStatus, jqXHR) {
        expect(data).to.eql('Hello world');
        return done();
      });
    });
    it('should allow HEAD access to dynamic resource', function(done) {
      return $.ajax(`http://${CORS_SERVER}/`, {
        type: 'HEAD'
      }).done(function(data, textStatus, jqXHR) {
        expect(jqXHR.status).to.eql(200);
        return done();
      });
    });
    it('should allow DELETE access to dynamic resource', function(done) {
      return $.ajax(`http://${CORS_SERVER}/`, {
        type: 'DELETE'
      }).done(function(data, textStatus, jqXHR) {
        expect(data).to.eql('Hello world');
        return done();
      });
    });
    it('should allow OPTIONS access to dynamic resource', function(done) {
      return $.ajax(`http://${CORS_SERVER}/`, {
        type: 'OPTIONS'
      }).done(function(data, textStatus, jqXHR) {
        expect(jqXHR.status).to.eql(200);
        return done();
      });
    });
    it('should allow access to static resource', function(done) {
      return $.get(`http://${CORS_SERVER}/static.txt`, function(data, status, xhr) {
        expect($.trim(data)).to.eql("Hello world");
        return done();
      });
    });
    return it('should allow post resource', function(done) {
      return $.ajax({
        type: 'POST',
        url: `http://${CORS_SERVER}/cors`,
        beforeSend: function(xhr) {
          return xhr.setRequestHeader('X-Requested-With', 'XMLHTTPRequest');
        },
        success: function(data, status, xhr) {
          expect($.trim(data)).to.eql("OK!");
          return done();
        }
      });
    });
  });

}).call(this);
