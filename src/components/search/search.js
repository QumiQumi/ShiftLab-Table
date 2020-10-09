import "./search.scss";
import colors from "../../styles/colors.scss";

window.addEventListener("DOMContentLoaded", () => {
	var textbox = document.querySelector(".search__textbox"),
		searchForm = document.querySelector(".search"),
		searchCount = document.querySelector(".search__count"),
		searchContent = document.querySelectorAll("[search]");

	searchForm.addEventListener("submit", (e) => {
		e.preventDefault();
		var searchText = textbox.value.toUpperCase();

		if (searchText != "") {
			let count = 0;
			searchContent.forEach((cell) => {
				cell.style.backgroundColor = "#ffffff";
				if (cell.textContent.toUpperCase().match(searchText)) {
					cell.style.backgroundColor = "#ff3333";
					count++;
				}
			});
			if (count != 0) {
				searchCount.textContent = "Количество совпадений: " + count;
			} else {
				searchCount.textContent = "Ничего не найдено";
			}
		}
	});
});
