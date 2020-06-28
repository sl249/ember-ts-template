import Route from '@ember/routing/route';
import ApplicationController from 'ember-ts-template/controllers/application';
import { taskFor } from 'ember-concurrency-ts';

export default class ApplicationRoute extends Route {

  setupController(controller: ApplicationController, model, transition) {
    super.setupController(controller, model, transition);
    taskFor(controller.getUsers).perform();
  }

}
