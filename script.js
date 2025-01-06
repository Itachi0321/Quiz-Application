document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector('.main');
    const feedbackPopup = document.querySelector('.feedback-popup');
    const form = document.querySelector('.feedback-form');
    const subsForm = document.querySelector('.footer-form');

    form.addEventListener('submit', function(event) { 
        event.preventDefault(); 
        
        if (form.checkValidity()) { 
            feedbackPopup.classList.add('active');
            main.classList.add('active');
            document.body.style.overflow = "hidden";
        } 

    });

});



document.addEventListener("DOMContentLoaded", function() {
    const subscribePopup = document.querySelector('.subscribe-popup');
    const form = document.querySelector('.footer-form');
    const main = document.querySelector('.main');

    form.addEventListener('submit', function(event) { 
        event.preventDefault(); 

        if (form.checkValidity()) { 
            subscribePopup.classList.add('active');
            main.classList.add('active');
            document.body.style.overflow = "hidden";
        } 
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const navLoginbtn = document.getElementById("login-btn");
    const navSignupbtn = document.getElementById("signup-btn");

    if (navLoginbtn && navSignupbtn) {
        navLoginbtn.addEventListener('click', function() {
            window.location.href = "login-signup.html#log";
        });

        navSignupbtn.addEventListener('click', function() {
            window.location.href = "login-signup.html#sign";
        });
    }

    const signUpSection = document.getElementById("sign");
    const loginSection = document.getElementById("log");

    if (signUpSection && loginSection) {
        if (window.location.hash === "#log") {
            signUpSection.style.display = "none";
            loginSection.style.display = "flex";
        } else {
            signUpSection.style.display = "flex";
            loginSection.style.display = "none";
        }
    }
});
   
   // nav button cta.....

   
   
   //  Login-signup page ........... 
   document.addEventListener("DOMContentLoaded", function() {
               
    const signUpSection = document.getElementById("sign");
    const loginSection = document.getElementById("log");
    const cta_sign = document.getElementById("cta-signup");
    const cta_login = document.getElementById("cta-login");


    const switchToSignUpButton = document.getElementById("switchToSignUp");
    const switchToLoginButton = document.getElementById("switchToLogin");

    switchToSignUpButton.addEventListener("click", () => {
        signUpSection.style.display = "flex";
        loginSection.style.display = "none";
    });

    switchToLoginButton.addEventListener("click", () => {
        loginSection.style.display = "flex";
        signUpSection.style.display = "none";
                       
    });

       cta_sign.addEventListener("click", () => {
        signUpSection.style.display = "flex";
        loginSection.style.display = "none";
    });
    
    cta_login.addEventListener("click", () => {
        signUpSection.style.display = "none";
        loginSection.style.display = "flex";
    });

   }); 
   
   //login sign-up page........ 



// Card button cta.....

document.addEventListener("DOMContentLoaded", () => {
    // Get the quiz type from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const quizType = urlParams.get('quiz');

    // Find the heading element where you want to display the quiz name
    const heading = document.getElementById('quiz-head');
    const flagImage =document.getElementById('quiz-image');
    // Update the heading based on the quiz type
    if (quizType === "gk") {
        heading.textContent = "Ultimate General Knowledge Quiz";
        flagImage.style.display='none';
    } else if (quizType === "onepiece") {
        heading.textContent = "One Piece Grand Line Trivia";
        flagImage.style.display='none';
    } else if (quizType === "ben10") {
        heading.textContent = "Ben 10 Universe Challenge";
        flagImage.style.display='none';
    } else if (quizType === "htmlcss") {
        heading.textContent = "HTML & CSS Essentials Quiz";
        flagImage.style.display='none';
    } else if (quizType === "worldflags") {
        heading.textContent = "World Flags Quiz";
        flagImage.style.display='';

    } 

    
});

    document.getElementById('start-btn').addEventListener('click', () => {
        
        const quizzes = ['gk', 'onepiece', 'ben10', 'htmlcss', 'worldflags'];
    
       
        const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    
        
        window.location.href = `quiz.html?quiz=${randomQuiz}`;
    });






// nav button cta.....





// Cards slider starts...
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]); // here the length of items = 5
});

// Cards slider ends ...
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                question.classList.toggle('active');
                const answer = question.nextElementSibling;
        
                if (question.classList.contains('active')) {
                    answer.style.display = 'block';
                } else {
                    answer.style.display = 'none';
                }
            });
        }); 
 

        app.post('/create-quiz', (req, res) => {
            const { title, description, questions } = req.body;
          
            // Save to database
            const quiz = new Quiz({
              title,
              description,
              questions: questions.map(question => ({
                question: question.text,
                answers: [
                  { text: question.answer1, isCorrect: question.correctAnswer === 'answer1' },
                  { text: question.answer2, isCorrect: question.correctAnswer === 'answer2' }
                ]
              }))
            });
          
            quiz.save()
              .then(() => res.redirect('/quizzes')) // Redirect to the quiz list or quiz page
              .catch(err => res.status(500).send(err));
          });
          




