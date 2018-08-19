import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB9FQdioqvrk7cNfg1elQ6i6Nsf2_fu2Z8",
    authDomain: "expensify-app-fde84.firebaseapp.com",
    databaseURL: "https://expensify-app-fde84.firebaseio.com",
    projectId: "expensify-app-fde84",
    storageBucket: "expensify-app-fde84.appspot.com",
    messagingSenderId: "932298798307"
  };
firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Aatish Sharma',
    age: 23,
    isSingle: true,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Bangalore',
        country: 'India'
    }
}).then((data) => {
    console.log('Data is set')
}).catch((error) => {
    console.log('Some error occured', error)
})

// database.ref('age').set(24);

// database.ref('location/city').set('Pune');

database.ref('attribute').set({
    weight: 80,
    height: 175
}).then((data) => {
    console.log('Saved new attributes')
}).catch((error) => {
    console.log('Discarded changes')
})

//database.ref('attribute/weight').set(80);

database.ref('isSingle').remove().then(() => {
    console.log('Removed isSingle flag')
}).catch(() => {
    console.log('Not Permitted to remove record')
})

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon'
}).then(() => {
    console.log('updated data')
}).catch(() => {
    console.log('some error occured')
})


// getting changes only once

// database.ref().once('value')
// .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val);
// })


/// getting changes from db when ever there is change data. subscribe()

const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val())
}, (e) => {
    console.log(e)
})

// unsubscribing to a on methods
// database.ref().off('value', onValueChange);

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// Setup data sub -> Andrew is a Software Developer at Amazon.

// Change the data and make sure it reprints

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });


// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_added
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 976123498763
  });
