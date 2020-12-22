#include <stdio.h>
int solution(int* arr){
	int *ptr = arr;
	int maximum = *ptr;
	while(*ptr++){
		if (maximum < *ptr){
		maximum = *ptr;
		}
		}
			return maximum;
}