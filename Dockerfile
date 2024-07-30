FROM golang:1.22-alpine

# Set destination for COPY
WORKDIR /app

# Take in just the go files for the docker file
COPY *.go .

# Download Go modules
COPY go.mod .
COPY go.sum .

RUN ls -la /app

RUN go mod download

RUN go build -o main /app/cmd/main.go

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the binary program produced by `go install`
CMD ["./main"]
