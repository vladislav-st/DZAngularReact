import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../core/Events.service';
@Component({
  selector: 'AddNewEvent',
  templateUrl: './AddNewEvent.component.html',
  styleUrls: ['./AddNewEvent.component.css']
})
export class AddNewEventComponent implements OnInit {

  model = new EventModel();
  errorMessage: string;
  constructor(private eventsService: EventsService, private notifier: NotifierService) { }

  onSubmit(form: NgForm){
    if(this.model.isValid() == true){
      this.errorMessage = "";
      this.eventsService.addEnvet(this.model);
      this.notifier.notify('success', 'Success add new event!');
      form.resetForm();
      this.model = new EventModel();
    }
    else{
      this.notifier.hideAll();
      this.notifier.notify('error', 'Enter all fields!');
      //this.errorMessage="Enter all fields!";
    }
  }

  ngOnInit() {
  }

}
