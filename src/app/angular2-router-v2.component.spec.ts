import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2RouterV2AppComponent } from '../app/angular2-router-v2.component';

beforeEachProviders(() => [Angular2RouterV2AppComponent]);

describe('App: Angular2RouterV2', () => {
  it('should create the app',
      inject([Angular2RouterV2AppComponent], (app: Angular2RouterV2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-router-v2 works!\'',
      inject([Angular2RouterV2AppComponent], (app: Angular2RouterV2AppComponent) => {
    expect(app.title).toEqual('angular2-router-v2 works!');
  }));
});
