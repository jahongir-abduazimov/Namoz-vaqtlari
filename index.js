"use strict";

let baseURL = "https://islomapi.uz/api/present/day";
let changeRegion = $("#change-region");
let card = $('.card');

let tong = $('#tong');
let quyosh = $('#quyosh');
let peshin = $('#peshin');
let asr = $('#asr');
let shom = $('#shom');
let xufton = $('#xufton');

let date = $('#date');
let hour = $('#hour')
let region = $('#region')


async function namazTime(data) {
    tong.innerHTML = `Kuting...`
    quyosh.innerHTML = `Kuting...`
    peshin.innerHTML = `Kuting...`
    asr.innerHTML = `Kuting...`
    shom.innerHTML = `Kuting...`
    xufton.innerHTML = `Kuting...`
    try {
        let response = await fetch(baseURL + `?region=${data}`);
        let result = await response.json();
        tong.innerHTML = ``
        quyosh.innerHTML = ``
        peshin.innerHTML = ``
        asr.innerHTML = ``
        shom.innerHTML = ``
        xufton.innerHTML = ``
        dataNamoz(result);
    } catch (err) {
        console.log(err);
    }
}
namazTime("Toshkent")

function dataNamoz(el) {
    tong.textContent = `${el.times.tong_saharlik}`
    quyosh.textContent = `${el.times.quyosh}`
    peshin.textContent = `${el.times.peshin}`
    asr.textContent = `${el.times.asr}`
    shom.textContent = `${el.times.shom_iftor}`
    xufton.textContent = `${el.times.hufton}`
}



function renderData(data) {
    data.forEach((el) => {
        let option = document.createElement('option');
        option.setAttribute('value', `${el}`)
        option.innerHTML = `
            ${el}
        `
        changeRegion.appendChild(option)

    })
}
renderData(provencie)


async function findTime(data) {
    try {
        let response = await fetch(baseURL + `?region=${data}`)
        let result = await response.json()
        renderCardData(result)
    } catch (err) {
        console.log(err);
    }
}

changeRegion.addEventListener('change', (e) => {
    findTime(e.target.value)
    renderRegion(e.target.value)
})


function renderCardData(el) {
    tong.textContent = `${el.times.tong_saharlik}`
    quyosh.textContent = `${el.times.quyosh}`
    peshin.textContent = `${el.times.peshin}`
    asr.textContent = `${el.times.asr}`
    shom.textContent = `${el.times.shom_iftor}`
    xufton.textContent = `${el.times.hufton}`
}

let d = new Date()
let months = d.getMonth()
let day = d.getDate()
let year = d.getFullYear()

let month
switch (months) {
    case 0:
        month = "Yanvar";
        break;
    case 1:
        month = "Fevral";
        break;
    case 2:
        month = "Mart";
        break;
    case 3:
        month = "Aprel";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "Iyun";
        break;
    case 6:
        month = "Iyul";
        break;
    case 7:
        month = "Avgust";
        break;
    case 8:
        month = "Sentyabr";
        break;
    case 9:
        month = "Oktyabr";
        break;
    case 10:
        month = "Noyabr";
        break;
    case 11:
        month = "Dekabr";
        break;
}

if (month < 10) {
    month = `0${month}`
}

if (day < 10) {
    day = `0${day}`
}

let hours = d.getHours()
let minut = d.getMinutes()

if (hours < 10) {
    hours = `0${hours}`
}

if (minut < 10) {
    minut = `0${minut}`
}

date.textContent = `${day}-${month} ${year}-yil`
hour.textContent = `${hours}:${minut}`


function renderRegion(data) {
    region.textContent = data
}