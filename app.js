const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const side = document.querySelector('.side')
const mainSlice = document.querySelector('.main-slice')
const sliceCount = mainSlice.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSliceIndex = 0

side.style.top = `-${(sliceCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
changeSlice('up')
})

downBtn.addEventListener('click', () => {
    changeSlice('down')
})

function changeSlice(direction) {
if (direction === 'up') {
    activeSliceIndex++
    if (activeSliceIndex === sliceCount)
    {
        activeSliceIndex = 0
    }
} else if (direction === 'down') {
    activeSliceIndex--
    if (activeSliceIndex < 0) {
    activeSliceIndex = sliceCount - 1 }
}

const height = container.clientHeight

mainSlice.style.transform = `translateY(-${activeSliceIndex * height}px)`
side.style.transform = `translateY(${activeSliceIndex * height}px)`

}