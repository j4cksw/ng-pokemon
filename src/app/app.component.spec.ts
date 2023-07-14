import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'details', component: DetailsComponent }
  ];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientModule,
      ],
      declarations: [AppComponent, ListComponent, DetailsComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    router.initialNavigation();

    fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should render list page', async () => {
    router.navigate(['/']);
    await fixture.whenStable();
    fixture.detectChanges();

    // List component not null ot undefined or false
    expect(fixture.nativeElement.querySelector('app-list')).toBeTruthy();
  });

  it('should render details page', async () => {
    router.navigate(['/details']);
    await fixture.whenStable();
    fixture.detectChanges();

    // Details component not null ot undefined or false
    expect(fixture.nativeElement.querySelector('app-details')).toBeTruthy();
  });
});
