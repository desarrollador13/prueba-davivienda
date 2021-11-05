import { Component, OnInit } from '@angular/core';
import { CustomerProductAccountService } 
from 'src/app/services/customer-product-account.service';

@Component({
  selector: 'app-product-account-customer',
  templateUrl: './product-account-customer.component.html',
  styleUrls: ['./product-account-customer.component.css'],
  providers:[CustomerProductAccountService]
})
export class ProductAccountCustomerComponent implements OnInit {

  listAccountClients:any[];
  label:Record<string, string>;
  isActivate:boolean;

  constructor(private customerProductAccountService:CustomerProductAccountService) { 
    this.listAccountClients = [];
    this.label = {
      name : "Nombre",
      number: "Numero",
      type: "Tipo",
      status: "Estado",
      balance: "Valor"
    };
    this.isActivate = true;
  }

  ngOnInit(): void {
    this.customerProductAccountService.productAccountCustomer().subscribe((data:any) => {
      this.listAccountClients = data.accounts;
      this.isActivate = false;
    })
  }

}
