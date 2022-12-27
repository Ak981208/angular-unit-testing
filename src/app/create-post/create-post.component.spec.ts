import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { CreatePostComponent } from './create-post.component';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ CreatePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('two plus two is four',()=>{
    expect(2+2).toBe(4);
  });
  it('object values',()=>{
    const data={name:"akhil rathipelly"}
    expect(data).toEqual({name:"akhil rathipelly"});
  })
});
