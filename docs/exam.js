function searchBooks() {
    var searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput === "") {
        alert("Please enter a search query.");
        return;
    }

    var apiUrl = "https://gutendex.com/books/?search=" + encodeURIComponent(searchInput);
    
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }
        return response.json();
    })
    .then(data => {
        displayBooks(data.results);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

function displayBooks(books) {
    var bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear existing content
    
    if (books.length === 0) {
        bookList.innerHTML = "<li>No books found.</li>";
        return;
    }

    books.forEach(book => {
        var listItem = document.createElement("li");
        listItem.classList.add("book-item");
        listItem.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-details">Authors: ${book.authors.join(", ")}</div>
            <div class="book-details">Subjects: ${book.subjects.join(", ")}</div>
            <div class="book-details">Languages: ${book.languages.join(", ")}</div>
            <div class="book-details">Formats: ${Object.keys(book.formats).join(", ")}</div>
        `;
        bookList.appendChild(listItem);
    });
}