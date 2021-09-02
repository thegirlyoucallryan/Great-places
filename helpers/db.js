

import * as SQLite from 'expo-sqlite';
import { FAILSAFE_SCHEMA } from 'js-yaml';
import { exp } from 'react-native/Libraries/Animated/src/Easing';

const db = SQLite.openDatabase('places.db');

export const init = () => {
const promise = new Promise ((resolve, reject ) => {
    db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS places(id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
            [],
            () => {
                    resolve();
            },
            (_,err) => {
                    reject(err);
            }

        )
    })
});
return promise;
};

export const insertPlace = (title, image, address, lat, lng) => {


    const promise = new Promise ((resolve, reject ) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO places(title , image , address , lat , lng) VALUES(?, ?, ?, ?, ?);',
                [title, image, address, lat, lng],
                (_, result) => {
                        resolve(result);
                },
                (_,err) => {
                        reject(err);
                }
    
            )
        })
    });
    return promise;


};

export const fetchPlaces = () => {
    const promise = new Promise ((resolve, reject ) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM places',
                [],
                (_, result) => {
                        resolve(result);
                },
                (_,err) => {
                        reject(err);
                }
    
            )
        })
    });
    return promise;


}


