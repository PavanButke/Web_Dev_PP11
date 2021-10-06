package main

import "fmt"

func main(){
	fmt.Println("Enter a number :")
	var num int
	fmt.Scanln(&num)

	var slice = make([]int , num)
	for i:=0 ; i< len(slice) ;i++ {
		fmt.Println(i , "th number please?")
		fmt.Scanln(&slice[i])
	}
	
	for i:=0 ; i< len(slice) ; i++ {
		fmt.Println(slice[i], "\t")
	}
	
}