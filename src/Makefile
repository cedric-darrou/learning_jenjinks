M = gcc
D = rm -rf *.o
WALL = -W -Wall -Werror -Wextra -g3

all: main.o args.o messages.o
	$(M) $(WALL) -o main main.o args.o messages.o

main.o: main.c args.h colors.h
	$(M) -c main.c -o main.o

messages.o: messages.c colors.h
	$(M) -c messages.c -o messages.o

args.o: args.c args.h messages.h colors.h
	$(M) -c args.c -o args.o

clean:
	$(D)
