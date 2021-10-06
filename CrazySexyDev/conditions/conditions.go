package main

import "fmt"
// import "strconv"

func main(){
	fmt.Println("Enter a number ")
	var num int
	fmt.Scanln(&num)

	for i:=2 ; i*i<=num ; i++{
		if num % i==0 {
			fmt.Println(" is not Prime")
			break
			
		}else{
			fmt.Println(" is Prime")
			break
		}

	}
}