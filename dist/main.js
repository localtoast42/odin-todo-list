/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectItem: () => (/* binding */ createProjectItem),
/* harmony export */   createProjectUpdater: () => (/* binding */ createProjectUpdater),
/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem),
/* harmony export */   createTodoUpdater: () => (/* binding */ createTodoUpdater)
/* harmony export */ });


function createProjectItem (project) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectItem.textContent = project.getTitle();

    return projectItem;
}

function createProjectUpdater () {
    const projectsList = document.querySelector('.projects');

    const updateProjectList = (projects) => {
        projectsList.textContent = '';
        for (const project of projects) {
            const item = createProjectItem(project);
            projectsList.appendChild(item);
        }
    }

    return { updateProjectList };
}

function createTodoItem (todo) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.textContent = todo.title;

    return todoItem;
}

function createTodoUpdater () {
    const contentDiv = document.querySelector('.content');

    const updateTodoList = (todos) => {
        for (const todo of todos) {
            const item = createTodoItem(todo);
            contentDiv.appendChild(item);
        }
    }

    return { updateTodoList };
}

function createDisplayUpdater () {
    const projectUpdater = createProjectUpdater();
    const todoUpdater = createTodoUpdater();

    return { 
        projectUpdater,
        todoUpdater,
    };
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
function createProject (title) {
    const todosInProgress = [];
    const todosCompleted = [];

    const getTitle = () => title;

    const addTodo = (todoToAdd) => {
        this.todosInProgress.push(todoToAdd);
    }

    const completeTodo = (todoToComplete) => {
        this.todosInProgress.filter((todo) => todo !== todoToComplete);
        this.todosCompleted.push(todoToComplete);
    }

    const removeTodo = (todoToRemove) => {
        this.todosInProgress.filter((todo) => todo !== todoToRemove);
        this.todosCompleted.filter((todo) => todo !== todoToRemove);
    }

    return {
        todosInProgress, 
        todosCompleted, 
        getTitle,
        addTodo, 
        completeTodo, 
        removeTodo,
    };

}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo)
/* harmony export */ });
function createTodo (
    title,
    description = '',
    dueDate = '',) {

    let priority = priority;

    const getPriority = () => priority;
    const increasePriority = () => priority++;
    const decreasePriority = () => priority--;

    return { 
        title, 
        description, 
        dueDate, 
        getPriority, 
        increasePriority, 
        decreasePriority,
    };

}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");




const projectUpdater = (0,_display__WEBPACK_IMPORTED_MODULE_2__.createProjectUpdater)();
const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("default");
const projects = [];

projects.push(defaultProject);

projectUpdater.updateProjectList(projects);

const addProjectButton = document.querySelector('#project-add');

