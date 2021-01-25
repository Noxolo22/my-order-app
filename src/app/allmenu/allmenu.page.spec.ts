import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllmenuPage } from "./AllmenuPage";

describe('AllmenuPage', () => {
  let component: AllmenuPage;
  let fixture: ComponentFixture<AllmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
