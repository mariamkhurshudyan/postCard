import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.css']
})
export class CardActionComponent  {

    @Input() iscardOpen!: boolean;
  
    cardClose() {
      this.iscardOpen = false;
    }
}
