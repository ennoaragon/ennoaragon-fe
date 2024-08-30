# My portfolio website - GoTTH stack
## created using Golang Tailwindcss Templates and HTMX
* Go - Backend using Gin or vanilla Go
* Tailwind - CSS
* Templ - Templating
* HTMX - Interactivity
* apline js

## Development 
```make dev```

## Production
Work in progress
## Technologies

### Air
* Air is required for hot reloading used in 
** https://github.com/air-verse/air

### Tailwind
To generate the Tailwind style sheet, we use the Tailwind binary. To get started with TailWind CSS, make sure you have the correct binary in the root directory. follow the instructions in this guide. Make sure you download the correct binary for your operating system.
https://tailwindcss.com/blog/standalone-cli

### Templ
https://templ.guide/

### Apline JS
For better interactivity, we use Alpine JS. It is a minimal framework for composing JavaScript behavior in your HTML. It is a great alternative to Vue.js or React.js for small projects.

### Targets:
```bash
make tailwind-watch
```
This target watches the ./static/css/input.css file and automatically rebuilds the Tailwind CSS styles whenever changes are detected.

```
make tailwind-build
```
This target minifies the Tailwind CSS styles by running the tailwindcss command.

```
make templ-watch
```
This target watches for changes to *.templ files and automatically generates them.


```
make templ-generate
```
This target generates templates using the templ command.


```
make dev
```
This target runs the development server using Air, which helps in hot-reloading your Go application during development.

```
make build
```
This target orchestrates the building process by executing the tailwind-build, templ-generate, and go build commands sequentially. It creates the binary output in the ./bin/ directory.
