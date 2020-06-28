import Controller from '@ember/controller';
import { task, lastValue } from 'ember-concurrency-decorators';
import User from 'ember-ts-template/models/user';

export default class ApplicationController extends Controller {
  public helloWorld = 'Hello World!';

  @lastValue('getUsers') public users: User[];

  @task
  async getUsers() {
    return this.store.findAll('user');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'application': ApplicationController;
  }
}
