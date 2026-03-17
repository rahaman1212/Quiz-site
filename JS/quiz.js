 const correctAnswers = {
            // Reproductive System
            q1: 'b', q2: 'b', q3: 'b', q4: 'b', q5: 'b',
            // Introduction to Science
            q6: 'a', q7: 'c', q8: 'b', q9: 'c', q10: 'b',
            // Measurement
            q11: 'b', q12: 'b', q13: 'b', q14: 'b', q15: 'c',
            // Verbs
            q16: 'b', q17: 'b', q18: 'b', q19: 'a', q20: 'c',
            // Nouns
            q21: 'b', q22: 'c', q23: 'b', q24: 'a', q25: 'c',
            // Story Telling
            q26: 'b', q27: 'b', q28: 'b', q29: 'c', q30: 'b',
            // Colonization
            q31: 'b', q32: 'b', q33: 'a', q34: 'a', q35: 'a',
            // Culture
            q36: 'b', q37: 'c', q38: 'b', q39: 'b', q40: 'b',
            // Constitution
            q41: 'a', q42: 'b', q43: 'b', q44: 'b', q45: 'b'
        };

        function submitQuiz() {
            let score = 0;
            const totalQuestions = 45;
            const questions = document.querySelectorAll('.question');

            // Reset all options
            questions.forEach(question => {
                const options = question.querySelectorAll('label');
                options.forEach(label => {
                    label.classList.remove('correct', 'incorrect');
                });
            });

            // Check answers
            for (let i = 1; i <= totalQuestions; i++) {
                const questionName = 'q' + i;
                const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
                const question = document.querySelector(`input[name="${questionName}"]`).closest('.question');
                const options = question.querySelectorAll('label');

                if (selectedOption) {
                    if (selectedOption.value === correctAnswers[questionName]) {
                        score++;
                        selectedOption.closest('label').classList.add('correct');
                    } else {
                        selectedOption.closest('label').classList.add('incorrect');
                        // Show correct answer
                        options.forEach(option => {
                            const input = option.querySelector('input');
                            if (input.value === correctAnswers[questionName]) {
                                option.classList.add('correct');
                            }
                        });
                    }
                } else {
                    // Show correct answer for unanswered
                    options.forEach(option => {
                        const input = option.querySelector('input');
                        if (input.value === correctAnswers[questionName]) {
                            option.classList.add('correct');
                        }
                    });
                }
            }

            // Show result
            const resultDiv = document.getElementById('result');
            const scoreDisplay = document.getElementById('scoreDisplay');
            const resultMessage = document.getElementById('resultMessage');

            resultDiv.classList.add('show');
            scoreDisplay.textContent = `${score} / ${totalQuestions}`;

            const percentage = (score / totalQuestions) * 100;

            if (percentage >= 60) {
                resultDiv.classList.remove('fail');
                resultDiv.classList.add('success');
                resultMessage.textContent = `🎉 Great job! You passed! Keep learning to improve your score!`;
            } else {
                resultDiv.classList.remove('success');
                resultDiv.classList.add('fail');
                resultMessage.textContent = `📚 Keep studying! Review the topics and try again!`;
            }
        }

            // Scroll to result
            resultDiv.scrollIntoView({ behavior: 'smooth' });

// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



// ===== Scroll to Top & Bottom Buttons =====
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

scrollBottomBtn.addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// ===== Active Link Highlight on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


// ===== Scroll Reveal Animations =====
ScrollReveal().reveal('section h2', {
  delay: 200,
  duration: 800,
  origin: 'top',
  distance: '50px',
  easing: 'ease-in-out',
});

ScrollReveal().reveal('#about img, #projects img', {
  delay: 300,
  duration: 800,
  origin: 'bottom',
  distance: '40px',
  interval: 150,
});

ScrollReveal().reveal('p, table, ol, form', {
  delay: 200,
  duration: 700,
  origin: 'bottom',
  distance: '20px',
});
        