# htmx-parcel-shoelace

This is a template repository for creating ultralite web applications. The final container is hosted with a super small (~144kb container) httpd server that is simple and _stupid_. 
### Components
- [shoelace](https://shoelace.style)
- [htmx](https://htmx.org/docs/)
#### Alternatives
- [petite-vue](https://github.com/vuejs/petite-vue)
```html
<script src="https://unpkg.com/petite-vue" defer init></script>
```
### Building
```sh
docker build .
```
## Development
Use `npm start` to serve a live, updating server for web resources and read the damn documentation for how to use these libraries.
### Updating dependencies
```sh
npx ncu -u
```