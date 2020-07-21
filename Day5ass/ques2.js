class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.LUcoins = 0;
        this.courses = [];
    }

    login(){
        console.log(`${this.name} is logged-In...!!!`)
        return this;
    }
    logOut(){
        console.log(`${this.name} is logged-Out Succesfully...!!!`);
        return this;
    }


}

class Moderator extends User{
    /*constructor(name,age,email,role){
        this.name=name;
        this.age=age;
        this.email=email;
        this.role = role;
    }*/

    addCoins(user){
        // users = users.filter(u =>{
        //     return u.email == user.email; 
        // })
        user.LUcoins++
    }
    
    removeCoins(user){
        // users = users.filter(u =>{
        //     return u.email == user.email; 
        // })
        user.LUcoins--
    }
}


class admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course)
        console.log(user);
    }
    remCourse(user,course){
        user.courses.foreach(el=>{
            if(el==course){
                delete courses[indexOf(el)]; 
                
            }
            else{
                console.log(`${this.user} not have course ${this.course}`);
            }
        })
        console.log(user);
    }
}


user1 = new User("Omkar",22,"og@gmail.com");
console.log(user1)

users = [user1,];
mod1 = new Moderator();
mod1.addCoins(user1)

ad = new admin()
ad.addCourse(user1,"Python")


user1.login()
console.log(user1)
user1.logOut();




