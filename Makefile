M = gcc
D = rm -rf *.o
WALL = -W -Wall -Werror -Wextra -g3

all: src/main.o src/args.o src/messages.o
	$(M) $(WALL) -o src/main src/main.o src/args.o src/messages.o

main.o: main.c args.h colors.h
	$(M) -c src/main.c -o src/main.o

messages.o: messages.c colors.h
	$(M) -c src/messages.c -o src/messages.o

args.o: src/args.c src/args.h src/messages.h src/colors.h
	$(M) -c src/args.c -o src/args.o

test: test/main.c src/messages.o
	$(M) -o test/main_test test/main.c

clean:
	$(D)
