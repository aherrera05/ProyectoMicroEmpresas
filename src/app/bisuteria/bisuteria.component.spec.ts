import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BisuteriaComponent } from './bisuteria.component';

describe('BisuteriaComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BisuteriaComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BisuteriaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularTwoWayDatabinding'`, () => {
    const fixture = TestBed.createComponent(BisuteriaComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularTwoWayDatabinding');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BisuteriaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angularTwoWayDatabinding app is running!');
  });
});