addProjectButton.addEventListener('click', () => {
    let title = prompt('Enter project title:');
    projects.push((0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)(title));
    projectUpdater.updateProjectList(projects);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNNO0FBS0Q7O0FBRXpDLHVCQUF1Qiw4REFBb0I7QUFDM0MsdUJBQXVCLHVEQUFhO0FBQ3BDOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQWE7QUFDL0I7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SXRlbSAocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcblxuICAgIHJldHVybiBwcm9qZWN0SXRlbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFVwZGF0ZXIgKCkge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAocHJvamVjdHMpID0+IHtcbiAgICAgICAgcHJvamVjdHNMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNyZWF0ZVByb2plY3RJdGVtKHByb2plY3QpO1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXBkYXRlUHJvamVjdExpc3QgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0gKHRvZG8pIHtcbiAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgIHRvZG9JdGVtLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgIHJldHVybiB0b2RvSXRlbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kb1VwZGF0ZXIgKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgY29uc3QgdXBkYXRlVG9kb0xpc3QgPSAodG9kb3MpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlVG9kb0l0ZW0odG9kbyk7XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXBkYXRlVG9kb0xpc3QgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzcGxheVVwZGF0ZXIgKCkge1xuICAgIGNvbnN0IHByb2plY3RVcGRhdGVyID0gY3JlYXRlUHJvamVjdFVwZGF0ZXIoKTtcbiAgICBjb25zdCB0b2RvVXBkYXRlciA9IGNyZWF0ZVRvZG9VcGRhdGVyKCk7XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgcHJvamVjdFVwZGF0ZXIsXG4gICAgICAgIHRvZG9VcGRhdGVyLFxuICAgIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RJdGVtLCBjcmVhdGVQcm9qZWN0VXBkYXRlciwgY3JlYXRlVG9kb0l0ZW0sIGNyZWF0ZVRvZG9VcGRhdGVyIH07IiwiZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAodGl0bGUpIHtcbiAgICBjb25zdCB0b2Rvc0luUHJvZ3Jlc3MgPSBbXTtcbiAgICBjb25zdCB0b2Rvc0NvbXBsZXRlZCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kb1RvQWRkKSA9PiB7XG4gICAgICAgIHRoaXMudG9kb3NJblByb2dyZXNzLnB1c2godG9kb1RvQWRkKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZVRvZG8gPSAodG9kb1RvQ29tcGxldGUpID0+IHtcbiAgICAgICAgdGhpcy50b2Rvc0luUHJvZ3Jlc3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvICE9PSB0b2RvVG9Db21wbGV0ZSk7XG4gICAgICAgIHRoaXMudG9kb3NDb21wbGV0ZWQucHVzaCh0b2RvVG9Db21wbGV0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvVG9SZW1vdmUpID0+IHtcbiAgICAgICAgdGhpcy50b2Rvc0luUHJvZ3Jlc3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvICE9PSB0b2RvVG9SZW1vdmUpO1xuICAgICAgICB0aGlzLnRvZG9zQ29tcGxldGVkLmZpbHRlcigodG9kbykgPT4gdG9kbyAhPT0gdG9kb1RvUmVtb3ZlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b2Rvc0luUHJvZ3Jlc3MsIFxuICAgICAgICB0b2Rvc0NvbXBsZXRlZCwgXG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBhZGRUb2RvLCBcbiAgICAgICAgY29tcGxldGVUb2RvLCBcbiAgICAgICAgcmVtb3ZlVG9kbyxcbiAgICB9O1xuXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTsiLCJmdW5jdGlvbiBjcmVhdGVUb2RvIChcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbiA9ICcnLFxuICAgIGR1ZURhdGUgPSAnJywpIHtcblxuICAgIGxldCBwcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgICBjb25zdCBpbmNyZWFzZVByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHkrKztcbiAgICBjb25zdCBkZWNyZWFzZVByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHktLTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICB0aXRsZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uLCBcbiAgICAgICAgZHVlRGF0ZSwgXG4gICAgICAgIGdldFByaW9yaXR5LCBcbiAgICAgICAgaW5jcmVhc2VQcmlvcml0eSwgXG4gICAgICAgIGRlY3JlYXNlUHJpb3JpdHksXG4gICAgfTtcblxufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFxuICAgIGNyZWF0ZVByb2plY3RJdGVtLCBcbiAgICBjcmVhdGVQcm9qZWN0VXBkYXRlciwgXG4gICAgY3JlYXRlVG9kb0l0ZW0sIFxuICAgIGNyZWF0ZVRvZG9VcGRhdGVyIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5jb25zdCBwcm9qZWN0VXBkYXRlciA9IGNyZWF0ZVByb2plY3RVcGRhdGVyKCk7XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJkZWZhdWx0XCIpO1xuY29uc3QgcHJvamVjdHMgPSBbXTtcblxucHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG5cbnByb2plY3RVcGRhdGVyLnVwZGF0ZVByb2plY3RMaXN0KHByb2plY3RzKTtcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWFkZCcpO1xuXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IHByb21wdCgnRW50ZXIgcHJvamVjdCB0aXRsZTonKTtcbiAgICBwcm9qZWN0cy5wdXNoKGNyZWF0ZVByb2plY3QodGl0bGUpKTtcbiAgICBwcm9qZWN0VXBkYXRlci51cGRhdGVQcm9qZWN0TGlzdChwcm9qZWN0cyk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=