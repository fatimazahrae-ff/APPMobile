import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AuthService } from '../auth/auth.service';
import { User } from 'src/app/models/user';

@Injectable()

export class UserService {

  constructor(private db : AngularFireDatabase, private auth: AuthService) { 

  }

    // Get current user's uid form the storage === uid in db.
    getUID() : string {
    // console.log('storage keys:', this.storage.keys());
    console.log('getCurrentUserUid', this.auth.getCurrentUserUid());
    return this.auth.getCurrentUserUid();
    /*
      return this.storage.get('uid').then(uid => {
        return JSON.parse(uid);
      });
    */
    }

    //create User in firebase with infos  
    createUser(user : User) : void {     
        // console.log('create user in db uid: ', uid);
        // get the ref of the users with uid and save it in the db
        let userRef = this.db.object(`users/${this.getUID()}`);
        userRef.set({email: user.email, name: user.name});

    }
    
    //get info of single user
     getUser() : AngularFireObject<User> {
        return this.db.object(`/users/${this.getUID()}`);

    } 

    getAllUsers(): AngularFireList<User> {
      return this.db.list(`/users`);
    }

  }

