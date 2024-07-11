.PHONY: run build css clean

# Build the Go binary.
build:
    go build -o ennoaragon-fe ./cmd/main

# Run the Go application.
run: css build
    ./ennoaragon-fe

# Build CSS using Tailwind CLI.
css:
    npx tailwindcss -i ./internal/static/css/tailwind.css -o ./internal/static/css/style.css --minify

# Clean up the generated files.
clean:
    rm -f ennoaragon-fe
    rm -f internal/static/css/style.css

# Default target.
all: run
