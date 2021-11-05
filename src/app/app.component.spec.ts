// import { TestBed, async } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'prueba-davi'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('prueba-davi');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('prueba-davi app is running!');
//   });
// });


import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent, BLOG_POSTS} from './app.component';
import {ChangeDetectionStrategy} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {BlogComponent} from "./blog/blog.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AppComponent', () => {
  console.log('uno ==>')
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;
  //let items;

  const getByTestId = (id, parentNode?) => {
    if (!parentNode) {
      parentNode = compiled;
    }
    return parentNode.querySelector(`[data-test-id="${id}"]`);
  };

  const nodeListToArray = nodeList => Array.from(nodeList);

  const getById = (id, parentNode?) => {
    if (!parentNode) {
      parentNode = compiled;
    }
    return parentNode.querySelector(`#${id}`);
  };

  const clickButton = async (buttonTestId) => {
    const button = getByTestId(buttonTestId);
    button.click();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  const IDMAPS = {
    BLOG_POSTS: 'blog-posts',
    SWITCHER_BUTTON: 'switcher-button',
    BLOG_TITLE : 'blog-title',
    CURRENT_THEME: 'current-theme'
  }

  beforeEach(async(() => {
    console.log('uno ==>')
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ThemeSwitcherComponent,
        BlogComponent
      ],
      imports: [
        FormsModule
      ],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    })
      .overrideComponent(AppComponent, {
        set: {changeDetection: ChangeDetectionStrategy.Default}
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('Should render the blog posts and the button on the screen', () => {
    const blogPosts = getByTestId(IDMAPS.BLOG_POSTS);
    //console.log('blogPosts => 1',blogPosts)
    expect(blogPosts.children.length).toEqual(BLOG_POSTS.length);
    //console.log('blogPosts.children.length',blogPosts.children.length,BLOG_POSTS.length)
    nodeListToArray(blogPosts.children).forEach((childNode, i) => {
      //console.log(getByTestId(IDMAPS.BLOG_TITLE, childNode).innerHTML.trim(),'====',BLOG_POSTS[i].title)
      expect(getByTestId(IDMAPS.BLOG_TITLE, childNode).innerHTML.trim()).toEqual(BLOG_POSTS[i].title)
    });
    expect(getByTestId(IDMAPS.CURRENT_THEME).innerHTML.trim()).toEqual('Light Theme');
  });

  it('Clicking on the theme switcher should enable the dark theme', async () => {
    await clickButton(IDMAPS.SWITCHER_BUTTON);
    expect(document.body.classList.contains('theme--dark')).toEqual(true);
    expect(getByTestId(IDMAPS.CURRENT_THEME).innerHTML.trim()).toEqual('Dark Theme');
  });

  it('Should switch theme correctly on subsequent button clicks', async () => {
    expect(document.body.classList.contains('theme--dark')).toEqual(false);
    expect(getByTestId(IDMAPS.CURRENT_THEME).innerHTML.trim()).toEqual('Light Theme');

    await clickButton(IDMAPS.SWITCHER_BUTTON);
    expect(document.body.classList.contains('theme--dark')).toEqual(true);
    expect(getByTestId(IDMAPS.CURRENT_THEME).innerHTML.trim()).toEqual('Dark Theme');

    await clickButton(IDMAPS.SWITCHER_BUTTON);
    expect(document.body.classList.contains('theme--dark')).toEqual(false);
    expect(getByTestId(IDMAPS.CURRENT_THEME).innerHTML.trim()).toEqual('Light Theme');

    await clickButton(IDMAPS.SWITCHER_BUTTON);
    expect(document.body.classList.contains('theme--dark')).toEqual(true);
    expect(getByTestId(IDMAPS.CURRENT_THEME).innerHTML.trim()).toEqual('Dark Theme');

  });
});

