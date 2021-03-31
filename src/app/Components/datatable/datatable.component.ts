import { Todos } from 'src/app/Class/todos';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/services/apiCall.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  todos: Todos[];
  constructor(private apiCallService: ApiCallService) {

  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.apiCallService.getAllTodos().subscribe (
      (response: Todos[]) => {
        this.todos = response;
      }
    );
  }
}

