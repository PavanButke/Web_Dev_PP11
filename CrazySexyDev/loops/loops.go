package main

import "fmt"

func main(){
		fmt.Println("Enter a number")
		var num int
		fmt.Scanln(&num)

		for i := 0 ; i<= num ;i++{
			fmt.Println(i)
		}

}