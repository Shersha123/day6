
///  movie

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;

        if(rating==null){
            return this.rating="PG"
        }
        else{
            return this.rating=rating;
        }
    }
    getPG(){
        var result =array.filter((element)=> element.rating=="PG")
        return result
    }
    getMoviedetails(){
        return(`the movie title is ${this.title} and studio is ${this.studio} and the movie rating is ${this.rating}`)
    }
}

let movie1 = new Movie ("vikram","kamal studios","PG3");
let movie2 = new Movie ("doctor","siva studios","PG1");
let movie3 = new Movie ("A","red studios");
let Movie4 = new Movie ("B","pink studios");

const array = [movie1,movie2,movie3,Movie4]

console.log(movie1.getPG());
console.log(movie1.getMoviedetails())

//person details

class Person{
    constructor(name,age,height,birth,occupation){
        this.name=name;
        this.age=age;
        this.height=height;
        this.birth=birth;
        this.occupation=occupation;
    }
    getPersondetails(){
        return(`the person name is ${this.name} and the age is ${this.age} and the height is ${this.height} and the birth is ${this.birth} and the occupation is ${this.occupation} `)
    }    
}
let person1 = new Person ("shersha","23","5","november","software developer")

console.log(person1.getPersondetails())