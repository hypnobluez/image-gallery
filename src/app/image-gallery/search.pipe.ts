import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class SearchPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if(!value)return null;
        if(!args)return value;

        return value.filter(function(item){
            return item.id %4 == (args+1) %4;
        });
    }
}