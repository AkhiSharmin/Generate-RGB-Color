// steps 1

// window.onload = () => {
//     main();
// }

// function main() {
//     const root = document.getElementById('root');
//     const btn = document.getElementById('change-btn');

//     btn.addEventListener('click', function (e) {
//         const bgColor = generateRGAColor()
//         root.style.backgroundColor = bgColor;
//     })
// }


// //step 2 random color generator function

// function generateRGAColor() {
//     const red = Math.floor(Math.random() * 255)
//     const green = Math.floor(Math.random() * 255)
//     const blue = Math.floor(Math.random() * 255)

//     return `rgba(${red}, ${green}, ${blue})`
// }

// main()









function changeColor() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function (e) {
        const bgColor = generateRGAColor()
        root.style.backgroundColor = bgColor
    })
}


function generateRGAColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgba(${red} , ${green}, ${blue})`
}

changeColor()



