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
/* harmony export */   createDisplayUpdater: () => (/* binding */ createDisplayUpdater)
/* harmony export */ });
function createProjectItem (project) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectItem.textContent = project.title;

    return projectItem;
}

function createProjectUpdater () {
    const projectsList = document.querySelector('.projects');

    const updateProjectList = (projects) => {
        projectsList.textContent = '';
        for (const project in projects) {
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
        for (const todo in todos) {
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
        title, 
        todosInProgress, 
        todosCompleted, 
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




const displayUpdater = (0,_display__WEBPACK_IMPORTED_MODULE_2__.createDisplayUpdater)();
const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)("default");
const projects = [];

projects.push(defaultProject);

displayUpdater.projectUpdater.updateProjectList(projects);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDTTtBQUNPOztBQUVqRCx1QkFBdUIsOERBQW9CO0FBQzNDLHVCQUF1Qix1REFBYTtBQUNwQzs7QUFFQTs7QUFFQSwwRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlUHJvamVjdEl0ZW0gKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgcmV0dXJuIHByb2plY3RJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0VXBkYXRlciAoKSB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5cbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0TGlzdCA9IChwcm9qZWN0cykgPT4ge1xuICAgICAgICBwcm9qZWN0c0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0IGluIHByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlUHJvamVjdEl0ZW0ocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyB1cGRhdGVQcm9qZWN0TGlzdCB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvSXRlbSAodG9kbykge1xuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gICAgdG9kb0l0ZW0udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuXG4gICAgcmV0dXJuIHRvZG9JdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvVXBkYXRlciAoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBjb25zdCB1cGRhdGVUb2RvTGlzdCA9ICh0b2RvcykgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IHRvZG8gaW4gdG9kb3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVUb2RvSXRlbSh0b2RvKTtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyB1cGRhdGVUb2RvTGlzdCB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXNwbGF5VXBkYXRlciAoKSB7XG4gICAgY29uc3QgcHJvamVjdFVwZGF0ZXIgPSBjcmVhdGVQcm9qZWN0VXBkYXRlcigpO1xuICAgIGNvbnN0IHRvZG9VcGRhdGVyID0gY3JlYXRlVG9kb1VwZGF0ZXIoKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBwcm9qZWN0VXBkYXRlcixcbiAgICAgICAgdG9kb1VwZGF0ZXIsXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRGlzcGxheVVwZGF0ZXIgfTsiLCJmdW5jdGlvbiBjcmVhdGVQcm9qZWN0ICh0aXRsZSkge1xuICAgIGNvbnN0IHRvZG9zSW5Qcm9ncmVzcyA9IFtdO1xuICAgIGNvbnN0IHRvZG9zQ29tcGxldGVkID0gW107XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG9Ub0FkZCkgPT4ge1xuICAgICAgICB0aGlzLnRvZG9zSW5Qcm9ncmVzcy5wdXNoKHRvZG9Ub0FkZCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVUb2RvID0gKHRvZG9Ub0NvbXBsZXRlKSA9PiB7XG4gICAgICAgIHRoaXMudG9kb3NJblByb2dyZXNzLmZpbHRlcigodG9kbykgPT4gdG9kbyAhPT0gdG9kb1RvQ29tcGxldGUpO1xuICAgICAgICB0aGlzLnRvZG9zQ29tcGxldGVkLnB1c2godG9kb1RvQ29tcGxldGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb1RvUmVtb3ZlKSA9PiB7XG4gICAgICAgIHRoaXMudG9kb3NJblByb2dyZXNzLmZpbHRlcigodG9kbykgPT4gdG9kbyAhPT0gdG9kb1RvUmVtb3ZlKTtcbiAgICAgICAgdGhpcy50b2Rvc0NvbXBsZXRlZC5maWx0ZXIoKHRvZG8pID0+IHRvZG8gIT09IHRvZG9Ub1JlbW92ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICB0b2Rvc0luUHJvZ3Jlc3MsIFxuICAgICAgICB0b2Rvc0NvbXBsZXRlZCwgXG4gICAgICAgIGFkZFRvZG8sIFxuICAgICAgICBjb21wbGV0ZVRvZG8sIFxuICAgICAgICByZW1vdmVUb2RvLFxuICAgIH07XG5cbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9OyIsImZ1bmN0aW9uIGNyZWF0ZVRvZG8gKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uID0gJycsXG4gICAgZHVlRGF0ZSA9ICcnLCkge1xuXG4gICAgbGV0IHByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICAgIGNvbnN0IGluY3JlYXNlUHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eSsrO1xuICAgIGNvbnN0IGRlY3JlYXNlUHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eS0tO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHRpdGxlLCBcbiAgICAgICAgZGVzY3JpcHRpb24sIFxuICAgICAgICBkdWVEYXRlLCBcbiAgICAgICAgZ2V0UHJpb3JpdHksIFxuICAgICAgICBpbmNyZWFzZVByaW9yaXR5LCBcbiAgICAgICAgZGVjcmVhc2VQcmlvcml0eSxcbiAgICB9O1xuXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlRGlzcGxheVVwZGF0ZXIgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmNvbnN0IGRpc3BsYXlVcGRhdGVyID0gY3JlYXRlRGlzcGxheVVwZGF0ZXIoKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcImRlZmF1bHRcIik7XG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuXG5wcm9qZWN0cy5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcblxuZGlzcGxheVVwZGF0ZXIucHJvamVjdFVwZGF0ZXIudXBkYXRlUHJvamVjdExpc3QocHJvamVjdHMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==