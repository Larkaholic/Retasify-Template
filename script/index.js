// collapsing search bar logic
const searchInput = document.getElementById('searchInput');
const searchToggle = document.getElementById('searchToggle');
const searchIcon = document.getElementById('searchIcon');
const closeIcon = document.getElementById('closeIcon');

let expanded = false;

function expandSearch() {
    searchInput.classList.remove('search-collapsed');
    searchInput.classList.add('search-expanded');
    searchInput.focus();
    searchIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    expanded = true;
}

function collapseSearch() {
    searchInput.classList.remove('search-expanded');
    searchInput.classList.add('search-collapsed');
    searchIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    expanded = false;
}

searchToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (!expanded) {
        expandSearch();
    } else {
        collapseSearch();
    }
});

searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        if (expanded) collapseSearch();
    }, 100);
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') e.preventDefault();
});