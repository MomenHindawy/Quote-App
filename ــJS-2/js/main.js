let quotes = [
    {
        'quote': 'So many books, so little time.',
        'Name': ' Frank Zappa',
        'image': "image/22302.jpg",
    },

    {
        'quote': 'A room without books is like a body without a soul.',
        'Name': ' Marcus Tullius Cicero',
        'image': "image/13755.jpg",
    },

    {
        'quote': 'A friend is someone who knows all about you and still loves you.',
        'Name': ' Elbert Hubbard',
        'image': "image/114059.jpg",
    },

    {
        'quote': 'Always forgive your enemies; nothing annoys them so much.',
        'Name': ' Oscar Wilde',
        'image': "image/3565.jpg",
    },
]


let i = lestIndex = 0;
function displayQuotes() {
    let box = "";
    do {
        i = Math.floor(Math.random() * quotes.length);
        console.log(i, lestIndex)
    } while (i === lestIndex)
    lestIndex = i;
    box += `
   
<div class='pt-4 m-0'>
    <div class="col-4  m-auto d-flex justify-content-center   ">
        <span class='photo '><img src="${quotes[i].image} " class="rounded-circle  " alt=""></span>
        <h6 class="ps-4 fs-5 align-content-center  ">_${quotes[i].Name}</h6>
    </div>
    <div class="col-8 pt-2 m-auto">
        <div class="caption pt-2 ">
            <p class="ps-4 fs-4 paragraph">\"${quotes[i].quote}\"</p>
        </div>
    </div>
</div>

     `
    document.getElementById('demo').innerHTML = box

}



