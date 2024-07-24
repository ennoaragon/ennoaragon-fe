.PHONY: tailwind-watch 
tailwind-watch:
	npx tailwindcss -i ./internal/static/css/tailwind.css -o ./internal/static/css/style.css --watch

.PHONY: tailwind-build
tailwind-build:
	npx tailwindcss -i ./internal/static/css/tailwind.css -o ./internal/static/css/style.css --minify

.PHONY: templ-generate
templ-generate:
	templ generate

.PHONY: templ-watch
templ-watch:
	templ generate --watch

.PHONY: dev
dev:
	go build -o ./tmp/main ./cmd/main.go && air

.PHONY: build 
build: tailwind-build templ-generate
	go build -o ./bin/ennoaragon-fe ./cmd/main.go
