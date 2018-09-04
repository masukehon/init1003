const data = require('./vnexpress');

class TinTuc {
    constructor(id, link, description, image, title) {
        this.id = id;
        this.link = link;
        this.description = description;
        this.image = image;
        this.title = title;
    }
}

var arrTinTuc = [];

var array = data.split(`<item>`);
array.splice(0, 1);
array.splice(array.length - 1, 1);

array.forEach(x => {
    //lấy title
    let indexTitleStart = x.indexOf(`<title>`) + `<title>`.length;
    let indexTitleEnd = x.indexOf(`</title>`);
    let title = x.substring(indexTitleStart, indexTitleEnd).trim();

    //lấy thẻ Description
    let indexDescriptionTagStart = x.indexOf(`<description>`) + `<description>`.length;
    let indexDescriptionTagEnd = x.indexOf(`</description>`);
    let descriptionTag = x.substring(indexDescriptionTagStart, indexDescriptionTagEnd).trim();
    // console.log(descriptionTag);
    //lấy description
    let indexDescriptionStart = descriptionTag.indexOf(`</br>`) + `</br>`.length;
    let indexDescriptionEnd = descriptionTag.lastIndexOf(`.`);
    let description = descriptionTag.substring(indexDescriptionStart, indexDescriptionEnd).trim();

    //lấy Link
    let indexLinkStart = x.indexOf(`<link>`) + `<link>`.length;
    let indexLinkEnd = x.indexOf(`</link>`);
    let link = x.substring(indexLinkStart, indexLinkEnd).trim();

    //lấy image
    let indexImageSrcStart = descriptionTag.indexOf(`src="`) + `src="`.length;
    let indexImageSrcEnd = descriptionTag.indexOf(`"`, indexImageSrcStart);
    let image = descriptionTag.substring(indexImageSrcStart, indexImageSrcEnd).trim();

    //lấy id
    let indexIdStart = link.lastIndexOf(`-`) + `-`.length;
    let indexIdEnd = link.indexOf(`.`);
    let id = link.substring(indexIdStart, indexIdEnd).trim();

    let tinTuc = new TinTuc(id, link, description, image, title);
    arrTinTuc.push(tinTuc);
});

console.log(arrTinTuc);

//cách của thầy.

function getBody(source, startString, endString) {
    const indexStart = source.indexOf(startString) + startString.length;
    const indexEnd = source.indexOf(endString);
    return source.substring(indexStart, indexEnd).trim();
}

// console.log(getBody(array[0], "<title>", "</title>"));