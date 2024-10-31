import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosServiciosComponent } from './productos-servicios/productos-servicios.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallePedidoComponent } from './detalles-pedido/detalles-pedido.component';
import { RepartidoresComponent } from './repartidores/repartidores.component';

export const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'productos-servicios', component: ProductosServiciosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'detalles-pedido', component: DetallePedidoComponent },
  { path: 'repartidores', component: RepartidoresComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
];
