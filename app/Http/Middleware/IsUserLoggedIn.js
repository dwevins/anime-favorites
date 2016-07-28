'use strict';

const View = use('View');
class IsUserLoggedIn {

  * handle(request, response, next) {
    // get logged in user
    const user = yield request.auth.getUser();

    // make user available to all templates as "currentUser"
    View.global('currentUser', user);
    yield next;
  }

}

module.exports = IsUserLoggedIn;
