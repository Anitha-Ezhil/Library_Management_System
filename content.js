const books = [
    { author: "J.K. Rowling", book: "Harry Potter and the Philosopher's Stone", genre: "Fantasy", date: "26 June 1997" },
    { author: "George Orwell", book: "1984", genre: "Dystopian", date: "8 June 1949" },
    { author: "Agatha Christie", book: "Murder on the Orient Express", genre: "Mystery", date: "1 January 1934" }
  ];
  
  const bookTable = document.getElementById('bookTable');
  const searchInput = document.getElementById('searchInput');
  const filter = document.getElementById('filter');
  
  // Function to populate the table with books
  function populateTable(booksArray) {
    const tableBody = bookTable.querySelector('tbody');
    tableBody.innerHTML = '';
  
    booksArray.forEach(book => {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${book.author}</td>
        <td>${book.book}</td>
        <td>${book.genre}</td>
        <td>${book.date}</td>
      `;
    });
  }
  
  // Function to filter books based on search input
  function searchBooks() {
    const searchText = searchInput.value.toLowerCase();
    const filterValue = filter.value;
  
    const filteredBooks = books.filter(book => {
      return book[filterValue].toLowerCase().includes(searchText);
    });
  
    populateTable(filteredBooks);
  }
  
  // Initial population of the table
  populateTable(books);
  