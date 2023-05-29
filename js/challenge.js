
// 1. As a user, I should see the timer increment every second once the page has loaded.
// 2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// 3. As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.
// 4. As a user, I can pause the counter, which should
//   * pause the counter
//   * disable all buttons except the pause button
//   * the pause button should then show the text "resume."
//   * When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// 5. As a user, I can leave comments on my gameplay, such as "Wow, what a fun game this is."


"use strict";
// 1. As a user, I should see the timer increment every second once the page has loaded.
onload = function () {
    let counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);
    let pause = document.getElementById("pause");
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let submit = document.getElementById("submit");
    let likes = document.querySelector(".likes");
    let commentList = document.getElementById("list");
    let commentForm = document.getElementById("comment-form");
    let commentInput = document.getElementById("comment-input");
    let intervalID = setInterval(incrementCounter, 1000);
    let isPaused = false;

    function incrementCounter() {
        if (!isPaused) {
            count++;
            counter.innerText = count;
        }
    }

    // 2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.
    plus.addEventListener("click", function () {
        count++;
        counter.innerText = count;
    });

    minus.addEventListener("click", function () {
        count--;
        counter.innerText = count;
    });

    // 3. As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.
    heart.addEventListener("click", function () {
        let li = document.createElement("li");
        li.innerText = `${count} has been liked`;
        likes.appendChild(li);
    });

    // 4. As a user, I can pause the counter, which should
    //   * pause the counter
    //   * disable all buttons except the pause button
    //   * the pause button should then show the text "resume."
    //   * When 'resume' is clicked, it should restart the counter and re-enable the buttons.
    pause.addEventListener("click", function () {
        if (isPaused) {
            isPaused = false;
            pause.innerText = "pause";
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
        } else {
            isPaused = true;
            pause.innerText = "resume";
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        }
    });

    // 5. As a user, I can leave comments on my gameplay, such as "Wow, what a fun game this is."
    commentForm.addEventListener("submit", function
        (event) {
        event.preventDefault();
        let comment = commentInput.value;
        let p = document.createElement("p");
        p.innerText = comment;
        commentList.appendChild(p);
        commentForm.reset();
    }
    );
};



