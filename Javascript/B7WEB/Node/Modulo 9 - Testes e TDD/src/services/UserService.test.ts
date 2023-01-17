import { User, UserInstance } from '../models/User'
import * as UserService from './UserService'

describe (' Testing user service ', ()=>{
    let email = 'test@jest.com';
    let password = '1234'

    beforeAll(async ()=>{
        //dropar e criar uma nova table a cada execucao
        await User.sync({force: true})
    })

    it('should create a new user', async ()=>{
        const newUser = await UserService.createUser(email, password) as UserInstance;

        expect(newUser).not.toBeInstanceOf(Error);
        expect(newUser).toHaveProperty('id');
        expect(newUser.email).toBe(email)
    });

    it('should not allow to create an user with an existing email', async ()=>{
        const newUser = await UserService.createUser(email, password) as UserInstance;
        expect(newUser).toBeInstanceOf(Error)
    })

    it('should find an user by email', async ()=>{
        const user = await UserService.findByEmail(email) as UserInstance;
        expect(user.email).toBe(email)
    })

    it('should match the password from the database', async ()=>{
        const user = await UserService.findByEmail(email) as UserInstance;
        const match  = UserService.matchPassword(password, user.password);
        expect(match).toBeTruthy();
       
    })

    it('should NOT match the password from the database', async ()=>{
        const user = await UserService.findByEmail(email) as UserInstance;
        const match  = await UserService.matchPassword('invalid', user.password);
        expect(match).toBeFalsy();
      
    });

    it('should get a list of users', async ()=>{
        const users = await UserService.all();
        expect(users.length).toBeGreaterThanOrEqual(1);

        for(let i  in users){
            expect(users[i]).toBeInstanceOf(User)
        }
    })
})