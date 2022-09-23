# API Admin TypeScript

Padrão de API com níveis de acesso de usuários

# NPM

```javascript
// devtools
npm i --save-dev typescript
npm i --save-dev sucrase
npm i -g nodemon

// express
npm i --save @types/express
npm i --save express

// node
npm i --save @types/node
npm i -g ts-node typescript "@types/node"
```

# Devtool

Devtool é um CLI (command line interface) para automatizar a criação de alguns códigos.

A estrutura de comandos é com as 4 operações básicas CRUD (create, read, update, delete) 

## Comandos

- ### User

Quando você cria um `User` 
```
npm run devtool create:user MyCustomUser
```
automaticamente é gerada a classe que extende `User` 

```typescript
import User from './User';

class MyCustomUser extends User {

    constructor(){
        super("MyCustomUser")
    }

    // custom method
    public sayHello() {
        console.log("Hello World!");
    }

}

export default MyCustomUser
```

É adicionado ao `UserFactory` a criação automatica via session e na biblioteca `assertion` a verificação, ficando disponível para uso do serviço.

```typescript
class CustomService {

    public static checarTipoDeSessao(req:Request, res:Response){
        // aqui...
        assertion(res).isMyCustomUser(req.user)
        const user:MyCustomUser = <MyCustomUser> res.user 
        user.sayHello()
    }

    // ...
```
