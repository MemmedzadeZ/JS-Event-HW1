// const isCheakt = true;

// const promise = new Promise((resolt, reject) => {
//   if (isCheakt) {
//     return resolt("Success");
//   }
//   return reject("Error");
// });

// promise
//   .then((value) => {
//     console.log("value :>> ", value);
//   })
//   .catch((error) => {
//     console.log("error :>> ", error);
//   });

//   1. **Моделирование Задержки Выполнения**:
//  Напишите функцию, которая принимает число в качестве входных данных и
//  возвращает промис, который разрешается после указанного количества миллисекунд.
//  Используйте эту функцию, чтобы создать задержку в 2 секунды, а затем
//  зарегистрировать сообщение в консоли после разрешения промиса.

const millisecond = prompt("Enter the millisecond:");
const promise = new Promise((resolt, reject) => {
  setTimeout((resolt, reject) => {
    console.log("millisecond :>> ", millisecond);
  }, millisecond);
});

// promise.then(
//   console.log(`Task1 ${millisecond} secund reached its place`),
//   millisecond
// );

//  2. **Цепочка Промисов**:
//  Создайте две функции, `firstTask` и `secondTask`, каждая из которых возвращает
//  промис, разрешающийся строковым сообщением. Свяжите эти промисы так, чтобы
//  вторая задача выполнялась только после разрешения первой. Наконец,
//  зарегистрируйте объединенный результат в консоли

const firstTask = new Promise((resolt, reject) => {
  setTimeout(() => {
    resolt("FirstTask1(resolt)");
  }, 2000);
});

const secondTask = new Promise((resolt, reject) => {
  setTimeout(() => {
    resolt("SecondTask2(resolt)");
  }, 2000);
});

firstTask
  .then((result1) => {
    console.log("result1 :>> ", result1);
    return secondTask();
  })
  .then((result2) => {
    console.log("result2 :>> ", result2);
  })

  .catch((error) => {
    console.log("error :>> ", error);
  });

//    3. **Использование Promise.all()**:
//  Создайте три отдельные функции, каждая из которых возвращает промис, который
//  разрешается строковым сообщением после указанной задержки. Используйте
//  `Promise.all()` для выполнения всех трех функций параллельно и зарегистрируйте
//  массив разрешенных сообщений после разрешения всех промисов

const task1 = new Promise((resolt, reject) => {
  setTimeout(() => {
    resolt("Task1 reached its place");
  }, 2000);
});

const task2 = new Promise((resolt, reject) => {
  setTimeout(() => {
    resolt("Task2 reached its place");
  }, 2000);
});

const task3 = new Promise((resolt, reject) => {
  setTimeout(() => {
    resolt("Task3 reached its place");
  }, 2000);
});

Promise.all([task1, task2, task3])
  .then((results) => {
    console.log("results :>> ", results);
  })
  .catch((error) => {
    console.log("error :>> ", error);
  });

//    4. **Сценарий с Promise.race()**:
//  Напишите две функции, `fastTask` и `slowTask`, каждая из которых возвращает
//  промис, который разрешается строковым сообщением после различных временных
//  задержек (один быстрый, другой медленный). Используйте `Promise.race()` для
//  выполнения обеих функций и зарегистрируйте результат промиса, который
//  разрешается первым

const fastTask = new Promise((resolt, reject) => {
  setTimeout(() => {
    resolt("fastTask reached its place");
  }, 2000);
});

const slowTask = new Promise((resolt, reject) => {
  setTimeout(() => {
    resolt("slowTask reached its place");
  }, 2000);
});

Promise.race([fastTask, slowTask])
  .then((result) => {
    console.log("result :>> ", result);
  })
  .chatch((error) => {
    console.log("error :>> ", error);
  });
