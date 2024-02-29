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
    try {
        let response = await fetch(baseURL + `?region=${data}`);
        let result = await response.json();
        dataNamoz(result);
    } catch (err) {
        console.log(err);
    }
}
namazTime("Toshkent")

function dataNamoz(el) {
    tong.textContent = `${el.times.asr}`
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
    tong.textContent = `${el.times.asr}`
    quyosh.textContent = `${el.times.quyosh}`
    peshin.textContent = `${el.times.peshin}`
    asr.textContent = `${el.times.asr}`
    shom.textContent = `${el.times.shom_iftor}`
    xufton.textContent = `${el.times.hufton}`
}

let d = new Date()

date.textContent = `${d.getMonth()+1}.${d.getDate()}.${d.getFullYear()}`
hour.textContent = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`


function renderRegion(data) {
    region.textContent = data
}