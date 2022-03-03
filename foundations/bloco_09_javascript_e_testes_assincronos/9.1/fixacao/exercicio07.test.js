const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toLowerCase());
  }, 500);
};

it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('TEST', (str) => {
    try {
      expect(str).toBe('test');
      done();
    } catch (error) {
      done(error);
    }
  });
});