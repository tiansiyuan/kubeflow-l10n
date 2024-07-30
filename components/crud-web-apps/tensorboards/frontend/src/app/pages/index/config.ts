import {
  PropertyValue,
  StatusValue,
  ActionListValue,
  ActionIconValue,
  ActionButtonValue,
  TableColumn,
  TableConfig,
  DateTimeValue,
} from 'kubeflow';

const tableConfig: TableConfig = {
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
      value: new PropertyValue({
        field: 'name',
        tooltipField: 'name',
        truncate: true,
      }),
      sort: true,
    },
    {
      matHeaderCellDef: $localize`创建于`,
      matColumnDef: 'age',
      style: { width: '15%' },
      textAlignment: 'right',
      value: new DateTimeValue({
        field: 'age',
      }),
      sort: true,
    },
    {
      matHeaderCellDef: $localize`日志路径`,
      matColumnDef: 'logspath',
      style: { width: '40%%' },
      value: new PropertyValue({
        field: 'logspath',
        tooltipField: 'logspath',
        truncate: true,
      }),
      sort: true,
    },
  ],
};

const actionsCol: TableColumn = {
  matHeaderCellDef: '',
  matColumnDef: 'actions',
  value: new ActionListValue([
    new ActionButtonValue({
      name: 'connect',
      tooltip: $localize`连接到张量板服务器`,
      color: 'primary',
      field: 'connectAction',
      text: $localize`连接`,
    }),
    new ActionIconValue({
      name: 'delete',
      tooltip: $localize`删除向量板`,
      color: 'warn',
      field: 'deleteAction',
      iconReady: 'material:delete',
    }),
  ]),
};

export const defaultConfig: TableConfig = {
  title: tableConfig.title,
  dynamicNamespaceColumn: true,
  newButtonText: tableConfig.newButtonText,
  columns: tableConfig.columns.concat(actionsCol),
};
