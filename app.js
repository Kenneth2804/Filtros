document.addEventListener("DOMContentLoaded", function () {

	const filterForm = document.getElementById("filterForm");
	const categorySelect = document.getElementById("category");
	const itemList = document.getElementById("itemList").getElementsByTagName("li");

	filterForm.addEventListener("change", function () {
		const selectedCategory = categorySelect.value;

		for (const item of itemList) {
if (selectedCategory === "all" || item.getAttribute("data-category") === selectedCategory) {
							item.style.display = "block"


				}else {
			item.style.display = "none";
		}
		
		}

	});
});
