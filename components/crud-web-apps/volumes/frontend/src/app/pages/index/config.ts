import {
  PropertyValue,
  StatusValue,
  TableConfig,
  DateTimeValue,
  LinkValue,
  LinkType,
  ComponentValue,
  quantityToScalar,
} from 'kubeflow';
import { UsedByComponent } from './columns/used-by/used-by.component';

export const tableConfig: TableConfig = {
  columns: [
    {
      matHeaderCellDef: $localize`状态`,
      matColumnDef: 'status',
      style: { width: '1%' },
      value: new StatusValue(),
      sort: true,
    },
    {
      matHeaderCellDef: $localize`名称`,
      matColumnDef: 'name',
      style: { width: '25%' },
      value: new LinkValue({
        field: 'link',
        popoverField: 'name',
        truncate: true,
        linkType: LinkType.Internal,
      }),
      sort: true,
    },
    {
      matHeaderCellDef: $localize`创建于`,
      matColumnDef: 'age',
      textAlignment: 'right',
      style: { width: '10%' },
      value: new DateTimeValue({
        field: 'age',
      }),
      sort: true,
    },
    {
      matHeaderCellDef: $localize`大小`,
      matColumnDef: 'size',
      textAlignment: 'right',
      style: { width: '10%' },
      value: new PropertyValue({ field: 'capacity', truncate: true }),
      sort: true,
      sortingPreprocessorFn: quantityToScalar,
    },
    {
      matHeaderCellDef: $localize`存取模式`,
      matColumnDef: 'modes',
      style: { width: '15%' },
      value: new PropertyValue({ field: 'modes', truncate: true }),
      sort: true,
    },
    {
      matHeaderCellDef: $localize`存储类`,
      matColumnDef: 'class',
      style: { width: '10%' },
      value: new PropertyValue({ field: 'class', truncate: true }),
      sort: true,
    },
    {
      matHeaderCellDef: $localize`被用于`,
      matColumnDef: 'usedBy',
      style: { 'max-width': '60px' },
      value: new ComponentValue({
        component: UsedByComponent,
      }),
      sort: true,
      sortingPreprocessorFn: element => element.notebooks,
      filteringPreprocessorFn: element => element.notebooks,
    },

    // the apps should import the actions they want
  ],
};
