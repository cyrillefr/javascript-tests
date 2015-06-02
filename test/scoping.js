describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
        request;

    request = function (callback) {
      //modified line
      //need to use call because it tries to return function(){return this.foo}
      //but inside the function, this is rebound, we must pass him the upper this object with the call method
      //return callback();
      return callback.call(this);
    };

    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function() {
      return this.foo;
    };

    Module.prototype.req = function() {
      //modified line need use call because this in the request function is bound to the global object
      //so this.foo is out of scope
      return request.call(this, this.method);
      //return request(this.method);
    };

    expect(mod.req()).toBe('bar');
  });
});