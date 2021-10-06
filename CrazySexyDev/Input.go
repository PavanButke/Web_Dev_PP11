package main

import (
	"os"
	"bufio"
	"fmt"
)


func main(){
	reader := bufio.NewReader(os.Stdin)

	fmt.Println("Kindly enter your school name. ")
	
	schoolname,_ := reader.ReadString('\n')
	fmt.Println("Nice school name",schoolname)
}