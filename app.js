let plist = 
[
    "6l6Jtx2CxW2B6qxy1jbv4C",
    "77Epc3Lf9BYe5QTvaHjMaw",
    "000pcjSyuGYMNwLcvzXuzv",
    "0OErPW5pwWW3syiSYnQ0Xz",
    "5Q064Pg7hbVD3LRalCmGVf",
    "75xotrPYWBvuWbHLjxfuuy",
    "5OX7Lbp8I77F3USZqAmKAO",
    "22ocBc7SB4C2d5I5A9OyKd",
    "3Dc5QbZEYC7VAQ1HkUuVg7",
    "1PHBnK4OxaOFPAg5jJKtfR",
    "2OhzIkw7UbumwngZUmdTjA",
    "7jXtfeOeMyOmElNihCEOeQ",
    "4IBxqM8yzX3HDbIiRRB2SC",
    "2s6db56GKBWHzATR3EO1zV",
    "2LsW4z0h8W2NoYidNZg7xt",
    "2TRfn3oGsyf2nj5VbC9pBw",
    "0sd15n2Wq8jpn8zZBO8DAn",
    "64vDFbO6MsBEMjkq03Q5HV",
    "2cRGdhhEned0PqRnFEY4w8",
    "0W99rZSPQWNHvJRFq6gAoY",
    "6oORi0d1lm7maYoOZYoCNT",
    "2GX4lLxk4Q6I0Ohg8Ggjqp",
    "1Ej1WI1Gp7jBPrlFkKoYZT",
    "7khtLtm3n77Rn49IPKw8f0",
    "6RTosxHpQmvSeoJd1y0PhJ",
    "7e8hzz11bKvMoCIx1upFM5",
    "6hf4QapVFd15tDqnjCzmLz",
    "2tErj16BenF9cY4Ad04Ibh",
    "4UQvb068vDTIxqB9A5KB1O",
    "6NxOOzdW0i0jP96cUcALES",
    "5IgN00TXPz1E8wcOp7udSW",
    "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Focoras%2Ffocus-group-radio-mix%2F",
    "4tsqe3wU5j4mjJCJv1wV53",
    "4BorXfQAS7vvlI9FZTwGhH",
    "3cjy9PyA6UUzdxnRI643lk",
    "1MSnPDiobAzMg6yqKK8knh",
    "2c5FUzOXPJMcgShx4HmP6C",
    "1PFqN8yDHDskKTPSiusjpj",
    "https://www.youtube.com/embed/videoseries?list=PL27q-SlnbeN1Ty4uR8Px2AdFBY4GUywLH",
    "3EwugRSnZQAjxjYGPlgRUr",
    "4feQxfHeMLfH4Ul6XenHVK",
    "5gnJM4ofnXUHaUsWEUshkZ",
    
]

const cont = document.querySelector(".cont");

// (function () {
//     const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true

// })()
// });

for( let i = plist.length-1 ; i > 0 ; i -= 1){

    var node = document.createElement("DIV");
    node.classList.add("pcont");
    node.innerHTML= '<iframe src="https://open.spotify.com/embed/playlist/'+ plist[i] +'" frameBorder="0" allowtransparency="true" allow="encrypted-media" loading="lazy"></iframe>';
    
    if(plist[i] == 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Focoras%2Ffocus-group-radio-mix%2F'){
        node.innerHTML =    '<iframe src="https://www.mixcloud.com/widget/iframe/?feed=%2Focoras%2Ffocus-group-radio-mix%2F" loading="lazy frameborder="0" ></iframe>'
    }


    if(plist[i] == 'https://www.youtube.com/embed/videoseries?list=PL27q-SlnbeN1Ty4uR8Px2AdFBY4GUywLH' ){
        node.innerHTML = '<div class= "yt-title"> FGR 41 - Music of the Japanese animated picture - Ashwath Nair</div> <iframe class= "yt" src="https://www.youtube.com/embed/videoseries?list=PL27q-SlnbeN1Ty4uR8Px2AdFBY4GUywLH" title="FGR 41" loading="lazy" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }

    cont.appendChild(node);

}


