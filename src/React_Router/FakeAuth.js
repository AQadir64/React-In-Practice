export const fakeAuth = {
  isauthenticated: false,
  authentcate(cb) {
    fakeAuth.isauthenticated = true;
    setTimeout(cb, 1000);
  },
  signout(cb) {
    fakeAuth.isauthenticated = false;
    setTimeout(cb, 1000);
  },
};
