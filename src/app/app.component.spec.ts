import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('trying a test', () => {
  beforeEach(async () => {
    return await TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  });

  it(`should have as title 'Todo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Todo');
  });
});
