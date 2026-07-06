const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!



const bookStoreTitle = document.querySelector('#header');


if (bookStoreTitle && typeof bookStore !== 'undefined') {
  bookStoreTitle.textContent = bookStore.name;
  console.log("Successfully updated bookstore title to:", bookStore.name);
} else {
  console.error("Error: Could not find #header element or bookStore object.");
}

const bookList = document.querySelector('#book-list');

if (bookList) {
  
 
  const placeholderItem = document.querySelector('#delete-this');
  if (placeholderItem) {
    placeholderItem.remove();
  }


  if (typeof bookStore !== 'undefined' && bookStore.books) {
    
    
    bookStore.books.forEach((book, index) => {
      
     
      const bookContainer = document.createElement('li');   // 'li' element: bookContainer
      const bookTitle = document.createElement('h3');       // 'h3' element: bookTitle
      const bookAuthor = document.createElement('p');        // 'p' element: bookAuthor
      const bookImage = document.createElement('img');       // 'img' element: bookImage

     
      bookTitle.textContent = book.title;        // Set bookTitle text
      bookAuthor.textContent = book.author;      // Set bookAuthor text
      bookImage.src = book.imageUrl;             // Set bookImage src URL (Fixed to match your object!)
      bookImage.alt = book.title;                // Accessibility alt text

     
      bookContainer.appendChild(bookTitle);
      bookContainer.appendChild(bookAuthor);
      bookContainer.appendChild(bookImage);

      
      bookList.appendChild(bookContainer);

      console.log(`Rendered Book ${index + 1}: ${book.title}`);
    });
  } else {
    console.error("Error: bookStore.books array is missing or undefined.");
  }
} else {
  console.error("Error: Could not find #book-list container in the DOM.");
}

