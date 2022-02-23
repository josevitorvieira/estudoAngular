import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'estudoAngular';
  // public pessoa:any =  {
  //   nome: "Vitor",
  //   idade: 29,
  //   endereco: {
  //     rua: "José",
  //     numero: 285,
  //     bairro: "caititus",
  //     cep: " 57311-245",
  //     cidade: "Arapiraca",
  //     estado: "Alagoas",
  //     pais: "Brasil"
  //   },
  //   telefone: "(82)99623-7155"
  // }
 
  // showName(){
  //   window.alert("Vitor")
  // }
  // public name: string = "";
  // public color: any;
  // public age: number = 0;

  // public frutas: any = [
  //   {
  //     id: 1,
  //     nome: "maça",
  //     valor: "R$20,00",
  //   },

  //   {
  //     id: 2,
  //     nome: "melancia",
  //     valor: "R$10,00",
  //   },
  //   {
  //     id: 3,
  //     nome: "banana",
  //     valor: "R$08,00",
  //   }
  // ]

  public pessoas: any = []
  public id: number = 0;
  public nome:string = "";
  public idade: number=  0;
  

  arrayPessoas(){
    this.pessoas.push(
      {
        id: Math.round(Math.random()*10),
        nome: this.nome,
        idade: this.idade
      }
    );  
  }

  selectPeople(pessoa: any){
    this.id = pessoa.id;
    this.nome = pessoa.nome;
    this.idade = pessoa.idade;    
  }

  savePeople(){
    this.pessoas.forEach(( element: any ) => {
      if(this.id === element.id){
        element.nome = this.nome;
        element.idade = this.idade;
      }
    });
  }

  deletePeople(idPessoa: number){
    this.pessoas = this.pessoas.filter((element: any)=>{
      if(element.id != idPessoa) return element;
    })
  }
}
