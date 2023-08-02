const button = document.getElementById('new-quote');
const spinner = document.getElementById('spinner');
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  // Add more quotes here...
];

document.getElementById('new-quote').addEventListener('click', function() {
  // Show spinner and hide previous quote
  button.style.display = 'none';
  spinner.style.display = 'block';
  document.getElementById('quote').innerText = '';

  // Set a delay before showing the quote
  setTimeout(function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];

    // Hide spinner
    spinner.style.display = 'none';
    button.style.display = 'inline-block';
  }, 2000); // Delay in milliseconds (2000ms = 2s)
});
