#include "../src/messages.h"
#include <assert.h>
#include <stdio.h>

int addition(int a, int b){
  return(a+b);
}

int main(int argc, char const *argv[]) {

  printf("Test 1 :\n");
  int input_x = 5;
  int input_y = 6;
  int valeur_attendue = 11;
  assert (addition(input_x, input_y) == valeur_attendue);
  return 0;
}
