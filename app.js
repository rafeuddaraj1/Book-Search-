const BASE_URL = `http://openlibrary.org/search.json?q=javascript`;
const searchBtn = document.getElementById("search-btn");
const search = document.getElementById("search");
const bookCover = document.getElementById("book-cover");
const bookName = document.getElementById("book-name");
const bookAuthor = document.getElementById("book-author");
const bookPublisher = document.getElementById("book-publisher");
const firstPublished = document.getElementById("first-published");

// role docs , author_name , cover_i , publish_date , publisher , title

searchBtn.addEventListener("click", (event) => {
  if (search.value === "") {
    alert("Enter a book name");
  }
});

search.addEventListener("keypress", (event) => {
  searchBtn.addEventListener("click", (ev) => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        data.docs.forEach((book) => {
          let apiBookName = book.title;
          let apiAuthorName = book.author_name
            ? book.author_name[0]
            : "Author Not Founded";
          let apiPublishDate = book.publish_date
            ? book.publish_date[0]
            : "Book Publish Date Not Founded";
          let apiPublisher = book.publisher
            ? book.publisher[0]
            : "Book Publisher Not Founded";
          console.log(apiBookName, apiAuthorName, apiPublisher, apiPublishDate);
          bookName.innerHTML = apiBookName;
        });
      })
      .catch((e) => console.log(e.message));
  });
});

function bookSearchList() {
  const section = document.getElementById("book-search-list");
  const sectionClone = section.cloneNode(true);
  return sectionClone;
}
