import App from './App';
import Index from './components/index/index';
import Table from './components/table/table';
import Form from './components/form/form';
import other from './components/other/other';
import Test from './components/test/test';
export default [
    {path:'/',
    component: App,
    children: [
      {path: '/index', component: Index, name: 'index', class: 'fa-line-chart'},
      {path: '/table', component: Table, name: 'table', class: 'fa-table'},
      {path: '/form', component: Form, name: 'form', class: 'fa-newspaper-o'},
      {path: '/other', component: other, name: 'other', class: 'fa-plug'},
      {path: '/test', component: Test, name: 'test', class: 'fa-plug'} ]}
]
