import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { UiModule } from '@shopnx/ui';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule],
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    // const router = TestBed.inject(Router);
    // fixture.ngZone?.run(() => router.navigate(['/']));
    // tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Home');
  }));
});
