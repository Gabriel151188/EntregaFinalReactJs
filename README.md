
# Proyecto final - React Js

## Descripción


El proyecto consta de una simulación de un e-commerce, habiendo utilizado en este caso la venta de bebidas como base.

## Cómo levantar el proyecto


Para levantar el proyecto se debe ejecutar los siguientes comandos:

```
npm instala 
npm inicia 
```
Para el correcto funcionamiento, es necesario tener seteadas las variables de entorno en el archivo  `.env`. 
Las variables son:
-  `VITE_API_KEY`: la API key de Firebase.
-  `VITE_AUTH_DOMAIN`: el dominio de autenticación de Firebase.-   
-  `VITE_PROJECT_ID`: el ID del proyecto de Firebase.
-  `VITE_STORAGE_BUCKET`: el bucket de almacenamiento de Firebase.
-  `VITE_MESSAGING_SENDER_ID`: el ID del sender de Firebase.
-  `VITE_APP_ID`: el ID de la aplicación de Firebase.

 ## Demo


 
## Componentes
 
### Navbar
- El navbar es un componente que muestra el logo del emprendimiento, los links a las distintas secciones del sitio, las cuales son:

 - [ ] Sin Alcohol  
 - [ ] Aperitivos  
 - [ ] Vinoteca

 Dentro de ellos se encuentra una pequeña lista de productos, aunque todos estos ya se ven desde la pagina principal, mostrando el nombre de cada uno, el precio, la categoria a la que pertenece y un botón que lleva a una card del producto  que muestra además una pequeña descripción.

Además encontramos el CartWidget que al no contener productos en el inicio no muestra ningún número, lo cual cambiará el estado, mostrando la cantidad de productos individualmente agregados al carrito.


### ItemList e ItemListContainer
En estos componentes encontraremos el maquetado de las card que se encuentran en la pagina inicial de la app, y la lógica tanto de ella como del botón que utilizamos para seleccionar el producto y llegar al detalle, respectivamente.

### ItemDetail e ItemDetailContainer
En estos componentes encontraremos el maquetado de las card que se encuentran en la pagina donde vemos el detalle del producto por categoria, y la lógica tanto de ella como del botón que utilizamos para seleccionar el producto y llegar al detalle, respectivamente.

### CartWidget
Aqui encontramos la lógica referida al carrito de compras.

### Form
En este componente vemos los imputs que formarán el formulario que utilizaremos para confirmar la compra y generar la orden de compra.

### Checkout
Aqui encontramos lo referido a la finalización de la compra, la generación de la orden de compra, y la subida de datos a Firebase.


***Descripcion de navegabilidad***
Al acceder a la pagina nos encontramos con la posibilidad de ver los productos, su imagen, precio, categoria y un botón para acceder a su descripción particular. Al acceder alli, ademas de lo mencionado anteriormente podemos encontrar una breve descricion del producto, y un boton para agregar el mismo al carrito. Al hacer click en él veremos reflejado una nueva cantidad de productos en el carrito.
Podemos volver a la página principal o acceder a los productos a través de las categorias sin que el carrito se vea modificado. 
Cuando no queramos agregar más productos al carrito, haremos click en él, accediento a la página donde veremos el resumen de la compra, con los productos agregados al carrito, son su precio individual, la suma parcial por producto en caso de haber una cantidad de 2 o más del mismo producto y la suma total a abonar de todos los productos. También se observará el formulario que solicita los datos del comprador como nombre, apellido y email. Todos estos datos, al hacer click en el botón de Finalizar Compra, mientras se observa la leyenda de "Procesando compra...", serán enviados a Firebase, cambiando la pantalla a una nueva donde se mostrará el ID de la orden de compra. Volviendo el carrito a no poseer artículos en él.

### Autor
#### Villanueva Gabriel
