/* comment écrire une promesse


function delay(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

 
  delay(2000).then(() => {
    console.log('Promise resolved after 2000ms');
  });*/



  /*   .Then // .catch
  
  function stepOne() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Step One Completed');
      }, 1000);
    });
  }
  
  function stepTwo(message) {
    console.log(message);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Step Two Completed');
      }, 2000);
    });
  }
  
  stepOne()
    .then(stepTwo)
    .then(result => {
      console.log(result);
    });
    */

    /*   Quering
    
    const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 3 resolved'));

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values);
  });


*/

/*  Promise.Race:
function taskOne() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Task One Completed');
      }, 2000);
    });
  }
  
  function taskTwo() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        reject('Task Two failed');
      }, 1000);
    });
  }
  
  // Race the promises
  Promise.race([taskOne(), taskTwo()])
    .then(result => {
      console.log('The winner is:', result);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  
 */
  
  /* Await
    function asyncOperation() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
              resolve('Operation completed successfully');
            } else {
              reject('Operation failed');
            }
          }, 1000);
        });
      }
      
      // Asynchronous function using async/await with try/catch
      async function executeAsyncOperation() {
        try {
          // Await the result of the asyncOperation
          const result = await asyncOperation();
          console.log('Async operation result:', result);
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }
      
      // Call the async function
      executeAsyncOperation();

      */




      function fetchDataFromAPI1() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate successful data retrieval
            const data = { id: 1, name: 'Data from API 1' };
            resolve(data);
          }, 1500);
        });
      }
      
      // Function to fetch data from API 2
      function fetchDataFromAPI2() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate failure in data retrieval
            reject('Error fetching data from API 2');
          }, 1000);
        });
      }
      
      // Function to combine data from both APIs using async/await
      async function combineDataFromAPIs() {
        try {
          // Wait for both API calls to complete using Promise.all()
          const [dataFromAPI1, dataFromAPI2] = await Promise.all([
            fetchDataFromAPI1(),
            fetchDataFromAPI2()
          ]);
      
          // Combine data from both APIs
          const combinedData = {
            api1Data: dataFromAPI1,
            api2Data: dataFromAPI2
          };
      
          console.log('Combined data:', combinedData);
        } catch(error) {
          console.error('An error occurred:', error);
  }
}

// Call the function to combine data from both APIs
combineDataFromAPIs();
