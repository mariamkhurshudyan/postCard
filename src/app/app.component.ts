import {Component, ViewContainerRef , ComponentFactoryResolver, ViewChild} from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('postContent', { read: ViewContainerRef })
  postContent!: ViewContainerRef;
  items = [] as any;
  title = 'To do List';
  iscardOpen = false;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}



  addItem() {
    if (this.items.length <= 9) {
      const staticComponent = this.componentFactoryResolver.resolveComponentFactory(CardComponent);
      const item = this.postContent.createComponent(staticComponent);
      this.items.push(item);
    } else {
      this.iscardOpen = true;
    }
  }

  deleteItem() {
    const item = this.items.find(
     (item: any) => item.instance instanceof CardComponent
    );
    const lastCard = this.items.indexOf(item);

    if (lastCard !== -1) {
      this.postContent.remove();
    }
  }
  resetItem() {
    this.postContent.clear();
    this.items = [];
  }
}
