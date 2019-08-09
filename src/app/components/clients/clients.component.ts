import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/models/client';



declare var M: any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [ClientService]
})
export class ClientsComponent implements OnInit {

  constructor(public clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  addClient(form: NgForm){
    if(form.value._id){
      this.clientService.putClient(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly'});
        this.getClients();
      });
    }else{
      this.clientService.postClient(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly'});
        this.getClients();
      });
    }
  }

  getClients(){
    this.clientService.getClients()
    .subscribe(res =>{
      this.clientService.client = res as Client[];
      console.log(res);
    });
  }

  editClient(client: Client){
    this.clientService.selectedClient = client;

  }
 
  deleteClient(_id: string){
    if(confirm('Are you sure you wnat to delete it?')){
      this.clientService.deleteClient(_id)
      .subscribe(res => {     
        this.getClients();
        M.toast({html: 'Deleted successfully'});
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.clientService.selectedClient = new Client();
    }
  }

}
