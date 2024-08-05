FROM golang:1.22 AS build-stage

# Set destination for COPY
WORKDIR /app

# Download Go modules
COPY go.mod go.sum ./ 

RUN go mod download

# Take in just the go files for the docker file
COPY . . 

RUN go build -o main ./cmd/main.go

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the binary program produced by `go install`
CMD ["./main"]

