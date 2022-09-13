const book = document.querySelector(".book");

const fontSizes = Array.from(document.querySelectorAll(".font-size"));

const bookControlColor = document.querySelector(".book__control_color");
const colors = Array.from(bookControlColor.querySelectorAll(".color"));

const bookControBackground = document.querySelector(".book__control_background");
const backgrounds = Array.from(bookControBackground.querySelectorAll(".color"));


let bookClasses = Array.from(book.classList);



fontSizes.forEach(fontSize => {
    fontSize.addEventListener("click", (event) => {
        event.preventDefault();
        fontSizes.forEach(fontSize => fontSize.classList.remove("font-size_active"));
        fontSize.classList.add("font-size_active");
        const datasText = [];
        fontSizes.forEach(fontSize => datasText.push(`book_fs-${fontSize.dataset.size}`));
        if (fontSize.dataset.size) {
            datasText.forEach(dataText => {
                bookClasses.forEach(bookClasse => {
                    book.classList.remove(dataText)
                })
            })
            book.classList.add(`book_fs-${event.target.dataset.size}`);
        } else {
            datasText.forEach(dataText => {
                bookClasses.forEach(bookClasse => {
                    book.classList.remove(dataText)
                })
            })
        }

    });
});

colors.forEach(color => {
    color.addEventListener("click", (event) => {
        event.preventDefault();
        colors.forEach(color => color.classList.remove("color_active"));
        color.classList.add("color_active");
        const datasColor = [];
        colors.forEach(color => datasColor.push(`book_color-${color.dataset.textColor}`));
        datasColor.forEach(dataColor => {
            bookClasses.forEach(bookClasse => {
                book.classList.remove(dataColor)
            })
        })
        book.classList.add(`book_color-${event.target.dataset.textColor}`);
    });
});

backgrounds.forEach(background => {
    background.addEventListener("click", (event) => {
        event.preventDefault();
        backgrounds.forEach(color => color.classList.remove("color_active"));
        background.classList.add("color_active");
        const datasBgColor = [];
        backgrounds.forEach(background => datasBgColor.push(`book_bg-${background.dataset.bgColor}`));
        datasBgColor.forEach(dataBgColor => {
            bookClasses.forEach(bookClasse => {
                book.classList.remove(dataBgColor)
            })
        })
        book.classList.add(`book_bg-${event.target.dataset.bgColor}`);
    });
});