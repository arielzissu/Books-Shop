'use strict'

var gTrans = {
    title: {
        en: 'Welcome to my Bookshop:',
        es: 'welcomee de mora bookeshope',
        he: 'ברוכים הבאים לחנות ספרים שלי',
    },
    createBook: {
        en: 'Create new book...',
        es: 'Createa de new booka...',
        he: '...יצירת ספר חדש',
    },
    headId: {
        en: 'Id',
        es: 'Id',
        he: 'מספר',
    },
    headTitle: {
        en: 'Title',
        es: 'Titlea',
        he: 'כותרת',
    },
    headPrice: {
        en: 'Price',
        es: 'Pricea',
        he: 'מחיר',
    },
    headRate: {
        en: 'Rate',
        es: 'Ratea',
        he: 'מדד איכות',
    },
    headImage: {
        en: 'Image',
        es: 'Imagea',
        he: 'תמונה',
    },
    headActions: {
        en: 'Actions',
        es: 'Actions',
        he: 'אפשרויות',
    },
    ReadButton: {
        en: 'Read',
        es: 'Reasd',
        he: 'קרא',
    },
    UpdateButton: {
        en: 'Update',
        es: 'Updatea',
        he: 'עדכון',
    },
    DeleteButton: {
        en: 'Delete',
        es: 'Deletea',
        he: 'מחק',
    },

};


var gCurrLang = 'en';

function doTrans() {
    // For each el get the data-trans and use getTrans to replace the innerText 
    var els = document.querySelectorAll('[data-trans]');
    els.forEach(el => {
        var txt = getTrans(el.dataset.trans);
        // If this is an input, translate the placeholder
        if (el.placeholder) el.placeholder = txt;
        else el.innerText = txt;
    })
}


function getTrans(transKey) {
    var langMap = gTrans[transKey]
    if (!langMap) return 'UNKNOWN';
    var txt = langMap[gCurrLang];
    // If translation not found - use english
    if (!txt) txt = langMap['en'];
    return txt;
}


function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num);
}

function formatDate(time) {
    var options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}


function kmToMiles(km) {
    return km / 1.609;
}