const askName = prompt('Ismingizni kiriting:');
const askAge = prompt('Yoshingizni kiriting:');
const askBall = prompt('Balingizni kiriting:');

const div = document.createElement('div');
document.body.append(div);
const name = document.createElement('h1');
div.append(name);
const age = document.createElement('h1');
div.append(age);
const ball = document.createElement('h1');
div.append(ball);
const word = document.createElement('h1');
div.append(word);

if (askBall > 69) {
    div.style.backgroundColor = 'yellow';
    div.classList.add('w-60', 'h-60', 'flex', 'justify-center', 'items-center', 'flex-col')
    name.textContent = `Ism: ${askName}`;
    age.textContent = `Yosh: ${askAge}`;
    ball.textContent = `Ball: ${askBall}`;
    word.textContent = `Siz universitetga kirdingiz`;
    word.classList.add('text-red-700')
} else {
    div.style.backgroundColor = 'yellow';
    div.classList.add('w-60', 'h-60', 'flex', 'justify-center', 'items-center', 'flex-col')
    name.textContent = `Ism: ${askName}`;
    age.textContent = `Yosh: ${askAge}`;
    ball.textContent = `Ball: ${askBall}`;
    word.textContent = `Siz universitetga kirmadingiz`;
    word.classList.add('text-red-700')
}
