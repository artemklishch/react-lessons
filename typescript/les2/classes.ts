class Typescript {
    version: string
    constructor(version: string) {
        this.version = version
    }
    info(name: string) {
        return `${name}: Typescript version is ${this.version}`
    }
}
const typescript1 = new Typescript('12')
console.log(typescript1)
console.log(typescript1.info('Bob'))


// class Car {
//     readonly model: string
//     readonly numberOfWeels: number = 4
//     constructor(theModel: string){
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWeels: number = 4
    constructor(model: string) {
        // this.model = model
    }
}
const car1 = new Car('mazda')
console.log(car1)



class Animal {
    protected voice: string = ''
    public color: string = 'black'
    private go() {
        console.log('Go')
    }
    constructor() {
        this.go()
    }
}
class Cat extends Animal {
    setVoice(voice: string): void {
        this.voice = voice
    }
}
const cat1 = new Cat()
// car1.voice
cat1.setVoice('test')
console.log(cat1.color)


abstract class Component {
    abstract render(): void
    abstract info(): string
}
class AppComponent extends Component {
    render(): void {
        console.log("Component on render")
    }
    info(): string {
        return 'This is info'
    }
}
