import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  class LocalStorageStub {
    constructor(){}
    retrieve(key: string) {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [{
        provide: LocalStorageService,
        useValue: new LocalStorageStub()
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
