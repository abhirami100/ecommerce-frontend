import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(productList:any[],filterString:string,propertyName:string) {
    const result:any=[];
    if(!productList || filterString==''||propertyName=='' ){
      return productList

    }
    productList.forEach((product:any)=>{
      if (product[propertyName].trim().toLowerCase().includes(filterString)){
        result.push(product)

      } 
        
      

    })
    return result;
  }


  

}
