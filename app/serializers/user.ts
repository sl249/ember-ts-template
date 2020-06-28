import DS from 'ember-data';

export default class User extends DS.RESTSerializer {

}

// DO NOT DELETE: this is how TypeScript knows how to look up your serializers.
declare module 'ember-data/types/registries/serializer' {
  export default interface SerializerRegistry {
    'user': User;
  }
}
