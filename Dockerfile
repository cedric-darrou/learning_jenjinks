# Récupération d'une image
FROM gcc:12.2.0

RUN apt install -y curl

RUN mkdir -p /app
WORKDIR /app

COPY src /app/src
COPY test /app/test
COPY Makefile /app

RUN make
RUN make test

CMD["/app/main"]

#Lancer la commande docker build -t learning_jenkins/app:1.0.0 .
