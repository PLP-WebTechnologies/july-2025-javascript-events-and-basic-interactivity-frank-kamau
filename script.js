// Utility helpers
const qs = (sel, ctx=document) => ctx.querySelector(sel);
const qsa = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));


// Theme Toggle
function initTheme() {
const root = document.documentElement;
const btn = qs('#theme-toggle');
const altBtn = qs('#theme-toggle-2');
const stored = localStorage.getItem('theme');
if (stored === 'dark') root.classList.add('dark');
const toggleTheme = (root, button) => {
const isDark = root.classList.toggle('dark');
button.setAttribute('aria-pressed', isDark);
localStorage.setItem('theme', isDark ? 'dark' : 'light');
};
btn.addEventListener('click', () => toggleTheme(root, btn));
altBtn.addEventListener('click', () => toggleTheme(root, altBtn));
}

// Tabs
function activateTab(tab) {
qsa('.tab').forEach(t => t.classList.remove('active'));
qsa('.panel').forEach(p => p.classList.add('hidden'));
tab.classList.add('active');
const tgt = document.querySelector(tab.dataset.target);
if (tgt) tgt.classList.remove('hidden');
}


function initTabs() {
qsa('.tab').forEach(tab => {
tab.addEventListener('click', () => activateTab(tab));
});
}


// Subtabs
function initSubtabs() {
qsa('.subtab').forEach(btn => {
btn.addEventListener('click', () => {
qsa('.subtab').forEach(b => b.classList.remove('active'));
qsa('.subpanel').forEach(p => p.classList.remove('active'));
btn.classList.add('active');
const panel = document.querySelector(btn.dataset.panel);
panel.classList.add('active');
});
});
}

// FAQ
function initFAQ() {
qsa('.faq-q').forEach(button => {
button.addEventListener('click', () => {
const item = button.parentElement;
const isOpen = item.classList.toggle('open');
button.setAttribute('aria-expanded', isOpen);
});
});
}


// Counter Game
function initCounterGame() {
const inc = qs('#inc');
const dec = qs('#dec');
const reset = qs('#reset');
const random = qs('#random');
const display = qs('#count');
const msg = qs('#game-message');
let count = 0;
const render = () => { display.textContent = count; };
const checkWin = () => {
if (count >= 10) { msg.textContent = 'You reached 10! 🎉'; } else { msg.textContent = ''; }
};
inc.addEventListener('click', () => { count++; render(); checkWin(); });
dec.addEventListener('click', () => { count--; render(); checkWin(); });
reset.addEventListener('click', () => { count = 0; render(); checkWin(); });
random.addEventListener('click', () => { count = Math.floor(Math.random()*11); render(); checkWin(); });
document.addEventListener('keydown', (e) => {
if (e.key === 'ArrowUp') { count++; render(); checkWin(); }
if (e.key === 'ArrowDown') { count--; render(); checkWin(); }
});
render();
}

// Form Validation
function initFormValidation() {
const form = qs('#signup-form');
const nameField = qs('#name');
const emailField = qs('#email');
const passwordField = qs('#password');
const confirmField = qs('#confirm');
const phoneField = qs('#phone');
const nameError = qs('#name-error');
const emailError = qs('#email-error');}