import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {RouterModule, Route} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { ConnectedGuard } from './services/connected.guard';
import {HttpClientModule} from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';
import { NameComponent } from './components/name/name.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

const routes:Route[] = [
  {path: '', redirectTo: 'todos', pathMatch:'full'},
  
  {path: 'todos', component: TodoListComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'my-todos/:userId', component: TodoListComponent, canActivate:[ConnectedGuard]},
  {path: 'my-posts/:userId', component: PostsComponent, canActivate:[ConnectedGuard]},

  {path:'posts/:postId/comments', component: CommentsComponent},
  {path: 'name', component:NameComponent},
  
  /*
  // organisation des routes en hierarchie (pas de composant parent)
  { path: 'todos', 
    children:[
      {path: '', component: TodoListComponent},
      {path: ':userId', component: TodoListComponent}
    ]
  },
  // un composant parent qui contient un autre <router-outlet> pour charger les enfants
  { path: 'posts', 
    component: PostsContainerComponent,
    children:[
      {path: '', component: TodoListComponent},
      {path: ':userId', component: TodoListComponent}
    ]
  },
  */
  

  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent, 
    MenuComponent, 
    TodoListComponent,
    NotFoundComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes) ,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(fas, far);
  }
}
