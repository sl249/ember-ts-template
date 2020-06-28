import DS from 'ember-data';

export default class User extends DS.RESTAdapter {

}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data/types/registries/adapter' {
  export default interface AdapterRegistry {
    'user': User;
  }
}
