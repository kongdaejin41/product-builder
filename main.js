const numbersContainer = document.getElementById('numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Theme Logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Lotto Logic
function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    for (const number of numbers) {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);
    }
}

function generateAndDisplayNumbers() {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
}

generateBtn.addEventListener('click', generateAndDisplayNumbers);

// Initial generation
generateAndDisplayNumbers();