// Lấy các phần tử có class "menu-item" và "menu-group"
const menuItems = document.querySelectorAll(".menu-item");
const menuGroups = document.querySelectorAll(".menu-group");

// Lặp qua từng phần tử menu-item và thêm tính năng kéo và thả
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", menuItem.outerHTML);
    menuItem.classList.add("dragging");
  });

  menuItem.addEventListener("dragend", () => {
    menuItem.classList.remove("dragging");
  });
});

// Lặp qua từng phần tử menu-group và thêm tính năng kéo và thả
menuGroups.forEach((menuGroup) => {
  menuGroup.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(menuGroup, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      menuGroup.querySelector("ul").appendChild(draggable);
    } else {
      menuGroup.querySelector("ul").insertBefore(draggable, afterElement);
    }
  });
});

// Hàm lấy phần tử kế tiếp của phần tử kéo thả
function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
