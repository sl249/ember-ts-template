export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.get('users', () => {
    const users = [];

    for (let index = 0; index < 50; index++) {
      users.push({
        id: index,
        firstName: 'Jane',
        lastName: `Doe #${index + 1}`,
        username: 'Jane Doe',
        email: 'test@test.com',
        profilePicture: `https://api.adorable.io/avatars/172/test@test.com${index}.png`
      });
    }
    
    return { users };
  });
}
