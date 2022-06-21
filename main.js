// // START

// genero un array di oggetti che saranno i post
const teams = [
    {
        id: 1,
        profilePic: 'https://unsplash.it/300/300?image=18',
        userName: 'Phil Mangion',
        date: '26/6/2022',
        pic: null,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        likeCount: '80',
    },
    {
        id: 2,
        profilePic: 'https://unsplash.it/300/300?image=11',
        userName: 'Francesco Spina',
        date: '26/6/2022',
        pic: 'https://unsplash.it/600/300?image=181',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        likeCount: '120',
    }
];

const drawPost = allPostDraw(teams);

// BOTTONE LIKE E CONTATORE DA HTML
const allClickableBTN = document.querySelectorAll('.like-button');
const allTextsElements = document.querySelectorAll('#like-counter-1');

// scorro tutti gli elementi cliccabili
for(let i = 0; i < allClickableBTN.length; i++) {
    // seleziono l'elemento cliccato
    const thisClickableBTN = allClickableBTN[i];
    // seleziono il suo contatore
    const thisTextElement = allTextsElements[i];
    // aggiungo un eventlistnener a btn
    thisClickableBTN.addEventListener('click', function() {
        // converto il numero da testo a num intero con cui fare calcoli
        const relatedText = parseInt(allTextsElements[i].innerHTML);
        // al click si aggiunge la classse button--liked
        thisClickableBTN.classList.add('like-button--liked');
        // sommo i like
        let newLike = 0;
        newLike = newLike + relatedText + 1;
        // svuoto html like counter
        thisTextElement.innerHTML = '';
        // aggiorno con nuovo like counter
        thisTextElement.innerHTML += newLike
    });
}

// FUNZIONI

// stampare in pagina ogni post
function allPostDraw(postArray) {
    const postContainer = document.getElementById('container');
    for(let i = 0; i < postArray.length; i++) {
        const thisPost = postArray[i];
        // layout post da popolare con le parti dell'oggetto
        const postTemp = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${thisPost.profilePic}" alt="${thisPost.userName}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${thisPost.userName}</div>
                        <div class="post-meta__time">${thisPost.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${thisPost.text}</div>
            <div class="post__image">
                <img src=" ${thisPost.pic === null ? '' : thisPost.pic}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${thisPost.likeCount}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `
        postContainer.innerHTML += postTemp
    };
};