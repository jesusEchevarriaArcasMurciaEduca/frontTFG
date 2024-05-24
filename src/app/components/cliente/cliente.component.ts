import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes/clientes.service';
import { Cliente } from '../../modelo/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent implements OnInit {

  public clientes: Cliente[] = [];
  clienteForm: FormGroup;

  constructor(private router: Router, private cs: ClientesService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.obtenerClientes();

    this.clienteForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      clave: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }


  obtenerClientes() {
    this.cs.getAllClientes().subscribe(resp => {
      {
        this.clientes = resp;
        console.log(resp);
      }
      (error: any) => {
        console.error('Error al obtener los médicos:', error);
      }
    });
  }

  agregarCliente(){

    this.router.navigate(['/agregarCliente'])
  }

  eliminar( id:any){
    this.cs.deleteCliente(id).subscribe(resp=>{
      
    },
  )
  }

  guardar(): void {
    this.cs.saveCliente(this.clienteForm.value).subscribe(resp=>{

    }
    ,(error: any) => {
      console.error('Error al obtener los médicos:', error);
    }
  )
  }

  editar(cliente:Cliente){
    this.clienteForm.setValue({
      id : cliente.id,
      nombre : cliente.nombre,
      apellidos: cliente.apellidos,
      clave: cliente.clave,
      telefono: cliente.telefono,
      direccion: cliente.direccion
    })
    
  }


}
