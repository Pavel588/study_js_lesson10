'use strict';

const book = document.querySelectorAll('.book');


book[1].after(book[0]);
book[4].after(book[3]);
book[5].after(book[2]);

document.querySelector("body").style.backgroundImage = 'url(image/adv.jpg)';


const titleBook = document.querySelectorAll('.book>h2');
titleBook[2].textContent = 'Книга 3. this и Прототипы Объектов';
titleBook[2].style.color = 'darkkhaki';

document.querySelector('.adv').remove();

const chapterBook = document.querySelectorAll('.book>ul');
chapterBook[1].children[9].after(chapterBook[1].children[2]);
chapterBook[1].children[2].after(chapterBook[1].children[5]);
chapterBook[1].children[3].after(chapterBook[1].children[7]);


chapterBook[4].children[1].after(chapterBook[4].children[9], chapterBook[4].children[3], chapterBook[4].children[4] );
chapterBook[4].children[8].after(chapterBook[4].children[6]);

const newChapter = chapterBook[5].children[8].cloneNode(true);
newChapter.textContent = 'Глава 8: За пределами ES6';
chapterBook[5].children[8].after(newChapter);




