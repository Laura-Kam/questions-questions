//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

//forEach iterates over arrays, for loop is more complex with it's iteration logic.
//forEach does not need an index, it goes over the whole array, not breaking out.
//works well with filter/map/reduce

//The difference is we are targetting each individual button in a single question.
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    console.log(question);

    question.classList.toggle("show-text");
  });
});
//target: element on which a particular event is triggered

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

//toggle is used for show and hide
