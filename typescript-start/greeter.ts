function greeter(person: string): string {
    return 'Hello, ' + person
}

let user = 'Lisiur Day'

document.body.innerHTML = greeter(user)