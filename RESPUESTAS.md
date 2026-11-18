# Respuestas de la práctica

## 1. ¿Qué función cumple @Component?

`@Component` sirve para indicar que una clase es un componente de Angular y permite relacionarla con su HTML y sus estilos para mostrar la información en la página.

## 2. ¿Para qué sirve la interfaz Producto?

La interfaz `Producto` sirve para definir cómo deben ser los datos de un producto. En esta práctica indica que el producto debe tener un nombre de tipo `string`, un precio de tipo `number` y una disponibilidad de tipo `boolean`.

## 3. ¿Qué hace {{ }}?

`{{ }}` se utiliza para mostrar en el HTML los valores que están definidos en el archivo `app.ts`. Por ejemplo, `{{ nombreTienda }}` muestra el nombre de la tienda.

## 4. ¿Qué diferencia existe entre @if y @for?

`@if` sirve para mostrar una parte de la página cuando se cumple una condición. `@for` sirve para repetir un elemento varias veces, por ejemplo, para mostrar todas las categorías de una lista.

## 5. ¿Por qué tiendaAbierta utiliza el tipo boolean?

Porque `tiendaAbierta` solamente puede tener dos valores: `true` si la tienda está abierta o `false` si la tienda está cerrada.
