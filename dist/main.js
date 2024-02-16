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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDTTtBQUtEOztBQUV6Qyx1QkFBdUIsOERBQW9CO0FBQzNDLHVCQUF1Qix1REFBYTtBQUNwQzs7QUFFQTs7QUFFQSwyQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlUHJvamVjdEl0ZW0gKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG5cbiAgICByZXR1cm4gcHJvamVjdEl0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RVcGRhdGVyICgpIHtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcblxuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RMaXN0ID0gKHByb2plY3RzKSA9PiB7XG4gICAgICAgIHByb2plY3RzTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVQcm9qZWN0SXRlbShwcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHVwZGF0ZVByb2plY3RMaXN0IH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtICh0b2RvKSB7XG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcbiAgICB0b2RvSXRlbS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICByZXR1cm4gdG9kb0l0ZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9VcGRhdGVyICgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHVwZGF0ZVRvZG9MaXN0ID0gKHRvZG9zKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgdG9kbyBpbiB0b2Rvcykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNyZWF0ZVRvZG9JdGVtKHRvZG8pO1xuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHVwZGF0ZVRvZG9MaXN0IH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3BsYXlVcGRhdGVyICgpIHtcbiAgICBjb25zdCBwcm9qZWN0VXBkYXRlciA9IGNyZWF0ZVByb2plY3RVcGRhdGVyKCk7XG4gICAgY29uc3QgdG9kb1VwZGF0ZXIgPSBjcmVhdGVUb2RvVXBkYXRlcigpO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHByb2plY3RVcGRhdGVyLFxuICAgICAgICB0b2RvVXBkYXRlcixcbiAgICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0SXRlbSwgY3JlYXRlUHJvamVjdFVwZGF0ZXIsIGNyZWF0ZVRvZG9JdGVtLCBjcmVhdGVUb2RvVXBkYXRlciB9OyIsImZ1bmN0aW9uIGNyZWF0ZVByb2plY3QgKHRpdGxlKSB7XG4gICAgY29uc3QgdG9kb3NJblByb2dyZXNzID0gW107XG4gICAgY29uc3QgdG9kb3NDb21wbGV0ZWQgPSBbXTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG9Ub0FkZCkgPT4ge1xuICAgICAgICB0aGlzLnRvZG9zSW5Qcm9ncmVzcy5wdXNoKHRvZG9Ub0FkZCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVUb2RvID0gKHRvZG9Ub0NvbXBsZXRlKSA9PiB7XG4gICAgICAgIHRoaXMudG9kb3NJblByb2dyZXNzLmZpbHRlcigodG9kbykgPT4gdG9kbyAhPT0gdG9kb1RvQ29tcGxldGUpO1xuICAgICAgICB0aGlzLnRvZG9zQ29tcGxldGVkLnB1c2godG9kb1RvQ29tcGxldGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kb1RvUmVtb3ZlKSA9PiB7XG4gICAgICAgIHRoaXMudG9kb3NJblByb2dyZXNzLmZpbHRlcigodG9kbykgPT4gdG9kbyAhPT0gdG9kb1RvUmVtb3ZlKTtcbiAgICAgICAgdGhpcy50b2Rvc0NvbXBsZXRlZC5maWx0ZXIoKHRvZG8pID0+IHRvZG8gIT09IHRvZG9Ub1JlbW92ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9kb3NJblByb2dyZXNzLCBcbiAgICAgICAgdG9kb3NDb21wbGV0ZWQsIFxuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgYWRkVG9kbywgXG4gICAgICAgIGNvbXBsZXRlVG9kbywgXG4gICAgICAgIHJlbW92ZVRvZG8sXG4gICAgfTtcblxufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07IiwiZnVuY3Rpb24gY3JlYXRlVG9kbyAoXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24gPSAnJyxcbiAgICBkdWVEYXRlID0gJycsKSB7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gICAgY29uc3QgaW5jcmVhc2VQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5Kys7XG4gICAgY29uc3QgZGVjcmVhc2VQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5LS07XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgIGR1ZURhdGUsIFxuICAgICAgICBnZXRQcmlvcml0eSwgXG4gICAgICAgIGluY3JlYXNlUHJpb3JpdHksIFxuICAgICAgICBkZWNyZWFzZVByaW9yaXR5LFxuICAgIH07XG5cbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kbyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBcbiAgICBjcmVhdGVQcm9qZWN0SXRlbSwgXG4gICAgY3JlYXRlUHJvamVjdFVwZGF0ZXIsIFxuICAgIGNyZWF0ZVRvZG9JdGVtLCBcbiAgICBjcmVhdGVUb2RvVXBkYXRlciB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3QgcHJvamVjdFVwZGF0ZXIgPSBjcmVhdGVQcm9qZWN0VXBkYXRlcigpO1xuY29uc3QgZGVmYXVsdFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwiZGVmYXVsdFwiKTtcbmNvbnN0IHByb2plY3RzID0gW107XG5cbnByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuXG5wcm9qZWN0VXBkYXRlci51cGRhdGVQcm9qZWN0TGlzdChwcm9qZWN0cyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9