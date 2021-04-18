import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Input() data: any
  @Output() delete = new EventEmitter();
  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
  ) {

  }


  ngOnInit() {
  }
  delet(data: any) {
    console.log('modal', data)
    this.delete.emit(data)

  }

}
