import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: string[], order: string = 'asc'): string[] {
    if (!value || value.length === 0) return [];
    return value.sort((a, b) => {
      const comparison = a.localeCompare(b);
      return order === 'asc' ? comparison : -comparison;
    });
  }

}
