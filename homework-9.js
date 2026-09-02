// (6.1) Импорт константы из другого файла.

import { commentInfo } from './comments.js';

// (2) Использование метода slice для фильтрации объектов.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers)

const highNumbers = numbers.slice(4, 10);

console.log(highNumbers)

const highNumbersTwo = numbers.slice(4);

console.log(highNumbersTwo)

// (3) Использование, как я думаю, метода find или includes. Будем разбираться.

const colors = ['yellow', 'black', 'white', 'blue', 'green','orange', 'pink', 'red',];

const favoriteColor = colors.includes('green');

console.log(favoriteColor)

const unfavoriteColor = colors.find(color => color === 'pink');

console.log(unfavoriteColor)

// (4) Использование метода reverse.

function useReverseMethod(array) {
  return array.reverse()
}

useReverseMethod(numbers)

console.log(numbers)

useReverseMethod(colors)

console.log(colors)

// (7) Фильтрация комментариев по содержанию ".com" в почте пользователей.

const dotComEmails = commentInfo.filter(comment => comment.email.includes('.com'));

console.log(dotComEmails)

const dotComEmailsWithSecondMethod = commentInfo.filter(comment => comment.email.endsWith('.com'));

console.log(dotComEmailsWithSecondMethod)

// (8) Работа с методом .map. Иммутабельное создание переменной с последующей контролируемой мутацией

const changeCommentsInfo = commentInfo.map(comment => {
  const newComment = { ...comment };
  if (comment.id <= 5) {
    newComment.postId = 2
  } else {
    newComment.postId = 1
  }
  return newComment
});

console.log(changeCommentsInfo)

// (8.1) Еще вариант решения без лишней константы и через два ретерна (Иммутабельное обновление объекта). 

const secondChangeCommentsInfo = commentInfo.map(comment => {
  if (comment.id <= 5) {
    return { ...comment, postId: 2 }
  } else {
    return { ...comment, postId: 1 }
  }
});

console.log(secondChangeCommentsInfo)

// (8.2) Решение через при помощи тернарного оператора

const thirdChangeCommentsInfo = commentInfo.map(comment => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  }
});

console.log(thirdChangeCommentsInfo)

// (9) Вывод нового массива, состоящего только из айди и имени.

const basicCommentInfo = commentInfo.map(comment => {
  return { id: comment.id, name: comment.name }
});

console.log(basicCommentInfo)

// (9.1) Еще вариант решения без дублирования названия ключей, через деструктуризацию.

const basicCommentInfoTwo = commentInfo.map(({ id, name }) => {
  return { id, name }
});

console.log(basicCommentInfoTwo)

// (10) Добавление нового свойства isInvalid.

const addNewProperty = commentInfo.map(comment => {
  return { 
    ...comment,
    isInvalid: comment.body.length > 180 
  }
});

console.log(addNewProperty)

// (11) Использование метода reduce.

const emailsWithReduce = commentInfo.reduce((emails, comment) => {
  emails.push(comment.email);
  return emails
}, []);

console.log(emailsWithReduce)

// Решение через спред

const postIdWithReduce = commentInfo.reduce((emails, comment) => [
  ...emails, 
  comment.postId
], []);

console.log(postIdWithReduce)

// Переход к методу map.

const emailsWithMap = commentInfo.map(comment => {
  return comment.email
});

console.log(emailsWithMap)

// Самое лучшее решение

const idWithMap = commentInfo.map(({id}) => id);

console.log(idWithMap)

// С деструктуризацией аргументов.

const bodyWithMap = commentInfo.map(({ body }) => body);

console.log(bodyWithMap)

// (12) Приведение массива к строке.

const useToStringMethod = emailsWithMap.toString();

console.log(useToStringMethod)

// Метод join.

const useJoinMethod = emailsWithMap.join(', ');

console.log(useJoinMethod)