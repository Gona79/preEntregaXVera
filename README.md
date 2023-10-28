
# Alfa y Omega Estética 🌸

Bienvenido al repositorio del proyecto e-commerce de Alfa y Omega Estética. Nos especializamos en brindar servicios de depilación, masajes y tratamientos corporales. Además, ofrecemos productos de belleza asociados y aparatos especializados. No solo eso, sino que también brindamos la oportunidad de aprender a través de nuestros cursos y seminarios diseñados para profesionales esteticistas.

## 🖌 Interfaz

Buscamos ofrecer una experiencia de usuario única con una **interfaz limpia y sofisticada**. Cada sección de nuestro sitio refleja la alta calidad de los servicios y productos que ofrecemos, mostrando imágenes de alta definición y descripciones detalladas.

## 🛍 Funcionalidades

1. **Productos y Servicios**: Cada ítem cuenta con su propia página donde se detalla su información, precio y, en el caso de tratamientos o cursos, su duración. Los usuarios pueden agregarlos al carrito con un simple clic.
2. **Login y Registro**: Ofrecemos la posibilidad de crear una cuenta personal, permitiendo a nuestros clientes acceder a funciones exclusivas.
3. **Historial de Tratamientos**: Una sección donde los usuarios pueden visualizar tratamientos previos, en curso y programados.
4. **Programación de Citas**: Contamos con un calendario interactivo, facilitando la elección de fechas y horarios disponibles para tratamientos.
5. **Carrito de Compras**: Una experiencia de compra sencilla e intuitiva, donde los usuarios pueden revisar y editar sus selecciones antes de proceder al pago.

## 🌟 Visión y Misión

**Visión**:
*Ser reconocidos como el refugio estético líder donde cada mujer, independientemente de su etapa de vida, siente que su belleza y bienestar son honrados y potenciados.*

**Misión**:
*En Alfa y Omega, acompañamos a las mujeres en su viaje de transformación desde la adolescencia hasta la madurez. Ofrecemos tratamientos y productos de la más alta calidad, enfocándonos en valorar y resaltar la belleza única de cada individuo en cada etapa de su vida.*

## 🚀 Proyecto Final y Entregables

Este proyecto es un trabajo en progreso que culminará en un e-commerce funcional y elegante. El proceso de desarrollo está organizado en diferentes etapas de preentrega y culminará en un producto final integral.

### Primera Pre-Entrega

#### NavBar Component:
- Crear una carpeta `components` dentro de `src`.
- Implementar el componente `NavBar` en el archivo `NavBar.js`.
  - Debe renderizar una barra de menú.
  - Debe incluir:
    - **Brand**: El título o nombre de la tienda.
    - **Categorías Clickeables**: Listado de secciones o categorías seleccionables.
    - **Estilización Opcional**: Usar una librería de estilos como bootstrap, materialize, etc.

#### CartWidget Component:
- Crear el componente `CartWidget`.
  - Mostrar un ícono de carrito y una notificación con un número hardcodeado.
  - Incorporar dentro del componente `NavBar` para visibilidad constante.

#### ItemListContainer Component:
- Implementar el componente `ItemListContainer`.
  - Aceptar una prop `greeting` y mostrar el mensaje correspondiente.
  - Importar en `App.js` y ubicar debajo de `NavBar.js`.

**Formato de Entrega**:
- [Link al último commit](#) en tu repositorio de Github. El nombre del commit debe ser “PreEntrega1+Apellido”.

Las próximas preentregas y el proyecto final se actualizarán a medida que avance el desarrollo.  
  
## Configuración Técnica 🛠️

Este proyecto utiliza **React** con **Vite**, ofreciendo un eficiente recargado de módulo en caliente (HMR, por sus siglas en inglés).

Se disponen de dos plugins oficiales:

- **@vitejs/plugin-react**: Hace uso de [Babel](https://babeljs.io/) para el "Fast Refresh", permitiendo visualizar cambios en el código de React de manera instantánea sin perder el estado de los componentes.
  
- **@vitejs/plugin-react-swc**: Implementa [SWC](https://swc.rs/), un transpilador de JavaScript más rápido que Babel, con el mismo propósito de "Fast Refresh".
