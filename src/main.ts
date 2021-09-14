import './polyfills';
import { enableProdMode } from '@angular/core';
import './global-jasmine';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';
import './test.ts';
import { AppModule } from './app/app.module';
import { getTestBed, TestBed, async } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

platformBrowserDynamicTesting()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

jasmine.getEnv().configure({ random: false });
bootstrap();

function bootstrap() {
  if (window.jasmineRef) {
    location.reload();
    return;
  } else {
    window.onload(new Event('anything'));
    window.jasmineRef = jasmine.getEnv();
  }

  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}
